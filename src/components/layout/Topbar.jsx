import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6 shrink-0">
      <div className="flex-1 max-w-xl flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 sm:text-sm"
            placeholder="Global search..."
          />
        </div>
      </div>
      <div className="ml-4 flex items-center space-x-4">
        <Link to="/notifications" className="text-gray-400 hover:text-gray-500 relative">
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
          <Bell className="h-5 w-5" />
        </Link>
        <Link to="/profile-account" className="flex items-center space-x-2 text-sm text-gray-700">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <User className="h-4 w-4 text-gray-500" />
          </div>
          <span className="font-medium">Coordinator</span>
        </Link>
      </div>
    </header>
  );
};

export default Topbar;
