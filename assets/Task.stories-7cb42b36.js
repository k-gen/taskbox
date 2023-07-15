import{r as A}from"./index-f1f749bf.js";import{p as c}from"./index-4d501b15.js";var p={},N={get exports(){return p},set exports(e){p=e}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=A,j=Symbol.for("react.element"),D=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,P=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function R(e,s,o){var r,n={},m=null,_=null;o!==void 0&&(m=""+o),s.key!==void 0&&(m=""+s.key),s.ref!==void 0&&(_=s.ref);for(r in s)I.call(s,r)&&!$.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps,s)n[r]===void 0&&(n[r]=s[r]);return{$$typeof:j,type:e,key:m,ref:_,props:n,_owner:P.current}}d.Fragment=D;d.jsx=R;d.jsxs=R;(function(e){e.exports=d})(N);const a=p.jsx,T=p.jsxs;function u({task:{id:e,title:s,state:o},onArchiveTask:r,onPinTask:n}){return T("div",{className:`list-item ${o}`,children:[T("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[a("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:o==="TASK_ARCHIVED"}),a("span",{className:"checkbox-custom",onClick:()=>r(e)})]}),a("label",{htmlFor:"title","aria-label":s,className:"title",children:a("input",{type:"text",value:s,readOnly:!0,name:"title",placeholder:"Input title"})}),o!=="TASK_ARCHIVED"&&a("button",{className:"pin-button",onClick:()=>n(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a("span",{className:"icon-star"})},`pinTask-${e}`)]})}u.propTyps={task:c.shape({id:c.string.isRequired,title:c.string.isRequired,state:c.string.isRequired}),onArchiveTask:c.func,onPinTask:c.func};u.__docgenInfo={description:"",methods:[],displayName:"Task"};const C={component:u,title:"Task"},k=e=>a(u,{...e}),t=k.bind({});t.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};const i=k.bind({});i.args={task:{...t.args.task,state:"TASK_PINNED"}};const l=k.bind({});l.args={task:{...t.args.task,state:"TASK_ARCHIVED"}};var f,h,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Task {...args} />",...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Task {...args} />",...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,S,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Task {...args} />",...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const w=["Default","Pinned","Archived"],F=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:t,Pinned:i,__namedExportsOrder:w,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,u as T,T as a,F as b,a as j};
//# sourceMappingURL=Task.stories-7cb42b36.js.map