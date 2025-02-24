import React from 'react'
import { ProjectCard } from '../index'
import { work } from '../projects'
import "./projects.css"
import { Link, useLocation } from 'react-router-dom'

const Projects = () => {

    const location = useLocation();

    return (
        <>
            <section id="featured_projects" className='bg-[#00042a] h-full py-20'>
                <div className="container">
                    <h1 className='text-[#fff] text-6xl max-w-[75%] mb-20'>Featured Projects</h1>
                    <div className="featured_projects_details grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            work?.map((project, ind) => (
                                <ProjectCard project={project} index={ind + 1} />
                            ))
                        }
                    </div>
                    {
                        location.pathname === "/" && <div className="text-center mt-10">
                            <Link to={`/projects`}>
                                <button className='primary-white-btn hover:text-white'>View All Projects</button>
                            </Link>
                        </div>
                    }

                </div>
            </section>
        </>
    )
}

export default Projects
