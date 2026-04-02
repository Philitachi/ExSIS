export const mockNotifications = [
  {
    id: 1,
    title: 'New Proposal Submitted',
    message: 'Dr. Maria Santos submitted "Community Literacy Drive in Brgy. San Juan" for review.',
    type: 'proposal',
    urgency: 'high',
    date: '2026-09-10T10:30:00Z',
    isRead: false,
    relatedLink: '/project-proposals/PRJ-2026-001'
  },
  {
    id: 2,
    title: 'Document Uploaded',
    message: 'F-EXT-010 Attendance uploaded for "Urban Gardening Initiatives".',
    type: 'document',
    urgency: 'low',
    date: '2026-08-20T14:15:00Z',
    isRead: true,
    relatedLink: '/documents-upload-center/files'
  },
  {
    id: 3,
    title: 'Deadline Reminder',
    message: 'Submit Q3 Summary Report by Oct 15.',
    type: 'alert',
    urgency: 'high',
    date: '2026-10-10T08:00:00Z',
    isRead: false,
    relatedLink: '/schedules-alerts'
  }
];
