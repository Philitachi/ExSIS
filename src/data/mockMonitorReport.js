// ACTIVITY_EVALUATION represents individual respondent submissions
export const mockEvaluationReports = [
  {
    id: 'EVL-2026-001',
    project: 'PRJ-2026-001',
    activityTitle: 'Basic Literacy Session',
    respondentName: 'Juan Dela Cruz',
    clientType: 'Local Resident',
    overallScore: 4.8,
    submissionDate: '2026-08-16',
    // ACTIVITY_EVALUATION_SCORES would be mapped here in a real database DB
    criteriaStats: { poor: 0, fair: 0, satisfied: 0, verySat: 1, excellent: 4 }
  },
  {
    id: 'EVL-2026-002',
    project: 'PRJ-2026-001',
    activityTitle: 'Basic Literacy Session',
    respondentName: 'Maria Clara',
    clientType: 'Market Vendor',
    overallScore: 4.2,
    submissionDate: '2026-09-13',
    criteriaStats: { poor: 0, fair: 0, satisfied: 1, verySat: 3, excellent: 1 }
  }
];

export const mockProjectReports = [
  {
    id: 'RPT-2026-Q3-01',
    reportType: 'Quarterly Project Summary',
    coveredPeriod: 'Q3 2026',
    dateGenerated: '2026-10-01',
    generatedBy: 'System Auto-Gen',
    status: 'Ready for Review'
  }
];
