import React from 'react';
import DataTable from '../common/DataTable';
import FilterBar from '../common/FilterBar';
import { mockRawEvaluations } from '../../data/mockMonitorReport';
import { Search, Download, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RawEvaluationTable = () => {
    const navigate = useNavigate();

    const columns = [
        { header: 'Eval ID', accessor: 'id' },
        { header: 'Project Title', accessor: 'projectTitle' },
        { header: 'Activity Title', accessor: 'activityTitle' },
        { header: 'Respondent', render: (row) => row.respondentName || 'Anonymous' },
        { header: 'Client Type', accessor: 'clientType' },
        { header: 'Mean', accessor: 'meanScore' },
        { header: 'Submitted', accessor: 'submissionDate' },
        { header: 'Actions', render: (row) => (
            <div className="flex space-x-2">
                <button className="text-gray-600 hover:text-gray-900 font-medium hover:underline text-xs" onClick={() => alert("Mock: Opening detailed evaluation...")}>View</button>
            </div>
        )}
    ];

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                <div>
                    <h3 className="text-lg font-bold">Raw Evaluation Data (F-EXT-007)</h3>
                    <p className="text-sm text-gray-500">Source encoded inputs from respondents.</p>
                </div>
            </div>

            <FilterBar>
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="w-4 h-4 text-gray-400" /></div>
                    <input type="text" className="wireframe-input pl-10" placeholder="Search respondent or activity..." />
                </div>
                <select className="wireframe-input"><option>All Projects</option></select>
                <select className="wireframe-input"><option>Client Type</option></select>
                <select className="wireframe-input"><option>Quarter</option></select>
                <button className="wireframe-btn flex items-center"><Download className="w-3 h-3 mr-2" /> Export CSV</button>
            </FilterBar>

            <DataTable columns={columns} data={mockRawEvaluations} />
        </div>
    );
};

export default RawEvaluationTable;
