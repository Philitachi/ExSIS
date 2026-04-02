import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { Save, Send, Plus, Trash2 } from 'lucide-react';

const CreateNewProposalPage = () => {
  const navigate = useNavigate();

  // Dynamic States
  const [references, setReferences] = useState([{ id: 1, title: '', author: '', year: '', type: 'Journal' }]);
  const [workplan, setWorkplan] = useState([{ id: 1, activity: '', start: '', end: '', output: '' }]);
  const [financials, setFinancials] = useState([{ id: 1, item: '', category: 'Supplies', qty: 1, cost: 0 }]);
  const [personnel, setPersonnel] = useState([{ id: 1, name: '', sex: 'M', designationOffice: '', designationProject: '', timePct: '10%' }]);

  const addRow = (setter, state, defaultValues) => {
    setter([...state, { id: Date.now(), ...defaultValues }]);
  };

  const removeRow = (setter, state, id) => {
    setter(state.filter(r => r.id !== id));
  };

  const updateRow = (setter, state, id, field, value) => {
    setter(state.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  return (
    <div className="pb-12 text-sm md:text-base max-w-5xl mx-auto">
      <PageHeader title="Create New Proposal" subtitle="Encode F-EXT-002 main proposal data and related structures." />

      <div className="space-y-6">
        
        {/* Section A */}
        <section className="wireframe-card">
          <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section A: Encode F-EXT-002 Main Proposal Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div><label className="wireframe-label">Proposal Type</label><select className="wireframe-input"><option>Extension Program</option><option>Training Activity</option></select></div>
            <div className="lg:col-span-2"><label className="wireframe-label">Project Title</label><input type="text" className="wireframe-input" placeholder="Enter Full Title" /></div>
            <div><label className="wireframe-label">Leader / Proponent</label><input type="text" className="wireframe-input" defaultValue="Coordinator" /></div>
            <div><label className="wireframe-label">Contact Information</label><input type="text" className="wireframe-input" placeholder="09XX-XXX-XXXX" /></div>
            <div className="lg:col-span-3"><label className="wireframe-label">Implementation Address</label><input type="text" className="wireframe-input" placeholder="Barangay, City..." /></div>
            <div><label className="wireframe-label">Date of Implementation</label><input type="date" className="wireframe-input" /></div>
            <div><label className="wireframe-label">Completion Date</label><input type="date" className="wireframe-input" /></div>
            <div className="lg:col-span-3"><label className="wireframe-label">Nature and Significance</label><textarea className="wireframe-input" rows="3"></textarea></div>
          </div>
        </section>

        {/* Section B: References */}
        <section className="wireframe-card">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
            <h3 className="text-lg font-bold">Section B: Related References / Literature</h3>
            <button className="wireframe-btn text-xs flex items-center py-1" onClick={() => addRow(setReferences, references, {title:'', author:'', year:'', type:'Journal'})}><Plus className="w-3 h-3 mr-1"/> Add Row</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-left">
              <thead className="bg-gray-50">
                <tr><th className="p-2">Title</th><th className="p-2">Author</th><th className="p-2">Year</th><th className="p-2">Doc Type</th><th className="p-2"></th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {references.map(r => (
                  <tr key={r.id}>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.title} onChange={e=>updateRow(setReferences, references, r.id, 'title', e.target.value)}/></td>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.author} onChange={e=>updateRow(setReferences, references, r.id, 'author', e.target.value)}/></td>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-16" value={r.year} onChange={e=>updateRow(setReferences, references, r.id, 'year', e.target.value)}/></td>
                    <td className="p-2"><select className="wireframe-input py-1 px-2 h-8 text-xs bg-white"><option>Journal</option><option>Report</option><option>Web</option></select></td>
                    <td className="p-2 text-right"><button onClick={()=>removeRow(setReferences, references, r.id)} className="text-red-500"><Trash2 className="w-4 h-4"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C: Workplan */}
        <section className="wireframe-card">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
            <h3 className="text-lg font-bold">Section C: Work Plan</h3>
            <button className="wireframe-btn text-xs flex items-center py-1" onClick={() => addRow(setWorkplan, workplan, {activity:'', start:'', end:'', output:''})}><Plus className="w-3 h-3 mr-1"/> Add Row</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-left">
              <thead className="bg-gray-50"><tr><th className="p-2">Activity Name</th><th className="p-2">Start Date</th><th className="p-2">End Date</th><th className="p-2">Expected Output</th><th className="p-2"></th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                {workplan.map(r => (
                  <tr key={r.id}>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.activity} onChange={e=>updateRow(setWorkplan, workplan, r.id, 'activity', e.target.value)}/></td>
                    <td className="p-2"><input type="date" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.start} onChange={e=>updateRow(setWorkplan, workplan, r.id, 'start', e.target.value)}/></td>
                    <td className="p-2"><input type="date" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.end} onChange={e=>updateRow(setWorkplan, workplan, r.id, 'end', e.target.value)}/></td>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.output} onChange={e=>updateRow(setWorkplan, workplan, r.id, 'output', e.target.value)}/></td>
                    <td className="p-2 text-right"><button onClick={()=>removeRow(setWorkplan, workplan, r.id)} className="text-red-500"><Trash2 className="w-4 h-4"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section D: Financials */}
        <section className="wireframe-card">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
            <h3 className="text-lg font-bold">Section D: Financial Plan</h3>
            <button className="wireframe-btn text-xs flex items-center py-1" onClick={() => addRow(setFinancials, financials, {item:'', category:'Supplies', qty:1, cost:0})}><Plus className="w-3 h-3 mr-1"/> Add Row</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-left">
              <thead className="bg-gray-50"><tr><th className="p-2">Description</th><th className="p-2">Category</th><th className="p-2">Qty</th><th className="p-2">Unit Cost</th><th className="p-2">Total</th><th className="p-2"></th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                {financials.map(r => (
                  <tr key={r.id}>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.item} onChange={e=>updateRow(setFinancials, financials, r.id, 'item', e.target.value)}/></td>
                    <td className="p-2"><select className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.category} onChange={e=>updateRow(setFinancials, financials, r.id, 'category', e.target.value)}><option>Supplies</option><option>Travel</option><option>Honorarium</option></select></td>
                    <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-16" value={r.qty} onChange={e=>updateRow(setFinancials, financials, r.id, 'qty', parseFloat(e.target.value)||0)}/></td>
                    <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-24" value={r.cost} onChange={e=>updateRow(setFinancials, financials, r.id, 'cost', parseFloat(e.target.value)||0)}/></td>
                    <td className="p-2 font-medium">₱ {(r.qty * r.cost).toLocaleString()}</td>
                    <td className="p-2 text-right"><button onClick={()=>removeRow(setFinancials, financials, r.id)} className="text-red-500"><Trash2 className="w-4 h-4"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section E: Framework */}
        <section className="wireframe-card">
          <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section E: Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="wireframe-label">Framework Type</label><select className="wireframe-input"><option>Conceptual Framework</option></select></div>
            <div>
              <label className="wireframe-label">Diagram Link / Upload</label>
              <div className="border border-dashed border-gray-400 bg-gray-50 flex items-center justify-center rounded h-10 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer">Upload image...</div>
            </div>
            <div className="md:col-span-2"><label className="wireframe-label">Description</label><textarea className="wireframe-input" rows="2"></textarea></div>
          </div>
        </section>

        {/* Section G: Personnel */}
        <section className="wireframe-card">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
            <h3 className="text-lg font-bold">Section F-G: Personnel Lineup</h3>
            <button className="wireframe-btn text-xs flex items-center py-1" onClick={() => addRow(setPersonnel, personnel, {name:'', sex:'M', designationOffice:'', designationProject:'', timePct:'10%'})}><Plus className="w-3 h-3 mr-1"/> Add Personnel</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-left">
              <thead className="bg-gray-50"><tr><th className="p-2">Name</th><th className="p-2">Sex</th><th className="p-2">Office Designation</th><th className="p-2">Project Role</th><th className="p-2">Time %</th><th className="p-2"></th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                {personnel.map(r => (
                  <tr key={r.id}>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.name} onChange={e=>updateRow(setPersonnel, personnel, r.id, 'name', e.target.value)}/></td>
                    <td className="p-2"><select className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.sex} onChange={e=>updateRow(setPersonnel, personnel, r.id, 'sex', e.target.value)}><option>M</option><option>F</option></select></td>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.designationOffice} onChange={e=>updateRow(setPersonnel, personnel, r.id, 'designationOffice', e.target.value)}/></td>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" value={r.designationProject} onChange={e=>updateRow(setPersonnel, personnel, r.id, 'designationProject', e.target.value)}/></td>
                    <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-16" value={r.timePct} onChange={e=>updateRow(setPersonnel, personnel, r.id, 'timePct', e.target.value)}/></td>
                    <td className="p-2 text-right"><button onClick={()=>removeRow(setPersonnel, personnel, r.id)} className="text-red-500"><Trash2 className="w-4 h-4"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="wireframe-card bg-gray-50">
          <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Coordinator Final Checks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="wireframe-label">Attestation Notes</label><textarea className="wireframe-input" rows="2" placeholder="Remarks..."></textarea></div>
          </div>
        </section>

        <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
          <button className="wireframe-btn" onClick={() => navigate('/project-proposals')}>Cancel</button>
          <button className="wireframe-btn flex items-center"><Save className="w-4 h-4 mr-2" /> Save Draft</button>
          <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/project-proposals')}><Send className="w-4 h-4 mr-2" /> Submit for Review</button>
        </div>
      </div>
    </div>
  );
};
export default CreateNewProposalPage;
