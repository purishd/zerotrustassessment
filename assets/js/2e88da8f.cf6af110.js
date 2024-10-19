"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[1011],{97625:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=n(74848),i=n(28453);const o={},a="017: Implement SharePoint Permission Strategy",r={id:"workshop-guidance/data/RMT_017",title:"017: Implement SharePoint Permission Strategy",description:"Overview",source:"@site/docs/workshop-guidance/data/RMT_017.md",sourceDirName:"workshop-guidance/data",slug:"/workshop-guidance/data/RMT_017",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_017",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/data/RMT_017.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"016: Identify sensitive data using Trainable Classifiers",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_016"},next:{title:"018: Set Insider Risk Management policies",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_018"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"017-implement-sharepoint-permission-strategy",children:"017: Implement SharePoint Permission Strategy"})}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"Sensitivity labels can be applied not just to documents and emails, but also to SharePoint sites and OneDrive. When applied to sites, sensitivity labels can be used to enforce SharePoint policies for external sharing, guest access, privacy controls and conditional access. They can also be used to assign default labels for content and other settings."}),"\n",(0,t.jsx)(s.p,{children:"At this stage you should design and implement a strategy for SharePoint Online sites permissions and labeling including:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Decide whether you will use the same label taxonomy as the one you used for documents and emails (recommended) or you will use a separate group of labels for this scenario. Even in the case of a separate set of labels, it is recommended that the language used for the labels is closely aligned between the two to help reinforce their meaning."}),"\n",(0,t.jsx)(s.li,{children:"Decide whether a default label will be used for sites, and whether labeling will be mandatory. In environments where Zero Trust is being implemented, mandatory labeling of sites should be enforced, and a default label which enforces internal-only access by authenticated users can be configured."}),"\n",(0,t.jsx)(s.li,{children:'Decide which controls will be enforced by these labels. Generally, labels such as "public" do not enforce major restrictions, though anonymous sharing should be disabled for all sites to achieve zero trust. For sites related to internal-only content, the following settings are recommended to align with the zero trust principles:'}),"\n",(0,t.jsx)(s.li,{children:'Configuring the privacy level settings to "Private" so access to sites must be explicitly granted.'}),"\n",(0,t.jsx)(s.li,{children:"Configuring external sharing settings in the label to either allow only people in your organization for labels designating internal sites, or for external sites to only allow existing guests (which must be explicitly added to your directory by using Entra ID) to access the site. Enabling the option to give access to new guests will allow individual users in the company to automatically add people as guest to the organization by just sharing content in SharePoint, so this option should not be selected unless the burden of manually inviting users is considered unacceptable in the company's business."}),"\n",(0,t.jsx)(s.li,{children:"Enforce Conditional Access to access the sites, according to C.A. policies defined as part of the workshop for the Identity pillar. For labels designating internal sites, allow only access from managed devices. For labels designating external sites, allowing web access only is recommended."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You can also use sensitivity labels on Teams for teams and channels, as well as for Microsoft 365 groups, using criteria similar to the ones used for SharePoint and OneDrive."}),"\n",(0,t.jsx)(s.p,{children:"Depending on the type of site (Team site, Channel sites, Communication sites, Hub sites) apply the appropriate permissions. You should also consider using SharePoint Advanced Management options for further restricting and monitoring access to SharePoint sites."}),"\n",(0,t.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Sharing and permissions in the SharePoint modern experience ",(0,t.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions",children:"https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions"})]}),"\n",(0,t.jsxs)(s.li,{children:["Use sensitivity labels to protect content in Microsoft Teams, Microsoft 365 groups, and SharePoint sites ",(0,t.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites",children:"https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(96540);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);