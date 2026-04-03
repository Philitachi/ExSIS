import React from 'react';
import { mockBeneficiaryStats } from '../../data/mockMonitorReport';
import { Users } from 'lucide-react';

const BeneficiaryStatisticsPanel = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
                <h3 className="text-lg font-bold">Consolidated Beneficiary Statistics</h3>
                <p className="text-xs text-gray-500 italic">Source: Beneficiaries & Partners Module</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="wireframe-card bg-emerald-50 border-emerald-200 flex items-center p-6">
                    <Users className="w-8 h-8 text-emerald-600 mr-4" />
                    <div>
                        <p className="text-sm font-medium text-emerald-800">Total Beneficiaries Documented</p>
                        <h4 className="text-3xl font-bold text-emerald-900">{mockBeneficiaryStats.totalBeneficiaries}</h4>
                    </div>
                </div>
                <div className="wireframe-card bg-blue-50 border-blue-200 flex items-center p-6">
                    <Users className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                        <p className="text-sm font-medium text-blue-800">Total Surveyed Beneficiaries</p>
                        <h4 className="text-3xl font-bold text-blue-900">{mockBeneficiaryStats.totalSurveyed}</h4>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3 text-sm text-gray-700">Breakdown by Sector</h4>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr><th className="p-2 border-b">Sector</th><th className="p-2 border-b text-right">Count</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockBeneficiaryStats.bySector.map((s, i) => (
                                <tr key={i}><td className="p-2">{s.name}</td><td className="p-2 text-right font-medium">{s.value}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3 text-sm text-gray-700">Breakdown by Location</h4>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr><th className="p-2 border-b">Location</th><th className="p-2 border-b text-right">Count</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockBeneficiaryStats.byLocation.map((loc, i) => (
                                <tr key={i}><td className="p-2">{loc.name}</td><td className="p-2 text-right font-medium">{loc.value}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3 text-sm text-gray-700">Participant Category Breakdown</h4>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr><th className="p-2 border-b">Category</th><th className="p-2 border-b text-right">Count</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockBeneficiaryStats.byParticipantCategory.map((c, i) => (
                                <tr key={i}><td className="p-2">{c.name}</td><td className="p-2 text-right font-medium">{c.value}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default BeneficiaryStatisticsPanel;
