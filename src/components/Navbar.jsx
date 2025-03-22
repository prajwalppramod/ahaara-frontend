import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header class=" body-font">
                <div class="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center mb-4 md:mb-0">
                        <Link to="/"> <img src="src\assets\meal.svg" alt="logo" className='w-10' /></Link>
                        <Link to="/">  <span class="ml-1 text-xl font-semibold text-white">Aahara App</span></Link>


                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900"><Link to={'/login'}>Login</Link></a>
                        <a class="mr-5 hover:text-gray-900"><Link to={'/signup'}>Signup</Link> </a>
                        {/* <a class="mr-5 hover:text-gray-900">Third Link</a>
                        <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                    <Link to={'/login'}>
                    <button class="inline-flex text-white items-center bg-[#08426a] border-0 py-1 px-3 focus:outline-none hover:bg-[#08426a] rounded text-base mt-4 md:mt-0"><Link to={"/bookcar"}><p className='pr-2 pl-2'>XYZ</p></Link>
                    </button></Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar
