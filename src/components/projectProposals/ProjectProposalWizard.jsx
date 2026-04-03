import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ChevronRight, ChevronLeft, Send, X } from 'lucide-react';
import ProposalMainFormStep from './ProposalMainFormStep';
import ProposalRRLStep from './ProposalRRLStep';
import ProposalWorkPlanStep from './ProposalWorkPlanStep';
import ProposalFinancialPlanStep from './ProposalFinancialPlanStep';
import ProposalFrameworkStep from './ProposalFrameworkStep';
import ProposalReviewStep from './ProposalReviewStep';

const ProjectProposalWizard = () => {
    const navigate = useNavigate();
    
    const [currentStep, setCurrentStep] = useState(1);
    
    const [mainData, setMainData] = useState({
        proposal_type: '',
        project_title: '',
        leader_proponent: '',
        tel_fax_email: '',
        address: '',
        implementation_address: '',
        date_of_implementation: '',
        completion_date: '',
        project_duration: '',
        nature_and_significant_of_the_project: '',
        current_status: 'Draft'
    });
    const [rrlData, setRrlData] = useState([]);
    const [workPlans, setWorkPlans] = useState([]);
    const [financialPlans, setFinancialPlans] = useState([]);
    const [frameworkData, setFrameworkData] = useState({
        framework_type: '',
        description: '',
        diagram_url: ''
    });

    const updateMainData = (field, value) => {
        setMainData({ ...mainData, [field]: value });
    };

    const updateFrameworkData = (field, value) => {
        setFrameworkData({ ...frameworkData, [field]: value });
    };

    const handleNext = () => setCurrentStep(prev => prev + 1);
    const handleBack = () => setCurrentStep(prev => prev - 1);
    const handleCancel = () => navigate('/project-proposals');

    const handleSaveDraft = () => {
        alert("Mock: Draft Saved successfully!");
    };

    const handleSubmit = () => {
        alert("Mock: Proposal Submitted for Review successfully! All related entries saved.");
        navigate('/project-proposals');
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1: return <ProposalMainFormStep data={mainData} updateData={updateMainData} />;
            case 2: return <ProposalRRLStep data={rrlData} updateData={setRrlData} />;
            case 3: return <ProposalWorkPlanStep data={workPlans} updateData={setWorkPlans} />;
            case 4: return <ProposalFinancialPlanStep data={financialPlans} updateData={setFinancialPlans} />;
            case 5: return <ProposalFrameworkStep data={frameworkData} updateData={updateFrameworkData} />;
            case 6: return <ProposalReviewStep mainData={mainData} rrlData={rrlData} workPlans={workPlans} financialPlans={financialPlans} frameworkData={frameworkData} />;
            default: return null;
        }
    };

    const steps = [
        "Main Data", "RRL", "Work Plan", "Financial Plan", "Framework", "Review & Submit"
    ];

    return (
        <div>
            {/* Stepper Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    {steps.map((label, index) => {
                        const stepNum = index + 1;
                        const isCurrent = stepNum === currentStep;
                        const isPast = stepNum < currentStep;
                        
                        return (
                            <div key={index} className={`flex flex-col items-center flex-1 ${index !== steps.length - 1 ? 'relative' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 border-2
                                    ${isCurrent ? 'bg-gray-800 text-white border-gray-800' : 
                                      isPast ? 'bg-gray-300 text-gray-700 border-gray-300' : 
                                      'bg-white text-gray-400 border-gray-300'}
                                `}>
                                    {stepNum}
                                </div>
                                <span className={`text-[10px] mt-2 font-medium text-center hidden md:block ${isCurrent || isPast ? 'text-gray-800' : 'text-gray-400'}`}>{label}</span>
                                
                                {index !== steps.length - 1 && (
                                    <div className={`absolute top-4 left-1/2 w-full h-[2px] -z-0 ${isPast ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="md:hidden text-center text-sm font-bold text-gray-800 mt-2">
                    Step {currentStep}: {steps[currentStep - 1]}
                </div>
            </div>

            {/* Step Content */}
            <div className="wireframe-card mb-6 bg-white min-h-[400px]">
                {renderStep()}
            </div>

            {/* Stepper Footer Controls */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center border-t border-gray-300 pt-6 gap-4">
                <div className="w-full md:w-auto">
                    <button type="button" className="text-gray-500 hover:text-gray-800 font-medium text-sm flex items-center justify-center w-full md:w-auto" onClick={handleCancel}>
                        <X className="w-4 h-4 mr-1"/> Cancel Wizard
                    </button>
                </div>
                <div className="flex space-x-3 w-full md:w-auto">
                    {currentStep > 1 && (
                        <button type="button" className="wireframe-btn flex items-center flex-1 md:flex-none justify-center" onClick={handleBack}><ChevronLeft className="w-4 h-4 mr-1" /> Back</button>
                    )}
                    
                    <button type="button" className="wireframe-btn flex items-center text-gray-600 flex-1 md:flex-none justify-center" onClick={handleSaveDraft}><Save className="w-4 h-4 mr-2" /> Save Draft</button>
                    
                    {currentStep < 6 ? (
                        <button type="button" className="wireframe-btn-primary flex items-center flex-1 md:flex-none justify-center" onClick={handleNext}>Next <ChevronRight className="w-4 h-4 ml-1" /></button>
                    ) : (
                        <button type="button" className="wireframe-btn-primary flex items-center flex-1 md:flex-none justify-center" onClick={handleSubmit}><Send className="w-4 h-4 mr-2" /> Submit</button>
                    )}
                </div>
            </div>
            
        </div>
    );
};
export default ProjectProposalWizard;
