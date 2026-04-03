import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProposalWorkPlanStep = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, { id: Date.now().toString(), activity_name: '', start_date: '', end_date: '', expected_output: '' }]);
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
                <h3 className="text-lg font-bold">Project Work Plan</h3>
                <button type="button" className="wireframe-btn text-xs flex items-center py-1" onClick={handleAdd}><Plus className="w-3 h-3 mr-1"/> Add Work Plan Row</button>
            </div>
            
            {data.length === 0 ? (
                <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded">No work plan entries added yet.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 border-b border-gray-300">
                            <tr>
                                <th className="p-2 w-1/3">Activity Name <span className="text-red-500">*</span></th>
                                <th className="p-2">Start Date <span className="text-red-500">*</span></th>
                                <th className="p-2">End Date <span className="text-red-500">*</span></th>
                                <th className="p-2 w-1/3">Expected Output</th>
                                <th className="p-2 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map(wp => {
                                const isDateInvalid = wp.start_date && wp.end_date && new Date(wp.start_date) > new Date(wp.end_date);
                                
                                return (
                                    <tr key={wp.id} className="bg-white">
                                        <td className="p-2 align-top">
                                            <input type="text" className="wireframe-input" required value={wp.activity_name} onChange={e => handleChange(wp.id, 'activity_name', e.target.value)} />
                                        </td>
                                        <td className="p-2 align-top">
                                            <input type="date" className={`wireframe-input ${isDateInvalid ? 'border-red-500' : ''}`} required value={wp.start_date} onChange={e => handleChange(wp.id, 'start_date', e.target.value)} />
                                        </td>
                                        <td className="p-2 align-top">
                                            <input type="date" className={`wireframe-input ${isDateInvalid ? 'border-red-500' : ''}`} required value={wp.end_date} onChange={e => handleChange(wp.id, 'end_date', e.target.value)} />
                                            {isDateInvalid && <div className="text-red-500 text-xs mt-1">End before Start</div>}
                                        </td>
                                        <td className="p-2 align-top">
                                            <textarea className="wireframe-input" rows="1" value={wp.expected_output} onChange={e => handleChange(wp.id, 'expected_output', e.target.value)}></textarea>
                                        </td>
                                        <td className="p-2 text-right align-top">
                                            <button type="button" onClick={() => handleRemove(wp.id)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 className="w-4 h-4"/></button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
export default ProposalWorkPlanStep;
