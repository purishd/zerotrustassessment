"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[186],{88835:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=i(74848),s=i(28453);const a={},o="006: Define a data classification taxonomy for the organization based on data sensitivity",r={id:"workshop-guidance/data/RMT_006",title:"006: Define a data classification taxonomy for the organization based on data sensitivity",description:"Overview",source:"@site/docs/workshop-guidance/data/RMT_006.md",sourceDirName:"workshop-guidance/data",slug:"/workshop-guidance/data/RMT_006",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_006",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/data/RMT_006.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"005: Data governance regulatory needs",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_005"},next:{title:"007: Identify Automatic Classification cases",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_007"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function c(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"006-define-a-data-classification-taxonomy-for-the-organization-based-on-data-sensitivity",children:"006: Define a data classification taxonomy for the organization based on data sensitivity"})}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:['Different business assets, and in particular business data assets such as documents and emails, must be handled with different levels of precaution and under specific types of controls based on their sensitivity.\nSensitivity can be associated with the confidentiality, criticality and business impact of each piece of information.\nIdentify the different categories for data sensitivity, e.g. "personal, public, external business data, internal business data, confidential, highly confidential", and work with stakeholders across the organization to identify the right level of granularity required to properly compartmentalize data. Keep in mind that this classification is not the only method that will be used to compartmentalize data, so keep it at a high level. Think of these as "buckets" of confidentiality which define the principles for handling different types of data.\nOnce a classification taxonomy has been defined, it can be implemented through sensitivity labels which can then be applied to different assets either automatically or manually.',(0,n.jsx)(t.br,{}),"\n","Work with stakeholders in the business and in IT to define the right naming convention for the labeling taxonomy. A suitable sensitivity level taxonomy must meet the following requirements:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Be simple. The taxonomy can't be formed of more than two layers of classification, and each layer should not show more than six different options to a user at any given time to avoid users ignoring them or choosing without careful consideration. Project, role or team-specific labels must be scoped so they aren't displayed unnecessarily to unrelated users."}),"\n",(0,n.jsx)(t.li,{children:"Reflect the business needs. Labels must be able to accommodate the different types of data assets in the organization, dividing them by their sensitivity, while providing the required security controls for each applicable scenario."}),"\n",(0,n.jsx)(t.li,{children:'Be easily understandable. Selecting the right label names is critical for users to be able to understand them at a glance. The ordering of the labels must be obvious (e.g. don\'t use simultaneously terms like "confidential" and "private" since users might not know which one implies a higher level of sensitivity, use terms like "confidential" and "highly confidential" instead), and the terms used must resonate with your users\' accepted language.'}),"\n",(0,n.jsx)(t.li,{children:"Be stable. While it is possible to adjust sensitivity label definitions over time, such changes should be minimized, and if at all possible be limited to changes in terminology or enforcement, avoiding changes in the structure of the labeling taxonomy as much as possible."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Your label taxonomy should have one or two levels. In most cases, the top level should be used to reflect the sensitivity of the data, while a second level (sublabels) can optionally be used to specify different forms of data matching the top-level sensitivity labels that require different levels of protection (e.g. Confidential/Internal and Confidential/External both represent confidential data but with different scope of restrictions).\nCreate and deploy labels and label policies following the defined taxonomy, but without implementing any restrictions in them.\nIdentify (but do not enforce at this time) access restrictions related to each sensitivity level and business scenario. For example, consider whether users might have a need for copying or printing highly confidential data, whether watermarks are needed to minimize risk of oversharing, and whether specific people in your organization need access at all to the specific types of assets."}),"\n",(0,n.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Create and publish sensitivity labels ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/purview/create-sensitivity-labels",children:"https://learn.microsoft.com/en-us/purview/create-sensitivity-labels"})]}),"\n",(0,n.jsxs)(t.li,{children:["Microsoft Information Protection Deployment Acceleration Guide: ",(0,n.jsx)(t.a,{href:"https://microsoft.github.io/ComplianceCxE/dag/mip-dlp/",children:"https://microsoft.github.io/ComplianceCxE/dag/mip-dlp/"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);