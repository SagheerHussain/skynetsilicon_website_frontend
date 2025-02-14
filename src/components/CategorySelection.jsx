import { useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CategorySelection = ({
    onCategoryChange,
    selectedCategory,
    categories = [],
    className = "",
    ...props
}) => {

    const isMatch = useMediaQuery("(max-width: 500px)")

    return (
        <>
                <h1 className='pb-5  text-center text-white text-3xl'>Budget Smartly With Category-Based Pricing!</h1>
            <div className={`grid ${isMatch ? "grid-cols-1" : "grid-cols-2"} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full rounded-lg`}>
                {categories.map((category) => (
                    <div key={category._id} className="relative">
                        <input
                            type="radio"
                            id={category.slug}
                            name="category"
                            value={category.name}
                            checked={selectedCategory === category.name}
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="hidden"
                        />
                        <label
                            htmlFor={category.slug}
                            className={`block text-sm text-center px-1 py-[.4rem] rounded-full font-semibold transition duration-300 cursor-pointer ${selectedCategory === category.name ? "bg-zinc-900 text-white shadow-md" : "text-white hover:bg-zinc-800 hover:text-white border-1 border-[#ffffff1e]"
                                }`}
                        >
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategorySelection