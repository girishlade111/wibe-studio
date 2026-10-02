import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./index-D8yJjKcH.js";var s=a(r(),1),c=n(),l=t(),u=o(i.div)`
  position: absolute;
  /* left: 50%; */
  top: ${e=>e.$click?`0`:`-${e.theme.navHeight}`};
  transition: all 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 40em) {
    top: ${e=>e.$click?`0`:`calc(-50vh - 4rem)`};

  }
`,d=o.li`
  background-color: ${e=>`rgba(${e.theme.textRgba},0.7)`};
  color: ${e=>e.theme.body};
  width: 15rem;
  height: 2.5rem;

  border: none;
  outline: none;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  font-size: ${e=>e.theme.fontmd};
  font-weight: 600;

  /* border-end-start-radius: 50%; */

  /* border-end-end-radius: 50%; */

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;

  }
`,f=o(i.ul)`
  position: relative;
  height: ${e=>e.theme.navHeight};
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction:column;
    padding:2rem 0;
    height: 50vh;
  }
`,p=o(i.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;

  }
`,m=()=>{let[t,n]=(0,s.useState)(!1),{scroll:r}=(0,c.useLocomotiveScroll)(),i=e=>{let i=document.querySelector(e);n(!t),r.scrollTo(i,{offset:`-100`,duration:`2000`,easing:[.25,0,.35,1]})};return(0,l.jsx)(u,{$click:t,initial:{y:`-100%`},animate:{y:0},transition:{duration:2,delay:5},children:(0,l.jsxs)(f,{drag:`y`,dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,l.jsx)(d,{onClick:()=>n(!t),children:(0,l.jsx)(`span`,{children:`MENU`})}),(0,l.jsxs)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i(`#home`),children:[` `,(0,l.jsx)(e,{to:`/`,children:`Home`})]}),(0,l.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i(`.about`),children:(0,l.jsx)(e,{to:`/`,children:`about`})}),(0,l.jsx)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i(`#shop`),children:(0,l.jsx)(e,{to:`/`,children:`shop`})}),(0,l.jsxs)(p,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>i(`.new-arrival`),children:[` `,(0,l.jsx)(e,{to:`/`,children:`new arrival`})]})]})})};export{m as default};