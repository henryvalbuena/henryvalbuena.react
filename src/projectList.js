const projects = [
    {
        id: 'P01',
        name: 'The Mother-ship',
        title: 'RESTful API backend server',
        meta: ['Django', 'Rest-Framework', 'Docker', 'EB', 'PostgreSQL'],
        desc: 'Secure RESTful API to server frontend applications',
        detail: 'Designed and developed a complete RESTful API with complete test coverage, admin access, user login, JWT. Provides frontend apps with the necessary endpoints to perform CRUD operations. Right now, the API powers the frontend app from my portfolio, including this website. Is still going through a lot of improvements, such a complete API documentation and security updates.',
        img: './img/api-img.png',
        src: 'https://github.com/henryvalbuena/the-mother-ship'
    },
    {
        id: 'P02',
        name: 'Java Desktop Application',
        title: 'Maze Solver',
        meta: ['Java', 'DSA', 'DFS', 'API'],
        desc: 'Maze solver application developed using Java',
        detail: 'Designed to work with images of mazes, the idea is to process the image and parse the binary representation of the maze into a data structure. From this point, the graph algorithm to be used can work with the data and find the path from the start point to the exit. There is another module, which will process the result from the algorithm and draw the path found on the image from start to end.',
        img: './img/maze04_finished.png',
        src: 'https://github.com/henryvalbuena/MazeSolver'
    },
    {
        id: 'P03',
        name: 'Client-Server API',
        title: 'Remote Manager',
        meta: ['JavaScript', 'Node.js', 'C', 'C++', 'Linux', 'Shell Scripting'],
        desc: 'Client side developed using C/C++ and Server side using Node.js, JavaScript and Shell Scripting',
        detail: 'This application is based on two parts, the client and the server. The client, consist of a C/C++ application which encloses all the relevant processes to be able to: 1) connect with the server 2) to send and receive data 3) to work with the data or state of the server. The server is a combination of Node.js, JavaScript and Shell Scripts using Node\'s API',
        img: './img/client_server.png',
        src: 'https://github.com/henryvalbuena/cpp_nodejs_sockets'
    },
    {
        id: 'P04',
        name: 'Desktop Web Browser Game',
        title: 'Space Battle',
        meta: ['JavaScript', 'HTML', 'Canvas', 'GPL'],
        desc: 'Space battle game developed using JavaScript',
        detail: '2D web browser game developed using Canvas API, DOM, and JavaScript to render the visuals, design and implement the game logic, and control user interaction. This was one of the projects I was doing while doing #100DaysofCode as part of my personal challenge to learn more things whiles coding. It is not polished, but the way I coded makes it easy to refactor and/or improve. It is the first game I ever created',
        img: './img/ran-image-d23.gif',
        src: 'https://github.com/henryvalbuena/SpaceBattle'
    },
    {
        id: 'P05',
        name: 'Admin Dashboard',
        title: 'Dashboard to manage rental search',
        meta: ['JavaScript', 'React.js', 'Node.js'],
        desc: 'Admin dashboard developed using React.js, Redux.js, feeded with an Django RESTful API',
        detail: 'In the struggle of looking for a place to move and after searching docens of rental websites, I decided to create a management dashboard where I can keep track of the apartments, viewing scheduled, status, applications, and others. The main idea was to have a place where my searches were consolidated, I could keep track of which rental agents I have called and so on. I was using an spreadsheet but that is not very handy. I created a single page app which had all the information I needed from all the listings. I could updated in real time using my phone or laptop. All the necessary information was at hand. By implementing React.js for the frontend, a handy admin dashboard tool, and my own RESTful API backend, delevoped with Django, with the necessary endpoints.',
        img: './img/dashboard-img.png',
        src: 'https://github.com/henryvalbuena/rental-seeker'
    },
    {
        id: 'P06',
        name: 'Chat',
        title: 'Terminal Like Chat',
        meta: ['JavaScript', 'CSS', 'Node.js', 'Socket.io', 'Express.js'],
        desc: 'Terminal like chat built with CSS and JavaScript supported by Node.js, Express.js, and Socket.io in the backend',
        detail: 'One room chat app that broadcast messagess among the connected users. It uses Socket.io to manage the web sockets and user identity. This project, will incorporate a built-in bot with commands that will provide information about me, my projects, and skills.',
        img: './img/chat_20190629.gif',
        src: 'https://github.com/henryvalbuena/chatbot'
    },
    {
        id: 'P07',
        name: 'Employee Directory',
        title: 'Employee Directory Dashboard',
        meta: ['Express.js', 'MongoDB', 'PostgreSQL', 'Forms'],
        desc: 'Employee directory dashboard built with Postgres, MongoDB, and Express.js to manage persistence information',
        detail: 'Employee directory management dashboard that uses Postgres as a data persistence software to hold the employee information inserted by the users. To manage the state of information, the app uses cookies and user authentication/authorization to display the corresponding information. It has web forms validations and server side validation as the basis to parse and securily put data in the database.',
        img: './img/employee-dir.png',
        src: 'https://github.com/henryvalbuena/employee-directory'
    }
]
export default projects;