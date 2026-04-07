import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockNotifications } from '../../data/mockNotifications';

const Topbar = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = mockNotifications.filter(n => !n.isRead).length;

  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6 shrink-0">
      <div className="flex-1 max-w-xl flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 sm:text-sm outline-none"
            placeholder="Global search..."
          />
        </div>
      </div>
      <div className="ml-4 flex items-center space-x-4">
        
        {/* Notification Dropdown Container */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="text-gray-400 hover:text-gray-500 relative p-1 focus:outline-none block"
            aria-label="View notifications"
          >
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            )}
            <Bell className="h-5 w-5" />
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
              <div className="p-3 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-800">Quick Notifications</h3>
                {unreadCount > 0 && (
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                    {unreadCount} New
                  </span>
                )}
              </div>
              
              <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                {mockNotifications.length > 0 ? (
                  mockNotifications.slice(0, 5).map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-3 hover:bg-gray-50 cursor-pointer transition-colors ${!notification.isRead ? 'bg-gray-50' : ''}`}
                      onClick={() => {
                        setIsNotifOpen(false);
                        if(notification.relatedLink) {
                          navigate(notification.relatedLink);
                        }
                      }}
                    >
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 shrink-0">
                          {notification.urgency === 'high' ? (
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          ) : (
                            <Bell className="w-3 h-3 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm truncate ${!notification.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-600 line-clamp-2 mt-0.5">
                            {notification.message}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
                            {notification.type} • {new Date(notification.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-sm text-gray-500">
                    No new notifications
                  </div>
                )}
              </div>
              
              <div className="p-2 border-t border-gray-200 bg-gray-50">
                <button 
                  onClick={() => {
                    setIsNotifOpen(false);
                    navigate('/notifications');
                  }}
                  className="w-full text-center text-sm text-gray-700 hover:text-black font-medium py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Expand All Notifications</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <Link to="/profile-account" className="flex items-center space-x-2 text-sm text-gray-700 hover:text-black transition-colors">
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
