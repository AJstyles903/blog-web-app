import {Link} from 'react-router-dom'
const Blog = ({ id,title, body }) => {
    return (
        <div className="flex flex-col w-full mx-auto my-4 overflow-hidden text-gray-900 transition bg-white border border-gray-300 rounded-2xl hover:translate-y-2 hover:shadow-lg">

            <div className="flex-auto px-6 py-5">
                <h3 className="mt-4 mb-3 text-2xl font-semibold xl:text-2xl">{title}</h3>
                <p className="mb-4 text-base font-normal">
                    {body}
                </p>
                <Link to={`/blog/${id}`}>
                    <button className="inline-block px-2 py-1 text-sm font-semibold leading-normal text-center text-white no-underline align-middle bg-gray-800 border border-gray-800 rounded-full shadow-sm cursor-pointer select-none">
                        Learn More
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Blog