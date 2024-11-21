﻿<#
.SYNOPSIS
    Gets the duration of sign ins for the overview report.
#>

function Get-ZtSignInDuration {
    [CmdletBinding()]
    param(
        $Database
    )

    $sql = @"
select
    datediff('minute', min(createdDateTime), max(createdDateTime)) as 'minutes',
    datediff('hour', min(createdDateTime), max(createdDateTime)) as 'hours',
    datediff('day', min(createdDateTime), max(createdDateTime)) as 'days',
from SignIn
"@

    if ($null -eq $__ZtSession.SignInLogDuration) {
        $results = Invoke-DatabaseQuery -Database $Database -Sql $sql

        $duration = 0
        if ($results.days -gt 0) {
            $duration = $results.days
            $label = "day"
        }
        elseif ($results.hours -gt 0) {
            $duration = $results.hours
            $label = "hour"
        }
        elseif ($results.minutes -gt 0) {
            $duration = $results.minutes
            $label = "minute"
        }
        else {
            $duration = 0
            $label = "duration" # Unknown duration
        }
        if ($duration -gt 1) {
            $label += "s" # Pluralize
        }

        $__ZtSession.SignInLogDuration = "$duration $label"
    }

    return $__ZtSession.SignInLogDuration
}
