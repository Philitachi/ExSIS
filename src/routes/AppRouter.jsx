import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Auth
import LoginPage from '../pages/auth/LoginPage';

// Dashboard
import DashboardPage from '../pages/dashboard/DashboardPage';

// Project Proposals
import ProjectProposalsPage from '../pages/projectProposals/ProjectProposalsPage';
import CreateProjectProposalPage from '../pages/projectProposals/CreateProjectProposalPage';
import OpenExistingProposalPage from '../pages/projectProposals/OpenExistingProposalPage';
import TrackProposalStatusPage from '../pages/projectProposals/TrackProposalStatusPage';

// Documents Upload Center
import DocumentsUploadCenterPage from '../pages/documentsUploadCenter/DocumentsUploadCenterPage';
import UploadSummaryReportPage from '../pages/documentsUploadCenter/UploadSummaryReportPage';
import UploadAttendancePage from '../pages/documentsUploadCenter/UploadAttendancePage';
import ActivityTrainingReportPage from '../pages/documentsUploadCenter/ActivityTrainingReportPage';
import UploadedFilesPage from '../pages/documentsUploadCenter/UploadedFilesPage';

// Beneficiaries & Partners
import BeneficiariesPartnersPage from '../pages/beneficiariesPartners/BeneficiariesPartnersPage';
import CreateTrainingActivityRatingsPage from '../pages/beneficiariesPartners/CreateTrainingActivityRatingsPage';
import TrainingActivityRatingsDetailPage from '../pages/beneficiariesPartners/TrainingActivityRatingsDetailPage';
import CreateAwardsReceivedPage from '../pages/beneficiariesPartners/CreateAwardsReceivedPage';
import AwardsReceivedDetailPage from '../pages/beneficiariesPartners/AwardsReceivedDetailPage';

// Monitor & Report
import MonitorReportPage from '../pages/monitorReport/MonitorReportPage';
import EvaluationMonitoringPage from '../pages/monitorReport/EvaluationMonitoringPage';
import ReportDetailPage from '../pages/monitorReport/ReportDetailPage';

// Schedules & Alerts
import SchedulesAlertsPage from '../pages/schedulesAlerts/SchedulesAlertsPage';
import CreateScheduledActivityPage from '../pages/schedulesAlerts/CreateScheduledActivityPage';
import UpdateScheduledActivityPage from '../pages/schedulesAlerts/UpdateScheduledActivityPage';
import DeadlinesRemindersPage from '../pages/schedulesAlerts/DeadlinesRemindersPage';

// Misc
import NotificationsPage from '../pages/notifications/NotificationsPage';
import ProfileAccountPage from '../pages/profileAccount/ProfileAccountPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          
          <Route path="project-proposals" element={<ProjectProposalsPage />} />
          <Route path="project-proposals/new" element={<CreateProjectProposalPage />} />
          <Route path="project-proposals/:id" element={<OpenExistingProposalPage />} />
          <Route path="project-proposals/:id/tracking" element={<TrackProposalStatusPage />} />
          
          <Route path="documents-upload-center" element={<DocumentsUploadCenterPage />} />
          <Route path="documents-upload-center/summary-report/new" element={<UploadSummaryReportPage />} />
          <Route path="documents-upload-center/attendance/new" element={<UploadAttendancePage />} />
          <Route path="documents-upload-center/activity-training-report/new" element={<ActivityTrainingReportPage />} />
          <Route path="documents-upload-center/files" element={<UploadedFilesPage />} />
          
          <Route path="beneficiaries-partners" element={<BeneficiariesPartnersPage />} />
          <Route path="beneficiaries-partners/training-activity-ratings/new" element={<CreateTrainingActivityRatingsPage />} />
          <Route path="beneficiaries-partners/training-activity-ratings/:id" element={<TrainingActivityRatingsDetailPage />} />
          <Route path="beneficiaries-partners/awards-received/new" element={<CreateAwardsReceivedPage />} />
          <Route path="beneficiaries-partners/awards-received/:id" element={<AwardsReceivedDetailPage />} />
          <Route path="beneficiaries-partners/awards-received/:id/edit" element={<CreateAwardsReceivedPage />} />
          
          <Route path="monitor-report" element={<MonitorReportPage />} />
          <Route path="monitor-report/evaluation/new" element={<EvaluationMonitoringPage />} />
          <Route path="monitor-report/:id" element={<ReportDetailPage />} />
          
          <Route path="schedules-alerts" element={<SchedulesAlertsPage />} />
          <Route path="schedules-alerts/new" element={<CreateScheduledActivityPage />} />
          <Route path="schedules-alerts/:id/edit" element={<UpdateScheduledActivityPage />} />
          <Route path="schedules-alerts/reminders" element={<DeadlinesRemindersPage />} />
          
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile-account" element={<ProfileAccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
