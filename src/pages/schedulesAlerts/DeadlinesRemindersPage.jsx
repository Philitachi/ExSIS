import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { useNavigate } from 'react-router-dom';
import { Bell, AlertTriangle, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

const DeadlinesRemindersPage = () => {
    const navigate = useNavigate();

    const deadlines = [
        { id: 1, type: 'Report Due', title: 'Q1 Extension Summary Report', date: 'Mar 31, 2026', related: 'All active projects', status: 'Overdue' },
        { id: 2, type: 'Deadline', title: 'Proposal Budget Justification', date: 'Apr 05, 2026', related: 'PRJ-2026-003', status: 'Pending' },
        { id: 3, type: 'Milestone', title: 'Phase 1 Implementation', date: 'Apr 10, 2026', related: 'PRJ-2026-001', status: 'Pending' }
    ];

    return (
        <div className="pb-12 text-sm md:text-base">
            <PageHeader 
                title="Deadlines & Reminders" 
                subtitle="View upcoming activity alerts and system-generated tracking triggers"
                action={
                    <button className="wireframe-btn flex items-center" onClick={() => navigate('/schedules-alerts')}>
                        <CalendarIcon className="w-4 h-4 mr-2" /> Back to Calendar
                    </button>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="wireframe-card bg-red-50 border-red-200">
                    <div className="flex items-center text-red-800 font-bold mb-2">
                        <AlertTriangle className="w-5 h-5 mr-2"/> Overdue Deadlines
                    </div>
                    <div className="text-3xl font-extrabold text-red-900">1</div>
                    <div className="text-sm text-red-700 mt-1">Action required immediately</div>
                </div>
                <div className="wireframe-card bg-yellow-50 border-yellow-200">
                    <div className="flex items-center text-yellow-800 font-bold mb-2">
                        <Bell className="w-5 h-5 mr-2"/> Due This Week
                    </div>
                    <div className="text-3xl font-extrabold text-yellow-900">2</div>
                    <div className="text-sm text-yellow-700 mt-1">Approaching swiftly</div>
                </div>
                <div className="wireframe-card">
                    <div className="flex items-center text-gray-800 font-bold mb-2">
                        <CalendarIcon className="w-5 h-5 mr-2"/> Further Out
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900">8</div>
                    <div className="text-sm text-gray-500 mt-1">Scheduled next 30 days</div>
                </div>
            </div>

            <div className="wireframe-card">
                <h3 className="font-bold border-b border-gray-200 pb-2 mb-4">Pending Item Ledger</h3>
                <DataTable 
                    columns={[
                        { header: 'Type', accessor: 'type' },
                        { header: 'Title / Subject', accessor: 'title' },
                        { header: 'Target Date', accessor: 'date' },
                        { header: 'Related Context', accessor: 'related' },
                        { 
                            header: 'Urgency', 
                            render: (row) => <StatusBadge status={row.status === 'Overdue' ? 'Rejected' : 'Draft'} overrideLabel={row.status} /> 
                        },
                        {
                            header: 'Action',
                            render: (row) => (
                                <button className="text-gray-600 hover:text-gray-900 flex items-center text-sm font-medium">
                                    <ExternalLink className="w-3 h-3 mr-1"/> Open Context
                                </button>
                            )
                        }
                    ]}
                    data={deadlines}
                />
            </div>
        </div>
    );
};

export default DeadlinesRemindersPage;
