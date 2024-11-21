
<#
.SYNOPSIS
    Calculates the CA summary data from sign in logs for the overiew report and adds it to the tenant info.
#>

function Add-ZtOverviewCaMfa {
    [CmdletBinding()]
    param(
        $Database
    )
    $activity = "Getting Conditional Access summary"
    Write-ZtProgress -Activity $activity -Status "Processing"

    $sql = @"
select conditionalAccessStatus, authenticationRequirement, count(*) as cnt from SignIn
where isInteractive == true and status.errorCode == 0
group by conditionalAccessStatus, authenticationRequirement
"@

    # Example output:
    # conditionalAccessStatus   authenticationRequirement   cnt
    # success                   singleFactorAuthentication  5
    # success                   multiFactorAuthentication   2121
    # notApplied                singleFactorAuthentication  6
    # notApplied                multiFactorAuthentication   6


    $results = Invoke-DatabaseQuery -Database $Database -Sql $sql

    $caSummary = Get-ZtOverviewCaMfa $results

    Add-ZtTenantInfo -Name "OverviewCaMfaAllUsers" -Value $caSummary
}

function Get-ZtOverviewCaMfa($results) {

    $caMfa = GetCount $results "success" "multiFactorAuthentication"
    $caNoMfa = GetCount $results "success" "singleFactorAuthentication"
    $noCaMfa = GetCount $results "notApplied" "multiFactorAuthentication"
    $noCaNoMfa = GetCount $results "notApplied" "singleFactorAuthentication"

    $nodes = @(
        @{
            "source" = "User sign in"
            "target" = "No CA applied"
            "value"  = $noCaMfa + $noCaNoMfa
        },
        @{
            "source" = "User sign in"
            "target" = "CA applied"
            "value"  = $caMfa + $caNoMfa
        },
        @{
            "source" = "CA applied"
            "target" = "No MFA"
            "value"  = $caNoMfa
        },
        @{
            "source" = "CA applied"
            "target" = "MFA"
            "value"  = $caMfa
        }
    )

    $caSummaryArray = @{
        "description" = "Over the past 7 days, 20% of sign-ins were not protected by any conditional access policies."
        "nodes"       = $nodes
    }

    return $caSummaryArray
}

function GetCount($results, $caStatus, $authReq) {
    return ($results
        | Where-Object { $_.conditionalAccessStatus -eq $caStatus -and $_.authenticationRequirement -eq $authReq }
        | Select-Object -ExpandProperty cnt) -as [int]
}