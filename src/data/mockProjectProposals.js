export const projectProposals = [
  {
    id: 'PRJ-2026-001',
    title: 'Community Literacy Drive in Brgy. San Juan',
    proposalType: 'Extension Program',
    leader: 'Dr. Maria Santos',
    implementationAddress: 'Barangay San Juan, City Phase 1',
    dateOfImplementation: '2026-10-15',
    completionDate: '2026-12-15',
    status: 'Under Review',
    lastUpdated: '2026-09-20',
    activities: [
      {
        id: 'ACT-001',
        title: 'Basic Literacy Session',
        date: '2026-08-15',
        venue: 'Brgy Hall',
        participantEvaluationsCount: 12,
        summaryGenerated: true
      }
    ]
  },
  {
    id: 'PRJ-2026-002',
    title: 'Digital Livelihood Training for Out-of-School Youth',
    proposalType: 'Training Activity',
    leader: 'Engr. Juan Dela Cruz',
    implementationAddress: 'City Tech Hub',
    dateOfImplementation: '2026-11-05',
    completionDate: '2026-11-10',
    status: 'Approved',
    lastUpdated: '2026-10-01',
  },
  {
    id: 'PRJ-2026-003',
    title: 'Urban Gardening Initiatives',
    proposalType: 'Extension Activity',
    leader: 'Prof. Ana Reyes',
    implementationAddress: 'Rizal Park Community Garden',
    dateOfImplementation: '2026-08-01',
    completionDate: '2026-08-15',
    status: 'Completed',
    lastUpdated: '2026-08-20',
    activities: [
      {
        id: 'ACT-003',
        title: 'Seed Planting Workshop',
        date: '2026-04-15',
        venue: 'Garden Space',
        participantEvaluationsCount: 20,
        summaryGenerated: false
      }
    ]
  },
  {
    id: 'PRJ-2026-004',
    title: 'Basic Accounting for Micro-Enterprises',
    proposalType: 'Training Activity',
    leader: 'Dr. Luis Garcia',
    implementationAddress: 'Public Market Hall',
    dateOfImplementation: '2026-09-10',
    completionDate: '2026-09-12',
    status: 'Returned for Revision',
    lastUpdated: '2026-09-08',
  }
];

export const mockProposalHistory = [
  { step: 1, action: 'Draft Created', date: '2026-09-01', actor: 'Dr. Maria Santos', remarks: '' },
  { step: 2, action: 'Submitted for Review', date: '2026-09-10', actor: 'Dr. Maria Santos', remarks: 'All sections aligned with F-EXT-002.' },
  { step: 3, action: 'Returned for Revision', date: '2026-09-15', actor: 'Coordinator', remarks: 'Please update the financial plan. Provide detailed breakdown of supplies.' },
  { step: 4, action: 'Submitted for Review', date: '2026-09-20', actor: 'Dr. Maria Santos', remarks: 'Financial plan updated as requested.' },
];
