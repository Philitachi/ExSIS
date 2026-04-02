import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [proposals, setProposals] = useState([
    { id: 1, title: 'Community Health Drive', status: 'Draft', type: 'Health', leader: 'Jane Smith', date: '2026-05-01' },
    { id: 2, title: 'Digital Literacy Hub', status: 'Under Review', type: 'Education', leader: 'John Doe', date: '2026-06-15' }
  ]);
  const [statusHistory, setStatusHistory] = useState([
    { id: 1, proposalId: 2, milestone: 'Draft Created', date: '2026-04-01' },
    { id: 2, proposalId: 2, milestone: 'Submitted for Review', date: '2026-04-02' }
  ]);
  const [evaluations, setEvaluations] = useState([
    { id: 1, proposalId: 1, respondent: 'Anon', score: 4 }
  ]);
  const [schedules, setSchedules] = useState([
    { id: 1, proposalId: 2, title: 'Proposal Review Meeting', date: '2026-04-10' }
  ]);
  const [documents, setDocuments] = useState([
    { id: 1, proposalId: 1, title: 'F-EXT-010 Attendance Sheet', type: 'Attendance' }
  ]);
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, proposalId: 1, name: 'Brgy 1 Health Workers', category: 'Community' }
  ]);

  const addProposal = (prop) => setProposals([...proposals, { ...prop, id: Date.now() }]);
  const addStatus = (stat) => setStatusHistory([...statusHistory, { ...stat, id: Date.now() }]);
  const addEvaluation = (ev) => setEvaluations([...evaluations, { ...ev, id: Date.now() }]);
  const addSchedule = (sch) => setSchedules([...schedules, { ...sch, id: Date.now() }]);
  const addDocument = (doc) => setDocuments([...documents, { ...doc, id: Date.now() }]);
  const addBeneficiary = (ben) => setBeneficiaries([...beneficiaries, { ...ben, id: Date.now() }]);

  return (
    <AppContext.Provider value={{
      proposals, addProposal,
      statusHistory, addStatus,
      evaluations, addEvaluation,
      schedules, addSchedule,
      documents, addDocument,
      beneficiaries, addBeneficiary
    }}>
      {children}
    </AppContext.Provider>
  );
};
