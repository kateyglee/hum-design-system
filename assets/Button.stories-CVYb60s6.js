import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as ce}from"./iframe-C3Up0Rph.js";import"./preload-helper-C1FmrZbK.js";const n={fontDisplay:'"Geist Mono", monospace',btnPrimaryBg:"#2E2E38",btnPrimaryHover:"#1A1A24",btnPrimaryText:"#FFFFFF",btnOutlineBg:"#FFFFFF",textMd:"#3A3A44",textError:"#B91C1C",borderDk:"#C8C8D0",borderAccent:"rgba(46,46,56,0.25)",ghostHover:"#F4F4F6",stateErrorBg:"#FEF2F2",radiusFull:9999,radiusMd:6},F={sm:{fontSize:11,padding:"6px 14px",iconPadding:"6px"},md:{fontSize:14,padding:"10px 20px",iconPadding:"10px"},lg:{fontSize:14,padding:"14px 28px",iconPadding:"14px"}},ue={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:n.fontDisplay,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",borderRadius:n.radiusFull,border:"none",cursor:"pointer",transition:"all 0.15s ease",whiteSpace:"nowrap",lineHeight:"20px",boxSizing:"border-box"};function me(a,t){switch(a){case"outline":return{background:n.btnOutlineBg,color:n.textMd,border:`1px solid ${t?n.borderAccent:n.borderDk}`};case"ghost":return{background:t?n.ghostHover:"transparent",color:n.textMd,border:"none"};case"danger":return{background:t?n.stateErrorBg:"transparent",color:n.textError,border:`1px solid rgba(185,28,28,${t?"0.35":"0.2"})`};case"primary":default:return{background:t?n.btnPrimaryHover:n.btnPrimaryBg,color:n.btnPrimaryText,border:"none"}}}function r({variant:a="primary",size:t="md",iconOnly:f=!1,disabled:l=!1,children:ae,style:se,...oe}){const[ie,S]=ce.useState(!1),j=F[t]||F.md,le=me(a,ie&&!l),de={...ue,...le,fontSize:j.fontSize,padding:f?j.iconPadding:j.padding,borderRadius:f?n.radiusMd:n.radiusFull,opacity:l?.3:1,pointerEvents:l?"none":"auto",...se};return e.jsx("button",{style:de,disabled:l,onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),...oe,children:ae})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},iconOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const he={title:"Primitives/Button",component:r,argTypes:{variant:{control:"select",options:["primary","outline","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},iconOnly:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}},args:{children:"Button",variant:"primary",size:"md",disabled:!1,iconOnly:!1},decorators:[a=>e.jsx("div",{style:{fontFamily:'"Geist Mono", monospace',padding:32,background:"#FAFAFA",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(a,{})})]},d={},c={args:{variant:"primary",children:"Primary"}},u={args:{variant:"outline",children:"Outline"}},m={args:{variant:"ghost",children:"Ghost"}},p={args:{variant:"danger",children:"Delete"}},g={args:{size:"sm",children:"Small"}},x={args:{size:"lg",children:"Large"}},i=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),h={args:{iconOnly:!0,children:e.jsx(i,{}),"aria-label":"Add"}},B=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),y={args:{children:e.jsxs(e.Fragment,{children:["Get Started ",e.jsx(B,{})]})}},v={args:{disabled:!0,children:"Disabled"}},s={fontFamily:'"Geist Mono", monospace',fontSize:10,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"#9898A4",marginBottom:12,marginTop:32},o={display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},b={render:()=>e.jsxs("div",{children:[e.jsx("div",{style:s,children:"Variants"}),e.jsxs("div",{style:o,children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Delete"})]}),e.jsx("div",{style:s,children:"Sizes"}),e.jsxs("div",{style:o,children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]}),e.jsx("div",{style:s,children:"Icon Only"}),e.jsxs("div",{style:o,children:[e.jsx(r,{iconOnly:!0,"aria-label":"Add",children:e.jsx(i,{})}),e.jsx(r,{iconOnly:!0,variant:"outline","aria-label":"Add",children:e.jsx(i,{})}),e.jsx(r,{iconOnly:!0,variant:"ghost","aria-label":"Add",children:e.jsx(i,{})}),e.jsx(r,{iconOnly:!0,variant:"danger","aria-label":"Remove",children:e.jsx(i,{})})]}),e.jsx("div",{style:s,children:"With Icon"}),e.jsxs("div",{style:o,children:[e.jsxs(r,{children:["Get Started ",e.jsx(B,{})]}),e.jsxs(r,{variant:"outline",children:["Export ",e.jsx(B,{})]})]}),e.jsx("div",{style:s,children:"Disabled"}),e.jsxs("div",{style:o,children:[e.jsx(r,{disabled:!0,children:"Primary"}),e.jsx(r,{variant:"outline",disabled:!0,children:"Outline"}),e.jsx(r,{variant:"ghost",disabled:!0,children:"Ghost"}),e.jsx(r,{variant:"danger",disabled:!0,children:"Delete"})]})]})};var O,P,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var z,I,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var w,L,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var E,G,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,W,T;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Delete"
  }
}`,...(T=(W=p.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var C,H,_;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small"
  }
}`,...(_=(H=g.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var R,q,N;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large"
  }
}`,...(N=(q=x.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var $,K,Z;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    iconOnly: true,
    children: <PlusIcon />,
    "aria-label": "Add"
  }
}`,...(Z=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: <>
        Get Started <ArrowIcon />
      </>
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled"
  }
}`,...(ee=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,ne,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div>
      <div style={sectionLabel}>Variants</div>
      <div style={row}>
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Delete</Button>
      </div>

      <div style={sectionLabel}>Sizes</div>
      <div style={row}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <div style={sectionLabel}>Icon Only</div>
      <div style={row}>
        <Button iconOnly aria-label="Add">
          <PlusIcon />
        </Button>
        <Button iconOnly variant="outline" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button iconOnly variant="ghost" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button iconOnly variant="danger" aria-label="Remove">
          <PlusIcon />
        </Button>
      </div>

      <div style={sectionLabel}>With Icon</div>
      <div style={row}>
        <Button>
          Get Started <ArrowIcon />
        </Button>
        <Button variant="outline">
          Export <ArrowIcon />
        </Button>
      </div>

      <div style={sectionLabel}>Disabled</div>
      <div style={row}>
        <Button disabled>Primary</Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="danger" disabled>
          Delete
        </Button>
      </div>
    </div>
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ye=["Playground","Primary","Outline","Ghost","Danger","Small","Large","IconOnly","WithIcon","Disabled","AllVariants"];export{b as AllVariants,p as Danger,v as Disabled,m as Ghost,h as IconOnly,x as Large,u as Outline,d as Playground,c as Primary,g as Small,y as WithIcon,ye as __namedExportsOrder,he as default};
