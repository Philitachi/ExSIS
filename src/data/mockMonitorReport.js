export const mockKpiData = {
    avgEvaluationScore: "4.67",
    evaluationsEncoded: 142,
    reportsGenerated: 8,
    pendingValidation: 3,
    totalBeneficiaries: 1850,
    projectsWithBeneficiaryData: 12,
    linkedDocumentsCount: 45,
    reportsPendingRefresh: 2
};

export const mockBeneficiaryStats = {
    totalBeneficiaries: 1850,
    totalSurveyed: 1600,
    bySector: [
        { name: 'Education', value: 800 },
        { name: 'Agriculture', value: 450 },
        { name: 'Local Gov', value: 300 },
        { name: 'Business', value: 300 }
    ],
    byLocation: [
        { name: 'Urban', value: 1200 },
        { name: 'Rural', value: 650 }
    ],
    byParticipantCategory: [
        { name: 'Youth', value: 500 },
        { name: 'Senior Citizens', value: 150 },
        { name: 'Adults', value: 1200 }
    ]
};

export const mockRawEvaluations = [
    {
        id: 'EVAL-001',
        projectId: 'PRJ-2026-001',
        projectTitle: 'Community Literacy Case Study',
        activityTitle: 'Initial Survey Workshop',
        activityDate: '2026-02-05',
        venue: 'Brgy Hall',
        respondentName: 'Maria Santos',
        clientType: 'Trainee',
        officeAgencySchool: 'Local School Board',
        generalComments: 'Very informative and well-structured.',
        criteriaScores: { q1: 5, q2: 4, q3: 5, q4: 4, q5: 5 },
        meanScore: 4.6,
        submissionDate: '2026-02-06',
        linkedSummaryOfEvaluationId: 'SUM-001'
    },
    {
        id: 'EVAL-002',
        projectId: 'PRJ-2026-002',
        projectTitle: 'Digital Livelihood for Brgy. San Juan',
        activityTitle: 'Digital Marketing 101',
        activityDate: '2026-11-05',
        venue: 'San Juan Gym',
        respondentName: 'Juan Dela Cruz',
        clientType: 'Partner',
        officeAgencySchool: 'San Juan LGU',
        generalComments: '',
        criteriaScores: { q1: 4, q2: 4, q3: 4, q4: 4, q5: 4 },
        meanScore: 4.0,
        submissionDate: '2026-11-06',
        linkedSummaryOfEvaluationId: ''
    }
];

export const mockGeneratedReports = [
    {
        id: 'REP-001',
        reportName: 'Q3 Extension Activity Summary',
        reportType: 'Activity Monitoring Report',
        projectId: 'PRJ-2026-001',
        projectTitle: 'Community Literacy Case Study',
        coveredPeriod: 'Jul 2026 - Sep 2026',
        dateGenerated: '2026-10-01',
        generatedBy: 'System Auto-Gen',
        status: 'Finalized',
        appliedFilters: { quarter: 'Q3', year: '2026', scope: 'PRJ-2026-001', options: 'Evaluation, Beneficiaries, Docs' },
        kpiSummary: { activities: 4, milestonesMet: 3, budgetUtilized: '85%' },
        beneficiarySummary: { totalCount: 250, sectors: 'Education, LGU' },
        evaluationSummary: { respondents: 140, meanScore: 4.8 },
        documentCompletenessSummary: { status: 'Complete', missing: [] }
    },
    {
        id: 'REP-002',
        reportName: 'Project Performance Snapshot',
        reportType: 'Project Performance Report',
        projectId: 'PRJ-2026-002',
        projectTitle: 'Digital Livelihood for Brgy. San Juan',
        coveredPeriod: 'Oct 2026',
        dateGenerated: '2026-11-01',
        generatedBy: 'System Auto-Gen',
        status: 'Needs Refresh',
        appliedFilters: { quarter: 'Q4', year: '2026', scope: 'PRJ-2026-002', options: 'Beneficiaries, Docs' },
        kpiSummary: { activities: 1, milestonesMet: 0, budgetUtilized: '10%' },
        beneficiarySummary: { totalCount: 50, sectors: 'Business' },
        evaluationSummary: { respondents: 45, meanScore: 4.2 },
        documentCompletenessSummary: { status: 'Incomplete', missing: ['Attendance Sheet'] }
    }
];
