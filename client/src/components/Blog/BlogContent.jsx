import React from 'react'
import BlogCard from './BlogCard'

const BlogContent = () => {
    const blog = {
        title: "Our top 5 travel trends",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis ducimus debitis assumenda quas, laboriosam officia deserunt quia eveniet excepturi!",
        link: ""
    }
    return (
        <div className="">
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-right text-[block] uppercase pr-6`}> Blogs</h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {[0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 7].map(t => {
                    return (
                        <BlogCard blog={blog} />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogContent