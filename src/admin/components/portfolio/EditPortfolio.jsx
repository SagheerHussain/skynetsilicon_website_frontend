import React, { useEffect, useState } from 'react';
import { Layout } from '../index';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditPortfolio = () => {
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [portfolio, setPortfolio] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    // Fetch Portfolio By Id
    const fetchPortfolioById = async () => {
        try {
            const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/portfolio/id/${id}`);
            if (!response.ok) throw new Error("Something Went Wrong");
            const data = await response.json();
            setPortfolio(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPortfolioById();
    }, []);

    const handleSubmit = async () => {
        console.log(file, title, description, category)
        console.log(portfolio.src, portfolio.title, portfolio.category.name, portfolio.description)
        try {
            const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/portfolio/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ src: file ? file.filename : portfolio.src, title: title ? title : portfolio.title, description: description ? description : portfolio.description, category: category ? category : portfolio.category._id })
            });
            if (!response.ok) throw new Error("Failed to update");
            Swal.fire({
                icon: "success",
                text: "Portfolio Updated Successfully!",
            });
            setTimeout(() => {
                navigate('/dashboard/view-portfolio');
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };

    // Categories
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/category");
                const data = await response.json();
                setCategories(data);
                console.log(data);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        })()
    }, []);

    return (
        <Layout>
            <section id="editPortfolio" className='h-full'>
                <div className="container mx-auto p-4">
                    <div className="bg-zinc-950 shadow-lg rounded-lg p-5 mx-auto">
                        <h2 className="text-xl font-semibold mb-4 text-zinc-300">Edit Portfolio</h2>
                        <div className="border-dashed border-2 border-gray-500 p-4 rounded">
                            <label
                                htmlFor="fileUpload"
                                className="block text-center text-gray-300 cursor-pointer hover:text-gray-400"
                            >
                                Click to choose files
                                <input
                                    id="fileUpload"
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="hidden"
                                />
                            </label>
                        </div>
                        {portfolio && (
                            <img src={`https://skynetsilicon-website-backend.vercel.app/uploads/${portfolio.src}`} alt="Portfolio" className="mt-4 w-40 h-40 object-cover" />
                        )}
                        <label className="text-sm text-zinc-300 mb-2 mt-4">Category*</label>
                        <select name="category" required onChange={(e) => setCategory(e.target.value)} className="text-zinc-300 bg-transparent border-zinc-800 form-select w-full rounded-none focus:shadow-none " id="">
                            <option hidden>Select Category</option>
                            {
                                categories && categories.map(({ _id, name }) => {
                                    return <option className='bg-zinc-800 text-zinc-300 ' value={_id} name={_id} key={_id}>{name}</option>
                                })
                            }
                        </select>

                        <label className="text-sm text-zinc-300 mb-2 mt-4">Title*</label>
                        <input type="text" name="title" defaultValue={portfolio && portfolio.title} onChange={(e) => setTitle(e.target.value)} placeholder="Portfolio Title" className="mb-4 py-3 form-control w-full rounded-none bg-transparent border-zinc-300 text-white" />
                        <label className="text-sm text-zinc-300 mb-2">Description*</label>
                        <textarea name="description" defaultValue={portfolio && portfolio.description} onChange={(e) => setDescription(e.target.value)} placeholder="Portfolio Description" className="h-[100px] py-3 form-control w-full rounded-none bg-transparent border-zinc-300 text-white" />

                        {file && <div className="flex items-center justify-between bg-transparent p-3 rounded">
                            <div>
                                <p className="text-zinc-300">
                                    <strong>File Name:</strong> {file.name}
                                </p>
                                <p className="text-zinc-300">
                                    <strong>File Size:</strong> {file.size} MB
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button

                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>}

                        <button onClick={handleSubmit} className="primary-white-btn hover:text-white text-xl mt-4">
                            Update Portfolio
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EditPortfolio;