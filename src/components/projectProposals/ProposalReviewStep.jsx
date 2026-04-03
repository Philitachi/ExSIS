import React from 'react';

const ProposalReviewStep = ({ mainData, rrlData, workPlans, financialPlans, frameworkData }) => {
    const numRRL = rrlData.length;
    const numWorkPlans = workPlans.length;
    const numFinancials = financialPlans.length;
    const grandTotal = financialPlans.reduce((sum, item) => sum + (parseFloat(item.total_cost) || 0), 0);

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-400 pb-2">Review and Submit Proposal</h3>
            <p className="text-sm text-gray-500">Please review the captured information before finalizing this proposal. Status defaults to Draft until submitted.</p>

            <div className="grid gap-6">
                <section className="bg-white p-4 border border-gray-300 rounded shadow-sm">
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3">1. Main Proposal Form Data</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                        <li><span className="font-medium">Title:</span> {mainData.project_title || '--'}</li>
                        <li><span className="font-medium">Type:</span> {mainData.proposal_type || '--'}</li>
                        <li><span className="font-medium">Leader/Proponent:</span> {mainData.leader_proponent || '--'}</li>
                        <li><span className="font-medium">Status:</span> Draft</li>
                    </ul>
                </section>

                <section className="bg-white p-4 border border-gray-300 rounded shadow-sm">
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3">2. Project RRL</h4>
                    <p className="text-sm text-gray-700 font-medium">Total Reference Entries: {numRRL}</p>
                </section>

                <section className="bg-white p-4 border border-gray-300 rounded shadow-sm">
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3">3. Project Work Plan</h4>
                    <p className="text-sm text-gray-700 font-medium">Total Activity Entries: {numWorkPlans}</p>
                </section>

                <section className="bg-white p-4 border border-gray-300 rounded shadow-sm">
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3">4. Project Financial Plan</h4>
                    <p className="text-sm text-gray-700 font-medium">Total Budget Rows: {numFinancials}</p>
                    <p className="text-lg font-bold text-gray-800 mt-2">Grand Total: ₱ {grandTotal.toLocaleString()}</p>
                </section>

                <section className="bg-white p-4 border border-gray-300 rounded shadow-sm">
                    <h4 className="font-bold border-b border-gray-200 pb-2 mb-3">5. Project Framework</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                        <li><span className="font-medium">Type:</span> {frameworkData.framework_type || '--'}</li>
                        <li><span className="font-medium">Description provided:</span> {frameworkData.description ? 'Yes' : 'No'}</li>
                    </ul>
                </section>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p className="text-sm text-yellow-800 font-medium pb-1">Ready to finalise?</p>
                <p className="text-sm text-yellow-700">Submit for Review will update the parent project status and link all child records under it within the mock datasets.</p>
            </div>
        </div>
    );
};
export default ProposalReviewStep;
