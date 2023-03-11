import React, { useState } from 'react'
import BlogHeader from './Blog/BlogHeader'
import BlogData from './Blog/BlogData'
import BlogForm from './Blog/BlogForm'

export default function Blog() {

    const [BlogTitle, setBlogTitle] = useState("")
    const [BlogDescription, setBlogDescription] = useState("")
    // const [BlogImage, setBlogImage] = useState(null)
    const [AllBlogData, setAllBlogData] = useState([])

    const BlogSave = (event) => {
        event.preventDefault()
        let NewDataList = [...AllBlogData]
        NewDataList.push({
            BlogDescription: BlogDescription,
            BlogTitle: BlogTitle,
            // BlogImage:BlogImage
        })
        setAllBlogData(NewDataList)
        console.log(AllBlogData)
    }







    return (
        <>
            <BlogHeader />
            <BlogData AllBlogData={AllBlogData} />
            <BlogForm setBlogDescription={setBlogDescription} setBlogTitle={setBlogTitle} BlogSave={BlogSave} />
        </>
    )
}
