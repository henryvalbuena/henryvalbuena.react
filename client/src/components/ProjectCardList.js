import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectCardList = ({projects}) => (
    projects.map((project) => (
        <div className='cards' key={project.id}>
            <ProjectCard
                id={project.id}
                name={project.name}
                title={project.title}
                meta={project.meta}
                desc={project.desc}
                detail={project.detail}
                img={project.img}
                src={project.src}
            />
        </div>
    ))
);

export default ProjectCardList;