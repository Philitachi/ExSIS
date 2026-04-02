import React from 'react';
import { Search, Plus, Filter, FileText, Link as LinkIcon, Edit2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../common/DataTable';
import { mockTrainingActivityRatings } from '../../data/mockTrainingActivityRatings';

const TrainingActivityRatingsTable = () => {
    const navigate = useNavigate();

    const totals = mockTrainingActivityRatings.reduce((acc, curr) => {
        acc.durationHours += curr.durationHours || 0;
        acc.weightPerDuration += curr.weightPerDuration || 0;
        acc.numberOfTrainees += curr.numberOfTrainees || 0;
        acc.weightedTrainees += curr.weightedTrainees || 0;
        acc.numberOfTraineesSurveyed += curr.numberOfTraineesSurveyed || 0;
        acc.poor += curr.poor || 0;
        acc.fair += curr.fair || 0;
        acc.satisfied += curr.satisfied || 0;
        acc.verySatisfied += curr.verySatisfied || 0;
        acc.excellent += curr.excellent || 0;
        return acc;
    }, {
        durationHours: 0,
        weightPerDuration: 0,
        numberOfTrainees: 0,
        weightedTrainees: 0,
        numberOfTraineesSurveyed: 0,
        poor: 0,
        fair: 0,
        satisfied: 0,
        verySatisfied: 0,
        excellent: 0,
    });

    const footerRow = (
        <tr>
            <td colSpan={4} className="px-6 py-4 text-right text-sm font-bold text-gray-900 uppercase">
                Overall Totals
            </td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.durationHours}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.weightPerDuration}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.numberOfTrainees}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.weightedTrainees}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.numberOfTraineesSurveyed}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.poor}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.fair}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.satisfied}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.verySatisfied}</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900">{totals.excellent}</td>
            <td colSpan={2} className="px-6 py-4"></td>
        </tr>
    );

    return (
        <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" placeholder="Search ratings..." />
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 shrink-0">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                        <option>All Quarters</option>
                        <option>Q1</option>
                        <option>Q2</option>
                        <option>Q3</option>
                        <option>Q4</option>
                    </select>
                    <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                        <option>All Years</option>
                        <option>2026</option>
                        <option>2025</option>
                    </select>
                    <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                        <option>All Categories</option>
                        <option>Training</option>
                        <option>Activity</option>
                    </select>
                </div>
            </div>
            
            <div className="overflow-x-auto">
              <DataTable 
                  columns={[
                      { header: 'Title of Training', accessor: 'titleOfTraining' },
                      { header: 'Project Title', accessor: 'projectTitle' },
                      { header: 'Start Date', accessor: 'startDate' },
                      { header: 'End Date', accessor: 'endDate' },
                      { header: 'Duration (hrs)', accessor: 'durationHours' },
                      { header: 'Weight', accessor: 'weightPerDuration' },
                      { header: 'Trainees', accessor: 'numberOfTrainees' },
                      { header: 'Weighted Trainees', accessor: 'weightedTrainees' },
                      { header: 'Surveyed', accessor: 'numberOfTraineesSurveyed' },
                      { header: 'Poor', accessor: 'poor' },
                      { header: 'Fair', accessor: 'fair' },
                      { header: 'Satisfied', accessor: 'satisfied' },
                      { header: 'V. Satisfied', accessor: 'verySatisfied' },
                      { header: 'Excellent', accessor: 'excellent' },
                      { header: 'Quarter', accessor: 'quarterAccomplished' },
                      {
                          header: 'Actions',
                          render: (row) => (
                              <div className="flex space-x-3 text-sm">
                                  <button onClick={() => navigate(`/beneficiaries-partners/training-activity-ratings/${row.id}`)} className="text-gray-600 hover:text-gray-900 underline font-medium">View</button>
                                  <button className="text-gray-600 hover:text-gray-900 flex items-center"><Edit2 className="w-3 h-3 mr-1"/>Edit</button>
                                  <button className="text-gray-600 hover:text-gray-900 flex items-center"><FileText className="w-3 h-3 mr-1"/>Attach MOVs</button>
                                  {row.projectProposalId && (
                                    <button onClick={() => navigate(`/project-proposals/${row.projectProposalId}`)} className="text-gray-600 hover:text-gray-900 flex items-center"><ExternalLink className="w-3 h-3 mr-1"/>Open Project</button>
                                  )}
                              </div>
                          )
                      }
                  ]}
                  data={mockTrainingActivityRatings}
                  footer={footerRow}
              />
            </div>
        </div>
    );
};

export default TrainingActivityRatingsTable;
