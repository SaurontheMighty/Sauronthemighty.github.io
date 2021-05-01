module.exports = [
    {
        "title": "Introspekt",
        "uid": "introspekt",
        "thumbnail": 'images/ipagex.png',
        "body1": "I've been working on this project for about three months and I've learnt a lot in the process. Intropspekt is a journaling and happiness app built with the Flutter framework and the Dart language. The app was a complete project with the frontend in Flutter and the backend which was a Firestore database and some cloud functions.        ",
        "description": 'A cross-platform Journaling App',
        "body2": "Introspekt is an app where you can record how your day was and interesting thoughts about each day. The Charts tab shows you how your week, month or year was in a graph. It also tracks your goals and the frequency with which you want to work on them. I used Firebase Firestore as the database and implemented security rules and cloud functions to secure it. I also implemented AES encryption to encrypt the text before it left the user's device to ensure that even database admins couldn't see any user data.\nThere were several very interesting aspects to this project: the technical, the marketing and the strategy. When I started this project, I had never made an app and never used Flutter, over the course of building it I got pretty comfortable with the framework and with Dart. The most interesting part was probably the database. \n\nI wrote an algorithm to push user data to the cloud and pull data from it. I had to think about all the use cases, like if someone had some data already on device which was newer than the data in the cloud, the data from the cloud should not erase it and so on. I also had to account for what  would happen if it failed midway because the internet blinked or someother reason and also incorporate options to delete all the user's data from the database for example if they no longer wanted to use the app. No matter how great a project, it's of little use unless people use it and so I set about marketing  this project. My main avenue of marketing was Reddit, I posted about it on a few subreddits where I got a lot of positive feedback and a lot of people seemed interested in it. Now, the app has over 50 users which is pretty exciting for me. Overall this was a really interesting project and building a production app is a really great learning experience.",
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
        "body1": "With the pandemic, most of us are home and I thought this would be the perfect time to build a productivity extension. With recommendation algorithms getting better and better its often really easy to spend far more time on website than you wanted to, this is what inspired me to build ductivityPRO(pro-ductivity).\n\nOnce you install the extension, you'll notice its icon in the toolbar. Clicking this opens up its popup where you can set the amount of time that you want to be on that page. Once this time is over, the extension notifies you and tilts the page preventing you from spending any more time on it. The amount of tilt and the width of the border is fully customizable (both can be set to zero) and can be set from the preferences menu. This can be accessed by clicking the settings icon on the top right hand corner of the popup. Once a timer is set, you can click on the toolbar icon to check how much time is left.",
        "description": 'A productivity browser extension for Chrome and Firefox.',
        "body2": "Another feature is 'disable polymer' which can be enabled from the options menu. With YouTube's (relatively) new polymer design, you can't go back into full screen mode once the alarm rings. Once you enable this feature, the extension reverts YouTube to it's old design whenever it detects that you're watching a video. But if you're using this to curb your binge watching addiction you may want to leave YouTube as is.\n\nIn order to put it on addons.mozilla.org, I had to choose a license. This was a really good learning experience because I learned about all the open source licenses and the pros and cons of each one. This is the important but less exciting part of building projects.\n\nI built a version for Google Chrome as well as Firefox. It was a really interesting process to learn how each platform differed. The current source code on Github has all the features and will work for both platforms.\n\nThe full feature list is on GitHub and in the details on the installation page.",
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
        "description": "The website you're looking at right now",
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
    }
];