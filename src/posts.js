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
        "tags": ["Flutter", 'Dart', 'Firebase', 'FireStore', 'Cloud Functions', 'AdMob', 'Sync-Across-Devices'],
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
        "tags": ["Extension", 'JavaScript', 'HTML', 'CSS', 'Chrome', 'Firefox'],
        "id": 2
    },
    {
        "title": "AshishSelvaraj.com",
        "thumbnail": 'images/newdesign.png',
        "description": "The website you're looking at right now",
        "body1": "This website is a place where I can showcase the things I build and talk about the things I am passionate about. I initially built this with plain HTML, CSS, JavaScript because I liked the simplicity and enjoyed seeing how fast the website loaded. However, recently I rewrote the JavaScript to use React, and it’s probably one of the best decisions I’ve made. It allows me to just add posts as a JSON object and write the JSX syntax for a single post. React can then generate the rest on the fly with the power of JavaScript. ",
        "body2": "This is also amazing because in the future it’ll be really simple to set up a REST API and use fetch to get posts from an external database. It’s also a really clean solution and I can avoid ridiculous amounts of DOM manipulation.\n\nReact Implementation: I set up a Post component and each post is generated as one of those, I then used the useState hook to show/hide posts as needed and also implemented the image carousel with useState. \nCSS: I was initially using Flexbox but I learned how to use CSS Grid and it made things really really simple. The way grid template areas let me layout designs is simply ✨ magical ✨. \n\nRewriting all the DOM manipulation seemed like it would be a drag but I actually really enjoyed playing with React. Would recommend React 10/10! ",
        "slideshow": null,
        "author": "Ashish Selvaraj",
        "links": null,
        "tags": ['React', 'JavaScript', 'HTML', 'CSS'],
        "id": 3
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
        "tags": ["Extension", 'JavaScript', 'HTML', 'CSS', 'Chrome', 'Firefox'],
        "id": 4
    }
];