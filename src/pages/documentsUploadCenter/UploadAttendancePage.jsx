import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FileUploadField from '../../components/common/FileUploadField';
import { useNavigate } from 'react-router-dom';
import { Save, Send, Plus, UploadCloud } from 'lucide-react';

const UploadAttendancePage = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-5xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader title="Upload / Encode F-EXT-010" subtitle="Attendance Management form for specific project acts." />

            <div className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Attendance Metadata</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-3">
                            <label className="wireframe-label">Related Project</label>
                            <select className="wireframe-input"><option>PRJ-2026-001 - Community Literacy Drive</option></select>
                        </div>
                        <div className="lg:col-span-1">
                            <label className="wireframe-label">Activity Title</label>
                            <input type="text" className="wireframe-input" />
                        </div>
                        <div className="lg:col-span-1">
                            <label className="wireframe-label">Activity Date</label>
                            <input type="date" className="wireframe-input" />
                        </div>
                        <div className="lg:col-span-1">
                            <label className="wireframe-label">Venue</label>
                            <input type="text" className="wireframe-input" />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card text-center p-6 border-dashed border-2 border-gray-300">
                    <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Bulk Upload Option</h3>
                    <p className="text-sm text-gray-500 mb-4">Attach the scanned physical attendance sheet directly.</p>
                    <FileUploadField id="attendance-upload" />
                </section>

                <section className="wireframe-card">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
                        <h3 className="text-lg font-bold">Or Encode Attendance Rows Manually</h3>
                        <button className="wireframe-btn text-xs flex items-center py-1"><Plus className="w-3 h-3 mr-1"/> Add Attendee</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase">Attendee Name</th>
                                    <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase">Office / Agency</th>
                                    <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase">Designation</th>
                                    <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase">Sex</th>
                                    <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase">Has Signed?</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-3 py-2"><input type="text" className="wireframe-input p-1 h-8 text-xs" /></td>
                                    <td className="px-3 py-2"><input type="text" className="wireframe-input p-1 h-8 text-xs" /></td>
                                    <td className="px-3 py-2"><input type="text" className="wireframe-input p-1 h-8 text-xs" /></td>
                                    <td className="px-3 py-2"><select className="wireframe-input p-1 h-8 text-xs"><option>M</option><option>F</option></select></td>
                                    <td className="px-3 py-2 text-center"><input type="checkbox" className="w-4 h-4 text-gray-600 rounded border-gray-300" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
                    <button className="wireframe-btn" onClick={() => navigate('/documents-upload-center')}>Cancel</button>
                    <button className="wireframe-btn flex items-center"><Save className="w-4 h-4 mr-2" /> Save Draft</button>
                    <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/documents-upload-center')}><Send className="w-4 h-4 mr-2" /> Submit Attendance</button>
                </div>
            </div>
        </div>
    );
};

export default UploadAttendancePage;
