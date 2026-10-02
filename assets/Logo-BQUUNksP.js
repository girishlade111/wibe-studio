import{a as e,i as t,o as n,r,t as i}from"./index-D8yJjKcH.js";n();var a=t(),o=i.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`,s=i(r.span)`
  font-size: ${e=>e.theme.fontlg};
  color: ${e=>e.theme.text};
  padding-bottom: 0.5rem;
`,c={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,delay:3,ease:`easeInOut`}}},l={hidden:{opacity:0,x:-50},visible:{opacity:1,x:-5,transition:{duration:2,delay:5,ease:`easeInOut`}}},u=()=>(0,a.jsx)(o,{children:(0,a.jsxs)(e,{to:`/`,children:[(0,a.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,enableBackground:`new 0 0 24 24`,height:`48px`,viewBox:`0 0 24 24`,width:`48px`,fill:`none`,children:(0,a.jsx)(`g`,{children:(0,a.jsx)(r.path,{variants:c,initial:`hidden`,animate:`visible`,d:`M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z`})})}),(0,a.jsx)(s,{variants:l,initial:`hidden`,animate:`visible`,children:`Wibe Studio`})]})});export{u as default};