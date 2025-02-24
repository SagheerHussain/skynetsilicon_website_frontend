import React, { useEffect, useRef, useState } from 'react'
import EyeRotate from "../EyeRotate";
import {work} from "../projects"

const ProjectHeader = () => {
    return (
        <>
            <header id='header' className='bg-[#260C6E] pt-[170px] md:pt-[240px] pb-[100px] overflow-hidden relative max-h-[100vh]'>
                <div className="container">
                    <h1 className='text-[#fff] text-4xl sm:text-5xl md:text-7xl font-semibold uppercase relative inline-block'>Projects <sup className='text-lg absolute -right-[12%] top-0'>({work?.length})</sup></h1>

                    <EyeRotate />

                    <div className="header_shadows">
                        <div className="header_shadow_one max-w-[95%] rounded-[15px] w-full absolute -bottom-[63%] sm:-bottom-[53%] md:-bottom-[37%] left-[50%] -translate-x-[50%] h-[300px] bg-[#110044bf] z-[0]"></div>
                        <div className="header_shadow_two max-w-[85%] rounded-[15px] w-full absolute -bottom-[58%] sm:-bottom-[48%] md:-bottom-[30%] left-[50%] -translate-x-[50%] h-[300px] bg-[#110044bf] z-[0]"></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ProjectHeader
