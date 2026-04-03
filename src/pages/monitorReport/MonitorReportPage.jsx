import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { FilePlus, FileText, Download, RefreshCw } from 'lucide-react';
import MonitorReportOverview from '../../components/monitorReport/MonitorReportOverview';
import BeneficiaryStatisticsPanel from '../../components/monitorReport/BeneficiaryStatisticsPanel';
import RawEvaluationTable from '../../components/monitorReport/RawEvaluationTable';
import GeneratedReportsTable from '../../components/monitorReport/GeneratedReportsTable';

const MonitorReportPage = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState('reports'); 

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <PageHeader 
                title="Monitor & Report" 
                subtitle="Track evaluation scores, beneficiary summaries, project metrics, and generate filtered project reports from saved system data." 
                action={
                    <div className="flex space-x-2">
                        <button onClick={() => navigate('/monitor-report/evaluation/new')} className="wireframe-btn-primary flex items-center text-xs">
                            <FilePlus className="w-3 h-3 mr-2" /> Submit F-EXT-007
                        </button>
                    </div>
                }
            />

            <div className="wireframe-card p-0 overflow-hidden">
                <div className="flex border-b border-gray-300 bg-gray-50 flex-wrap">
                    <button 
                    className={`py-3 px-6 font-medium text-sm border-b-2 ${tab === 'overview' ? 'border-gray-800 text-gray-900 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setTab('overview')}
                    >
                    Analytics Overview
                    </button>
                    <button 
                    className={`py-3 px-6 font-medium text-sm border-b-2 ${tab === 'beneficiaries' ? 'border-gray-800 text-gray-900 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setTab('beneficiaries')}
                    >
                    Beneficiary Statistics
                    </button>
                    <button 
                    className={`py-3 px-6 font-medium text-sm border-b-2 ${tab === 'evaluations' ? 'border-gray-800 text-gray-900 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setTab('evaluations')}
                    >
                    Raw Evaluation Data (F-EXT-007)
                    </button>
                    <button 
                    className={`py-3 px-6 font-medium text-sm border-b-2 ${tab === 'reports' ? 'border-gray-800 text-gray-900 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setTab('reports')}
                    >
                    Generated Project Reports
                    </button>
                </div>
                
                <div className="p-6">
                    {tab === 'overview' && <MonitorReportOverview />}
                    {tab === 'beneficiaries' && <BeneficiaryStatisticsPanel />}
                    {tab === 'evaluations' && <RawEvaluationTable />}
                    {tab === 'reports' && <GeneratedReportsTable />}
                </div>
            </div>
        </div>
    );
};

export default MonitorReportPage;
