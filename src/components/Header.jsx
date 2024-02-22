import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="bg-gray-700">
            <nav className="flex items-center justify-between p-6 bg-teal">
                <Link to="/">

                    <div className="flex items-center mr-6 text-white flex-no-shrink">
                        <span className="text-xl font-semibold tracking-tight">Blog WebApp</span>
                    </div>
                </Link>
                {/* <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="w-3 h-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div> */}
                <div className="flex-grow lg:flex lg:items-center">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/blog" className="block text-white lg:inline-block lg:mt-0 text-teal-lighter">
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header