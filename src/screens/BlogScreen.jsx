import { useEffect, useState } from "react"
import BlogList from "../components/BlogList"
import Pagination from "../components/Pagination"

function App() {
    const [blog, setBlog] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perBlogOnPage, setPerBlogOnPage] = useState(9)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    const lastPageIndex = currentPage * perBlogOnPage
    const firstPageIndex = lastPageIndex - perBlogOnPage
    const blogsOnCurrentPage = blog.slice(firstPageIndex, lastPageIndex)
    return (
        <>
            <section className="py-10">
                <BlogList blogs={blogsOnCurrentPage} />
            </section >
            <Pagination totalBlogs={blog.length} perBlogOnPage={perBlogOnPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default App
