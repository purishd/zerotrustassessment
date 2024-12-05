Attackers might still gain access if MFA isn't universally enforced or if there are exceptions in place. Attackers might also gain access by exploiting vulnerabilities of weaker MFA methods like SMS and phone calls by using social engineering techniques. These techniques might include SIM swapping or phishing, to intercept authentication codes.  

Attackers might target accounts where MFA isn't enforced or use weaker MFA methods, using these accounts as entry points into the tenant. By using intercepted user sessions, attackers can disguise their activities as legitimate user actions, evading detection and continuing their attack without raising immediate suspicion. From there, they might attempt to manipulate MFA settings (for example, registering attacker-controlled methods) to establish persistence, plan, and execute further attacks based on the privileges of the compromised accounts. 

**Remediation action**

- [Deploy multifactor authentication](https://learn.microsoft.com/entra/identity/authentication/howto-mfa-getstarted)
- [Get started with a phishing-resistant passwordless authentication deployment](https://learn.microsoft.com/entra/identity/authentication/how-to-plan-prerequisites-phishing-resistant-passwordless-authentication)
- [Deploy Conditional Access policies to enforce authentication strength](https://learn.microsoft.com/entra/identity/conditional-access/policy-all-users-mfa-strength)
- [Review authentication methods activity](https://learn.microsoft.com/entra/identity/monitoring-health/concept-usage-insights-report?tabs=microsoft-entra-admin-center#authentication-methods-activity)<!--- Results --->
%TestResult%
