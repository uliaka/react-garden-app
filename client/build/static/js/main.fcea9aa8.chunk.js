(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/avatar-user.fc047347.png"},17:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),l=(a(40),a(41),a(42),a(1)),o=a(2),i=a(4),u=a(3),m=a(5),g=(a(19),a(30),[{name:"Vasyl",role:"student",group:"4",age:"20"},{name:"Oleg",role:"student",group:"6",age:"21"},{name:"Nadia",role:"student",group:"1",age:"19"},{name:"Petro",role:"sofware",group:"5",age:"19"},{name:"Julia",role:"student",group:"4",age:"20"},{name:"Uliana",role:"student",group:"6",age:"21"},{name:"Mysha",role:"student",group:"1",age:"19"},{name:"Katia",role:"sofware",group:"4",age:"20"},{name:"Margo",role:"student",group:"4",age:"30"},{name:"Vova",role:"student",group:"6",age:"23"},{name:"Gala",role:"sofware",group:"1",age:"19"},{name:"Hihi",role:"student",group:"4",age:"21"}]),p=r.a.createContext({}),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[{name:"Vasyl",role:"student",group:"4",age:"20"},{name:"Oleg",role:"student",group:"6",age:"21"},{name:"Nadia",role:"student",group:"1",age:"19"},{name:"Petro",role:"sofware",group:"5",age:"19"},{name:"Julia",role:"student",group:"4",age:"20"},{name:"Uliana",role:"student",group:"6",age:"21"},{name:"Mysha",role:"student",group:"1",age:"19"},{name:"Katia",role:"sofware",group:"4",age:"20"},{name:"Margo",role:"student",group:"4",age:"30"},{name:"Vova",role:"student",group:"6",age:"23"},{name:"Gala",role:"sofware",group:"1",age:"19"},{name:"Hihi",role:"student",group:"4",age:"21"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addUser",value:function(e){var t=this.state.users;t.push(e),this.setState({users:t})}},{key:"render",value:function(){var e={users:this.state.users,addUser:this.addUser.bind(this)};return r.a.createElement(p.Provider,{value:e},this.props.children)}}]),t}(r.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user_block"},r.a.createElement("h1",null,this.props.data.name),r.a.createElement("span",{className:"age"}," ",this.props.data.age," years old"),r.a.createElement("span",{className:"role"},this.props.data.role))}}]),t}(r.a.Component);function d(e){return r.a.createElement("button",{onClick:e.sortOnClick},e.title)}function E(e){return r.a.createElement("div",null,r.a.createElement("h1",null," Users list "),r.a.createElement("div",{className:"sort-button-container"},r.a.createElement(d,{sortOnClick:e.sortUsersByName,title:"Sort by name"}),r.a.createElement(d,{sortOnClick:e.sortUsersByAge,title:"Sort by age"})),e.users.map(function(e){return r.a.createElement(v,{data:e})}))}function f(e){for(var t=[],a=1;a<=e.pagesCount;a++)t.push(a);return r.a.createElement("div",null,t.map(function(t){return r.a.createElement("span",{className:t===e.activePage?"active-page":"page",onClick:function(){e.setActivePage(t)}},t)}))}var b={usersPerPage:4},y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={users:g,pagesCount:a.calculatePageCount(g.length,b.usersPerPage),activePage:1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"calculatePageCount",value:function(e,t){return Math.floor(e/t)+1}},{key:"activePageUsers",value:function(e,t,a){var n=t*a,r=n-a;return e.slice(r,n)}},{key:"setActivePage",value:function(e){this.setState({activePage:e})}},{key:"sortUsersByName",value:function(){var e=this.state.users.sort(function(e,t){return e.name>t.name?1:-1});this.setState({users:e})}},{key:"sortUsersByAge",value:function(){var e=this.state.users.sort(function(e,t){return e.age>t.age?1:-1});this.setState({users:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.activePage,n=t.pagesCount;return r.a.createElement(p.Consumer,null,function(t){var s=t.users;return r.a.createElement("div",{className:"user-list-container"},r.a.createElement(E,{users:e.activePageUsers(s,a,b.usersPerPage),sortUsersByName:e.sortUsersByName.bind(e),sortUsersByAge:e.sortUsersByAge.bind(e)}),r.a.createElement("div",{className:"padding-container"},r.a.createElement(f,{pagesCount:n,activePage:a,setActivePage:e.setActivePage.bind(e)})))})}}]),t}(r.a.Component),O=a(12),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={newUser:{name:"",role:"",group:"",age:""},nameErorr:"",roleErorr:"",groupErorr:"",ageErorr:"",err:""},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e,t){var a=this.state.newUser;a[e]=t,this.setState({newUser:a})}},{key:"validate",value:function(e){var t=this.state.newUser,a=t.name,n=t.role,r=t.group,s=t.age,c=a?"":"name is empty",l=n?"":"role is empty",o=r?"":"group is empty",i=s?"":"age is empty",u="";return e.find(function(e){return a===e.name})&&(u="user exist!!"),!(c||l||o||i||u)||(this.setState({nameErorr:c,roleErorr:l,groupErorr:o,ageErorr:i,err:u}),!1)}},{key:"resetForm",value:function(){this.setState({newUser:{name:"",role:"",group:"",age:""},nameErorr:"",roleErorr:"",groupErorr:"",ageErorr:"",err:""})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.Consumer,null,function(t){var a=t.users,n=t.addUser;return r.a.createElement("div",{className:"form-create-user"},r.a.createElement("h2",null,"Add user"),r.a.createElement("label",null,"Username",r.a.createElement("input",{type:"text",name:"name",value:e.state.newUser.name,onChange:function(t){e.handleChange("name",t.target.value)}}),r.a.createElement("div",{className:"style-error"},e.state.nameErorr)),r.a.createElement("label",null,"Role",r.a.createElement("input",{type:"text",name:"role",value:e.state.newUser.role,onChange:function(t){e.handleChange("role",t.target.value)}}),r.a.createElement("div",{className:"style-error"},e.state.roleErorr)),r.a.createElement("label",null,"Group",r.a.createElement("input",{type:"text",name:"group",value:e.state.newUser.group,onChange:function(t){e.handleChange("group",t.target.value)}}),r.a.createElement("div",{className:"style-error"},e.state.groupErorr)),r.a.createElement("label",null,"Age",r.a.createElement("input",{type:"text",name:"age",value:e.state.newUser.age,onChange:function(t){e.handleChange("age",t.target.value)}}),r.a.createElement("div",{className:"style-error"},e.state.ageErorr)),r.a.createElement("div",{className:"style-error"},e.state.err),r.a.createElement("button",{onClick:function(){e.validate(a)&&(n(e.state.newUser),e.resetForm())}},"Add user"))})}}]),t}(r.a.Component),C=(a(62),function(){return r.a.createElement("div",{className:"box-info"},r.a.createElement("h1",null,"Welcome to our kindergarten"),r.a.createElement("h2",null,"We give a happy childhood"))}),N=(a(17),r.a.createContext({})),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messages:[{member:"partner",text:"Hi! How are you?",timestamp:"11:30"},{member:"user",text:"Hi! Fine",timestamp:"11:56"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"sendMessage",value:function(e){var t=this.state.messages;t.push({member:"user",text:e,timestamp:"12:30"}),this.setState({messages:t})}},{key:"render",value:function(){var e={messages:this.state.messages,sendMessage:this.sendMessage.bind(this)};return r.a.createElement(N.Provider,{value:e},this.props.children)}}]),t}(r.a.Component),w=a(11),U=a.n(w),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={text:""},a.onChangeMessage=a.onChangeMessage.bind(Object(O.a)(a)),a.onSubmitMessage=a.onSubmitMessage.bind(Object(O.a)(a)),a.onPressEnter=a.onPressEnter.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangeMessage",value:function(e){this.setState({text:e.target.value})}},{key:"onPressEnter",value:function(e){13===e.keyCode&&(this.props.sendMessage(this.state.text),this.resetMessage())}},{key:"onSubmitMessage",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.text),this.resetMessage()}},{key:"resetMessage",value:function(){this.setState({text:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper-writing-place"},r.a.createElement("div",{className:"writing-place"},r.a.createElement("input",{type:"text",className:"message",placeholder:"Type something...",value:this.state.text,onChange:function(t){return e.onChangeMessage(t)},onKeyDown:function(t){return e.onPressEnter(t)}}),r.a.createElement("button",{className:"send-message",onClick:function(t){return e.onSubmitMessage(t)}},"Send")))}}]),t}(r.a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.messages;return r.a.createElement("div",{className:"messages-place"},e.map(function(e){return r.a.createElement("div",{className:"conversation-block"},r.a.createElement("div",{className:("partner"===e.member?"partner":"user")+"-message-block"},r.a.createElement("img",{className:"avatar-user",src:U.a}),r.a.createElement("div",{className:("partner"===e.member?"partner":"user")+"-message"},e.text),r.a.createElement("div",{className:("partner"===e.member?"partner":"user")+"-time-block"},e.timestamp)))}))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeUser:2,searchUser:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleSearchCahnge",value:function(e){this.setState({searchUser:e})}},{key:"setActiveUser",value:function(e){this.setState({activeUser:e})}},{key:"filterList",value:function(e){var t=this.state.searchUser;return e.filter(function(e){return-1!==e.name.toLowerCase().search(t.toLowerCase())})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.Consumer,null,function(t){var a=t.users;return r.a.createElement("div",{className:"chat-list"},r.a.createElement("div",{className:"chat-list-title"},r.a.createElement("div",{className:"avatar-user-container"},r.a.createElement("img",{className:"avatar-user",src:U.a}),r.a.createElement("div",{className:"user-info"},r.a.createElement("span",{className:"user-name"},"Uliana"),r.a.createElement("span",{className:"user-status"},"Online")))),r.a.createElement("div",{className:"separator"},r.a.createElement("input",{type:"text",className:"filter",placeholder:"CHAT",onChange:function(t){e.handleSearchCahnge(t.target.value)}})),r.a.createElement("div",{className:"chat-list-container"},e.filterList(a).map(function(t,a){return r.a.createElement("div",{className:"user-block user"+(a===e.state.activeUser?" active-user":""),onClick:function(){return e.setActiveUser(a)}},r.a.createElement("img",{className:"avatar-user",src:U.a}),r.a.createElement("div",{className:"users-chatting"},r.a.createElement("div",{className:"user-name"},t.name),r.a.createElement("div",{className:"user-messages"},"Hello! How are you?")))})))})}}]),t}(r.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Consumer,null,function(e){e.users;return r.a.createElement(N.Consumer,null,function(e){var t=e.messages,a=e.sendMessage;return r.a.createElement("div",{className:"chat-wrapper"},r.a.createElement("div",{className:"chat-container"},r.a.createElement(M,null),r.a.createElement("div",{className:"messages-container"},r.a.createElement("div",{className:"message-title"},r.a.createElement("div",{className:"partner-container"},r.a.createElement("img",{className:"avatar-user",src:U.a}),r.a.createElement("div",{className:"partner-info"},r.a.createElement("span",{className:"partner-name"},"Michailo"),r.a.createElement("span",{className:"partner-status"},"Online"))),r.a.createElement("div",{className:"setting-messages"},r.a.createElement("img",{className:"setting-img"}))),r.a.createElement(P,{messages:t}),r.a.createElement(x,{sendMessage:a}))))})})}}]),t}(r.a.Component),A=a(14),B=a(13);var H=function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"head"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(A.b,{to:"/"},"Home")),r.a.createElement("span",{className:"nav-link"},r.a.createElement(A.b,{to:"/users"},"User list")),r.a.createElement("span",{className:"nav-link"},r.a.createElement(A.b,{to:"/create"},"Create User")),r.a.createElement("span",{className:"nav-link"},r.a.createElement(A.b,{to:"/chat"},"Chat"))),r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/",component:C}),r.a.createElement(B.a,{path:"/users",component:y}),r.a.createElement(B.a,{path:"/create",component:k}),r.a.createElement(j,null,r.a.createElement(B.a,{path:"/chat",component:S}))))},T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ",this.props.data.taskName," ")}}]),t}(r.a.Component);function J(e){return r.a.createElement("div",null,r.a.createElement("h1",null," This is task list "),e.tasks.map(function(e){return r.a.createElement(T,{data:e})}))}var L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).inputRef=r.a.createRef(),a.state={taskText:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onButtonClick",value:function(){var e=this.state.taskText;this.props.onTaskAdd({taskName:e})}},{key:"handleChange",value:function(e){this.setState({taskText:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:this.inputRef,onChange:this.handleChange.bind(this)}),r.a.createElement("button",{onClick:function(){e.onButtonClick()}}," Add task "))}}]),t}(r.a.Component);r.a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.fcea9aa8.chunk.js.map