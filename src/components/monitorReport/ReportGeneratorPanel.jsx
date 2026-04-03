import React, { useState } from 'react';
import { RefreshCw, FileText, X } from 'lucide-react';

const mockProjects = [
    { id: 'All Projects', title: 'All Projects' },
    { id: 'PRJ-2026-001', title: 'Community Literacy Case Study' },
    { id: 'PRJ-2026-002', title: 'Digital Livelihood for Brgy. San Juan' }
];

const ReportGeneratorPanel = () => {
    const [formData, setFormData] = useState({
        reportType: 'Project Performance Report',
        projectId: 'All Projects',
        quarter: 'All Quarters',
        year: '2026',
        periodStart: '',
        periodEnd: '',
        collegeUnit: 'All Units',
        activityType: 'All Types',
        includeBeneficiaryStats: true,
        includeEvaluationSummary: true,
        includeDocCompleteness: true
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleReset = () => {
        setFormData({
            reportType: 'Project Performance Report',
            projectId: 'All Projects',
            quarter: 'All Quarters',
            year: '2026',
            periodStart: '',
            periodEnd: '',
            collegeUnit: 'All Units',
            activityType: 'All Types',
            includeBeneficiaryStats: true,
            includeEvaluationSummary: true,
            includeDocCompleteness: true
        });
    };

    const handleGenerate = () => {
        alert("Mock: Compiling new report using selected filters...");
    };

    return (
        <div className="wireframe-card bg-gray-50 border-dashed border-gray-300 mb-8 p-6">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Generate Project Report</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="wireframe-label">Report Type</label>
                    <select className="wireframe-input bg-white" value={formData.reportType} onChange={e => handleChange('reportType', e.target.value)}>
                        <option>Project Performance Report</option>
                        <option>Beneficiary Summary Report</option>
                        <option>Evaluation Summary Report</option>
                        <option>Compliance Report</option>
                        <option>Activity Monitoring Report</option>
                    </select>
                </div>
                
                <div>
                    <label className="wireframe-label">Project Scope</label>
                    <select className="wireframe-input bg-white" value={formData.projectId} onChange={e => handleChange('projectId', e.target.value)}>
                        {mockProjects.map(p => <option key={p.id} value={p.id}>{p.id === 'All Projects' ? 'All Projects' : `${p.id} - ${p.title}`}</option>)}
                    </select>
                </div>

                <div>
                    <label className="wireframe-label">College / Unit <span className="font-normal text-gray-400">(Optional)</span></label>
                    <select className="wireframe-input bg-white" value={formData.collegeUnit} onChange={e => handleChange('collegeUnit', e.target.value)}>
                        <option>All Units</option>
                        <option>CBA</option>
                        <option>CAS</option>
                        <option>COE</option>
                    </select>
                </div>

                <div>
                    <label className="wireframe-label">Quarter</label>
                    <select className="wireframe-input bg-white" value={formData.quarter} onChange={e => handleChange('quarter', e.target.value)}>
                        <option>All Quarters</option>
                        <option>Q1</option>
                        <option>Q2</option>
                        <option>Q3</option>
                        <option>Q4</option>
                    </select>
                </div>

                <div>
                    <label className="wireframe-label">Year</label>
                    <select className="wireframe-input bg-white" value={formData.year} onChange={e => handleChange('year', e.target.value)}>
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                    </select>
                </div>

                <div>
                    <label className="wireframe-label">Activity Type <span className="font-normal text-gray-400">(Optional)</span></label>
                    <select className="wireframe-input bg-white" value={formData.activityType} onChange={e => handleChange('activityType', e.target.value)}>
                        <option>All Types</option>
                        <option>Training</option>
                        <option>Seminar</option>
                        <option>Service</option>
                    </select>
                </div>

                <div>
                    <label className="wireframe-label">Covered Period Start <span className="font-normal text-gray-400">(Optional)</span></label>
                    <input type="date" className="wireframe-input bg-white" value={formData.periodStart} onChange={e => handleChange('periodStart', e.target.value)} />
                </div>

                <div>
                    <label className="wireframe-label">Covered Period End <span className="font-normal text-gray-400">(Optional)</span></label>
                    <input type="date" className="wireframe-input bg-white" value={formData.periodEnd} onChange={e => handleChange('periodEnd', e.target.value)} />
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="font-bold text-gray-700 text-sm mb-3">Include in Report Output</p>
                <div className="flex flex-wrap gap-6">
                    <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="form-checkbox text-gray-600 focus:ring-gray-500 rounded-sm" checked={formData.includeBeneficiaryStats} onChange={e => handleChange('includeBeneficiaryStats', e.target.checked)} />
                        <span>Include Beneficiary Statistics</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="form-checkbox text-gray-600 focus:ring-gray-500 rounded-sm" checked={formData.includeEvaluationSummary} onChange={e => handleChange('includeEvaluationSummary', e.target.checked)} />
                        <span>Include Evaluation Summary</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="form-checkbox text-gray-600 focus:ring-gray-500 rounded-sm" checked={formData.includeDocCompleteness} onChange={e => handleChange('includeDocCompleteness', e.target.checked)} />
                        <span>Include Document Completeness</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-end space-x-3">
                <button className="wireframe-btn flex items-center" onClick={handleReset}><X className="w-4 h-4 mr-1"/> Reset Filters</button>
                <button className="wireframe-btn-primary flex items-center" onClick={handleGenerate}><FileText className="w-4 h-4 mr-2"/> Generate Report Output</button>
            </div>
        </div>
    );
};

export default ReportGeneratorPanel;
