(this.webpackJsonpashishselvaraj=this.webpackJsonpashishselvaraj||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(5),o=a.n(s),r=(a(11),a(0)),c=function(){return Object(r.jsxs)("section",{className:"about-card",children:[Object(r.jsx)("p",{className:"section-header",children:"About Me"}),Object(r.jsx)("img",{src:"images/avatar.png",className:"avatar",alt:"Avatar Image"}),Object(r.jsxs)("section",{className:"about-details",children:[Object(r.jsxs)("p",{className:"about-details-header",children:["Passionate about writing Software",Object(r.jsx)("br",{})," and Building Projects."]}),Object(r.jsxs)("ul",{className:"small-tags",children:[Object(r.jsx)("li",{children:"Algorithms"}),Object(r.jsx)("li",{children:"Math"}),Object(r.jsx)("li",{children:"Python"}),Object(r.jsx)("li",{children:"Java"}),Object(r.jsx)("li",{children:"App Development"})]}),Object(r.jsx)("p",{className:"about-details-header",children:"Favorite Books:"}),Object(r.jsxs)("p",{className:"div",children:[Object(r.jsx)("i",{className:"fa fa-book"})," Lord of the Rings, Harry Potter, Redwall"]}),Object(r.jsx)("p",{className:"about-details-header",children:"Hobbies:"}),Object(r.jsxs)("p",{className:"div",children:[Object(r.jsx)("i",{className:"fa fa-chess"})," Chess, Guitar, Skateboarding, bicycling"]})]}),Object(r.jsxs)("section",{className:"links",children:[Object(r.jsx)("button",{className:"about-button",onClick:function(){return window.open("https://github.com/SaurontheMighty/","_blank")},children:Object(r.jsx)("img",{className:"abt-btn-img",src:"images/githublogo.png",alt:"GitHub Logo"})}),Object(r.jsx)("button",{className:"about-button",onClick:function(){return window.open("https://www.linkedin.com/in/ashish-selvaraj/","_blank")},children:Object(r.jsx)("img",{className:"abt-btn-img",src:"images/linkedinlogo.png",alt:"LinkedIn Logo"})}),Object(r.jsx)("button",{className:"about-button",onClick:function(){return window.open("https://devpost.com/yesashishs","_blank")},children:Object(r.jsx)("img",{className:"abt-btn-img",src:"images/hacklogo.png",alt:"Hackathons"})})]})]})},l=function(){return Object(r.jsx)("section",{className:"aside",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"University of Waterloo"}),Object(r.jsx)("p",{children:"Computer Science & Business Double Degree"}),Object(r.jsx)("p",{children:"Graduation: August 2025"})]})})},h=function(){return Object(r.jsx)("footer",{children:Object(r.jsx)("p",{children:"Made with HTML, CSS, JavaScript and React by Ashish."})})},d=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("h1",{children:"Ashish Selvaraj"})})},u=a(2),p=a(6),m=function(e){var t=e.post,a=e.setSearch,n=Object(p.useMediaQuery)({query:"(max-width: 760px)"}),s=Object(i.useState)(1),o=Object(u.a)(s,2),c=o[0],l=o[1],h=Object(i.useState)(!1),d=Object(u.a)(h,2),m=d[0],b=d[1],g=0;t.slideshow&&(g=t.slideshow.length);var j=n&&"this"===t.uid?"images/newmobile.png":t.thumbnail;return Object(r.jsxs)("section",{className:"post",children:[Object(r.jsxs)("section",{className:"postcol",children:[Object(r.jsxs)("article",{children:[Object(r.jsx)("h4",{children:t.title}),Object(r.jsx)("p",{children:t.description}),!m&&Object(r.jsx)("p",{className:"readmore",id:t.uid+"readmore",onClick:function(){return b(!0)},children:"Read"})]}),Object(r.jsx)("section",{children:Object(r.jsx)("p",{children:Object(r.jsx)("img",{src:j,className:"postpicapp",alt:"Post Thumbnail"})})})]}),m&&Object(r.jsxs)("article",{id:t.uid,children:[t.body1&&Object(r.jsx)("p",{className:"more",children:t.body1}),t.slideshow&&Object(r.jsxs)("div",{className:"slideshow-container",children:[t.slideshow.map((function(e){return Object(r.jsxs)("div",{className:e.key==c?"":"hidden",children:[Object(r.jsx)("p",{children:e.caption}),Object(r.jsx)("div",{style:{textAlign:"center"},children:Object(r.jsx)("img",{src:"images/"+e.image,className:"slide-img",style:{width:"30%"},alt:e.caption})}),Object(r.jsx)("br",{})]},e.key)})),Object(r.jsx)("a",{className:"prev",onClick:function(){l(1!=c?c-1:g)},children:"\u276e"}),Object(r.jsx)("a",{className:"next",onClick:function(){l(c!=g?c+1:1)},children:"\u276f"}),Object(r.jsx)("section",{style:{textAlign:"center"},children:t.slideshow.map((function(e){return Object(r.jsx)("span",{className:e.key==c?"dot active-dot":"dot"})}))})]}),Object(r.jsx)("p",{className:"more",children:t.body2}),t.links&&t.links.map((function(e){return Object(r.jsx)("p",{class:"more",children:Object(r.jsx)("a",{id:"more",href:e.link,target:"_blank",rel:"noopener",children:e.caption})})})),m&&Object(r.jsx)("p",{onClick:function(){return b(!1)},style:{fontSize:"smaller"},className:"readmore",id:t.uid+"readmore",children:"Show Less"})]}),Object(r.jsx)("ul",{className:"tags",children:t.tags.map((function(e){return Object(r.jsx)("li",{onClick:function(){return a(e)},children:e})}))})]},t.key)},b=function(){var e=a(4),t=Object(i.useState)(a(4)),n=Object(u.a)(t,2),s=n[0],o=n[1],c=Object(i.useState)(""),l=Object(u.a)(c,2),h=l[0],d=l[1],p=Object(i.useState)(!1),b=Object(u.a)(p,2),g=b[0],j=b[1],y=Object(i.useState)(!1),f=Object(u.a)(y,2),w=f[0],x=f[1],k=function(){if(""!==h){j(!1);var t=e.filter((function(e){var t=0;return e.tags.map((function(e){e.toLowerCase().includes(h.toLowerCase())&&(t=1),h.toLowerCase().includes(e.toLowerCase())&&(t=1)})),1===t}));console.log(h),console.log(t),0===t.length&&(j(!0),console.log(g)),o(t),x(!0)}};return Object(i.useEffect)((function(){k()}),[h]),Object(r.jsxs)("section",{className:"main-card",children:[Object(r.jsx)("p",{className:"section-header",children:"Posts"}),Object(r.jsx)("section",{children:Object(r.jsxs)("form",{onSubmit:k,children:[Object(r.jsx)("input",{type:"text",placeholder:"Search by Title or Technology",className:"search-card",value:h,onChange:function(e){return d(e.target.value)}}),Object(r.jsx)("button",{"aria-label":"Search all the Posts on the Page",type:"submit",className:"search-button",id:"search-button",children:"\ud83d\udd0d"})]})}),Object(r.jsxs)("section",{className:"search-tags",children:[Object(r.jsx)("li",{onClick:function(e){return d("website")},children:"Websites"}),Object(r.jsx)("li",{onClick:function(e){return d("ios app")},children:"iOS"}),Object(r.jsx)("li",{onClick:function(e){return d("android app")},children:"Android"}),Object(r.jsx)("li",{onClick:function(e){return d("extension")},children:"Browser Extensions"}),Object(r.jsx)("li",{onClick:function(e){return d("React")},children:"React"}),Object(r.jsx)("li",{onClick:function(e){return d("Node.js")},children:"Node.js"}),Object(r.jsx)("li",{onClick:function(e){return d("JavaScript")},children:"JavaScript"}),Object(r.jsx)("li",{onClick:function(e){return d("Python")},children:"Python"}),Object(r.jsx)("li",{onClick:function(e){return d("Java")},children:"Java"}),Object(r.jsx)("li",{onClick:function(e){return d("Cloud")},children:"Cloud"})]}),Object(r.jsx)("br",{}),g&&Object(r.jsx)("div",{children:Object(r.jsx)("section",{className:"about-card",id:"test",children:Object(r.jsx)("p",{children:"Sorry, no posts were found!"})})}),s.map((function(e){return Object(r.jsx)(m,{post:e,setSearch:d})})),w&&Object(r.jsx)("button",{type:"submit",className:"back-button",id:"back-button",onClick:function(){x(!1),o(e),d("")},children:"Back"})]})},g=function(){return Object(r.jsxs)("main",{children:[Object(r.jsx)(c,{}),Object(r.jsx)(b,{}),Object(r.jsx)(l,{})]})};var j=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{}),Object(r.jsx)(g,{}),Object(r.jsx)(h,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),i(e),n(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),y()},4:function(e,t){e.exports=[{title:"Introspekt",uid:"introspekt",thumbnail:"images/ipagex.png",body1:"I've been working on this project for about three months and I've learnt a lot in the process. Intropspekt is a journaling and happiness app built with the Flutter framework and the Dart language. The app was a complete project with the frontend in Flutter and the backend which was a Firestore database and some cloud functions.        ",description:"A cross-platform Journaling App",body2:"Introspekt is an app where you can record how your day was and interesting thoughts about each day. The Charts tab shows you how your week, month or year was in a graph. It also tracks your goals and the frequency with which you want to work on them. I used Firebase Firestore as the database and implemented security rules and cloud functions to secure it. I also implemented AES encryption to encrypt the text before it left the user's device to ensure that even database admins couldn't see any user data.\nThere were several very interesting aspects to this project: the technical, the marketing and the strategy. When I started this project, I had never made an app and never used Flutter, over the course of building it I got pretty comfortable with the framework and with Dart. The most interesting part was probably the database. \n\nI wrote an algorithm to push user data to the cloud and pull data from it. I had to think about all the use cases, like if someone had some data already on device which was newer than the data in the cloud, the data from the cloud should not erase it and so on. I also had to account for what  would happen if it failed midway because the internet blinked or someother reason and also incorporate options to delete all the user's data from the database for example if they no longer wanted to use the app. No matter how great a project, it's of little use unless people use it and so I set about marketing  this project. My main avenue of marketing was Reddit, I posted about it on a few subreddits where I got a lot of positive feedback and a lot of people seemed interested in it. Now, the app has over 50 users which is pretty exciting for me. Overall this was a really interesting project and building a production app is a really great learning experience.",slideshow:[{image:"ipage1.png",caption:"Calendar Page",key:1},{image:"ipage2.png",caption:"Goals Page",key:2},{image:"ipage3.png",caption:"Charts Page",key:3},{image:"ipage4.png",caption:"Settings Page",key:4}],author:"Ashish Selvaraj",links:[{link:"https://play.google.com/store/apps/details?id=introspekt.app",caption:"Get it on the Play Store!"}],tags:["App","Flutter","Dart","Firebase","FireStore","Cloud Functions","AdMob","Sync-Across-Devices"],id:1},{title:"Productivity Extension",uid:"ductivitypro",thumbnail:"images/dpext3.png",body1:"With the pandemic, most of us are home and I thought this would be the perfect time to build a productivity extension. With recommendation algorithms getting better and better its often really easy to spend far more time on website than you wanted to, this is what inspired me to build ductivityPRO(pro-ductivity).\n\nOnce you install the extension, you'll notice its icon in the toolbar. Clicking this opens up its popup where you can set the amount of time that you want to be on that page. Once this time is over, the extension notifies you and tilts the page preventing you from spending any more time on it. The amount of tilt and the width of the border is fully customizable (both can be set to zero) and can be set from the preferences menu. This can be accessed by clicking the settings icon on the top right hand corner of the popup. Once a timer is set, you can click on the toolbar icon to check how much time is left.",description:"A productivity browser extension for Chrome and Firefox.",body2:"Another feature is 'disable polymer' which can be enabled from the options menu. With YouTube's (relatively) new polymer design, you can't go back into full screen mode once the alarm rings. Once you enable this feature, the extension reverts YouTube to it's old design whenever it detects that you're watching a video. But if you're using this to curb your binge watching addiction you may want to leave YouTube as is.\n\nIn order to put it on addons.mozilla.org, I had to choose a license. This was a really good learning experience because I learned about all the open source licenses and the pros and cons of each one. This is the important but less exciting part of building projects.\n\nI built a version for Google Chrome as well as Firefox. It was a really interesting process to learn how each platform differed. The current source code on Github has all the features and will work for both platforms.\n\nThe full feature list is on GitHub and in the details on the installation page.",slideshow:[{image:"dpext1.png",caption:"Set a Timer",key:1},{image:"dpext2.png",caption:"Timer in Progress",key:2},{image:"dpext3.png",caption:"Timer Has Rung",key:3},{image:"dpext4.png",caption:"Settings Page",key:4}],author:"Ashish Selvaraj",links:[{link:"https://addons.mozilla.org/en-US/firefox/addon/ductivitypro/",caption:"Check it out on the Firefox store!"},{link:"https://chrome.google.com/webstore/detail/ductivitypro/ldmdmicajobgfjllgmmcifkmgpohkpji",caption:"Get it on the Chrome Web Store!"}],tags:["Browser Extension","JavaScript","HTML","CSS","Chrome","Firefox"],id:2},{title:"AshishSelvaraj.com",uid:"this",thumbnail:"images/newdesign.png",description:"The website you're looking at right now",body1:"This website is a place where I can showcase the things I build and talk about the things I am passionate about. I initially built this with plain HTML, CSS, JavaScript because I liked the simplicity and enjoyed seeing how fast the website loaded. However, recently I rewrote the JavaScript to use React, and it\u2019s probably one of the best decisions I\u2019ve made. It allows me to just add posts as a JSON object and write the JSX syntax for a single post. React can then generate the rest on the fly with the power of JavaScript. ",body2:"This is also amazing because in the future it\u2019ll be really simple to set up a REST API and use fetch to get posts from an external database. It\u2019s also a really clean solution and I can avoid ridiculous amounts of DOM manipulation.\n\nReact Implementation: I set up a Post component and each post is generated as one of those, I then used the useState hook to show/hide posts as needed and also implemented the image carousel with useState. \nCSS: I was initially using Flexbox but I learned how to use CSS Grid and it made things really really simple. The way grid template areas let me layout designs is simply \u2728 magical \u2728. \n\nRewriting all the DOM manipulation seemed like it would be a drag but I actually really enjoyed playing with React. Would recommend React 10/10! ",slideshow:null,author:"Ashish Selvaraj",links:null,tags:["Website","React","JavaScript","HTML","CSS"],id:3},{title:"H to O",uid:"htoo",thumbnail:"images/flutterx.jpg",body1:"I attended three online hackathons over the summer and I built H to O for one of them: \nThe idea behind this was to create an app that would allow you to create a shopping list of the items you need and then show you the store that was closest to you and had the items you wanted. I used the Google Maps API to create the map and add the markers which showed each location. When you tap the description it takes you to a Google Maps page with the directions to the store. I also pulled data from our Firestore database and updated the maps accordingly. Any change in the inventory of the store can be quickly reflected in the map. This was a really fun project for me because I got to learn how to use the Google Maps API which I hadn't used before.",description:"A hackathon project for periods of scarcity that connects people who need items with places that have it.",body2:"We used the Google Maps API to show the locations, and populated the map with data from FireStore a NoSQL database which stored the list of stores and their inventory.",slideshow:null,author:"Ashish Selvaraj",links:[{link:"https://devpost.com/software/h-to-o",caption:"Devpost Link"}],tags:["App","Flutter","Dart","FireStore","Firebase"],id:4},{title:"Fireball - A Python Game",uid:"fireball",thumbnail:"images/pr1.png",body1:"This project is one of my favorites and one that I had a lot of fun making. Its an obstacle avoidace game but instead of going on infinitely like the others, it has two levels and a boss fight.",description:"A game built with the Python library Pygame.",body2:"I made this game using pygame the python library. I wanted to make a game that was 100% mine and even drew the art myself on piskelapp. Only the music files aren't mine, all sources are listed in the code. The highscore is stored in a seprate text file that the program writes to so that it remembers your high score. The game has two levels, with the second one being the bossfight. The boss fight has a moving enemy that shoots projectiles. The user can also attack the enemy when his charge gets restored.",slideshow:[{image:"pr2.png",caption:"Level 1",key:1},{image:"pr1.png",caption:"Level 2",key:2}],author:"Ashish Selvaraj",links:null,tags:["Game","Python","Pygame"],id:5},{title:"SimpleEMS - A GUI Java Application",uid:"simple",thumbnail:"images/ems1.png",body1:null,description:"A GUI Java Employee Management System.",body2:"I have also built an Employee Management System as a school assignment. It's a Swing GUI application written in Java on Netbeans. It is designed as Enterprise software and has functions to add employees, edit employee information, see all employees and remove employees.",slideshow:[{image:"ems1.png",caption:"Main Page",key:1},{image:"ems2.png",caption:"Add an Employee",key:2},{image:"ems3.png",caption:"Show all Employees",key:3}],author:"Ashish Selvaraj",links:null,tags:["Java","Swing","GUI","Desktop"],id:6},{title:"Android Timer Application",uid:"timerapp",thumbnail:"images/anapp1.jpg",body1:null,description:"A Stopwatch, Timer and Pomodoro app for Android written in Java.",body2:"I wanted to build a productivity app which could time me and store the total time I study each day. Currently the app has three modes: stopwatch, pomodoro and timer. As of now it doesn't store total time but that's something I plan on adding. The app has a modular design so that I can keep adding features as I get time. I usually build tools that I need. My first productivity tool was called Ashish Life Solutions and it was a simple Apple script that ran in the background and reminded me to take an eyebreak with a notification every 10 minutes. I built it because I couldn't find any free MacOS apps that simply reminded me to take an eyebreak every few minutes.",slideshow:[{image:"anapp1.jpg",caption:"Home Screen",key:1},{image:"anapp2.jpg",caption:"Timer Running",key:2}],author:"Ashish Selvaraj",links:null,tags:["App","Android","Java"],id:7},{title:"UIKit iOS Template",uid:"uikit",thumbnail:"images/app1.png",body1:null,description:"An iOS app with Login/Signup connected to Firebase.",body2:"I built this app so that I could learn how to integrate Firebase into apps and try my hand at building iOS apps. This is most useful as a quick template so that you don't waste any time on login/signup since the basis of that is always the same. You can add your own styles or customization as needed. Do note that you need to add your own info.plist and if you're connecting it to Firebase, the Google Services plist.",slideshow:[{image:"app1.png",caption:"Sign Up",key:1},{image:"app2.png",caption:"Login",key:2}],author:"Ashish Selvaraj",links:null,tags:["App","iOS","Swift","UIKit"],id:8}]}},[[13,1,2]]]);
//# sourceMappingURL=main.3874dd62.chunk.js.map