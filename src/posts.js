module.exports = [
    {
        "title": "Introspekt",
        "uid": "introspekt",
        "thumbnail": 'images/ipagex.png',
        "body1": "Introspekt is a cross-platform (iOS & Android) journaling app. Introspekt takes a graphical and data-oriented approach to journaling and lets you track your happiness and general satisfaction with life over time. You can give each day a score from 1 to 1000 and write a short description about it, as well as what you feel looking back on how you spent it. It also has a goal/habit tracking option where you can set how frequently you perform the task and assigns a streak based on how many days you’ve been able to keep it up. It is currently available on the PlayStore and may launch on the App Store based on how much free time I get.",
        "description": 'A cross-platform Journaling App',
        "body2": "Introspekt’s front-end and UI is built with Flutter, Google’s cross-platform framework and written in Dart. The back-end is a No-SQL database in FireStore. Google’s fuchsia OS is starting to make an appearance in products so I believe there’s a future for Flutter yet. Since this was my first app, most of the logic and computation happens in the front-end on-device.\n\n    The backend comes into play as part of an optional sync-across-devices feature which allows the user to sync their data and journal entries across all of their devices. This was easily the most interesting part of the app. I was paranoid about security so despite the HTTPS connection between the device and Firestore, I also implemented symmetric AES (Advanced Encryption Standard) encryption on-device. This meant that the data was encrypted with AES on-device and only then sent to the cloud. When the second device retrieved it from the cloud this information was decrypted. This also meant that I couldn’t read any of the data which was a comfort because I didn’t want to breach anyone’s privacy. Another interesting feature I implemented was a ‘Delete Account’ feature. This may seem trivial and you may think that all it would take was deleting the user from Firebase Auth and Firestore but it proved tricky because the process occasionally failed midway. This was dangerous because if you just retried it, it would fail because part of the account would have been deleted so it wouldn't be able to find the account. So I wrote some code to store where it failed so instead of displaying an annoying ‘Something went wrong’ or ‘Try Again Later’ message, I could atleast tell them what percentage of the process had been completed and start from there next time. \n\n Overall, it was the most interesting project I’ve worked on to-date and it really broadened my horizons with respect to apps, encryption and building a production worthy application.",
        "slideshow": [
            {
                image: "ipage1.png",
                caption: "Calendar Page",
                key: 1
            },
            {
                image: "ipage2.png",
                caption: "Goals Page",
                key: 2
            },
            {
                image: "ipage3.png",
                caption: "Charts Page",
                key: 3
            },
            {
                image: "ipage4.png",
                caption: "Settings Page",
                key: 4
            }
        ],
        "author": "Ashish Selvaraj",
        "links": [{
            link: 'https://play.google.com/store/apps/details?id=introspekt.app',
            caption: "Get it on the Play Store!"
        }],
        "tags": ["App", "Flutter", 'Dart', 'Firebase', 'FireStore', 'Cloud Functions', 'AdMob', 'Sync-Across-Devices'],
        "id": 1
    },
    {
        "title": "Productivity Extension",
        "uid": "ductivitypro",
        "thumbnail": 'images/dpext3.png',
        "body1": "A productivity extension that helps you stay on-track in a world of increasingly good recommendation algorithms. The user sets the amount of time they want to spend on a page and once that time is up the page gets tilted to a default of 20˚(the angle of the tilt can be set in the settings) to force you to wake up and stop spending more time than you should be. You can also enable ‘Close Tab on Alarm ring’ which does exactly what it sounds like. This was my first ‘pandemic project’ and was inspired by the many distractions that surround us in the work from home lifestyle.",
        "description": 'A productivity browser extension for Chrome and Firefox.',
        "body2": "This was my first extension and there was a bit of a learning curve but I enjoyed building it. It was something I wanted for myself and to be able to just build the things you need is a pretty liberating feeling. \n\n One of the interesting parts of this project was choosing an open-source license. Though leading legal documents is far less interesting than writing code, it’s a necessary part of writing open-source software. \n\nThe full list of features is available on the installation page and on GitHub. The extension works on both Chrome and Firefox and links to install them are below:",
        "slideshow": [
            {
                image: "dpext1.png",
                caption: "Set a Timer",
                key: 1
            },
            {
                image: "dpext2.png",
                caption: "Timer in Progress",
                key: 2
            },
            {
                image: "dpext3.png",
                caption: "Timer Has Rung",
                key: 3
            },
            {
                image: "dpext4.png",
                caption: "Settings Page",
                key: 4
            }
        ],
        "author": "Ashish Selvaraj",
        "links": [{
            link: 'https://addons.mozilla.org/en-US/firefox/addon/ductivitypro/',
            caption: "Check it out on the Firefox store!"
        },
        {
            link: 'https://chrome.google.com/webstore/detail/ductivitypro/ldmdmicajobgfjllgmmcifkmgpohkpji',
            caption: "Get it on the Chrome Web Store!"
        }],
        "tags": ["Browser Extension", 'JavaScript', 'HTML', 'CSS', 'Chrome', 'Firefox'],
        "id": 2
    },
    {
        "title": "AshishSelvaraj.com",
        "uid": "this",
        "thumbnail": 'images/newdesign.png',
        "description": "The website you're looking at right now.",
        "body1": "This website is a place where I can showcase the things I build and talk about the things I am passionate about. I initially built this with plain HTML, CSS, JavaScript because I liked the simplicity and enjoyed seeing how fast the website loaded. However, recently I rewrote the JavaScript to use React, and it’s probably one of the best decisions I’ve made. It allows me to just add posts as a JSON object and write the JSX syntax for a single post. React can then generate the rest on the fly with the power of JavaScript. ",
        "body2": "This is also amazing because in the future it’ll be really simple to set up a REST API and use fetch to get posts from an external database. It’s also a really clean solution and I can avoid ridiculous amounts of DOM manipulation.\n\nReact Implementation: I set up a Post component and each post is generated as one of those, I then used the useState hook to show/hide posts as needed and also implemented the image carousel with useState. \nCSS: I was initially using Flexbox but I learned how to use CSS Grid and it made things really really simple. The way grid template areas let me layout designs is simply ✨ magical ✨. \n\nRewriting all the DOM manipulation seemed like it would be a drag but I actually really enjoyed playing with React. Would recommend React 10/10! ",
        "slideshow": null,
        "author": "Ashish Selvaraj",
        "links": null,
        "tags": ['Website', 'React', 'JavaScript', 'HTML', 'CSS'],
        "id": 3
    },
    {
        "title": "H to O",
        "uid": "htoo",
        "thumbnail": 'images/flutterx.jpg',
        "body1": "I attended three online hackathons over the summer and I built H to O for one of them: \nThe idea behind this was to create an app that would allow you to create a shopping list of the items you need and then show you the store that was closest to you and had the items you wanted. I used the Google Maps API to create the map and add the markers which showed each location. When you tap the description it takes you to a Google Maps page with the directions to the store. I also pulled data from our Firestore database and updated the maps accordingly. Any change in the inventory of the store can be quickly reflected in the map. This was a really fun project for me because I got to learn how to use the Google Maps API which I hadn't used before.",
        "description": 'A hackathon project for periods of scarcity that connects people who need items with places that have it.',
        "body2": "We used the Google Maps API to show the locations, and populated the map with data from FireStore a NoSQL database which stored the list of stores and their inventory.",
        "slideshow": null,
        "author": "Ashish Selvaraj",
        "links": [{
            link: 'https://devpost.com/software/h-to-o',
            caption: "Devpost Link"
        }],
        "tags": ["App", 'Flutter', 'Dart', 'FireStore', 'Firebase'],
        "id": 4
    },
    {
        "title": "Fireball - A Python Game",
        "uid": "fireball",
        "thumbnail": 'images/pr1.png',
        "body1": "This project is one of my favorites and one that I had a lot of fun making. Its an obstacle avoidace game but instead of going on infinitely like the others, it has two levels and a boss fight.",
        "description": 'A game built with the Python library Pygame.',
        "body2": "I made this game using pygame the python library. I wanted to make a game that was 100% mine and even drew the art myself on piskelapp. Only the music files aren't mine, all sources are listed in the code. The highscore is stored in a seprate text file that the program writes to so that it remembers your high score. The game has two levels, with the second one being the bossfight. The boss fight has a moving enemy that shoots projectiles. The user can also attack the enemy when his charge gets restored.",
        "slideshow": [
            {
                image: "pr2.png",
                caption: "Level 1",
                key: 1
            },
            {
                image: "pr1.png",
                caption: "Level 2",
                key: 2
            }
        ],
        "author": "Ashish Selvaraj",
        "links": null,
        "tags": ["Game", 'Python', 'Pygame'],
        "id": 5
    },
    {
        "title": "SimpleEMS - A GUI Java Application",
        "uid": "simple",
        "thumbnail": 'images/ems1.png',
        "body1": null,
        "description": 'A GUI Java Employee Management System.',
        "body2": "I have also built an Employee Management System as a school assignment. It's a Swing GUI application written in Java on Netbeans. It is designed as Enterprise software and has functions to add employees, edit employee information, see all employees and remove employees.",
        "slideshow": [
            {
                image: "ems1.png",
                caption: "Main Page",
                key: 1
            },
            {
                image: "ems2.png",
                caption: "Add an Employee",
                key: 2
            },
            {
                image: "ems3.png",
                caption: "Show all Employees",
                key: 3
            }
        ],
        "author": "Ashish Selvaraj",
        "links": null,
        "tags": ["Java", 'Swing', 'GUI', 'Desktop'],
        "id": 6
    },
    {
        "title": "Android Timer Application",
        "uid": "timerapp",
        "thumbnail": 'images/anapp1.jpg',
        "body1": null,
        "description": 'A Stopwatch, Timer and Pomodoro app for Android written in Java.',
        "body2": "I wanted to build a productivity app which could time me and store the total time I study each day. Currently the app has three modes: stopwatch, pomodoro and timer. As of now it doesn't store total time but that's something I plan on adding. The app has a modular design so that I can keep adding features as I get time. I usually build tools that I need. My first productivity tool was called Ashish Life Solutions and it was a simple Apple script that ran in the background and reminded me to take an eyebreak with a notification every 10 minutes. I built it because I couldn't find any free MacOS apps that simply reminded me to take an eyebreak every few minutes.",
        "slideshow": [
            {
                image: "anapp1.jpg",
                caption: "Home Screen",
                key: 1
            },
            {
                image: "anapp2.jpg",
                caption: "Timer Running",
                key: 2
            }
        ],
        "author": "Ashish Selvaraj",
        "links": null,
        "tags": ["App", 'Android', 'Java'],
        "id": 7
    },
    {
        "title": "UIKit iOS Template",
        "uid": "uikit",
        "thumbnail": 'images/app1.png',
        "body1": null,
        "description": 'An iOS app with Login/Signup connected to Firebase.',
        "body2": "I built this app so that I could learn how to integrate Firebase into apps and try my hand at building iOS apps. This is most useful as a quick template so that you don't waste any time on login/signup since the basis of that is always the same. You can add your own styles or customization as needed. Do note that you need to add your own info.plist and if you're connecting it to Firebase, the Google Services plist.",
        "slideshow": [
            {
                image: "app1.png",
                caption: "Sign Up",
                key: 1
            },
            {
                image: "app2.png",
                caption: "Login",
                key: 2
            }
        ],
        "author": "Ashish Selvaraj",
        "links": null,
        "tags": ["App", 'iOS', 'Swift', 'UIKit'],
        "id": 8
    }
];