import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const BlogDetail = () => {
    const [blog, setBlog] = useState({})
    const { id: blogId } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId])
    return (
        <div className="flex flex-col p-6 mx-auto space-y-5">
            <h1 className="text-4xl font-medium">
                {blog.title}
            </h1>
            <p className="text-lg">
                {blog.body}
            </p>
        </div>
    )
}

export default BlogDetail