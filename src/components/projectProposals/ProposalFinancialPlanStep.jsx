import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProposalFinancialPlanStep = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, { id: Date.now().toString(), item_description: '', category: 'Supplies', quantity: 1, unit_cost: 0, total_cost: 0 }]);
    };

    const handleRemove = (id) => {
        updateData(data.filter(item => item.id !== id));
    };

    const handleChange = (id, field, value) => {
        updateData(data.map(item => {
            if (item.id === id) {
                const updatedItem = { ...item, [field]: value };
                if (field === 'quantity' || field === 'unit_cost') {
                    // Recalculate total_cost on the fly
                    const qty = parseFloat(updatedItem.quantity) || 0;
                    const cost = parseFloat(updatedItem.unit_cost) || 0;
                    updatedItem.total_cost = qty * cost;
                }
                return updatedItem;
            }
            return item;
        }));
    };

    const grandTotal = data.reduce((sum, item) => sum + (parseFloat(item.total_cost) || 0), 0);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <h3 className="text-lg font-bold">Project Financial Plan</h3>
                <button type="button" className="wireframe-btn text-xs flex items-center py-1" onClick={handleAdd}><Plus className="w-3 h-3 mr-1"/> Add Budget Row</button>
            </div>
            
            {data.length === 0 ? (
                <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded">No budget items added yet.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 border-b border-gray-300">
                            <tr>
                                <th className="p-2 w-1/3">Item Description <span className="text-red-500">*</span></th>
                                <th className="p-2">Category</th>
                                <th className="p-2 w-24">Quantity <span className="text-red-500">*</span></th>
                                <th className="p-2 w-32">Unit Cost (₱) <span className="text-red-500">*</span></th>
                                <th className="p-2 w-32">Total Cost (₱)</th>
                                <th className="p-2 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map(fin => (
                                <tr key={fin.id} className="bg-white">
                                    <td className="p-2 align-top">
                                        <input type="text" className="wireframe-input" required value={fin.item_description} onChange={e => handleChange(fin.id, 'item_description', e.target.value)} />
                                    </td>
                                    <td className="p-2 align-top">
                                        <select className="wireframe-input" value={fin.category} onChange={e => handleChange(fin.id, 'category', e.target.value)}>
                                            <option>Personnel</option>
                                            <option>Equipment</option>
                                            <option>Supplies</option>
                                            <option>Travel</option>
                                            <option>Others</option>
                                        </select>
                                    </td>
                                    <td className="p-2 align-top">
                                        <input type="number" step="0.01" className="wireframe-input" required value={fin.quantity} onChange={e => handleChange(fin.id, 'quantity', e.target.value)} />
                                    </td>
                                    <td className="p-2 align-top">
                                        <input type="number" step="0.01" className="wireframe-input" required value={fin.unit_cost} onChange={e => handleChange(fin.id, 'unit_cost', e.target.value)} />
                                    </td>
                                    <td className="p-2 align-top pt-4 font-bold text-gray-700">
                                        {Number(fin.total_cost).toLocaleString()}
                                    </td>
                                    <td className="p-2 text-right align-top">
                                        <button type="button" onClick={() => handleRemove(fin.id)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 className="w-4 h-4"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-gray-50 border-t-2 border-gray-400 font-bold">
                                <td colSpan="4" className="p-3 text-right">Grand Total Budget:</td>
                                <td colSpan="2" className="p-3 text-lg">₱ {grandTotal.toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
};
export default ProposalFinancialPlanStep;
