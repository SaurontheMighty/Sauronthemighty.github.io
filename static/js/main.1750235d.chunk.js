(this.webpackJsonpashishselvaraj=this.webpackJsonpashishselvaraj||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),o=a(7),s=a.n(o),r=(a(13),a(0)),c=function(){return Object(r.jsxs)("section",{className:"about-card",children:[Object(r.jsx)("p",{className:"section-header",children:"About Me"}),Object(r.jsx)("img",{src:"images/avatar.png",className:"avatar",alt:"Avatar Image"}),Object(r.jsxs)("section",{className:"about-details",children:[Object(r.jsxs)("p",{className:"about-details-header",children:["Passionate about writing Software",Object(r.jsx)("br",{})," and Building Projects."]}),Object(r.jsxs)("ul",{className:"small-tags",children:[Object(r.jsx)("li",{children:"Algorithms"}),Object(r.jsx)("li",{children:"Math"}),Object(r.jsx)("li",{children:"Python"}),Object(r.jsx)("li",{children:"Java"}),Object(r.jsx)("li",{children:"App Development"})]}),Object(r.jsx)("p",{className:"about-details-header",children:"Favorite Books:"}),Object(r.jsxs)("p",{className:"div",children:[Object(r.jsx)("i",{className:"fa fa-book"})," Lord of the Rings, Harry Potter, Redwall"]}),Object(r.jsx)("p",{className:"about-details-header",children:"Hobbies:"}),Object(r.jsxs)("p",{className:"div",children:[Object(r.jsx)("i",{className:"fa fa-chess"})," Chess, Guitar, Skateboarding, bicycling"]})]}),Object(r.jsxs)("section",{className:"links",children:[Object(r.jsx)("button",{className:"about-button",onClick:function(){return window.open("https://github.com/SaurontheMighty/","_blank")},children:Object(r.jsx)("img",{className:"abt-btn-img",src:"images/githublogo.png",alt:"GitHub Logo"})}),Object(r.jsx)("button",{className:"about-button",onClick:function(){return window.open("https://www.linkedin.com/in/ashish-selvaraj/","_blank")},children:Object(r.jsx)("img",{className:"abt-btn-img",src:"images/linkedinlogo.png",alt:"LinkedIn Logo"})}),Object(r.jsx)("button",{className:"about-button",onClick:function(){return window.open("https://devpost.com/yesashishs","_blank")},children:Object(r.jsx)("img",{className:"abt-btn-img",src:"images/hacklogo.png",alt:"Hackathons"})})]})]})},l=function(){return Object(r.jsx)("section",{className:"aside",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"University of Waterloo"}),Object(r.jsx)("p",{children:"Computer Science & Business Double Degree"}),Object(r.jsx)("p",{children:"Graduation: August 2025"})]})})},d=function(){return Object(r.jsx)("footer",{children:Object(r.jsx)("p",{children:"Made with HTML, CSS, JavaScript and React by Ashish."})})},h=a(2);function u(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function p(){var e=Object(i.useState)(u()),t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){function e(){n(u())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var m=a(8),g=function(e){var t=e.initial,a=p(),n=a.width,o=a.height,s=Math.floor(n/10)-5,c=s<23?40:Math.floor(o/10)-15,l=[],d=Object(i.useState)(t),u=Object(h.a)(d,2),g=u[0],b=u[1],j=Object(i.useState)(0),f=Object(h.a)(j,2);f[0],f[1];return Object(i.useEffect)((function(){var e=0,t=setInterval((function(){l=Object(m.a)(g),setTimeout((function(){for(var a=0;a<c;a++)for(var i=0;i<s;i++){var n=0;i>0&&g[a][i-1][0]>0&&n++,i<s-1&&g[a][i+1][0]>0&&n++,a>0&&g[a-1][i][0]>0&&n++,a<c-1&&g[a+1][i][0]>0&&n++,a>0&&i>0&&g[a-1][i-1][0]>0&&n++,i>0&&a<c-1&&g[a+1][i-1][0]>0&&n++,a>0&&i<s-1&&g[a-1][i+1][0]>0&&n++,a<c-1&&i<s-1&&g[a+1][i+1][0]>0&&n++,l[a][i][0]>0&&(n>3||n<2)?l[a][i]=[0,l[a][i][1]]:0==l[a][i][0]&&3==n&&(l[a][i]=[1,l[a][i][1]])}b(l),500==++e&&clearInterval(t)}),1001)}),100);return function(){console.log("clearing interval"),clearInterval(t)}}),[]),Object(r.jsx)("div",{className:"grid",children:g.map((function(e){return Object(r.jsx)("div",{className:"row",children:e.map((function(e){return Object(r.jsx)("div",{className:e[0]>0?"box life":"box"},e[1])}))},e)}))})},b=function(e){var t=e.title,a=e.extended,n=e.style,o=Object(i.useState)(!1),s=Object(h.a)(o,2),c=s[0],l=s[1],d=Object(i.useState)(!1),u=Object(h.a)(d,2),p=u[0],m=u[1],g=Object(i.useState)(!1),b=Object(h.a)(g,2),j=b[0],f=b[1];return Object(r.jsxs)("div",{onClick:function(){l(!c),f(c),p?m(!p):setTimeout((function(){m(!p)}),180)},style:c?{}:n,className:c?"info expand":j?"collapse info":"info",children:[Object(r.jsx)("p",{className:c?"infoTitle expanded":"infoTitle",children:t}),Object(r.jsx)("p",{className:p?"infoBody":"hidden",children:a}),Object(r.jsxs)("p",{className:p&&a.includes("Studying")?"infoBody":"hidden",children:["Building a fast customizable journaling app \ud83d\udc49\ud83c\udffc ",Object(r.jsx)("a",{href:"https://www.introspekt.app/",children:"introspekt.app"})]})]})},j=function(){for(var e=p(),t=e.width,a=e.height,i=Math.floor(t/10)-5,n=i<=24,o=Math.floor(a/10)-15,s=Math.ceil(o/3),c=i>23?Math.ceil((i-23)/2)+1:1,l=[],d=0,h=[],u=0;u<o;u++){for(var m=[],b=0;b<i;b++)m.push([0,d]),d++;h.push(m)}return function(e){for(var t=[[[0,1,2,3,4],[0,2],[0,1,2,3,4]],[[0,1,2,4],[0,2,4],[0,2,3,4]],[[0,1,2,3,4],[2],[0,1,2,3,4]],[[0,4],[0,1,2,3,4],[0,4]],[[0,1,2,4],[0,2,4],[0,2,3,4]],[[0,1,2,3,4],[2],[0,1,2,3,4]]],a=-1,o=-1,r=0,d=c-1;d<i+10;d++){var h=[];2===a?(a=-1,h=[[],[],[]],r++):(a++,h=r<=5?t[r]:[[],[],[]]),0===a||-1==a?o=0:o++;for(var u=s-1;u<2*s;u++)if(h[o].includes(u-s+1))if(!n&&e[u][d])e[u][d]=[1,e[u][d][1]],l.push([u,d]);else{var p=Math.floor(i/2)-1;e[6*r+u-12][p+o]&&(e[6*r+u-12][p+o]=[1,e[6*r+u-12][p+o][1]],l.push([6*r+u-12,p+o]))}}}(h),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(g,{initial:h})})},f=function(e){var t=e.post,a=e.setSearch,n=p(),o=n.width,s=n.height,c=o<760,l=Object(i.useState)(1),d=Object(h.a)(l,2),u=d[0],m=d[1],g=Object(i.useState)(!1),b=Object(h.a)(g,2),j=b[0],f=b[1],y=0;t.slideshow&&(y=t.slideshow.length);var w=c&&"this"===t.uid?"images/newmobile.png":t.thumbnail;return Object(r.jsxs)("section",{className:"post",children:[Object(r.jsxs)("section",{className:"postcol",children:[Object(r.jsxs)("article",{children:[Object(r.jsx)("h4",{children:t.title}),Object(r.jsx)("p",{children:t.description}),!j&&Object(r.jsx)("p",{className:"readmore",id:t.uid+"readmore",onClick:function(){return f(!0)},children:"Read"})]}),Object(r.jsx)("section",{children:Object(r.jsx)("p",{children:Object(r.jsx)("img",{src:w,className:"postpicapp overflow",alt:"Post Thumbnail"})})})]}),j&&Object(r.jsxs)("article",{id:t.uid,children:[t.body1&&Object(r.jsx)("p",{className:"more",children:t.body1}),t.slideshow&&Object(r.jsxs)("div",{className:"slideshow-container",children:[t.slideshow.map((function(e){return Object(r.jsxs)("div",{className:e.key==u?"":"hidden",children:[Object(r.jsx)("p",{children:e.caption}),Object(r.jsx)("div",{style:{textAlign:"center"},children:Object(r.jsx)("img",{src:"images/"+e.image,className:"slide-img",style:{height:"".concat(.5*s,"px")},alt:e.caption})}),Object(r.jsx)("br",{})]},e.key)})),Object(r.jsx)("a",{className:"prev",onClick:function(){m(1!=u?u-1:y)},children:"\u276e"}),Object(r.jsx)("a",{className:"next",onClick:function(){m(u!=y?u+1:1)},children:"\u276f"}),Object(r.jsx)("section",{style:{textAlign:"center"},children:t.slideshow.map((function(e){return Object(r.jsx)("span",{className:e.key==u?"dot active-dot":"dot",onClick:function(){m(e.key)}})}))})]}),Object(r.jsx)("p",{className:"more",children:t.body2}),t.links&&t.links.map((function(e){return Object(r.jsx)("p",{class:"more",children:Object(r.jsx)("a",{id:"more",href:e.link,target:"_blank",rel:"noopener",children:e.caption})})})),j&&Object(r.jsx)("p",{onClick:function(){return f(!1)},style:{fontSize:"smaller"},className:"readmore",id:t.uid+"readmore",children:"Show Less"})]}),Object(r.jsx)("ul",{className:"tags",children:t.tags.map((function(e){return Object(r.jsx)("li",{onClick:function(){return a(e)},children:e})}))})]},t.key)},y=function(){var e=a(6),t=Object(i.useState)(a(6)),n=Object(h.a)(t,2),o=n[0],s=n[1],c=Object(i.useState)(""),l=Object(h.a)(c,2),d=l[0],u=l[1],p=Object(i.useState)(!1),m=Object(h.a)(p,2),g=m[0],b=m[1],j=Object(i.useState)(!1),y=Object(h.a)(j,2),w=y[0],k=y[1],v=function(){if(""!==d){b(!1);var t=e.filter((function(e){var t=0;return e.tags.map((function(e){e.toLowerCase().includes(d.toLowerCase())&&(t=1),d.toLowerCase().includes(e.toLowerCase())&&(t=1)})),d.toLowerCase().includes(e.title.toLowerCase())&&(t=1),e.title.toLowerCase().includes(d.toLowerCase())&&(t=1),1===t}));console.log(d),console.log(t),0===t.length&&(b(!0),console.log(g)),s(t),k(!0)}};return Object(i.useEffect)((function(){v()}),[d]),Object(r.jsxs)("section",{className:"main-card",children:[Object(r.jsx)("p",{className:"section-header",children:"Posts"}),Object(r.jsx)("section",{children:Object(r.jsxs)("form",{onSubmit:v,children:[Object(r.jsx)("input",{type:"text",placeholder:"Search by Title or Technology",className:"search-card",value:d,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("button",{"aria-label":"Search all the Posts on the Page",type:"button",className:"search-button",id:"search-button",children:"\ud83d\udd0d"})]})}),Object(r.jsxs)("section",{className:"search-tags",children:[Object(r.jsx)("li",{onClick:function(e){return u("website")},children:"Websites"}),Object(r.jsx)("li",{onClick:function(e){return u("ios app")},children:"iOS"}),Object(r.jsx)("li",{onClick:function(e){return u("android app")},children:"Android"}),Object(r.jsx)("li",{onClick:function(e){return u("extension")},children:"Browser Extensions"}),Object(r.jsx)("li",{onClick:function(e){return u("React")},children:"React"}),Object(r.jsx)("li",{onClick:function(e){return u("Node.js")},children:"Node.js"}),Object(r.jsx)("li",{onClick:function(e){return u("JavaScript")},children:"JavaScript"}),Object(r.jsx)("li",{onClick:function(e){return u("Python")},children:"Python"}),Object(r.jsx)("li",{onClick:function(e){return u("Java")},children:"Java"}),Object(r.jsx)("li",{onClick:function(e){return u("Cloud")},children:"Cloud"})]}),Object(r.jsx)("br",{}),g&&Object(r.jsx)("div",{children:Object(r.jsx)("section",{className:"about-card",id:"test",children:Object(r.jsx)("p",{children:"Sorry, no posts were found!"})})}),o.map((function(e){return Object(r.jsx)(f,{post:e,setSearch:u})})),w&&Object(r.jsx)("button",{type:"submit",className:"back-button",id:"back-button",onClick:function(){k(!1),s(e),u(""),b(!1)},children:"Back"})]})},w=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),a=Object(i.useState)(!1),n=Object(h.a)(a,2),o=n[0],s=n[1],u=Object(i.useState)(0),m=Object(h.a)(u,2),g=m[0],f=m[1],w=p(),k=w.width,v=w.height,x=v>k&&k<700,O=Object(i.useState)(!!x),S=Object(h.a)(O,2),I=S[0],A=S[1];if(t.current&&e.current){var N=t.current.getBoundingClientRect().top,T=e.current.getBoundingClientRect().bottom;0==g&&f(N-T-5)}return setTimeout((function(){o||(A(!0),s(!0))}),3e3),Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{ref:e,style:o?{background:"linear-gradient(90deg, rgba(252,177,124,0.85), rgba(253,144,153,0.85))"}:{},children:Object(r.jsx)("h1",{children:"Ashish Selvaraj"})}),Object(r.jsx)(j,{}),o?Object(r.jsxs)("main",{ref:t,style:{position:"absolute",transform:"translateY(".concat(-g,"px)"),transition:"transform 4s"},children:[Object(r.jsx)(c,{}),Object(r.jsx)(y,{}),Object(r.jsx)(l,{})]}):Object(r.jsxs)("main",{ref:t,children:[Object(r.jsx)(c,{}),Object(r.jsx)(y,{}),Object(r.jsx)(l,{})]}),Object(r.jsxs)("div",{className:"gutter",style:x?{top:v-60+"px",height:"40px"}:{top:v-80+"px"},children:[I||x?Object(r.jsx)("p",{}):Object(r.jsx)(b,{style:x?{height:"30px"}:{},title:"John Conway's Game of Life",extended:"The Game of Life is a Mathematical 'zero player game' created by John Conway. Here, I have created a simulation of the Game of Life constrained by a grid the size of your screen. The game is meant to loosely represent life and here a cell is 'alive' if it's white and 'dead' otherwise. If a dead cell is surrounded by three living ones it comes to life and a living cell dies if it is surrounded by less than two or more than three living cells."}),I?Object(r.jsx)("p",{}):Object(r.jsx)(b,{style:x?{height:"30px"}:{},title:"Experience",extended:"Studying and living across\n three countries in the past nineteen years has made me highly adaptable and open to new experiences and ideas. \n\nCurrently working as a Software Engineer Intern @ Loblaw. Interested in offers for a Winter 2023 Co-op."}),Object(r.jsx)("div",{className:"infos",style:x?{height:"30px",width:"30px"}:{width:"50px"},onClick:function(){A(!I)},children:Object(r.jsx)("div",{className:"infosTitle",children:I?"\ud83e\udd2b":"\ud83d\ude00"})})]}),Object(r.jsx)(d,{})]})};var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(w,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),v()},6:function(e,t){e.exports=[{title:"Not Evil Sudoku",uid:"notevil",thumbnail:"images/notevil.png",body1:"Designed, developed a clean, minimalistic Sudoku app that has gained over 10,000+ installs in just 4 months. Features include progress charts, daily sudoku reminders, games at various difficulty levels and real-time checking. Generated hundreds of unique sudoku puzzles in seconds by writing a sudoku generator that used backtracking.",description:"A clean minimalistic sudoku app with over 11,000 users",body2:"Developed a custom analytics solution using Node.js, Express which the app communicated with to track usage of various features of the app, identify trends and prioritize future development. Backend was deployed to Amazon Web Services' EC2 server using Elastic Beanstalk and used DynamoDB for storage. Used ACM for provisioning a HTTPS certificate and Route 53 for DNS management.",slideshow:[{image:"notsudoku.png",caption:"Main Screen",key:1},{image:"notdark.png",caption:"Dark Mode",key:2},{image:"notcharts.png",caption:"Charts",key:3},{image:"notsettings.png",caption:"Settings",key:4},{image:"nothelp.png",caption:"Auto-validate",key:5}],author:"Ashish Selvaraj",links:["http://apple.co/3vyesUR"],tags:["App","Swift","SwiftUI","AWS","EC2","DynamoDB"],id:10},{title:"E-commerce website",uid:"ecomm",thumbnail:"images/ecom1.png",body1:"This is a full stack e-commerce website with a Python Flask backend and a React frontend. I've been meaning to try out Flask and the Stripe API so I thought this would be a good project to use both of those technologies. The backend has two main routes /api/payment and /api/products. The payment route uses Stripe to create a client secret and the product route exposes a way to get the list of products and add products.",description:"Browse products, add them to your cart and checkout",body2:"I really liked how simple and straight forward Flask is, it made it really simple to work with a SQLite database and handle routes. The Stripe API is also great, and it's mindblowing to see how easy it is to handle payments with it. I might still prefer Node for bigger projects because writing both the frontend and backend with the same language is a lot simpler.",slideshow:[{image:"ecom1.png",caption:"Main Page",key:1},{image:"ecom2.png",caption:"Checkout Page",key:2}],author:"Ashish Selvaraj",links:[],tags:["Website","Flask","Python","React","JSX","JavaScript","HTML","CSS","SQL"],id:11},{title:"Full Stack Blogging Website",uid:"hooloovoo",thumbnail:"images/hooloovoo.png",body1:"Building a full stack application where I built everything from the frontend to the API to the database has always been something that I found really exciting. This project was built with React as the frontend, Node and Express in the Backend and with MongoDB as the database. The backend exposes a Blogging API with the ability to get, edit and create blogs. The frontend then calls this API and populates the UI for the user.",description:"A responsive full stack blogging application built with the MERN stack.",body2:"Designing my own API was a really interesting experience and something I really enjoyed. Designing sytems as a whole is an amazing experience where you have to consider scalability, cost and user experience. I designed the API so that I would need to make as few API calls as possible. The website usually remembers context and avoids fetching data twice. For example, if you click on a blog on the home page, it will send data about the blog to the blog details page so it doesn't need to call the API again. But of course if you go straight to the details page of a blog from an external source it does need to fetch from the API. \n\nBackend: \n I chose Node for one main reason: I wanted to be able to build the frontend and backend with the same language. Since this is a solo project it just makes everything easier and faster because I don't need to switch between languages. I then used Express as the framework for Node because it simplified the experience of building a Node backend and made it much more elegant. I used several packages: Mongoose, Nodemon, Morgan, dotenv, CORS. This was built to be production ready and dotenv is really great because it lets the developer hide their secrets. For me, I used it to hide the Mongo DB URI since I was using MongoDB Atlas which is a cloud based NoSQL database. Morgan and Nodemon were used to make development faster and I highly recommend them. \n\n Frontend: \n The frontend was built with React and I've grown to really enjoy building React websites. The benefits of building Single Page Applications (SPAs) are hard to down play. It allowed me to reuse components which in turn reduced development time. And, JSX meant that there was hardly any repetition in the code.",slideshow:[{image:"hooloovoo.png",caption:"Main Page",key:1},{image:"editblog.png",caption:"Edit Page",key:2},{image:"blogdetails.png",caption:"Details Page",key:3}],author:"Ashish Selvaraj",links:[],tags:["Website","Node.js","React","MongoDB","Express","JSX","JavaScript","HTML","CSS"],id:9},{title:"Introspekt",uid:"introspekt",thumbnail:"images/ipagex.png",body1:"Introspekt is a cross-platform (iOS & Android) journaling app. Introspekt takes a graphical and data-oriented approach to journaling and lets you track your happiness and general satisfaction with life over time. You can give each day a score from 1 to 1000 and write a short description about it, as well as what you feel looking back on how you spent it. It also has a goal/habit tracking option where you can set how frequently you perform the task and assigns a streak based on how many days you\u2019ve been able to keep it up. It is currently available on the PlayStore and may launch on the App Store based on how much free time I get.",description:"A cross-platform Journaling App published to the Google Play Store.",body2:"Introspekt\u2019s front-end and UI is built with Flutter, Google\u2019s cross-platform framework and written in Dart. The back-end is a No-SQL database in FireStore. Google\u2019s fuchsia OS is starting to make an appearance in products so I believe there\u2019s a future for Flutter yet. Since this was my first app, most of the logic and computation happens in the front-end on-device.\n\n    The backend comes into play as part of an optional sync-across-devices feature which allows the user to sync their data and journal entries across all of their devices. This was easily the most interesting part of the app. I was paranoid about security so despite the HTTPS connection between the device and Firestore, I also implemented symmetric AES (Advanced Encryption Standard) encryption on-device. This meant that the data was encrypted with AES on-device and only then sent to the cloud. When the second device retrieved it from the cloud this information was decrypted. This also meant that I couldn\u2019t read any of the data which was a comfort because I didn\u2019t want to breach anyone\u2019s privacy. Another interesting feature I implemented was a \u2018Delete Account\u2019 feature. This may seem trivial and you may think that all it would take was deleting the user from Firebase Auth and Firestore but it proved tricky because the process occasionally failed midway. This was dangerous because if you just retried it, it would fail because part of the account would have been deleted so it wouldn't be able to find the account. So I wrote some code to store where it failed so instead of displaying an annoying \u2018Something went wrong\u2019 or \u2018Try Again Later\u2019 message, I could atleast tell them what percentage of the process had been completed and start from there next time. \n\n Overall, it was the most interesting project I\u2019ve worked on to-date and it really broadened my horizons with respect to apps, encryption and building a production worthy application.",slideshow:[{image:"ipage1.png",caption:"Calendar Page",key:1},{image:"ipage2.png",caption:"Goals Page",key:2},{image:"ipage3.png",caption:"Charts Page",key:3},{image:"ipage4.png",caption:"Settings Page",key:4}],author:"Ashish Selvaraj",links:[{link:"https://play.google.com/store/apps/details?id=introspekt.app",caption:"Get it on the Play Store!"}],tags:["App","Flutter","Dart","Firebase","FireStore","Cloud Functions","AdMob","Sync-Across-Devices"],id:1},{title:"Productivity Extension",uid:"ductivitypro",thumbnail:"images/dpext3.png",body1:"A productivity extension that helps you stay on-track in a world of increasingly good recommendation algorithms. The user sets the amount of time they want to spend on a page and once that time is up the page gets tilted to a default of 20\u02da(the angle of the tilt can be set in the settings) to force you to wake up and stop spending more time than you should be. You can also enable \u2018Close Tab on Alarm ring\u2019 which does exactly what it sounds like. This was my first \u2018pandemic project\u2019 and was inspired by the many distractions that surround us in the work from home lifestyle.",description:"A productivity browser extension for Chrome and Firefox.",body2:"This was my first extension and there was a bit of a learning curve but I enjoyed building it. It was something I wanted for myself and to be able to just build the things you need is a pretty liberating feeling. \n\n One of the interesting parts of this project was choosing an open-source license. Though leading legal documents is far less interesting than writing code, it\u2019s a necessary part of writing open-source software. \n\nThe full list of features is available on the installation page and on GitHub. The extension works on both Chrome and Firefox and links to install them are below:",slideshow:[{image:"dpext1.png",caption:"Set a Timer",key:1},{image:"dpext2.png",caption:"Timer in Progress",key:2},{image:"dpext3.png",caption:"Timer Has Rung",key:3},{image:"dpext4.png",caption:"Settings Page",key:4}],author:"Ashish Selvaraj",links:[{link:"https://addons.mozilla.org/en-US/firefox/addon/ductivitypro/",caption:"Check it out on the Firefox store!"},{link:"https://chrome.google.com/webstore/detail/ductivitypro/ldmdmicajobgfjllgmmcifkmgpohkpji",caption:"Get it on the Chrome Web Store!"}],tags:["Browser Extension","JavaScript","HTML","CSS","Chrome","Firefox"],id:2},{title:"AshishSelvaraj.com",uid:"this",thumbnail:"images/newdesign.png",description:"The website you're looking at right now.",body1:"This website is a place where I can showcase the things I build and talk about the things I am passionate about. I initially built this with plain HTML, CSS, JavaScript because I liked the simplicity and enjoyed seeing how fast the website loaded. However, I recently rewrote it with React, and it\u2019s probably one of the best decisions I\u2019ve made. It allows me to just add posts as a JSON object and write the JSX syntax for a single post. React can then generate the rest on the fly with the power of JavaScript. ",body2:"This is also amazing because in the future it\u2019ll be really simple to set up a REST API and use fetch to get posts from an external database. It\u2019s also a really clean solution and I can avoid ridiculous amounts of DOM manipulation.\n\nReact Implementation: I set up a Post component and each post is generated as one of those, I then used the useState hook to show/hide posts as needed and also implemented the image carousel with useState. \nCSS: I was initially using Flexbox but I learned how to use CSS Grid and it made things really really simple. The way grid template areas let me layout designs is simply \u2728 magical \u2728. \n\nRewriting all the DOM manipulation seemed like it would be a drag but I actually really enjoyed playing with React. Would recommend React 10/10! ",slideshow:[{image:"websitestats.png",caption:"Lighthouse Stats for AshishSelvaraj.com",key:1}],author:"Ashish Selvaraj",links:null,tags:["Website","React","JavaScript","HTML","CSS"],id:3},{title:"H to O",uid:"htoo",thumbnail:"images/flutterx.jpg",body1:"I attended three online hackathons over the summer and I built H to O for one of them: \nThe idea behind this was to create an app that would allow you to create a shopping list of the items you need and then show you the store that was closest to you and had the items you wanted. I used the Google Maps API to create the map and add the markers which showed each location. When you tap the description it takes you to a Google Maps page with the directions to the store. I also pulled data from our Firestore database and updated the maps accordingly. Any change in the inventory of the store can be quickly reflected in the map. This was a really fun project for me because I got to learn how to use the Google Maps API which I hadn't used before.",description:"A hackathon project for periods of scarcity that connects people who need items with places that have it.",body2:"We used the Google Maps API to show the locations, and populated the map with data from FireStore a NoSQL database which stored the list of stores and their inventory.",slideshow:null,author:"Ashish Selvaraj",links:[{link:"https://devpost.com/software/h-to-o",caption:"Devpost Link"}],tags:["App","Flutter","Dart","FireStore","Firebase"],id:4},{title:"Fireball - A Python Game",uid:"fireball",thumbnail:"images/pr1.png",body1:"This project is one of my favorites and one that I had a lot of fun making. Its an obstacle avoidace game but instead of going on infinitely like the others, it has two levels and a boss fight.",description:"A game built with the Python library Pygame.",body2:"I made this game using pygame the python library. I wanted to make a game that was 100% mine and even drew the art myself on piskelapp. Only the music files aren't mine, all sources are listed in the code. The highscore is stored in a seprate text file that the program writes to so that it remembers your high score. The game has two levels, with the second one being the bossfight. The boss fight has a moving enemy that shoots projectiles. The user can also attack the enemy when his charge gets restored.",slideshow:[{image:"pr2.png",caption:"Level 1",key:1},{image:"pr1.png",caption:"Level 2",key:2}],author:"Ashish Selvaraj",links:null,tags:["Game","Python","Pygame"],id:5},{title:"SimpleEMS - A GUI Java Application",uid:"simple",thumbnail:"images/ems1.png",body1:null,description:"A GUI Java Employee Management System.",body2:"I have also built an Employee Management System as a school assignment. It's a Swing GUI application written in Java on Netbeans. It is designed as Enterprise software and has functions to add employees, edit employee information, see all employees and remove employees.",slideshow:[{image:"ems1.png",caption:"Main Page",key:1},{image:"ems2.png",caption:"Add an Employee",key:2},{image:"ems3.png",caption:"Show all Employees",key:3}],author:"Ashish Selvaraj",links:null,tags:["Java","Swing","GUI","Desktop"],id:6},{title:"Android Timer Application",uid:"timerapp",thumbnail:"images/anapp1.jpg",body1:null,description:"A Stopwatch, Timer and Pomodoro app for Android written in Java.",body2:"I wanted to build a productivity app which could time me and store the total time I study each day. Currently the app has three modes: stopwatch, pomodoro and timer. As of now it doesn't store total time but that's something I plan on adding. The app has a modular design so that I can keep adding features as I get time. I usually build tools that I need. My first productivity tool was called Ashish Life Solutions and it was a simple Apple script that ran in the background and reminded me to take an eyebreak with a notification every 10 minutes. I built it because I couldn't find any free MacOS apps that simply reminded me to take an eyebreak every few minutes.",slideshow:[{image:"anapp1.jpg",caption:"Home Screen",key:1},{image:"anapp2.jpg",caption:"Timer Running",key:2}],author:"Ashish Selvaraj",links:null,tags:["App","Android","Java"],id:7},{title:"UIKit iOS Template",uid:"uikit",thumbnail:"images/app1.png",body1:null,description:"An iOS app with Login/Signup connected to Firebase.",body2:"I built this app so that I could learn how to integrate Firebase into apps and try my hand at building iOS apps. This is most useful as a quick template so that you don't waste any time on login/signup since the basis of that is always the same. You can add your own styles or customization as needed. Do note that you need to add your own info.plist and if you're connecting it to Firebase, the Google Services plist.",slideshow:[{image:"app1.png",caption:"Sign Up",key:1},{image:"app2.png",caption:"Login",key:2}],author:"Ashish Selvaraj",links:null,tags:["App","iOS","Swift","UIKit"],id:8}]}},[[15,1,2]]]);
//# sourceMappingURL=main.1750235d.chunk.js.map