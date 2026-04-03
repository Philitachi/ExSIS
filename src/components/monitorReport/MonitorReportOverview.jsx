import React from 'react';
import StatCard from '../common/StatCard';
import { mockKpiData } from '../../data/mockMonitorReport';
import { BarChart2, PieChart, Activity } from 'lucide-react';

const MonitorReportOverview = () => {
    return (
        <div className="space-y-8">
            {/* KPI Summary */}
            <section>
                <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">KPI Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard title="Avg Evaluation Score" value={mockKpiData.avgEvaluationScore + "/5.0"} subtitle="Current Quarter" />
                    <StatCard title="Evaluations Encoded" value={mockKpiData.evaluationsEncoded} subtitle="Total respondent forms" />
                    <StatCard title="Reports Generated" value={mockKpiData.reportsGenerated} subtitle="System outputs" />
                    <StatCard title="Pending Validation" value={mockKpiData.pendingValidation} subtitle="Requires review" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <StatCard title="Total Beneficiaries" value={mockKpiData.totalBeneficiaries} subtitle="Across all projects" />
                    <StatCard title="Tracked Projects" value={mockKpiData.projectsWithBeneficiaryData} subtitle="With beneficiary data" />
                    <StatCard title="Linked Documents" value={mockKpiData.linkedDocumentsCount} subtitle="Attendance, summaries..." />
                    <StatCard title="Stale Reports" value={mockKpiData.reportsPendingRefresh} subtitle="Pending refresh" />
                </div>
            </section>

            {/* Evaluation Analytics Placeholders */}
            <section>
                <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Evaluation Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="wireframe-card flex flex-col items-center justify-center p-8 h-64 border-dashed bg-gray-50">
                        <BarChart2 className="w-10 h-10 text-gray-400 mb-2" />
                        <h4 className="font-bold text-gray-700">Average Score by Project</h4>
                        <p className="text-xs text-gray-500 text-center mt-1">Placeholder for horizontal bar chart</p>
                    </div>
                    <div className="wireframe-card flex flex-col items-center justify-center p-8 h-64 border-dashed bg-gray-50">
                        <PieChart className="w-10 h-10 text-gray-400 mb-2" />
                        <h4 className="font-bold text-gray-700">Client Type Breakdown</h4>
                        <p className="text-xs text-gray-500 text-center mt-1">Placeholder for pie chart distribution</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MonitorReportOverview;
