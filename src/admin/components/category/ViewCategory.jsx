import React, { useCallback, useEffect, useState } from 'react';
import { Layout } from '../index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Menu, MenuItem } from '@mui/material';
import { TbDotsVertical } from 'react-icons/tb';
import { DotLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewCategory = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [modified, setModified] = useState(false);

    const navigate = useNavigate();

    // Fetch Categories
    const fetchCategories = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/category`);
            if (!response.ok) throw new Error("Data could not fetch");
            const data = await response.json();
            setCategories(data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories, modified])

    // Edit Category
    const handleEdit = (id) => {
        navigate(`/dashboard/edit-category/${id}`)
    }

    // Delete Category
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this service? This action cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/category/delete/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json" } });
                if (!response.ok) throw new Error("Something Went Wrong");
                Swal.fire("Deleted!", "The service has been deleted.", "success");
                setModified(!modified)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Layout>
                <section id="viewCategory" className={`${loading ? "h-[88vh]" : "h-full"} py-6`}>
                    <div className="container py-4">
                        <h1 className="text-white mb-5 text-4xl font-bold">View Categories</h1>

                        {loading && <DotLoader className='mx-auto' color='#fff' size={16} />}

                        <TableContainer>
                            <Table sx={{ minWidth: 1500 }} aria-label="simple table">
                                <TableHead >
                                    <TableRow className='border-b-2 border-[#ffffff12]'>
                                        <TableCell align="left" className='text-white'>Category</TableCell>
                                        <TableCell align="center" className='text-white'>Slug</TableCell>
                                        <TableCell align="center" className='text-white'>Edit</TableCell>
                                        <TableCell align="center" className='text-white'>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        categories?.map((category) => (
                                            <TableRow
                                                className='border-b-2 border-[#ffffff12]'
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left" className='text-white'>{category.name}</TableCell>
                                                <TableCell align="center" className='text-white'>{category.slug}</TableCell>
                                                <TableCell align='center'>
                                                    <button onClick={() => handleEdit(category._id)} className='bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2'>Edit</button>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <button onClick={() => handleDelete(category._id)} className='bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2'>Delete</button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </section>
            </Layout>
        </>
    )
}

export default ViewCategory
