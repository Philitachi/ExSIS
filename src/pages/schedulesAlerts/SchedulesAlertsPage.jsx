import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { useNavigate } from 'react-router-dom';
import { Calendar, Plus, Clock, AlertTriangle } from 'lucide-react';
import { scheduledActivities } from '../../data/mockSchedulesAlerts';

const SchedulesAlertsPage = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('upcoming'); // upcoming or alerts

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <PageHeader 
                title="Schedules & Alerts" 
                subtitle="Master calendar, milestones, deadlines, and auto-generated reminders." 
                action={
                    <div className="flex space-x-2">
                        <button onClick={() => navigate('/schedules-alerts/reminders')} className="wireframe-btn flex items-center">View Deadlines / Reminders</button>
                        <button onClick={() => navigate('/schedules-alerts/new')} className="wireframe-btn-primary flex items-center"><Plus className="w-4 h-4 mr-2" />Add Scheduled Activity</button>
                    </div>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="wireframe-card border-l-4 border-gray-400">
                    <div className="flex items-center space-x-3 text-gray-700">
                        <Clock className="w-6 h-6" />
                        <div><h4 className="font-bold">Next Milestone</h4><p className="text-sm">In 5 Days: Q3 Summary Due</p></div>
                    </div>
                </div>
                <div className="wireframe-card border-l-4 border-red-400">
                    <div className="flex items-center space-x-3 text-gray-700">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                        <div><h4 className="font-bold">Urgent Alerts</h4><p className="text-sm">2 proposals pending review</p></div>
                    </div>
                </div>
                <div className="wireframe-card flex flex-col justify-center items-center h-full">
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        <button className="px-4 py-1 text-sm bg-gray-800 text-white font-medium">Month</button>
                        <button className="px-4 py-1 text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">Week</button>
                    </div>
                </div>
            </div>

            <div className="wireframe-card py-16 flex flex-col items-center justify-center border-dashed text-gray-500 bg-gray-50">
                <Calendar className="w-12 h-12 text-gray-300 mb-2" />
                <h3 className="font-medium text-gray-900">Calendar Widget Placeholder</h3>
                <p className="text-sm">Interactive master calendar visualizing events across all projects.</p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mt-8 mb-4">
                <div className="flex space-x-6 text-sm font-medium">
                    <button onClick={() => setView('upcoming')} className={`pb-2 border-b-2 ${view === 'upcoming' ? 'border-gray-800 text-gray-900' : 'border-transparent text-gray-500'}`}>Upcoming Activities</button>
                    <button onClick={() => setView('alerts')} className={`pb-2 border-b-2 ${view === 'alerts' ? 'border-gray-800 text-gray-900' : 'border-transparent text-gray-500'}`}>Deadline Alerts</button>
                </div>
            </div>

            {view === 'upcoming' && (
                <DataTable 
                    columns={[
                        { header: 'Date', accessor: 'date' },
                        { header: 'Title', accessor: 'title' },
                        { header: 'Type', render: (row) => <StatusBadge status={row.type === 'deadline' ? 'Rejected' : (row.type === 'review' ? 'Draft' : 'Approved')} /> },
                        { header: 'Project Ref', accessor: 'project' },
                        { header: 'Assigned', accessor: 'assigned' },
                        { header: 'Actions', render: (row) => <div className="space-x-3"><button className="text-gray-600 hover:underline text-sm" onClick={() => navigate(`/schedules-alerts/${row.id || 1}/edit`)}>Update</button></div>}
                    ]}
                    data={scheduledActivities}
                />
            )}
            
            {view === 'alerts' && (
                <div className="bg-red-50 text-red-800 p-4 rounded border border-red-200 text-sm flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 mt-0.5" />
                    <div>
                        <p className="font-bold mb-1">Overdue: Submit Q3 Summary Report</p>
                        <p>This report was due 3 days ago. Please upload it immediately in the Documents Center.</p>
                        <button onClick={() => navigate('/documents-upload-center')} className="mt-2 text-red-900 underline font-medium">Go to Upload Center</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SchedulesAlertsPage;
