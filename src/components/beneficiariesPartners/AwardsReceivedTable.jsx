import React from 'react';
import { Search, Filter, Edit2, FileText, ExternalLink, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../common/DataTable';
import { mockAwardsReceived } from '../../data/mockAwardsReceived';

const AwardsReceivedTable = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" placeholder="Search awards..." />
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
                        <option>All Awarding Bodies</option>
                    </select>
                </div>
            </div>
            
            <div className="overflow-x-auto">
              <DataTable 
                  columns={[
                      { header: 'Title of Project/Program', accessor: 'titleOfExtensionProjectProgram' },
                      { header: 'Awarding Body', accessor: 'awardingBody' },
                      { header: 'Award Date', accessor: 'awardDate' },
                      { header: 'Quarter', accessor: 'quarterAccomplished' },
                      { 
                          header: 'MOV Status', 
                          render: (row) => row.movFile ? <span className="text-green-600 font-medium text-xs">Attached</span> : <span className="text-gray-400 font-medium text-xs">None</span> 
                      },
                      {
                          header: 'Actions',
                          render: (row) => (
                              <div className="flex space-x-3 text-sm">
                                  <button onClick={() => navigate(`/beneficiaries-partners/awards-received/${row.id}`)} className="text-gray-600 hover:text-gray-900 underline font-medium">View</button>
                                  <button onClick={() => navigate(`/beneficiaries-partners/awards-received/${row.id}/edit`)} className="text-gray-600 hover:text-gray-900 flex items-center"><Edit2 className="w-3 h-3 mr-1"/>Edit</button>
                                  {row.projectProposalId && (
                                    <button onClick={() => navigate(`/project-proposals/${row.projectProposalId}`)} className="text-gray-600 hover:text-gray-900 flex items-center"><ExternalLink className="w-3 h-3 mr-1"/>Open Project</button>
                                  )}
                                  <button onClick={() => alert('View MOV: ' + row.movFile)} className="text-gray-600 hover:text-gray-900 flex items-center"><FileText className="w-3 h-3 mr-1"/>View MOV</button>
                                  <button onClick={() => alert('Delete Record ID: ' + row.id)} className="text-gray-600 hover:text-red-600 flex items-center"><Trash2 className="w-3 h-3 mr-1"/>Remove</button>
                              </div>
                          )
                      }
                  ]}
                  data={mockAwardsReceived}
              />
            </div>
        </div>
    );
};

export default AwardsReceivedTable;
