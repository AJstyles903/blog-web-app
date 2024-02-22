

const Pagination = ({ totalBlogs, perBlogOnPage ,setCurrentPage}) => {
    let page = []
    for (let i = 1; i <= Math.ceil(totalBlogs / perBlogOnPage); i++) {
        page.push(i)
    }
    return (
        <div className="flex flex-wrap items-center justify-center py-4 space-x-2">
            {
                page.map((pageNumber) =>(
                    <button className="px-3 py-2 m-1 border border-black rounded" onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>
                ))
            }
        </div>
    )
}

export default Pagination