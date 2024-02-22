import Blog from "./Blog";

const BlogList = ({blogs}) => {
    return (
        <div className="grid px-4 mx-auto sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
            {
                blogs.map(blog => (
                    <Blog key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
                ))
            }
        </div>
    )
}

export default BlogList