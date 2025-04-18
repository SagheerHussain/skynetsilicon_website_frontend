import React, { useEffect, useState } from 'react';
import { Layout } from "../index";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddPortfolio = () => {

    const [file, setFile] = useState(null); // To store the selected file
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [link, setLink] = useState("");

    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
    
        if (!file || !title || !category || !link) {
            Swal.fire({
                icon: "error",
                text: "All Fields Are Required",
            });
            return;
        }
    
        const formData = new FormData();
        formData.append("image", file); // Ensure key matches backend `upload.single("image")`
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("link", link);
    
        try {
            const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/portfolio", {
                method: "POST",
                body: formData, // ✅ Correct way to send FormData
            });
    
            const data = await response.json();
            console.log("Response from backend:", data);
            
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    text: "Successfully Added Portfolio",
                });
                setFile(null);
                setTitle("");
                setDescription("");
                setCategory("");
                setLink("");
                setTimeout(() => {
                    navigate('/dashboard/view-portfolio');
                }, 1500);
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Something Went Wrong",
                });
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };
    

    // Categories
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/category");
                const data = await response.json();
                setCategories(data);
                console.log(data)
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        })()
    }, [])

    // Portfolio
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/portfolio");
                const data = await response.json();
                setPortfolio(data);
                console.log(data)
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        })()
    }, [])

    return (
        <>
            <Layout>
                <section id="addPortfolio" className='h-[88vh] pb-[3rem]'>
                    <div className="container mx-auto p-4">
                        <div className="bg-zinc-950 shadow-lg rounded-lg p-5 mx-auto">
                            <h2 className="text-xl font-semibold mb-4 text-zinc-300">Upload Files</h2>
                            <div className="border-dashed border-2 border-gray-500 p-4 rounded">
                                <label
                                    htmlFor="fileUpload"
                                    className="block text-center text-gray-300 cursor-pointer hover:text-gray-400"
                                >
                                    Click to choose files
                                    <input
                                        id="fileUpload"
                                        type="file"
                                        name='image'
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden bg-transparent border-zinc-800 placeholder:text-zinc-300"
                                    />
                                </label>
                            </div>
                            {file && (
                                <div className="mt-4">
                                    <label htmlFor="" className="text-sm text-zinc-300 mb-2">Select Category*</label>
                                    <select name="" required onChange={(e) => setCategory(e.target.value)} className="text-zinc-300 bg-transparent border-zinc-800 form-select w-full rounded-none focus:shadow-none " id="">
                                        <option value="" hidden selected>Select Category</option>
                                        {
                                            categories && categories.map(({ _id, name }) => {
                                                return <option className='bg-zinc-800 text-zinc-300 ' value={name} key={_id}>{name}</option>
                                            })
                                        }
                                    </select>

                                    <label htmlFor="" className="text-sm text-zinc-300 mb-2 mt-4">Title*</label>
                                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Portfolio Title" className="mb-4 py-3 form-control w-full rounded-none focus:shadow-none bg-transparent border-zinc-300 placeholder:text-zinc-300 text-white" />

                                    <label htmlFor="" className="text-sm text-zinc-300 mb-2">Description (optional)</label>
                                    <textarea name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Portfolio Description" className="h-[100px] py-3 form-control w-full rounded-none focus:shadow-none  bg-transparent border-zinc-300 placeholder:text-zinc-300 text-white" id=""></textarea>

                                    <label htmlFor="" className="text-sm text-zinc-300 mb-2 mt-4">Link*</label>
                                    <input type="text" name="link" onChange={(e) => setLink(e.target.value)} placeholder="Portfolio Link" className="mb-4 py-3 form-control w-full rounded-none focus:shadow-none bg-transparent border-zinc-300 placeholder:text-zinc-300 text-white" />
                                    
                                    <button
                                        onClick={handleSubmit}
                                        className="primary-white-btn hover:text-white text-xl"
                                    >
                                        Upload Your File
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default AddPortfolio
