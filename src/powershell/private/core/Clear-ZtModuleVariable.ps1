﻿<#
.SYNOPSIS
    Resets all module variables to their default values.

.DESCRIPTION
    Variables like GraphCache and GraphBaseUri are module-level variables that are cached
    during the running of a test for performance reasons.

    This function will be called for each fresh run of Invoke-ZeroTrustAssessment.
#>

function Clear-ZtModuleVariable {
    [Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSUseDeclaredVarsMoreThanAssignments', '', Justification = 'Module variables used in other functions.')]
    param()

    $__ZtSession.GraphCache = @{}
    $__ZtSession.GraphBaseUri = $null
    $__ZtSession.TestResultDetail = @{}
}