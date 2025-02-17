import React, { useCallback, useEffect, useState } from 'react';
import { Layout } from '../index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DotLoader } from 'react-spinners';
import { Button, Menu, MenuItem } from '@mui/material';
import { TbDotsVertical } from "react-icons/tb";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewService = () => {

    // State Variables
    const [anchorEl, setAnchorEl] = useState(null);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [modified, setModified] = useState(false);

    // Navigate
    const navigate = useNavigate();

    // Get All Services
    const fetchServices = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/services");
            if (!response.ok) throw new Error("Failed to fetch services.");
            const data = await response.json();
            setServices(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array ensures function is created only once

    // Fetch services only when the component mounts
    useEffect(() => {
        fetchServices();
    }, [fetchServices, modified]);


    // Actions Dropdown
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Delete Service
    const handleDelete = async (id) => {
        setAnchorEl(null);
    
        // Show confirmation alert before deleting
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
            try {
                const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/services/delete/${id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                });
    
                if (!response.ok) throw new Error("Failed to delete service.");
    
                const data = await response.json();
    
                // Show success message
                Swal.fire("Deleted!", "The service has been deleted.", "success");
    
                // Optionally refresh list or remove deleted item from UI
                // setServices(prev => prev.filter(service => service._id !== id));
                setModified(!modified)
    
            } catch (error) {
                Swal.fire("Error!", "Failed to delete the service. Please try again.", "error");
                console.error("Error deleting service:", error);
            }
        }
    };

    // Edit Service
    const handleEdit = (id) => {
        setAnchorEl(null);
        navigate(`/dashboard/edit-service/${id}`);
    };


    return (
        <>
            <Layout>

                <section id="viewService" className={`py-6 ${loading ? "h-[88vh]" : "h-full"}`}>
                    <div className="container">
                        <h1 className="text-white mb-5 text-4xl font-bold">View Services</h1>

                        {loading && <DotLoader className='mx-auto' color='#fff' size={16} />}
                        {error && <p className='text-red-600'>{error}</p>}

                        <TableContainer>
                            <Table sx={{ minWidth: 1500 }} aria-label="simple table">
                                <TableHead >
                                    <TableRow className='border-b-2 border-[#ffffff12]'>
                                        <TableCell align="left" className='text-white'>Title</TableCell>
                                        <TableCell align="center" className='text-white'>Category</TableCell>
                                        <TableCell align="center" className='text-white'>Feature</TableCell>
                                        <TableCell align="center" className='text-white'>WhyChooseSkynet</TableCell>
                                        <TableCell align="center" className='text-white'>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        services?.map((service) => (
                                            <TableRow
                                            className='border-b-2 border-[#ffffff12]'
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left" className='text-white'>{service.title.slice(0, 30)}...</TableCell>
                                                <TableCell align="center" className='text-white'>
                                                    <span className='bg-[#111] px-3 py-2 rounded-full'>{service.category.name}</span>
                                                </TableCell>
                                                <TableCell align="center" className='text-white'>{service.featured_list[0]}</TableCell>
                                                <TableCell align="center" className='text-white'>{service.why_choose_skynet[0].title}</TableCell>
                                                <TableCell align='right'>
                                                    <Button
                                                        id="basic-button"
                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClick}
                                                    >
                                                        <TbDotsVertical className='text-white text-xl'></TbDotsVertical>
                                                    </Button>
                                                    <Menu
                                                        id="basic-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleDelete}
                                                        MenuListProps={{
                                                            'aria-labelledby': 'basic-button',
                                                        }}
                                                    >
                                                        <MenuItem onClick={() => handleEdit(service._id)}><MdEdit className='me-2' />Edit</MenuItem>
                                                        <MenuItem onClick={() => handleDelete(service._id)}><MdDelete className='me-2' />Delete</MenuItem>
                                                    </Menu>
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

export default ViewService
