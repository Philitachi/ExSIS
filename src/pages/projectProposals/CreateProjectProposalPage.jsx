import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import ProjectProposalWizard from '../../components/projectProposals/ProjectProposalWizard';

const CreateProjectProposalPage = () => {
    return (
        <div className="pb-12 text-sm md:text-base max-w-5xl mx-auto">
            <PageHeader title="Create Project Proposal" subtitle="Encode proposal records and related entities via multi-step wizard." />
            <ProjectProposalWizard />
        </div>
    );
};
export default CreateProjectProposalPage;
