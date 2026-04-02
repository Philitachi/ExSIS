import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { Save, Trash2, Calendar as CalendarIcon } from 'lucide-react';

const UpdateScheduledActivityPage = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader 
                title="Update Scheduled Activity" 
                subtitle="Modify timeline, milestone, or deadline details" 
            />

            <div className="wireframe-card space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="wireframe-label">Activity Title</label>
                        <input type="text" className="wireframe-input" defaultValue="Q1 Reporting Review" />
                    </div>
                    <div>
                        <label className="wireframe-label">Date</label>
                        <input type="date" className="wireframe-input" defaultValue="2026-03-31" />
                    </div>
                    <div>
                        <label className="wireframe-label">Category</label>
                        <select className="wireframe-input">
                            <option>Milestone</option>
                            <option>Deadline</option>
                            <option>Review</option>
                            <option selected>Report Due</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="wireframe-label">Related Project (Optional)</label>
                        <select className="wireframe-input">
                            <option>None / General Requirement</option>
                            <option selected>PRJ-2026-001 - Community Literacy Drive</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="wireframe-label">Responsible Unit / Assigned Person</label>
                        <input type="text" className="wireframe-input" defaultValue="Review Committee" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="wireframe-label">Notes / Description</label>
                        <textarea className="wireframe-input" rows="3" defaultValue="Quarterly review of documentation requirements."></textarea>
                    </div>
                </div>

                <div className="flex justify-between border-t border-gray-300 pt-6">
                    <button className="text-red-600 hover:text-red-800 font-medium flex items-center text-sm" onClick={() => navigate('/schedules-alerts')}><Trash2 className="w-4 h-4 mr-2" /> Delete Schedule</button>
                    <div className="flex space-x-4">
                        <button className="wireframe-btn" onClick={() => navigate('/schedules-alerts')}>Back to Schedules</button>
                        <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/schedules-alerts')}><Save className="w-4 h-4 mr-2" /> Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateScheduledActivityPage;
