import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, UploadCloud, Users, BarChart2, Calendar, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Project Proposals', path: '/project-proposals', icon: FileText },
    { label: 'Documents / Upload Center', path: '/documents-upload-center', icon: UploadCloud },
    { label: 'Beneficiaries & Partners', path: '/beneficiaries-partners', icon: Users },
    { label: 'Monitor & Report', path: '/monitor-report', icon: BarChart2 },
    { label: 'Schedules & Alerts', path: '/schedules-alerts', icon: Calendar },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-300 flex flex-col h-full shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-gray-300"><span className="text-xl font-bold text-gray-900">ExSIS</span></div>
      <div className="p-4 flex-col text-sm text-gray-500 border-b border-gray-100">
        <div className="font-semibold text-gray-800">Extension Coordinator</div><div className="text-xs">Role View</div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={({ isActive }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />{item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-300"><NavLink to="/login" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"><LogOut className="w-5 h-5 mr-3 flex-shrink-0" />Logout</NavLink></div>
    </div>
  );
};
export default Sidebar;
