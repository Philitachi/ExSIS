import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import StatCard from '../../components/common/StatCard';
import FilterBar from '../../components/common/FilterBar';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { useNavigate } from 'react-router-dom';
import { FilePlus, Search, Download, BarChart2 } from 'lucide-react';
import { mockProjectReports, mockEvaluationReports } from '../../data/mockMonitorReport';

const MonitorReportPage = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState('evaluations'); // 'evaluations' or 'reports'

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <PageHeader 
                title="Monitor & Report" 
                subtitle="Track evaluation scores, impact metrics, and auto-generated compliance reports." 
                action={<button onClick={() => navigate('/monitor-report/evaluation/new')} className="wireframe-btn-primary flex items-center"><FilePlus className="w-4 h-4 mr-2" />Submit F-EXT-007 Evaluation</button>}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Avg Evaluation Score" value="4.8/5.0" subtitle="Q3 2026" />
                <StatCard title="Evaluations Encoded" value="142" subtitle="This Quarter" />
                <StatCard title="Reports Generated" value="8" subtitle="Year to Date" />
                <StatCard title="Pending Validation" value="3" subtitle="Requires action" />
            </div>

            <div className="wireframe-card py-12 flex flex-col items-center justify-center border-dashed text-gray-500">
                <BarChart2 className="w-12 h-12 text-gray-400 mb-2" />
                <h3 className="font-medium text-gray-900">Analytics Dashboard Placeholder</h3>
                <p className="text-sm">Interactive visualization charts will appear here when connected to the data store.</p>
            </div>

            <div className="flex border-b border-gray-300">
                <button 
                  className={`py-3 px-6 font-medium text-sm border-b-2 ${tab === 'evaluations' ? 'border-gray-800 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  onClick={() => setTab('evaluations')}
                >
                  Raw Evaluation Data (F-EXT-007)
                </button>
                <button 
                  className={`py-3 px-6 font-medium text-sm border-b-2 ${tab === 'reports' ? 'border-gray-800 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  onClick={() => setTab('reports')}
                >
                  Generated Project Reports
                </button>
            </div>

            {tab === 'evaluations' && (
                <div className="space-y-4">
                    <FilterBar>
                        <div className="relative w-full sm:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="w-4 h-4 text-gray-400" /></div>
                            <input type="text" className="wireframe-input pl-10" placeholder="Search project or respondent..." />
                        </div>
                        <select className="wireframe-input"><option>All Projects</option></select>
                        <select className="wireframe-input"><option>Q3 2026</option></select>
                        <button className="wireframe-btn flex items-center"><Download className="w-3 h-3 mr-2" /> Export CSV</button>
                    </FilterBar>
                    <DataTable 
                        columns={[
                            { header: 'Project ID', accessor: 'project' },
                            { header: 'Respondent Name', accessor: 'respondentName' },
                            { header: 'Client Type', accessor: 'clientType' },
                            { header: 'Score', accessor: 'overallScore' },
                            { header: 'Submission Date', accessor: 'submissionDate' },
                            { header: 'Actions', render: () => <button className="text-gray-600 hover:underline">View</button>}
                        ]}
                        data={mockEvaluationReports}
                    />
                </div>
            )}

            {tab === 'reports' && (
                <div className="space-y-4">
                    <FilterBar>
                        <select className="wireframe-input"><option>Report Type</option></select>
                        <select className="wireframe-input"><option>Year</option></select>
                    </FilterBar>
                    <DataTable 
                        columns={[
                            { header: 'Report ID', accessor: 'id' },
                            { header: 'Report Type', accessor: 'reportType' },
                            { header: 'Covered Period', accessor: 'coveredPeriod' },
                            { header: 'Date Generated', accessor: 'dateGenerated' },
                            { header: 'Generated By', accessor: 'generatedBy' },
                            { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
                            { header: 'Actions', render: (row) => <div className="space-x-2"><button className="text-gray-600 hover:underline text-sm" onClick={() => navigate(`/monitor-report/${row.id || 1}`)}>View Details</button><button className="text-gray-600 hover:underline text-sm flex items-center inline-flex"><Download className="w-3 h-3 mr-1"/>PDF</button></div>}
                        ]}
                        data={mockProjectReports}
                    />
                </div>
            )}
        </div>
    );
};

export default MonitorReportPage;
