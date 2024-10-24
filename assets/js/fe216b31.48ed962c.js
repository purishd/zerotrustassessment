"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[6803],{82107:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(74848),i=t(28453);const o={sidebar_position:2},r="Zero Trust Assessment Tool",a={id:"app-permissions",title:"Zero Trust Assessment Tool",description:"What is the Zero Trust Assessment Tool?",source:"@site/docs/app-permissions.md",sourceDirName:".",slug:"/app-permissions",permalink:"/zerotrustassessment/docs/app-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/app-permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/zerotrustassessment/docs/intro"},next:{title:"Assessment Checks",permalink:"/zerotrustassessment/docs/category/assessment-checks"}},l={},h=[{value:"What is the Zero Trust Assessment Tool?",id:"what-is-the-zero-trust-assessment-tool",level:2},{value:"How do I access it?",id:"how-do-i-access-it",level:2},{value:"How does this app work?",id:"how-does-this-app-work",level:2},{value:"What options are available with this tool?",id:"what-options-are-available-with-this-tool",level:2},{value:"What are the permissions required for this app?",id:"what-are-the-permissions-required-for-this-app",level:2},{value:"What is the output generated by this app?",id:"what-is-the-output-generated-by-this-app",level:2}];function d(e){const s={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"zero-trust-assessment-tool",children:"Zero Trust Assessment Tool"})}),"\n",(0,n.jsx)(s.h2,{id:"what-is-the-zero-trust-assessment-tool",children:"What is the Zero Trust Assessment Tool?"}),"\n",(0,n.jsx)(s.p,{children:"This PowerShaell cmdlet tool provides essential checks to confirm a strong security baseline, preparing you for advanced features and a more resilient security posture."}),"\n",(0,n.jsx)(s.h2,{id:"how-do-i-access-it",children:"How do I access it?"}),"\n",(0,n.jsx)(s.p,{children:"It is a PowerShell cmdlet. You can access it from your PowerShell command line by invoking:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-PowerShell",children:"Install-Module ZeroTrustAssessment \nInvoke-ZTAssessment\n"})}),"\n",(0,n.jsx)(s.h2,{id:"how-does-this-app-work",children:"How does this app work?"}),"\n",(0,n.jsxs)(s.p,{children:["This app uses Microsoft Graph to read the tenant configuration and provide recommendations on improving the end to end security configuration.",(0,n.jsx)(s.br,{}),"\n","When you run the cmdlet, you will be prompted to log in to your Entra ID tenant.\nIt is recommended to use a non-guest account for logging in. For example, if your tenant domain name is contoso.onmicrosoft.com, you should log in with an account similar to ",(0,n.jsx)(s.code,{children:"<signin-name>@contoso.onmicrosoft.com"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"what-options-are-available-with-this-tool",children:"What options are available with this tool?"}),"\n",(0,n.jsx)(s.p,{children:"You can specify an option whether to collect telemetry on the usage of this cmdlet. The only telemetry that is collected is the Entra ID tenant id (GUID) that the cmdlet is being run against. No other personal or tenant information is collected."}),"\n",(0,n.jsxs)(s.p,{children:["The switch available is ",(0,n.jsx)(s.code,{children:"-EnableTelemetry"})," and it defaults to ",(0,n.jsx)(s.code,{children:"$true"}),". The two values for this switch are:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$true"}),", which is the default value, indicates that the Entra ID tenant ID (GUID) will be collected"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$false"}),", indicates that the Entra ID tenant ID (GUID) will NOT be collected"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"An example of running the cmdlet with telemetry enabled is:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-PowerShell",children:"Invoke-ZTAssessment -EnableTelemetry $true\n"})}),"\n",(0,n.jsx)(s.h2,{id:"what-are-the-permissions-required-for-this-app",children:"What are the permissions required for this app?"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The app requires Global Admin to consent to the following ",(0,n.jsx)(s.strong,{children:"read-only"})," permissions.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Agreement.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"CrossTenantInformation.ReadBasic.All"}),"\n",(0,n.jsx)(s.li,{children:"Directory.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"Policy.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"User.Read"}),"\n",(0,n.jsx)(s.li,{children:"DeviceManagementServiceConfig.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"DeviceManagementConfiguration.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"DeviceManagementRBAC.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"DeviceManagementConfiguration.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"DeviceManagementApps.Read.All"}),"\n",(0,n.jsx)(s.li,{children:"RoleAssignmentSchedule.Read.Directory"}),"\n",(0,n.jsx)(s.li,{children:"RoleEligibilitySchedule.Read.Directory"}),"\n",(0,n.jsx)(s.li,{children:"PrivilegedEligibilitySchedule.Read.AzureADGroup"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"The app does not store any tenant data and the session is revoked when the user signs out."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"what-is-the-output-generated-by-this-app",children:"What is the output generated by this app?"}),"\n",(0,n.jsx)(s.p,{children:"The spreadsheet generated by the assessment includes a template of the roadmap that will be used during the workshop as well as the results of the assessment based on your tenant configuration."})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(96540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);