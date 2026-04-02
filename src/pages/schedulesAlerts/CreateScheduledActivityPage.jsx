import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { Save, Plus } from 'lucide-react';

const CreateScheduledActivityPage = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader title="Create Scheduled Activity" subtitle="Add events, deadlines, and milestones to the Master Calendar." />

            <div className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Event Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Title</label>
                            <input type="text" className="wireframe-input" placeholder="Event name..." />
                        </div>
                        <div>
                            <label className="wireframe-label">Date</label>
                            <input type="date" className="wireframe-input" />
                        </div>
                        <div>
                            <label className="wireframe-label">Timeline / Time</label>
                            <input type="time" className="wireframe-input" />
                        </div>
                        <div>
                            <label className="wireframe-label">Event Type</label>
                            <select className="wireframe-input">
                                <option>Activity</option>
                                <option>Milestone</option>
                                <option>Deadline</option>
                                <option>Review</option>
                                <option>Report Due</option>
                            </select>
                        </div>
                        <div>
                            <label className="wireframe-label">Related Project</label>
                            <select className="wireframe-input">
                                <option>N/A (General Calendar Event)</option>
                                <option>PRJ-2026-001</option>
                                <option>PRJ-2026-002</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Responsible Unit / Assigned Person</label>
                            <input type="text" className="wireframe-input" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Notes / Description</label>
                            <textarea className="wireframe-input h-24" placeholder="Additional details..."></textarea>
                        </div>
                    </div>
                </section>

                <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
                    <button className="wireframe-btn" onClick={() => navigate('/schedules-alerts')}>Cancel</button>
                    <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/schedules-alerts')}><Save className="w-4 h-4 mr-2" /> Save Schedule</button>
                </div>
            </div>
        </div>
    );
};

export default CreateScheduledActivityPage;
