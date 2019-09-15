const projects = [
    {
        id: 'P02',
        name: 'Java Application',
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
        id: 'P01',
        name: 'Web Game',
        title: 'Space Battle',
        meta: ['JavaScript', 'HTML', 'Canvas', 'GPL', 'Web API'],
        desc: 'Space battle game developed using JavaScript',
        detail: '2D web browser game developed using Canvas API, DOM, and JavaScript to render the visuals, design and implement the game logic, and control user interaction. This was one of the projects I was doing while doing #100DaysofCode as part of my personal challenge to learn more things whiles coding. It is not polished, but the way I coded makes it easy to refactor and/or improve. It is the first game I ever created',
        img: './img/ran-image-d23.gif',
        src: 'https://github.com/henryvalbuena/SpaceBattle'
    }
]

export default projects;