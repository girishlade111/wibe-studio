import{i as e,o as t,r as n,t as r}from"./index-D8yJjKcH.js";t();var i=`/wibe-studio/assets/Walking%20Girl-o3SdTv4N.mp4`,a=e(),o=r.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`,s=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${e=>`rgba(${e.theme.bodyRgba},0.6)`};
`,c=r(n.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${e=>e.theme.fontBig};

    text-shadow: 1px 1px 1px ${e=>e.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${e=>e.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${e=>e.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${e=>e.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${e=>e.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`,l={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:5,staggerChildren:.3}}},u={hidden:{opacity:0},show:{opacity:1}},d=()=>(0,a.jsxs)(o,{"data-scroll":!0,children:[(0,a.jsx)(s,{}),(0,a.jsxs)(c,{variants:l,initial:`hidden`,animate:`show`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n.h1,{variants:u,"data-scroll":!0,"data-scroll-delay":`0.13`,"data-scroll-speed":`4`,children:`W`}),(0,a.jsx)(n.h1,{variants:u,"data-scroll":!0,"data-scroll-delay":`0.09`,"data-scroll-speed":`4`,children:`i`}),(0,a.jsx)(n.h1,{variants:u,"data-scroll":!0,"data-scroll-delay":`0.06`,"data-scroll-speed":`4`,children:`b`}),(0,a.jsx)(n.h1,{variants:u,"data-scroll":!0,"data-scroll-delay":`0.04`,"data-scroll-speed":`4`,children:`e`})]}),(0,a.jsx)(n.h2,{style:{alignSelf:`flex-end`},variants:u,"data-scroll":!0,"data-scroll-delay":`0.04`,"data-scroll-speed":`2`,children:`inspire. create. belive`})]}),(0,a.jsx)(`video`,{src:i,type:`video/mp4`,autoPlay:!0,muted:!0,loop:!0})]});export{d as default};