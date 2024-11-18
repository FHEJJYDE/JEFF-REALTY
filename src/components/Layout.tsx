import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, Building2, Users, Phone, UserCircle } from 'lucide-react';

export default function Layout() {
  const isSignedIn = false; // Temporarily hardcoded until Clerk is properly configured

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Jeff Realty</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink to="/" icon={<Home className="h-5 w-5" />}>Home</NavLink>
                <NavLink to="/properties" icon={<Building2 className="h-5 w-5" />}>Properties</NavLink>
                <NavLink to="/about" icon={<Users className="h-5 w-5" />}>About</NavLink>
                <NavLink to="/contact" icon={<Phone className="h-5 w-5" />}>Contact</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              {isSignedIn ? (
                <Link
                  to="/portal"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  <UserCircle className="h-5 w-5 mr-2" />
                  <span className="ml-2">Portal</span>
                </Link>
              ) : (
                <Link
                  to="/sign-in"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  <UserCircle className="h-5 w-5 mr-2" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Jeff Realty</h3>
              <p className="text-gray-400">Your trusted partner in real estate since 1990.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">123 Real Estate Ave</p>
              <p className="text-gray-400">New York, NY 10001</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Jeff Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children, icon }: { to: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  );
}