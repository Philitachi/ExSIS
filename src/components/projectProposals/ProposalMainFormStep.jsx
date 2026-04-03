import React from 'react';

const ProposalMainFormStep = ({ data, updateData }) => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2">F-EXT-002 Main Proposal Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="wireframe-label">Proposal Type <span className="text-red-500">*</span></label>
                    <select className="wireframe-input" value={data.proposal_type} onChange={e => updateData('proposal_type', e.target.value)} required>
                        <option value="">Select Type</option>
                        <option>Research</option>
                        <option>ICT</option>
                        <option>Extension</option>
                        <option>Training</option>
                        <option>Others</option>
                    </select>
                </div>
                <div>
                    <label className="wireframe-label">Project Title <span className="text-red-500">*</span></label>
                    <input type="text" className="wireframe-input" required value={data.project_title} onChange={e => updateData('project_title', e.target.value)} />
                </div>
                <div>
                    <label className="wireframe-label">Leader / Proponent <span className="text-red-500">*</span></label>
                    <input type="text" className="wireframe-input" required value={data.leader_proponent} onChange={e => updateData('leader_proponent', e.target.value)} />
                </div>
                <div>
                    <label className="wireframe-label">Tel / Fax / Email <span className="text-red-500">*</span></label>
                    <input type="text" className="wireframe-input" required value={data.tel_fax_email} onChange={e => updateData('tel_fax_email', e.target.value)} />
                </div>
                <div className="md:col-span-2">
                    <label className="wireframe-label">Address <span className="text-red-500">*</span></label>
                    <input type="text" className="wireframe-input" required value={data.address} onChange={e => updateData('address', e.target.value)} />
                </div>
                <div className="md:col-span-2">
                    <label className="wireframe-label">Implementation Address <span className="text-red-500">*</span></label>
                    <input type="text" className="wireframe-input" required value={data.implementation_address} onChange={e => updateData('implementation_address', e.target.value)} />
                </div>
                <div>
                    <label className="wireframe-label">Date of Implementation</label>
                    <input type="date" className="wireframe-input" value={data.date_of_implementation} onChange={e => updateData('date_of_implementation', e.target.value)} />
                </div>
                <div>
                    <label className="wireframe-label">Completion Date</label>
                    <input type="date" className="wireframe-input" value={data.completion_date} onChange={e => updateData('completion_date', e.target.value)} />
                </div>
                <div>
                    <label className="wireframe-label">Project Duration (Months)</label>
                    <input type="number" step="0.1" className="wireframe-input" value={data.project_duration} onChange={e => updateData('project_duration', e.target.value)} />
                </div>
                <div className="md:col-span-2">
                    <label className="wireframe-label">Nature and Significance of the Project <span className="text-red-500">*</span></label>
                    <textarea className="wireframe-input h-24" required value={data.nature_and_significant_of_the_project} onChange={e => updateData('nature_and_significant_of_the_project', e.target.value)}></textarea>
                </div>
            </div>
        </div>
    );
};
export default ProposalMainFormStep;
