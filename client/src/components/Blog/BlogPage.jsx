import React from 'react'

import BlogContent from './BlogContent'
import GenericPage from '../Common/GenericPage'

const BlogPage = () => {
    return (
        <GenericPage title={"Blogs"} content={BlogContent} />
    )
}

export default BlogPage