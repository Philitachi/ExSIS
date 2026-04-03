import React from 'react';

const ProposalFrameworkStep = ({ data, updateData }) => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2">Project Framework</h3>
            <p className="text-sm text-gray-500">Provide the theoretical or conceptual basis of the project along with its diagram placeholder.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="wireframe-label">Framework Type</label>
                    <select className="wireframe-input" value={data.framework_type} onChange={e => updateData('framework_type', e.target.value)}>
                        <option>Logical</option>
                        <option>Theoretical</option>
                        <option>Conceptual</option>
                        <option>Others</option>
                    </select>
                </div>
                <div>
                    <label className="wireframe-label">Diagram URL (Placeholder)</label>
                    <input type="text" className="wireframe-input" placeholder="https://..." value={data.diagram_url} onChange={e => updateData('diagram_url', e.target.value)} />
                </div>
                <div className="md:col-span-2">
                    <label className="wireframe-label">Framework Description <span className="text-red-500">*</span></label>
                    <textarea className="wireframe-input h-32" required placeholder="Describe the framework components..." value={data.description} onChange={e => updateData('description', e.target.value)}></textarea>
                </div>
            </div>
            
            {/* Visual placeholder for diagram uploaded */}
            {data.diagram_url && (
                <div className="border border-dashed border-gray-400 bg-gray-100 h-48 flex items-center justify-center text-gray-500 rounded">
                    Diagram Image Preview placeholder
                </div>
            )}
        </div>
    );
};
export default ProposalFrameworkStep;
