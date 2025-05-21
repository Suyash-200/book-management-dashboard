import { Link, NavLink, useLocation } from 'react-router-dom'
import { BookOpenIcon, HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <BookOpenIcon className="h-8 w-8 mr-2" />
              <span className="text-xl font-semibold">BookManager</span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <NavLink
              to="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
            >
              <HomeIcon className="h-5 w-5 mr-1" />
              Dashboard
            </NavLink>

            <NavLink
              to="/add"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/add' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
            >
              <ChartBarIcon className="h-5 w-5 mr-1" />
              Add Book
            </NavLink>
          </div>

          
        </div>
      </div>

    
    </nav>
  )
}

export default Navbar