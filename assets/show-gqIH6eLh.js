import{r as i,u as a,j as e,H as c}from"./index-DxGLTUF6.js";import{b as l}from"./blogApiClient-eCm80WTT.js";const m=t=>{const s=t.item;return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:s.title}),e.jsx("p",{children:e.jsx(c,{children:s.content})})]})};function h(t){const[s,o]=i.useState({});let r;return t.id?r=t.id:r=a().id,console.log(r),i.useEffect(()=>{l.fetchById(r).then(n=>{o(n)})},[]),e.jsx(e.Fragment,{children:e.jsx(m,{item:s})})}export{h as default};