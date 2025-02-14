import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ category, page }) => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className='text-white' separator="›">
                <Link underline="hover" className='text-white' href="/">
                    <span className='flex items-center'><IoHome className='mb-1 text-[#fff] me-2' /> Home</span>
                </Link>
                <Link
                    underline="hover"
                    className='text-white'
                    href="/material-ui/getting-started/installation/"
                >
                    {page}
                </Link>
                <Typography className='text-white'>{category || "Loading Service..."}</Typography>
            </Breadcrumbs>
        </>
    )
}

export default BreadCrumb
