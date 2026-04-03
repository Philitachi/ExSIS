import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { Save, Calendar } from 'lucide-react';
import { scheduledActivities } from '../../data/mockSchedulesAlerts';

// Mock list of projects for the dropdown
const mockProjects = [
    { id: 'PRJ-2026-001', title: 'Community Literacy Case Study' },
    { id: 'PRJ-2026-002', title: 'Digital Livelihood for Brgy. San Juan' }
];

const CreateScheduledActivityPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        event_type: 'Activity',
        project_proposal_id: '',
        main_date: '',
        end_date: '',
        timelineText: '',
        responsibleUnitOrAssignedPerson: '',
        description: '',
        status: 'Scheduled'
    });

    const [errors, setErrors] = useState({});
    const [saveSuccess, setSaveSuccess] = useState('');

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: '' });
    };

    const isDeadlineMode = ['Deadline', 'Report Due'].includes(formData.event_type);

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.event_type) newErrors.event_type = 'Event Type is required';
        if (!formData.main_date) newErrors.main_date = 'Date is required';

        if (!isDeadlineMode && formData.main_date && formData.end_date) {
            if (new Date(formData.main_date) > new Date(formData.end_date)) {
                newErrors.end_date = 'End Date cannot be earlier than Start Date';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = (isDraft = false) => {
        if (!isDraft && !validate()) {
            return;
        }

        const newRecord = {
            id: Date.now(),
            project_proposal_id: formData.project_proposal_id || null,
            projectTitle: formData.project_proposal_id ? mockProjects.find(p => p.id === formData.project_proposal_id)?.title : 'N/A',
            title: formData.title,
            event_type: formData.event_type,
            start_date: isDeadlineMode ? '' : formData.main_date,
            end_date: isDeadlineMode ? '' : formData.end_date,
            deadline: isDeadlineMode ? formData.main_date : '',
            timelineText: formData.timelineText,
            responsibleUnitOrAssignedPerson: formData.responsibleUnitOrAssignedPerson,
            description: formData.description,
            status: formData.status,
            created_by: 'Coordinator',
            updated_at: new Date().toISOString()
        };

        // Mock saving
        console.log("Mock Save:", newRecord);
        scheduledActivities.push(newRecord);

        setSaveSuccess(isDraft ? 'Draft saved successfully!' : 'Schedule created and saved successfully!');
        
        setTimeout(() => {
            setSaveSuccess('');
            if (!isDraft) navigate('/schedules-alerts');
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader title="Create Scheduled Activity" subtitle="Add manual events, milestones, and deadlines to the Master Calendar." />

            {saveSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-medium flex items-center">
                    <Save className="w-5 h-5 mr-2" /> {saveSuccess}
                </div>
            )}

            <div className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Event Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Title <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className={`wireframe-input ${errors.title ? 'border-red-500' : ''}`} 
                                placeholder="Event name..." 
                                value={formData.title} 
                                onChange={e => handleChange('title', e.target.value)} 
                            />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                        </div>

                        <div>
                            <label className="wireframe-label">Event Type <span className="text-red-500">*</span></label>
                            <select 
                                className="wireframe-input" 
                                value={formData.event_type} 
                                onChange={e => handleChange('event_type', e.target.value)}
                            >
                                <option>Activity</option>
                                <option>Milestone</option>
                                <option>Review</option>
                                <option>Deadline</option>
                                <option>Report Due</option>
                            </select>
                        </div>

                        <div>
                            <label className="wireframe-label">
                                Related Project <span className="font-normal text-gray-400 ml-1">(Optional)</span>
                            </label>
                            <select 
                                className="wireframe-input"
                                value={formData.project_proposal_id}
                                onChange={e => handleChange('project_proposal_id', e.target.value)}
                            >
                                <option value="">N/A (General Calendar Event)</option>
                                {mockProjects.map(p => (
                                    <option key={p.id} value={p.id}>{p.id} - {p.title}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className={`wireframe-label ${isDeadlineMode ? 'text-red-800 font-bold' : ''}`}>
                                {isDeadlineMode ? 'Deadline Date' : 'Start Date'} <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="date" 
                                className={`wireframe-input ${errors.main_date ? 'border-red-500' : ''} ${isDeadlineMode ? 'bg-red-50 border-red-300' : ''}`} 
                                value={formData.main_date}
                                onChange={e => handleChange('main_date', e.target.value)}
                            />
                            {errors.main_date && <p className="text-red-500 text-xs mt-1">{errors.main_date}</p>}
                        </div>

                        {!isDeadlineMode && (
                            <div>
                                <label className="wireframe-label">End Date <span className="font-normal text-gray-400">(Optional)</span></label>
                                <input 
                                    type="date" 
                                    className={`wireframe-input ${errors.end_date ? 'border-red-500' : ''}`} 
                                    value={formData.end_date}
                                    onChange={e => handleChange('end_date', e.target.value)}
                                />
                                {errors.end_date && <p className="text-red-500 text-xs mt-1">{errors.end_date}</p>}
                            </div>
                        )}

                        <div>
                            <label className="wireframe-label">Timeline / Time <span className="font-normal text-gray-400">(Optional)</span></label>
                            <input 
                                type="text" 
                                placeholder="e.g. 09:00 AM"
                                className="wireframe-input" 
                                value={formData.timelineText}
                                onChange={e => handleChange('timelineText', e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="wireframe-label">Status</label>
                            <select 
                                className="wireframe-input bg-gray-50 text-gray-600"
                                value={formData.status}
                                onChange={e => handleChange('status', e.target.value)}
                            >
                                <option>Scheduled</option>
                                <option>Ongoing</option>
                                <option>Completed</option>
                                <option>Cancelled</option>
                                <option>Overdue</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="wireframe-label">Responsible Unit / Assigned Person <span className="font-normal text-gray-400">(Optional)</span></label>
                            <input 
                                type="text" 
                                className="wireframe-input" 
                                placeholder="Name or Department..."
                                value={formData.responsibleUnitOrAssignedPerson}
                                onChange={e => handleChange('responsibleUnitOrAssignedPerson', e.target.value)}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="wireframe-label">Notes / Description <span className="font-normal text-gray-400">(Optional)</span></label>
                            <textarea 
                                className="wireframe-input h-24" 
                                placeholder="Additional details..."
                                value={formData.description}
                                onChange={e => handleChange('description', e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </section>

                <div className="flex justify-between items-center border-t border-gray-300 pt-6">
                    <button className="text-gray-500 hover:text-gray-800 text-sm font-medium" onClick={() => navigate('/schedules-alerts')}>Back to Schedules</button>
                    <div className="flex space-x-4">
                        <button className="wireframe-btn flex items-center text-gray-600" onClick={() => handleSave(true)}><Save className="w-4 h-4 mr-2" /> Save Draft</button>
                        <button className="wireframe-btn-primary flex items-center" onClick={() => handleSave(false)}><Calendar className="w-4 h-4 mr-2" /> Save Schedule</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateScheduledActivityPage;
