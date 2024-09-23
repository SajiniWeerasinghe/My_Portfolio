"use client";
import React ,{useState}from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData=[
    {
        id:1,
        title:"Project 1",
        description:"This is a project",
        image:"/images/projects/1.jpeg",
        tag:["All","Web"],
        gitUrl:"https://github.com",
        previewUrl:"/",
    },
    {
        id:2,
        title:"Project 2",
        description:"This is a project",
        image:"/images/projects/1.jpeg",
        tag:["All","Web"],
        gitUrl:"https://github.com",
        previewUrl:"/",
        
    },
    {
        id:3,
        title:"Project 3",
        description:"This is a project",
        image:"/images/projects/1.jpeg",
        tag:["All","web"],
        gitUrl:"https://github.com",
        previewUrl:"/",
    },
    {
        id:4,
        title:"Project 4",
        description:"This is a project",
        image:"/images/projects/1.jpeg",
        tag:["All","Mobile"],
        gitUrl:"https://github.com",
        previewUrl:"/",
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

const fillterProjects = projectData.filter((project) =>
    project.tag.includes(tag)
 )


  return (
    <><h2 className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
        </h2>
        <div className='text-white flex flex-row justify-center gap-2 py-6'>
             <ProjectTag 
             onClick={handleTagChange} 
             name="All" 
             isSelected={tag === "All"} 
             />
             <ProjectTag 
             onClick={handleTagChange} 
             name="Web" 
             isSelected={tag === "Web"} 
             />
             <ProjectTag 
             onClick={handleTagChange} 
             name="Mobile" 
             isSelected={tag === "Mobile"} 
             />
        </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {fillterProjects.map((project)=> 
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        tag={project}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl} 
        />
    )}
    </div>
    </>

  )
}

export default ProjectsSection
