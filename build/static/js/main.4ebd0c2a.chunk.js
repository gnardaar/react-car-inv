(this["webpackJsonpreact-pb"]=this["webpackJsonpreact-pb"]||[]).push([[2],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),i=n.n(r),o=n(43),s=n(23),l=n(66),d=n(124),j=n(68),b=n(4),u=Object(d.a)({logo:{maxWidth:"20%",height:"auto"},navlogo:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},center:{justifyContent:"center",alignItems:"center"},column:{display:"flex",flexDirection:"column"},row:{display:"flex",flexDirection:"row"},navbar:{backgroundColor:"#003155",zIndex:1,borderBottom:"1px solid grey"},navbarItem:{color:"white",textDecoration:"none"},p5:{padding:"5px"},spaceBetween:{justifyContent:"space-between"},alignCenter:{alignItems:"center"},ul:{listStyleType:"none"},width60:{width:"60%"},width100:{width:"100%"},psides:{paddingRight:"10px",paddingLeft:"10px"}}),h=function(){var e=u();return Object(b.jsxs)("div",{className:"".concat(e.row," ").concat(e.navbar," ").concat(e.width100," ").concat(e.alignCenter," ").concat(e.p5," ").concat(e.spaceBetween),children:[Object(b.jsx)("div",{className:"".concat(e.navlogo," "),children:Object(b.jsx)(o.b,{to:"/",className:"".concat(e.logo," ").concat(e.p5)})}),Object(b.jsx)("div",{className:"".concat(e.width60," ").concat(e.alignCenter),children:Object(b.jsx)("ul",{className:"".concat(e.ul," ").concat(e.row," ").concat(e.spaceBetween," ").concat(e.psides),children:Object(b.jsx)(a.Suspense,{fallback:"loading...",children:Object(b.jsxs)(l.a,{fallback:Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/signin",className:"".concat(e.navbarItem," ").concat(e.psides),children:"Sign In"})}),children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(o.b,{to:"/carinventory",className:"".concat(e.navbarItem," ").concat(e.psides),children:"My Cars"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(o.b,{to:"",className:"".concat(e.navbarItem," ").concat(e.psides),children:"Contact Us"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(o.b,{to:"About",className:"".concat(e.navbarItem," ").concat(e.psides),children:"About Us"})})})]})})})})]})},p=Object(d.a)({background:{backgroundImage:"linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)",width:"100%",height:"90%",backgroundPosition:"center",position:"absolute",zIndex:-1},main_text:{textAlign:"center",position:"relative",top:"40%",left:"50%",transform:"translate(-50%, -50%)",color:"white"},button_text:{color:"white",textDecoration:"none"}}),x=function(e){var t=p();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"".concat(t.background),children:Object(b.jsxs)("div",{className:t.main_text,children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)(j.a,{children:Object(b.jsx)(o.b,{to:"/carinventory",className:t.button_text,children:"Take me to my car inventory"})})]})})]})},O=n(11),f=n(7),m=n(8),g=n(126),y=n(27),w=n(233),v=n(226),k=n(77),C=n(69),S=n(227),N=n(228),I=n(229),T=n(230),D=n(231),B=n(239),M=n(234),F=n(181),R=n(182),A=n(235),P=n(232),z=n(132),E=n.n(z),L=n(133),W=n.n(L),_=n(134),G=n.n(_),H=n(2),J=n(130),U=n(18),Y=n(26),K="cc69f79905fc670f5303b2bc1868a2f1a5cf5eeb83d343ca",Q={get:function(){var e=Object(Y.a)(Object(U.a)().mark((function e(){var t;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://ionized-low-centaur.glitch.me/api/cars",{method:"GET",headers:{"Content-Type":"application/json","x-access-token":"Bearer ".concat(K)}});case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch data from server");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(Y.a)(Object(U.a)().mark((function e(){var t,n,a=arguments;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,fetch(" https://ionized-low-centaur.glitch.me/api/cars",{method:"POST",headers:{"Content-Type":"application/json","x-access-token":"Bearer ".concat(K)},body:JSON.stringify(t)});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Failed to Create new data on server");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=Object(Y.a)(Object(U.a)().mark((function e(t){var n,a=arguments;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,fetch(" https://ionized-low-centaur.glitch.me/api/cars/".concat(t),{method:"POST",headers:{"Content-Type":"application/json","x-access-token":"Bearer ".concat(K)},body:JSON.stringify(n)});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(Y.a)(Object(U.a)().mark((function e(t){return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://ionized-low-centaur.glitch.me/api/cars/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json","x-access-token":"Bearer ".concat(K)}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=n(76),V=n(135),X=n(91),Z=Object(X.b)({name:"root",initialState:{make:"Make",model:"Model",condition:"Condition",year:"Year"},reducers:{chooseMake:function(e,t){e.make=t.payload},chooseModel:function(e,t){e.model=t.payload},chooseCondition:function(e,t){e.condition=t.payload},chooseYear:function(e,t){e.year=t.payload}}}),$=Z.reducer,ee=Z.actions,te=ee.chooseMake,ne=ee.chooseModel,ae=ee.chooseCondition,ce=ee.chooseYear,re=n(115),ie=Object(a.forwardRef)((function(e,t){return Object(b.jsx)(re.a,Object(m.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0,type:"text"},e))})),oe=function(e){var t=Object(q.b)(),n=Object(q.d)(),a=(Object(q.c)((function(e){return e.make})),Object(V.a)({})),c=a.register,r=a.handleSubmit;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:r((function(a,c){console.log(e.id),e.id?(Q.update(e.id,a),console.log("Updated:".concat(a," ").concat(e.id)),console.log(a),setTimeout((function(){window.location.reload()}),1e3),c.target.reset()):(t(te(a.make)),t(ne(a.model)),t(ae(a.condition)),t(ce(a.year)),Q.create(n.getState()),setTimeout((function(){window.location.reload()}),1e3))})),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"make",children:"Car Make"}),Object(b.jsx)(ie,Object(m.a)(Object(m.a)({},c("make")),{},{name:"make",placeholder:"make"}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"model",children:"Model"}),Object(b.jsx)(ie,Object(m.a)(Object(m.a)({},c("model")),{},{name:"model",placeholder:"model"}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"condition",children:"Condition"}),Object(b.jsx)(ie,Object(m.a)(Object(m.a)({},c("condition")),{},{name:"condition",placeholder:"car's condition"}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"year",children:"Year"}),Object(b.jsx)(ie,Object(m.a)(Object(m.a)({},c("year")),{},{name:"year",placeholder:"year"}))]}),Object(b.jsx)(j.a,{type:"submit",children:"Submit"})]})})},se=[{field:"id",headerName:"ID",width:90,hide:!0},{field:"make",headerName:"Make",flex:1},{field:"model",headerName:"Model",flex:1},{field:"condition",headerName:"Car Condition",flex:2},{field:"year",headerName:"Year",flex:1}],le=function(){var e=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];function r(){return i.apply(this,arguments)}function i(){return(i=Object(Y.a)(Object(U.a)().mark((function e(){var t;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.get();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){r()}),[]),{carData:n,getData:r}}(),t=e.carData,n=e.getData,c=Object(a.useState)(!1),r=Object(f.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)({data:{}}),l=Object(f.a)(s,2),d=l[0],u=(l[1],Object(a.useState)([])),h=Object(f.a)(u,2),p=h[0],x=h[1],O=function(){o(!1)};return console.log(d.data.id),console.log("testing for data ".concat(t)),Object(b.jsxs)("div",{style:{height:400,width:"100%"},children:[Object(b.jsx)("h2",{children:"My Cars"}),Object(b.jsx)(J.a,{rows:t,columns:se,pageSize:5,checkboxSelection:!0,onSelectionModelChange:function(e){x(e)}}),Object(b.jsx)(j.a,{onClick:function(){o(!0)},children:"Update"}),Object(b.jsx)(j.a,{variant:"contained",color:"secondary",onClick:function(){Q.delete(p),n(),setTimeout((function(){window.location.reload()}),1e3)},children:"Delete"}),Object(b.jsxs)(S.a,{open:i,onClose:O,"aria-labelledby":"form-dialog-title",children:[Object(b.jsxs)(N.a,{id:"form-dialog-title",children:["Update Car ",p]}),Object(b.jsxs)(I.a,{children:[Object(b.jsx)(T.a,{children:"Update Car"}),Object(b.jsx)(oe,{id:p})]}),Object(b.jsxs)(D.a,{children:[Object(b.jsx)(j.a,{onClick:O,color:"primary",children:"Cancel"}),Object(b.jsx)(j.a,{onClick:O,color:"primary",children:"Done"})]})]})]})},de=240,je=Object(d.a)((function(e){return Object(g.a)({main:{display:"flex",flexDirection:"column",backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",width:"100%",height:"100%",position:"absolute",justifyContent:"center",alignItems:"center",fontFamily:"Georgia, 'Times New Roman', Times, serif"},h3:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"black"},text:{display:"flex",flexDirection:"column",color:"#4ef3b4",textDecoration:"none",backgroundColor:"white",width:"60%",justifyContent:"center",alignItems:"center"},logo:{margin:"0 0 0 0.45em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},logo_a:{color:"#4ef3b4",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},logo_navigation:{listStyle:"none",textTransform:"uppercase",textDecoration:"none"},root:{display:"flex"},column:{display:"flex",flexDirection:"column"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(de,"px)"),marginLeft:de,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:de,flexShrink:0},drawerPaper:{width:de},drawerHeader:Object(m.a)(Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},toolbar:{display:"flex",backgroundColor:"#003155",color:"white",fontFamily:"Georgia, 'Times New Roman', Times, serif"},toolbar_button:{marginLeft:"auto",color:"white",fontFamily:"Georgia, 'Times New Roman', Times, serif"},margin_top:{marginTop:"50px"},font:{fontFamily:"Georgia, 'Times New Roman', Times, serif"},leftMargin:{marginLeft:"0px"}})})),be=Object(s.f)((function(e){console.log(e);var t=e.history,n=je(),c=Object(y.a)(),r=Object(a.useState)(!1),i=Object(f.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)(!1),d=Object(f.a)(l,2),u=d[0],h=d[1],p=function(){h(!0)},x=function(){h(!1)},m=[{text:"Home",onClick:function(){return t.push("/")}},{text:"Sign In",onClick:function(){return t.push("/signin")}},{text:"About",onClick:function(){return t.push("/about")}},{text:"car",onClick:function(){return t.push("/car")}}];return Object(b.jsxs)("div",{className:"".concat(n.root," ").concat(n.column),children:[Object(b.jsx)(P.a,{}),Object(b.jsx)(w.a,{position:"fixed",className:Object(H.a)(n.appBar,Object(O.a)({},n.appBarShift,o)),children:Object(b.jsxs)(v.a,{className:n.toolbar,children:[Object(b.jsx)(k.a,{color:"inherit","aria-label":"open-drawer",onClick:function(){s(!0)},edge:"start",className:Object(H.a)(n.menuButton,o&&n.hide),children:Object(b.jsx)(E.a,{})}),Object(b.jsx)(C.a,{variant:"h6",className:n.font,noWrap:!0,children:"My Cars"}),Object(b.jsx)(j.a,{className:n.toolbar_button,onClick:p,children:"Add A New Car!"}),Object(b.jsxs)(S.a,{open:u,onClose:x,"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(N.a,{id:"form-dialog-title",children:"Add New car"}),Object(b.jsxs)(I.a,{children:[Object(b.jsx)(T.a,{}),Object(b.jsx)(oe,{})]}),Object(b.jsxs)(D.a,{children:[Object(b.jsx)(j.a,{onClick:x,color:"primary",children:"Cancel"}),Object(b.jsx)(j.a,{onClick:p,color:"primary",children:"Done"})]})]})]})}),Object(b.jsxs)(B.a,{className:n.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:n.drawerPaper},children:[Object(b.jsx)("div",{className:n.drawerHeader,children:Object(b.jsx)(k.a,{onClick:function(){s(!1)},children:"ltr"===c.direction?Object(b.jsx)(W.a,{}):Object(b.jsx)(G.a,{})})}),Object(b.jsx)(M.a,{}),Object(b.jsx)(F.a,{children:m.map((function(e,t){var n=e.text,a=e.onClick;return Object(b.jsx)(R.a,{button:!0,onClick:a,children:Object(b.jsx)(A.a,{primary:n})},n)}))})]}),Object(b.jsxs)("main",{className:"".concat(Object(H.a)(n.content,Object(O.a)({},n.contentShift,o))," ").concat(n.leftMargin),children:[Object(b.jsx)("div",{className:n.drawerHeader}),Object(b.jsx)(le,{})]})]})})),ue=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),"hey i am car"]})},he=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),"yowdy"]})},pe=n(55),xe=(n(125),n(236)),Oe=n(240),fe=n(237),me=function(e){return Object(b.jsx)(fe.a,Object(m.a)({elevation:6,variant:"filled"},e))},ge=Object(d.a)({googleButton:{backgroundColor:"rgb(66,133,244)",marginTop:"2em",padding:"0",color:"white",height:"50px",width:"240px",border:"none",textAlign:"center",boxShadow:"rgb(0 0 0 / 25%) 0px 2px 4px 0px",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",fontFamily:"Roboto, arial, sans-serif",cursor:"pointer"},googleLogo:{width:"48px",height:"48px",display:"block"},typographyStyle:{fontFamily:"Roboto, arial, sans-serif;",textAlign:"center",fontSize:"2em"},containerStyle:{marginTop:"2em"},snackBar:{color:"white",backgroundColor:"#4caf50"}}),ye=Object(s.f)((function(e){var t=Object(l.c)(),n=ge(),c=e.history,r=Object(a.useState)(!1),i=Object(f.a)(r,2),o=i[0],s=i[1],d=function(e,t){"clickaway"!==t&&(s(!1),c.push("/"))},u=function(){var e=Object(Y.a)(Object(U.a)().mark((function e(){return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.signInWithPopup(new pe.a.auth.GoogleAuthProvider);case 2:e.sent.user&&s(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(Y.a)(Object(U.a)().mark((function e(){return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(xe.a,{maxWidth:"sm",className:n.containerStyle,children:[Object(b.jsx)(C.a,{className:n.typographyStyle,children:"Sign In Below"}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)(ie,{name:"email",placeholder:"Place Email Here"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)(ie,{name:"password",placeholder:"Place Password Here"})]}),Object(b.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]}),Object(b.jsx)(l.a,{fallback:Object(b.jsx)(j.a,{className:n.googleButton,onClick:u,children:"Sign In With Google"}),children:Object(b.jsx)(j.a,{variant:"contained",color:"secondary",onClick:p,children:"Sign Out"})}),Object(b.jsx)(Oe.a,{message:"Success",open:o,autoHideDuration:6e3,onClose:d,children:Object(b.jsx)(me,{onClose:d,severity:"success",children:"Successful Sign In - Redirect in 6 seconds"})})]})]})})),we=(n(174),Object(X.a)({reducer:$,devTools:!0}));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.b,{firebaseConfig:{apiKey:"AIzaSyCkaWLJ5MsRWzjos12Pyu32aWJWJsf9L4Q",authDomain:"carap-b5d9b.firebaseapp.com",projectId:"carap-b5d9b",storageBucket:"carap-b5d9b.appspot.com",messagingSenderId:"441564719128",appId:"1:441564719128:web:e815f6188b228e1efd7b6d"},suspense:!0,children:Object(b.jsx)(q.a,{store:we,children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{title:"Andy's car app"})}),Object(b.jsx)(s.a,{path:"/carinventory",children:Object(b.jsx)(be,{})}),Object(b.jsx)(s.a,{path:"/car",children:Object(b.jsx)(ue,{})}),Object(b.jsx)(s.a,{path:"/about",children:Object(b.jsx)(he,{})}),Object(b.jsx)(s.a,{path:"/signin",children:Object(b.jsx)(ye,{})})]})})})})}),document.getElementById("root"))}},[[175,3,4]]]);
//# sourceMappingURL=main.4ebd0c2a.chunk.js.map