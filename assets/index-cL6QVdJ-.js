var u=Object.defineProperty;var p=(n,e,t)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);import{j as s,A as y,r as h}from"./index-DxGLTUF6.js";import{S as m}from"./StringHelper-9amm-GR6.js";class f{monthToString(e){return["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][e]}generateWorkDaysAgo(e){const t=Math.floor(e/365),r=e%365,a=Math.floor(r/30),c=m.declOfNum(t,["год","года","лет"]),o=m.declOfNum(a,["месяц","месяца","месяцев"]);let i=t?t+" "+c:"";return a&&(i=i+" "+a+" "+o),i.trim()}calculateWorkDays(e){const t={};let r=0;for(const c in e){const o=e[c];t[o.position]||(t[o.position]=0),t[o.position]=t[o.position]+o.workDays,r+=o.workDays}const a=[];for(const c in t){const o=t[c];a.push({position:c,days:o})}return{workDays:a,workDaysTotal:r}}}const l=new f;function g(n){const e=n.companyHistory,{workDays:t,workDaysTotal:r}=l.calculateWorkDays(e);return s.jsx(s.Fragment,{children:s.jsx("div",{className:"card mt-3",children:s.jsx("div",{className:"card-body",children:s.jsxs("ul",{children:[t.map(function(a,c){return s.jsxs("li",{children:[a.position,":  ",l.generateWorkDaysAgo(a.days)]},c)}),s.jsx("li",{children:s.jsxs("b",{children:["Общий стаж:  ",l.generateWorkDaysAgo(r)]})})]})})})})}function x(n){const e=n.item,t=l.generateWorkDaysAgo(e.workDays),r=l.monthToString(e.date.start.getMonth())+" "+e.date.start.getFullYear(),a=l.monthToString(e.date.end.getMonth())+" "+e.date.end.getFullYear();return s.jsxs(s.Fragment,{children:[r," - ",a," (",t,")"]})}function D(n){const e=n.companyHistory;return s.jsxs(s.Fragment,{children:[s.jsx(g,{companyHistory:e}),e.map(function(t,r){return s.jsx("div",{className:"card mt-3",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:t.title}),s.jsxs("p",{className:"card-text",children:[t.location,t.isRemote?s.jsxs(s.Fragment,{children:[" ",s.jsx("small",{className:"badge111 badge-primary111",children:"(удаленная работа)"})]}):null,t.website?s.jsxs(s.Fragment,{children:[" | ",s.jsx("a",{href:t.website,target:"_blank",rel:"noreferrer",children:t.website})]}):null]}),s.jsx("p",{className:"card-text",children:s.jsx(x,{item:t})}),s.jsx("p",{className:"card-text",children:t.position?s.jsx(s.Fragment,{children:s.jsx("b",{children:t.position})}):null}),s.jsx("p",{className:"card-text",children:t.description})]})},r)})]})}function j(n,e){const r=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()),a=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((a-r)/864e5)}function k(n){const e=new Date(n.dateStart.year,n.dateStart.month-1,1),t=new Date(n.dateEnd.year,n.dateEnd.month-1,1);n.workDays=j(e,t)+30,n.date={start:new Date(n.dateStart.year,n.dateStart.month-1,1),end:new Date(n.dateEnd.year,n.dateEnd.month-1,1)}}function w(n){if(!n.dateEnd){const e=new Date,t=e.getFullYear(),r=e.getMonth();n.dateEnd={year:t,month:r+1}}}function A(n){for(const e in n){const t=n[e];w(t),k(t)}}class N extends y{constructor(){super(...arguments);d(this,"listUri","companies/list.json")}fetchAll(){return super.fetchAll().then(t=>{const r=structuredClone(t);return r.reverse(),A(r),r})}}const S=new N;function E(){const[n,e]=h.useState([]);return h.useEffect(()=>{S.fetchAll().then(t=>{e(t)})},[]),s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"Опыт работы"}),s.jsx(D,{companyHistory:n})]})}export{E as default};
