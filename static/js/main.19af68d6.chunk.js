(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),n=i(8),s=i.n(n),o=(i(13),i(4)),c=i(2),h=i(1);var l=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),i=Object(a.useRef)(),r=Object(a.useRef)(),n=[e,t,i,r],s=function(e){n.forEach((function(e){e.current.style.color="rgb(23, 102, 102)"})),e.target.querySelector("span")?e.target.querySelector("span").style.color="white":e.target.style.color="white"};return Object(h.jsxs)("nav",{id:"navBar",children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)("button",{onClick:s,children:Object(h.jsx)("span",{style:{color:"white"},ref:e,children:"Home"})})}),Object(h.jsx)(o.b,{to:"/projects",children:Object(h.jsx)("button",{onClick:s,children:Object(h.jsx)("span",{ref:t,children:"Projects"})})}),Object(h.jsx)(o.b,{to:"/resume",children:Object(h.jsx)("button",{onClick:s,children:Object(h.jsx)("span",{ref:i,children:"Resume"})})}),Object(h.jsx)(o.b,{to:"/contact",children:Object(h.jsx)("button",{onClick:s,children:Object(h.jsx)("span",{ref:r,children:"Contact"})})})]})};var d=function(){return Object(h.jsxs)("div",{id:"home",children:[Object(h.jsx)("h1",{children:"Hi, I'm Chris!"}),Object(h.jsx)("img",{id:"photo",src:"./IMG_4657.jpg",alt:"Me"}),Object(h.jsx)("p",{children:"I'm a web developer from North Los Angeles. I have experience with building websites with HTML, CSS, JavaScript, React, Node.js and MongoDB and I\u2019m looking to gain more professional experience. Please checkout my projects and reach out to me if you think I\u2019d be the right fit for you!"})]})};var p=function(e){var t=e.project;return Object(h.jsxs)("div",{className:"individualProject",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("p",{children:t.description}),Object(h.jsxs)("details",{children:[Object(h.jsx)("summary",{children:"What I learned:"}),t.experience]}),Object(h.jsxs)("div",{className:"projectLinks",children:[Object(h.jsx)("a",{className:"site",href:t.siteUrl,target:"_blank",rel:"noreferrer",children:"Checkout the site!"}),Object(h.jsx)("a",{className:"code",href:t.githubUrl,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("code",{children:"Checkout the code;"})})]})]})},u={name:"Twitter Clone",description:"My Twitter Clone was made with the MERN Stack and is composed of 2 sites: a frontend hosted on Github Pages and an api hosted on Heroku.  It allows users to sign in with their Twitter credentials (via Passport.js and Twitter OAuth).  This imports and prepopulates their user profile with their username and profile picture.  The user can then post on the clone with text or pictures, follow other users, and explore tweets and profiles.  None of the clone generated posts are shared to Twitter.",experience:"This app had a lot go into it.  It allowed me to practice developing and testing a seperate back end and front end with the goal of bringin them together.  It also gave me the chance to write some responsive CSS to make it mobile friendly",siteUrl:"https://chrismenke45.github.io/twitter-client",githubUrl:"https://github.com/chrismenke45/twitter-client"},j={name:"Where's that Pokemon?",description:"This project was made with Vanilla JavaScript and utilized Google Firebase as a Backend as a Service. In the webpage, a user can play a \"Where's Waldo?\" game with Pok\xe9mon. The game saves the users\u2019 times and allows them to check others\u2019 scores. There is optional use of Gmail authentication to autofill the user's name when submitting scores.",experience:'This app was one of my first with a backend.  It allowed me to learn how to interact with a backend without worrying about making the backend functional.  It also provided me with the experience of learning to use "<map>" and "<area>" tags to set clickable areas in an image.',siteUrl:"https://whereswaldo-8f997.web.app",githubUrl:"https://github.com/chrismenke45/wheresWaldo"},b={name:"Shopping Cart",description:"This project utilizes React to render webpages and reuse code. An API with information on upcoming Fortnite items is called to get product information. React Router is used to generate a home page, a shop page with all available items, and individual pages for in-depth information on each item. The site responds to users adding items to the cart and displays a total when the cart is viewed.",experience:"This app helped me practice writing reusable code with react. It utilizes the same react template for every item on the site.",siteUrl:"https://chrismenke45.github.io/shopping-cart/",githubUrl:"https://github.com/chrismenke45/shopping-cart"},m={name:"Yik Yak Clone (Pik Pak)",description:"This is one of the first apps I built with a fully functioning Node.js backend.  It allows users to sign-in or register an account, and then post anonymously.  It also has a feature for a user to become an admin and delete posts",experience:"Since this app utulizes server-side rendering, I had to choose a templating language.  I had used Pug in the past but wanted to try something new.  I chose EJS because I had read it was a classic and easy to learn.  I do agree that it was easy to learn; however, I prefer Pug.  EJS felt like more work than normal HTML. On top of that it was visually unappealing and hard to debug. In the future I will try to avoid EJS as a templating language.  This app also taught me about authentication using Passport.js.",siteUrl:"https://quiet-earth-55407.herokuapp.com/",githubUrl:"https://github.com/chrismenke45/members-only"};var g=function(){var e=[u,m,j,b];return Object(h.jsx)("main",{id:"projects",children:e.map((function(e){return Object(h.jsx)(p,{project:e})}))})};var f=function(){return Object(h.jsx)("main",{id:"resume",children:Object(h.jsx)("object",{width:"850",height:"1100",type:"application/pdf",data:"Resume.pdf",children:Object(h.jsx)("div",{id:"resumeDownload",children:Object(h.jsx)("a",{href:"Resume.pdf",download:!0,children:"Download Resume"})})})})};var w=function(){return Object(h.jsxs)("address",{id:"contact",children:[Object(h.jsx)("h1",{children:"Chris Menke"}),Object(h.jsx)("h3",{children:"chrismenke45@gmail.com"}),Object(h.jsx)("h3",{children:Object(h.jsx)("a",{href:"https://github.com/chrismenke45",target:"_blank",rel:"noreferrer",children:"github.com/chrismenke45"})}),Object(h.jsx)("h3",{children:"La Crescenta, CA, USA"})]})};var x=function(){return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(l,{}),Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",element:Object(h.jsx)(d,{})}),Object(h.jsx)(c.a,{exact:!0,path:"/projects",element:Object(h.jsx)(g,{})}),Object(h.jsx)(c.a,{exact:!0,path:"/resume",element:Object(h.jsx)(f,{})}),Object(h.jsx)(c.a,{exact:!0,path:"/contact",element:Object(h.jsx)(w,{})})]})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.19af68d6.chunk.js.map