(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a(379)},378:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(46),l=a.n(i),o=a(21),c=a(22),s=a(25),m=a(24),d=a(384),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).pStyle={"font-size":"20px"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.text;return r.a.createElement(d.a,{className:"intro",textAlign:"left"},t.map(function(t,a){return r.a.createElement("p",{style:e.pStyle,key:a},t)}))}}]),a}(n.Component),h=a(389),p=a(388),g=a(39),b={main:"Henry Valbuena",contact:"Contact",git:"Source Code",redirectLinkedInd:"https://www.linkedin.com/in/henry-valbuena/",redirectGitHub:"https://github.com/henryvalbuena",redirectEmail:"mailto:henry.valbuena@outlook.com"},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{inverted:!0,size:"huge"},r.a.createElement(h.a.Item,{href:b.redirectLinkedInd,target:"_blank",name:b.main},"Henry Valbuena"),r.a.createElement(h.a.Item,{href:b.redirectEmail,target:"_blank",className:"itemMenu",position:"right",name:b.contact},"Contact"),r.a.createElement(h.a.Item,{href:b.redirectGitHub,target:"_blank",className:"itemMenu",name:b.git},"Source Code"),r.a.createElement(p.a,{className:"mobileMenu",basic:!0,color:"black",onClick:this.props.showSideMenu},r.a.createElement(g.a,{inverted:!0,name:"grid layout"})))}}]),a}(n.Component),f=a(387),y=a(205),w=a(391),E=a(385),k=a(91),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.toggleModal=function(){e.setState(function(e){return{visible:!e.visible}})},e.handleClick=function(e){window.open(e.currentTarget.value,"_blank")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.visible,t=this.props,a=t.name,n=t.title,i=t.desc,l=t.detail,o=t.meta,c=t.img,s=t.src;return r.a.createElement(f.a,{link:!0,onClick:this.toggleModal},r.a.createElement(y.a,{alt:"Project Image",src:c,wrapped:!0,ui:!1}),r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,null,a),r.a.createElement(f.a.Meta,{textAlign:"center"},o.map(function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement(f.a.Description,null,i)),r.a.createElement(w.a,{open:e,transition:{animation:"fade up",duration:400}},r.a.createElement(E.a,{closeOnDimmerClick:!1,closeOnDocumentClick:!1,defaultOpen:!0,size:"large"},r.a.createElement(E.a.Header,null,a),r.a.createElement(E.a.Content,{image:!0},r.a.createElement(y.a,{alt:"Project Image",size:"huge",src:c}),r.a.createElement(E.a.Description,null,r.a.createElement("h3",null,n),r.a.createElement("p",null,l),o.map(function(e,t){return r.a.createElement(k.a,{key:t},e)}))),r.a.createElement(E.a.Actions,null,r.a.createElement(p.a,{primary:!0,value:s,onClick:this.handleClick},"More")))))}}]),a}(n.Component),j=function(e){return e.projects.map(function(e){return r.a.createElement("div",{className:"cards",key:e.id},r.a.createElement(S,{id:e.id,name:e.name,title:e.title,meta:e.meta,desc:e.desc,detail:e.detail,img:e.img,src:e.src}))})},C=a(394),I=[{id:"P01",name:"Udacity Latte Cafe",title:"Full-stack REST application",meta:["Flask","SQL-Alchemy","Docker","Nginx","Angular"],desc:"Secure REST full-stack application with persistence",detail:"Designed and developed full-stack application as part of the Udacity Full-Stack Nanodegree. The application whole project includes designing and implementation of the REST API, database models, IAM roles and permissions using Auth0, frontend and backend programming, testing and deployment using Docker containers. The project backend was build using Python Flask web framework, secured using JWT and role based access and permissions to CRUD operations backed up by a ORM persistance model using SQLite for development and Postgress for deployment. The frontend was built with JavaScript Angular and is powered by an Nginx configuration which serves the content.",img:"./img/udacity_late.png",src:"https://github.com/henryvalbuena/full-stack-project"},{id:"P02",name:"Java Desktop Application",title:"Maze Solver",meta:["Java","DSA","DFS","API"],desc:"Maze solver application developed using Java",detail:"Designed to work with images of mazes, the idea is to process the image and parse the binary representation of the maze into a data structure. From this point, the graph algorithm to be used can work with the data and find the path from the start point to the exit. There is another module, which will process the result from the algorithm and draw the path found on the image from start to end.",img:"./img/maze04_finished.png",src:"https://github.com/henryvalbuena/MazeSolver"},{id:"P03",name:"Client-Server API",title:"Remote Manager",meta:["JavaScript","Node.js","C","C++","Linux","Shell Scripting"],desc:"Client side developed using C/C++ and Server side using Node.js, JavaScript and Shell Scripting",detail:"This application is based on two parts, the client and the server. The client, consist of a C/C++ application which encloses all the relevant processes to be able to: 1) connect with the server 2) to send and receive data 3) to work with the data or state of the server. The server is a combination of Node.js, JavaScript and Shell Scripts using Node's API",img:"./img/client_server.png",src:"https://github.com/henryvalbuena/cpp_nodejs_sockets"},{id:"P04",name:"Desktop Web Browser Game",title:"Space Battle",meta:["JavaScript","HTML","Canvas","GPL"],desc:"Space battle game developed using JavaScript",detail:"2D web browser game developed using Canvas API, DOM, and JavaScript to render the visuals, design and implement the game logic, and control user interaction. This was one of the projects I was doing while doing #100DaysofCode as part of my personal challenge to learn more things whiles coding. It is not polished, but the way I coded makes it easy to refactor and/or improve. It is the first game I ever created",img:"./img/ran-image-d23.gif",src:"https://github.com/henryvalbuena/SpaceBattle"},{id:"P05",name:"Chat",title:"Terminal Like Chat",meta:["JavaScript","CSS","Node.js","Socket.io","Express.js"],desc:"Terminal like chat built with CSS and JavaScript supported by Node.js, Express.js, and Socket.io in the backend",detail:"One room chat app that broadcast messagess among the connected users. It uses Socket.io to manage the web sockets and user identity. This project, will incorporate a built-in bot with commands that will provide information about me, my projects, and skills.",img:"./img/chat_20190629.gif",src:"https://github.com/henryvalbuena/chatbot"}],O=a(392),A=a(393),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.handleSidebarHide=function(){return e.setState({visible:!1})},e}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.visible;this.setState({visible:t})}},{key:"render",value:function(){var e=this.state.visible;return r.a.createElement("div",null,r.a.createElement(O.a.Pushable,{as:A.a},r.a.createElement(O.a,{as:h.a,animation:"push",icon:"labeled",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:e,width:"thin",direction:"top"},r.a.createElement(h.a.Item,{href:b.redirectEmail,target:"_blank",name:b.contact},r.a.createElement(g.a,{name:"home"}),b.contact),r.a.createElement(h.a.Item,{href:b.redirectGitHub,target:"_blank",name:b.git},r.a.createElement(g.a,{name:"gamepad"}),b.git)),r.a.createElement(O.a.Pusher,null,this.props.children)))}}]),a}(n.Component),P={intro:["Hellow! Yes with a 'w'. I'm an Electronic Computer Programmer... Wow that sounds fancy and complex, right? Ok, maybe not, but I like to call my self that way. I started my professional career as an Electronic Engineer, after eight years or so I decided that I will follow my passion and make my hobby part of that career, so I went for a Computer Programmer Diploma after and here I am \ud83c\udf89. And yes, you've guessed it! My hobby is programming. I've been doing it since I got my first computer, since then I haven't stopped \ud83e\udd18 yeah!"],interest:["Crypto","Performance and Optimization","Full-stack Development","Ethical Hacking","Quality Assurance","Automation"]},D=a(386),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).pStyle={"font-size":"16px"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.list;return r.a.createElement(d.a,null,r.a.createElement(D.a,null,t.map(function(t){return r.a.createElement(D.a.Item,{style:e.pStyle},t)})))}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.showSideMenu=function(){e.setState(function(e){return{visible:!e.visible}})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{showSideMenu:this.showSideMenu}),r.a.createElement(M,{visible:this.state.visible},r.a.createElement(C.a,{centered:!0,columns:"equal"},r.a.createElement(C.a.Row,null,r.a.createElement("h1",{className:"header"},"A little about me")),r.a.createElement(C.a.Row,{stretched:!1,verticalAlign:"middle",centered:!0},r.a.createElement(C.a.Column,{verticalAlign:"middle"},r.a.createElement(y.a,{src:"https://res.cloudinary.com/devhenry/image/upload/c_scale,h_682/v1569000107/Jenova/img/me02.jpg",size:"medium",rounded:!0,fluid:!1,verticalAlign:"middle"}))),r.a.createElement(C.a.Row,null,r.a.createElement(u,{text:P.intro})),r.a.createElement(C.a.Row,null,r.a.createElement("h2",null,"Interests")),r.a.createElement(C.a.Row,null,r.a.createElement(T,{list:P.interest})),r.a.createElement(C.a.Row,null,r.a.createElement("h2",null,"Most recent projects")),r.a.createElement(C.a.Row,null,r.a.createElement(j,{projects:I})),r.a.createElement(C.a.Row,null,r.a.createElement("p",null,"Developed by ",r.a.createElement("b",null,"Henry Valbuena")," 2019")),r.a.createElement(C.a.Row,null))))}}]),a}(n.Component);a(378),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[213,1,2]]]);
//# sourceMappingURL=main.7469b7fe.chunk.js.map