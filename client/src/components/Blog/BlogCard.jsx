import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-offwhite car-shadow p-2" >
            <img className="" src={Car} alt="product" />
            <div className="px-5 pb-5 flex flex-col align-center justify-center">
                <h5 className="text-l italic text-[20px] font-semibold tracking-tight text-gray-900 dark:text-white pb-3">{blog.title}</h5>
                <div className="blog-item-border mb-3"></div>
                <p>{blog.description}</p>
                <Link to={blog.link}> READ MORE</Link>
            </div>
        </div>
    )
}

export default BlogCard