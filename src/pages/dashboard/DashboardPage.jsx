import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { FilePlus, Calendar as CalendarIcon, Bell, FileText, CheckSquare, BarChart } from 'lucide-react';

import { dashboardKPIs, actionRequiredAlerts, generatedReportsPreview } from '../../data/mockDashboard';
import { projectProposals } from '../../data/mockProjectProposals';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard" 
        subtitle="Welcome back, Coordinator. Here is the overview of extension activities."
        action={
          <button 
            onClick={() => navigate('/project-proposals/new')} 
            className="wireframe-btn-primary flex items-center"
          >
            <FilePlus className="w-4 h-4 mr-2" />
            Create Project Proposal
          </button>
        }
      />

      {/* KPI Cards section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardKPIs.map(kpi => (
          <StatCard key={kpi.id} title={kpi.title} value={kpi.value} subtitle={kpi.subtitle} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Action Required Panel */}
          <div className="wireframe-card">
            <h3 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4 flex items-center">
              <CheckSquare className="w-5 h-5 mr-2 text-gray-500" />
              Action Required
            </h3>
            <div className="space-y-3">
              {actionRequiredAlerts.length > 0 ? actionRequiredAlerts.map(alert => (
                <div key={alert.id} className="p-3 border border-gray-200 rounded flex justify-between items-start bg-gray-50">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.text}</p>
                    <p className="text-xs text-gray-500 mt-1 capitalize">Type: {alert.type}</p>
                  </div>
                  <StatusBadge status={alert.urgency === 'high' ? 'Returned for Revision' : 'Pending Approval'} />
                </div>
              )) : (
                <p className="text-sm text-gray-500 py-4 text-center">No pending actions required.</p>
              )}
            </div>
          </div>

          {/* Proposal Shortcuts */}
          <div className="wireframe-card">
            <h3 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-gray-500" />
              Project Proposal Shortcuts
            </h3>
            <div className="space-y-3">
              {projectProposals.slice(0, 3).map(p => (
                <div 
                  key={p.id} 
                  className="p-3 border border-gray-200 rounded flex justify-between items-center hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => navigate(`/project-proposals/${p.id}`)}
                >
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 leading-tight">{p.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{p.proposalType} • {p.leader}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
              ))}
            </div>
            <button 
              className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 underline w-full text-center" 
              onClick={() => navigate('/project-proposals')}
            >
              View all proposals &rarr;
            </button>
          </div>

        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-6">
          
          {/* Notifications Preview */}
          <div className="wireframe-card bg-gray-50">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center">
              <Bell className="w-4 h-4 mr-2" />
              Recent Notifications
            </h3>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="font-medium text-gray-900">Dr. Maria Santos submitted proposal</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Missing F-EXT-008 document</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <button 
              className="mt-4 text-xs font-medium text-gray-600 hover:text-gray-900 underline" 
              onClick={() => navigate('/notifications')}
            >
              Go to Notification Center
            </button>
          </div>

          {/* Calendar Preview */}
          <div className="wireframe-card text-center py-6">
            <CalendarIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <h3 className="text-sm font-medium text-gray-900 mb-1">Calendar & Alerts</h3>
            <p className="text-xs text-gray-500 mb-4">3 upcoming deadlines this week</p>
            <button className="wireframe-btn w-full" onClick={() => navigate('/schedules-alerts')}>
              View Master Calendar
            </button>
          </div>

          {/* Generated Reports */}
          <div className="wireframe-card">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center">
              <BarChart className="w-4 h-4 mr-2" />
              Generated Reports
            </h3>
            <div className="space-y-3">
              {generatedReportsPreview.map(rep => (
                <div key={rep.id} className="text-sm border-l-2 border-gray-300 pl-3 py-1">
                  <p className="font-medium text-gray-900">{rep.type}</p>
                  <p className="text-xs text-gray-500">{rep.period}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
