import React from 'react'
import { BreadCrumb } from '../../../components/index'

const Analytics = () => {
    return (
        <>
            <section id='analytics'>
                <div className="container-fluid p-10">
                    <BreadCrumb page={"Dashboard"} color='text-white' category={""} />
                </div>
            </section>
        </>
    )
}

export default Analytics
