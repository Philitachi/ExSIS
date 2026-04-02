import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Bell, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockNotifications } from '../../data/mockNotifications';

const NotificationsPage = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('all');

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <PageHeader 
                title="Notifications Center" 
                subtitle="Alerts, system messages, and updates related to extension records."
                action={<button className="wireframe-btn flex items-center"><Check className="w-4 h-4 mr-2"/>Mark All as Read</button>}
            />

            <div className="flex space-x-2 border-b border-gray-300 pb-2 mb-4">
                <button onClick={()=>setFilter('all')} className={`px-4 py-1 text-sm rounded-full ${filter==='all'?'bg-gray-800 text-white':'bg-gray-100 text-gray-700'}`}>All</button>
                <button onClick={()=>setFilter('unread')} className={`px-4 py-1 text-sm rounded-full ${filter==='unread'?'bg-gray-800 text-white':'bg-gray-100 text-gray-700'}`}>Unread</button>
                <button onClick={()=>setFilter('action')} className={`px-4 py-1 text-sm rounded-full ${filter==='action'?'bg-gray-800 text-white':'bg-gray-100 text-gray-700'}`}>Action Required</button>
            </div>

            <div className="bg-white border text-sm border-gray-200 divide-y divide-gray-200">
                {mockNotifications
                    .filter(n => filter === 'all' || (filter === 'unread' && !n.isRead) || (filter === 'action' && n.urgency === 'high'))
                    .map(notification => (
                    <div key={notification.id} className={`p-4 hover:bg-gray-50 flex items-start transition-colors ${!notification.isRead ? 'bg-gray-50' : ''}`}>
                        <div className="mr-4 mt-1">
                            {notification.urgency === 'high' ? (
                                <div className="w-2 h-2 mt-1 rounded-full bg-red-500"></div>
                            ) : (
                                <Bell className="w-4 h-4 text-gray-500" />
                            )}
                        </div>
                        <div className="flex-1">
                            <h4 className={`text-base ${!notification.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                                {notification.title}
                            </h4>
                            <p className="text-gray-600 mt-1">{notification.message}</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <span className="text-xs text-gray-400">{new Date(notification.date).toLocaleString()}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">{notification.type}</span>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            {notification.relatedLink && (
                                <button onClick={() => navigate(notification.relatedLink)} className="wireframe-btn text-xs px-2 py-1 flex items-center">
                                    Open Link
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                {mockNotifications.length === 0 && (
                    <div className="p-8 text-center text-gray-500">No notifications available.</div>
                )}
            </div>
        </div>
    );
};

export default NotificationsPage;
