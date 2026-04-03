import React from 'react';
import DataTable from '../common/DataTable';
import StatusBadge from '../common/StatusBadge';
import ReportGeneratorPanel from './ReportGeneratorPanel';
import { mockGeneratedReports } from '../../data/mockMonitorReport';
import { Search, Download, RefreshCw, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GeneratedReportsTable = () => {
    const navigate = useNavigate();

    const columns = [
        { header: 'Report Name', accessor: 'reportName' },
        { header: 'Report Type', accessor: 'reportType' },
        { header: 'Related Project / Scope', accessor: 'projectTitle' },
        { header: 'Covered Period', accessor: 'coveredPeriod' },
        { header: 'Generated', accessor: 'dateGenerated' },

        { header: 'Actions', render: (row) => (
            <div className="flex space-x-3">
                <button className="text-gray-600 hover:text-gray-900 font-medium hover:underline text-xs" onClick={() => navigate(`/monitor-report/${row.id}`)}>View Report</button>
                <button className="text-gray-600 hover:text-blue-600 hover:underline text-xs flex items-center" onClick={() => alert("Mock: Report Data Regenerated from source records!")}>
                    <RefreshCw className="w-3 h-3 mr-1"/> Regenerate
                </button>
            </div>
        )}
    ];

    return (
        <div className="space-y-4">
            
            {/* New Generation Panel placed above the table block */}
            <ReportGeneratorPanel />

            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2 pt-4">
                <div>
                    <h3 className="text-lg font-bold">Past Generated Reports</h3>
                    <p className="text-sm text-gray-500">Previously generated report outputs stored in the system.</p>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4 bg-gray-50 p-2 border border-gray-200 rounded">
                <div className="flex space-x-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="w-4 h-4 text-gray-400" /></div>
                        <input type="text" className="wireframe-input pl-10 bg-white" placeholder="Search report name or project..." />
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="wireframe-btn flex items-center bg-white"><Download className="w-3 h-3 mr-2" /> Export Spreadsheet</button>
                    <button className="wireframe-btn flex items-center bg-white"><Download className="w-3 h-3 mr-2" /> Export PDF</button>
                </div>
            </div>

            <DataTable columns={columns} data={mockGeneratedReports} />
        </div>
    );
};

export default GeneratedReportsTable;
