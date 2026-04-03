import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProposalRRLStep = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, { id: Date.now().toString(), title: '', author: '', date_published: '', date_access: '', url: '', document_type: 'Journal' }]);
    };

    const handleRemove = (id) => {
        updateData(data.filter(item => item.id !== id));
    };

    const handleChange = (id, field, value) => {
        updateData(data.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <h3 className="text-lg font-bold">Project RRL</h3>
                <button type="button" className="wireframe-btn text-xs flex items-center py-1" onClick={handleAdd}><Plus className="w-3 h-3 mr-1"/> Add Reference</button>
            </div>
            
            {data.length === 0 ? (
                <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded">No references added yet. Click 'Add Reference' above.</div>
            ) : (
                <div className="space-y-4">
                    {data.map((rrl, index) => (
                        <div key={rrl.id} className="relative border border-gray-300 rounded p-4 bg-gray-50">
                            <button type="button" onClick={() => handleRemove(rrl.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4"/></button>
                            <h4 className="font-bold mb-4 text-sm">Reference #{index + 1}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="wireframe-label">Title <span className="text-red-500">*</span></label>
                                    <input type="text" className="wireframe-input bg-white" required value={rrl.title} onChange={e => handleChange(rrl.id, 'title', e.target.value)} />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="wireframe-label">Author <span className="text-red-500">*</span></label>
                                    <textarea className="wireframe-input bg-white" rows="2" required value={rrl.author} onChange={e => handleChange(rrl.id, 'author', e.target.value)}></textarea>
                                </div>
                                <div>
                                    <label className="wireframe-label">Date Published</label>
                                    <input type="date" className="wireframe-input bg-white" value={rrl.date_published} onChange={e => handleChange(rrl.id, 'date_published', e.target.value)} />
                                </div>
                                <div>
                                    <label className="wireframe-label">Date Accessed</label>
                                    <input type="date" className="wireframe-input bg-white" value={rrl.date_access} onChange={e => handleChange(rrl.id, 'date_access', e.target.value)} />
                                </div>
                                <div>
                                    <label className="wireframe-label">Document Type <span className="text-red-500">*</span></label>
                                    <select className="wireframe-input bg-white" required value={rrl.document_type} onChange={e => handleChange(rrl.id, 'document_type', e.target.value)}>
                                        <option>Journal</option>
                                        <option>Endorsement</option>
                                        <option>Recommendation</option>
                                        <option>Report</option>
                                        <option>Website</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="wireframe-label">URL</label>
                                    <input type="text" className="wireframe-input bg-white" value={rrl.url} onChange={e => handleChange(rrl.id, 'url', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default ProposalRRLStep;
