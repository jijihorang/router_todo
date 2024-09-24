
import {Link} from "react-router-dom";

// children : React 컴포넌트의 자식 요소
function BasicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="bg-white shadow-lg z-10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/"
                          className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition duration-300">MyPage</Link>

                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</Link>
                        <Link to="/todo"
                              className="text-gray-700 hover:text-blue-500 transition duration-300">Todo</Link>
                        <Link to="/Services" className="text-gray-700 hover:text-blue-500 transition duration-300">Services</Link>
                        <Link to="/contact"
                              className="text-gray-700 hover:text-blue-500 transition duration-300">Contact</Link>
                    </nav>

                    <div className="hidden md:block">
                        <Link to="/signup"
                              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                            Sign Up
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex flex-1">
                <main className="flex-1 bg-white p-8">
                    {children}
                </main>
            </div>
        </>
    );
}

export default BasicLayout;
