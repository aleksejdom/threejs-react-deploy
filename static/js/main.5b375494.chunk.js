(this["webpackJsonpthreejs-react-deploy"]=this["webpackJsonpthreejs-react-deploy"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(36),a=n.n(o),i=(n(45),n(46),n(12)),s=n(52),j=n(37),l=n(6);Object(i.b)({OrbitControls:j.a});var b=function(){var e=Object(i.e)(),t=e.camera,n=e.gl;return Object(l.jsx)("orbitControls",{autoRotate:!0,enableZoom:!1,enablePan:!1,minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/2.8,attach:"orbitControls",args:[t,n.domElement]})},u=n(0),d=function(){var e=Object(i.d)(u.TextureLoader,"https://aleksejdom.github.io/threejs-react-deploy/sky.jpg"),t=Object(i.e)().gl,n=Object(c.useMemo)((function(){return new u.WebGLCubeRenderTarget(e.image.height).fromEquirectangularTexture(t,e)}),[]);return Object(l.jsx)("primitive",{attach:"background",object:n})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ambientLight",{intensity:.2}),Object(l.jsx)("directionalLight",{"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":15,position:[6,3,0],intensity:2,castShadow:!0}),Object(l.jsx)("pointLight",{position:[0,4,0],intensity:2})]})},O=n(7),f=n(10),p=function(e){var t=Object(s.c)((function(){return Object(O.a)({args:[10,.2,10]},e)})),n=Object(f.a)(t,2),c=n[0];n[1];return Object(l.jsxs)("mesh",Object(O.a)(Object(O.a)({ref:c},e),{},{receiveShadow:!0,children:[Object(l.jsx)("boxBufferGeometry",{args:[100,.2,100]}),Object(l.jsx)("meshPhongMaterial",{transparent:!0,opacity:.2})]}))},g={activeMesh:{},activeMeshName:"Object_20",cameraPos:new u.Vector3(3,5,3),target:new u.Vector3(2,1,0),shouldUpdate:!0},m=function(){var e=function(e){g.activeMesh&&(g.activeMesh.material.color=new u.Color(e.target.style.background))};return Object(l.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px",cursor:"pointer"},children:[Object(l.jsx)("div",{onClick:e,style:{background:"black",height:50,width:50}}),Object(l.jsx)("div",{onClick:e,style:{background:"yellow",height:50,width:50}}),Object(l.jsx)("div",{onClick:e,style:{background:"white",height:50,width:50}})]})},v=n(40);Object(i.b)({DragControls:v.a});var x=function(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),r=n[0],o=n[1],a=Object(c.useRef)(),s=Object(c.useRef)(),j=Object(i.e)(),b=j.camera,u=j.gl,d=j.scene;return Object(c.useEffect)((function(){o(a.current.children)}),[]),Object(c.useEffect)((function(){s.current.addEventListener("hoveron",(function(e){return d.orbitControls.enabled=!1})),s.current.addEventListener("hoveroff",(function(e){return d.orbitControls.enabled=!0})),s.current.addEventListener("dragstart",(function(e){var t;null===(t=e.object.api)||void 0===t||t.mass.set(0),console.log(e.object)})),s.current.addEventListener("dragend",(function(e){var t;return null===(t=e.object.api)||void 0===t?void 0:t.mass.set(1)})),s.current.addEventListener("drag",(function(e){var t,n;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(n=e.object.api)||void 0===n||n.velocity.set(0,0,0)}))}),[r]),Object(l.jsxs)("group",{ref:a,children:[Object(l.jsx)("dragControls",{transformGroup:e.transformGroup,ref:s,args:[r,b,u.domElement]}),e.children]})},y=n(41),w=function(e){var t=Object(i.d)(y.a,"https://aleksejdom.github.io/threejs-react-deploy/"+e.path);return t.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=u.FrontSide)})),Object(l.jsx)("primitive",{object:t.scene,scale:e.scale})},k=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,c=e.offset,r=void 0===c?[0,0,0]:c,o=e.dims,a=void 0===o?[1,1,1]:o,i=e.visible,j=void 0!==i&&i,b=e.children,u=Object(s.c)((function(){return{mass:1,args:a,position:n}})),d=Object(f.a)(u,2),h=d[0],O=d[1];return Object(l.jsxs)("group",{ref:h,api:O,children:[Object(l.jsxs)("mesh",{scale:a,visible:j,children:[Object(l.jsx)("boxBufferGeometry",{}),Object(l.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(l.jsx)("group",{position:r,children:b})]})},C=function(){return Object(l.jsxs)(c.Suspense,{fallback:null,children:[Object(l.jsx)(x,{transformGroup:!0,children:Object(l.jsx)(k,{position:[2,2,0],dims:[2,1.3,4],offset:[0,0,.3],children:Object(l.jsx)(w,{path:"/audi/scene.gltf",scale:new Array(3).fill(.2)})})}),Object(l.jsx)(x,{transformGroup:!0,children:Object(l.jsx)(k,{position:[-2,1,0],dims:[2,1,4],offset:[0,-.4,0],children:Object(l.jsx)(w,{path:"/tesla/scene.gltf",scale:new Array(3).fill(.007)})})})]})},M=n(29),P=function(e){return Object(M.a)(e),Object(i.c)((function(e){var t=e.camera,n=e.scene;(g.activeMesh.name!==g.activeMeshName&&(g.activeMesh=n.getObjectByName(g.activeMeshName)||{}),g.shouldUpdate)&&(t.position.lerp(g.cameraPos,.1),n.orbitControls.target.lerp(g.target,.1),n.orbitControls.update(),t.position.clone().sub(g.cameraPos).length()<.1&&(g.shouldUpdate=!1))})),null},S=n(14),E={zIndex:1,position:"absolute",bottom:"10vh",textAlign:"center",fontSize:20,fontWeight:"bold",opacity:.9,cursor:"pointer"},L=function(e){Object(M.a)(e);var t={1:{cameraPos:[3,5,3],target:[2,1,0],name:"Object_20"},2:{cameraPos:[-3,5,3],target:[-2,1,0],name:"object005_bod_0"}},n=function(e){var n,c;(n=g.cameraPos).set.apply(n,Object(S.a)(t[e].cameraPos)),(c=g.target).set.apply(c,Object(S.a)(t[e].target)),g.activeMeshName=t[e].name,g.shouldUpdate=!0};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(e){return n(2)},style:Object(O.a)(Object(O.a)({},E),{},{left:"20vw"}),children:"PREV"}),Object(l.jsx)("button",{onClick:function(e){return n(1)},style:Object(O.a)(Object(O.a)({},E),{},{right:"20vw"}),children:"NEXT"})]})},F=n(32),G=function(){return Object(l.jsxs)(F.c,{children:[Object(l.jsx)(F.b,{focusDistance:0,focalLength:.02,bokehScale:2,height:480}),Object(l.jsx)(F.a,{luminanceThreshold:.7,luminanceSmoothing:.9,height:300})]})};var T=function(){return Object(l.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(l.jsx)(m,{}),Object(l.jsx)(L,{}),Object(l.jsxs)(i.a,{gl:{powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},shadowMap:!0,style:{background:"#000000"},camera:{position:[1,0,1]},children:[Object(l.jsx)(P,{}),Object(l.jsx)(b,{}),Object(l.jsx)(h,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(C,{}),Object(l.jsx)(p,{position:[0,0,0]})]}),Object(l.jsx)(c.Suspense,{fallback:null,children:Object(l.jsx)(d,{})}),Object(l.jsx)(G,{})]})]})},I=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.5b375494.chunk.js.map