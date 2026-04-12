import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Save, User } from 'lucide-react';

const ProfileAccountPage = () => {

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader title="Profile / Account Settings" subtitle="Manage your personal Extension Coordinator details." />

            <div className="space-y-6">
                <section className="wireframe-card flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 pb-8 border-b-0">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300">
                        <User className="w-10 h-10 text-gray-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <h2 className="text-2xl font-bold text-gray-900">Coordinator Admin</h2>
                        <p className="text-gray-500">Extension Services Information System</p>
                        <div className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-gray-800 text-white rounded">
                            Role: EXTENSION COORDINATOR
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="wireframe-label">First Name</label>
                            <input type="text" className="wireframe-input" defaultValue="Coordinator" />
                        </div>
                        <div>
                            <label className="wireframe-label">Last Name</label>
                            <input type="text" className="wireframe-input" defaultValue="Admin" />
                        </div>
                        <div>
                            <label className="wireframe-label">Middle Name</label>
                            <input type="text" className="wireframe-input" />
                        </div>
                        <div>
                            <label className="wireframe-label">Title / Designation</label>
                            <input type="text" className="wireframe-input" defaultValue="Extension Lead Coordinator" />
                        </div>
                        <div>
                            <label className="wireframe-label">Email Address</label>
                            <input type="email" className="wireframe-input" defaultValue="coordinator@university.edu" />
                        </div>
                        <div>
                            <label className="wireframe-label">Contact Number</label>
                            <input type="text" className="wireframe-input" defaultValue="0917-123-4567" />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Academic & Department Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="wireframe-label">Department</label>
                            <input type="text" className="wireframe-input" defaultValue="Information Systems" />
                        </div>
                        <div>
                            <label className="wireframe-label">Program</label>
                            <input type="text" className="wireframe-input" defaultValue="Bachelor of Science in Information Systems" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Organization / Affiliations</label>
                            <input type="text" className="wireframe-input" />
                        </div>
                    </div>
                </section>

                <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
                    <button className="wireframe-btn">Cancel</button>
                    <button className="wireframe-btn-primary flex items-center"><Save className="w-4 h-4 mr-2" /> Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileAccountPage;
