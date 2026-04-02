import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import StatCard from '../../components/common/StatCard';
import DataTable from '../../components/common/DataTable';
import { Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-12 text-sm md:text-base">
      <PageHeader 
        title="Project Report: PRJ-2026-001" 
        subtitle="Quarterly Performance Summary and Evaluation Stats"
        action={
            <div className="flex space-x-2">
                <button className="wireframe-btn flex items-center bg-white"><Download className="w-4 h-4 mr-2"/> Export PDF</button>
                <button className="wireframe-btn flex items-center bg-white"><FileText className="w-4 h-4 mr-2"/> Export CSV</button>
            </div>
        }
      />

      <div className="space-y-6">
        {/* KPI section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard label="Overall Evaluation Score" value="4.8/5.0" subtext="Excellent Status" />
            <StatCard label="Total Beneficiaries" value="342" subtext="Across 3 sectors" />
            <StatCard label="Budget Utilized" value="₱120,500" subtext="85% of allocated" />
            <StatCard label="Documents Verified" value="12/12" subtext="Complete" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart placeholders */}
            <section className="wireframe-card">
                <h3 className="font-bold border-b border-gray-200 pb-2 mb-4">Project Performance Summary</h3>
                <div className="bg-gray-50 border border-gray-200 border-dashed rounded h-64 flex items-center justify-center text-gray-500">
                    [ Line Chart Placeholder: Performance over time ]
                </div>
            </section>
            
            <section className="wireframe-card">
                <h3 className="font-bold border-b border-gray-200 pb-2 mb-4">Beneficiary Statistics</h3>
                <div className="bg-gray-50 border border-gray-200 border-dashed rounded h-64 flex items-center justify-center text-gray-500">
                    [ Pie Chart Placeholder: Demographic breakdown ]
                </div>
            </section>
        </div>

        {/* Document completeness summary */}
        <section className="wireframe-card">
            <h3 className="font-bold border-b border-gray-200 pb-2 mb-4">Document Completeness Summary</h3>
            <DataTable 
                columns={[
                    { header: 'Requirement', accessor: 'req' },
                    { header: 'Status', accessor: 'status' },
                    { header: 'Date Verified', accessor: 'date' }
                ]}
                data={[
                    { id: 1, req: 'F-EXT-002 Proposal', status: 'Approved', date: 'Jan 15, 2026' },
                    { id: 2, req: 'F-EXT-010 Attendance Logs', status: 'Verified', date: 'Mar 01, 2026' },
                    { id: 3, req: 'F-EXT-008 Summary Report', status: 'Verified', date: 'Mar 10, 2026' },
                    { id: 4, req: 'Activity Narrative Report', status: 'Pending Review', date: 'Mar 15, 2026' }
                ]}
            />
        </section>

        <div className="flex justify-end pt-4">
            <button className="wireframe-btn" onClick={() => navigate('/monitor-report')}>Return to Reports</button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage;
