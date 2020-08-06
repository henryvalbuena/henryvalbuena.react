const projects = [
    {
        id: 'P01',
        name: 'Udacity Latte Cafe',
        title: 'Full-stack REST application',
        meta: ['Flask', 'SQL-Alchemy', 'Docker', 'Nginx', 'Angular'],
        desc: 'Secure REST full-stack application with persistence',
        detail: 'Designed and developed full-stack application as part of the Udacity Full-Stack Nanodegree. The application whole project includes designing and implementation of the REST API, database models, IAM roles and permissions using Auth0, frontend and backend programming, testing and deployment using Docker containers. The project backend was build using Python Flask web framework, secured using JWT and role based access and permissions to CRUD operations backed up by a ORM persistance model using SQLite for development and Postgress for deployment. The frontend was built with JavaScript Angular and is powered by an Nginx configuration which serves the content.',
        img: 'https://res.cloudinary.com/devhenry/image/upload/v1596577743/Jenova/img/frontend_angular.gif',
        src: 'https://github.com/henryvalbuena/full-stack-project'
    },
    {
        id: 'P02',
        name: 'Latte-Machine',
        title: 'React frontend application',
        meta: ['React.js', 'JavaScript', 'JWT', 'Auth0'],
        desc: 'Frontend remake in React.js of the Udacity Latte Cafe',
        detail: 'This is a frontend remake of the Udacity Latte Cafe full-stack project. I decided that I would use React (the previous was built using Angular) since I am very confortable and I enjoy using this framework better. This application has the same features that the previous one and some design and visual improvements. The application features IAM using Auth0, JWTs, and claims for permissions based on the user role.',
        img: 'https://res.cloudinary.com/devhenry/image/upload/v1596577743/Jenova/img/frontend_react.gif',
        src: 'https://github.com/henryvalbuena/latte-machine'
    },
    {
        id: 'P03',
        name: 'Desktop Web Browser Game',
        title: 'Space Battle',
        meta: ['JavaScript', 'HTML', 'Canvas', 'GPL'],
        desc: 'Space battle game developed using JavaScript',
        detail: '2D web browser game developed using Canvas API, DOM, and JavaScript to render the visuals, design and implement the game logic, and control user interaction. This was one of the projects I was doing while doing #100DaysofCode as part of my personal challenge to learn more things whiles coding. It is not polished, but the way I coded makes it easy to refactor and/or improve. It is the first game I ever created',
        img: 'https://res.cloudinary.com/devhenry/image/upload/v1596578059/Jenova/img/web_space_shooter.gif',
        src: 'https://github.com/henryvalbuena/SpaceBattle'
    },
    {
        id: 'P04',
        name: 'Chat',
        title: 'Terminal Like Chat',
        meta: ['JavaScript', 'CSS', 'Node.js', 'Socket.io', 'Express.js'],
        desc: 'Terminal like chat built with CSS and JavaScript supported by Node.js, Express.js, and Socket.io in the backend',
        detail: 'One room chat app that broadcast messagess among the connected users. It uses Socket.io to manage the web sockets and user identity. This project, will incorporate a built-in bot with commands that will provide information about me, my projects, and skills.',
        img: 'https://res.cloudinary.com/devhenry/image/upload/v1596577743/Jenova/img/chat_20190629.gif',
        src: 'https://github.com/henryvalbuena/chatbot'
    }
]
export default projects;