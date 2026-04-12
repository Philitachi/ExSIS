import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { Save, Send, Plus, Trash2, Copy } from 'lucide-react';

const EvaluationMonitoringPage = () => {
    const navigate = useNavigate();

    const defaultCriteria = [
        { id: 'cat1', type: 'category', text: 'I. Information Dissemination' },
        { id: 'q1', type: 'question', text: 'a. Timeliness of sending Invites' },
        { id: 'q2', type: 'question', text: 'b. Adequacy of information dissemination' },
        { id: 'cat2', type: 'category', text: 'II. Design of the Event' },
        { id: 'q3', type: 'question', text: 'a. Program/Order of the activities' },
        { id: 'q4', type: 'question', text: 'b. Quality and Relevance of the Activities' },
        { id: 'q5', type: 'question', text: 'c. Time allotment/pacing' },
        { id: 'cat3', type: 'category', text: 'III. Outcomes of the Event' },
        { id: 'q6', type: 'question', text: 'a. Attendance of participants' },
        { id: 'q7', type: 'question', text: 'b. Participation to activities' },
        { id: 'q8', type: 'question', text: 'c. Engagement and Interaction' }
    ];

    const [project, setProject] = useState('');
    const [activityId, setActivityId] = useState('');
    const [activityDate, setActivityDate] = useState('');
    const [venue, setVenue] = useState('');

    const [evaluations, setEvaluations] = useState([
        {
            id: Date.now(),
            respondentName: '',
            clientType: 'Trainee',
            office: '',
            criteriaList: [...defaultCriteria],
            scores: {},
            comments: ''
        }
    ]);

    const handleAddEvaluation = () => {
        setEvaluations([...evaluations, {
            id: Date.now(),
            respondentName: '',
            clientType: 'Trainee',
            office: '',
            criteriaList: [...defaultCriteria],
            scores: {},
            comments: ''
        }]);
    };

    const handleRemoveEvaluation = (id) => {
        if (evaluations.length > 1) {
            setEvaluations(evaluations.filter(e => e.id !== id));
        }
    };

    const updateEvalField = (evalId, field, value) => {
        setEvaluations(evaluations.map(e => e.id === evalId ? { ...e, [field]: value } : e));
    };

    const handleAddCriteria = (evalId, categoryId = null) => {
        setEvaluations(evaluations.map(e => {
            if (e.id === evalId) {
                if (!categoryId) {
                    return { ...e, criteriaList: [...e.criteriaList, { id: Date.now(), type: 'question', text: 'New Question' }] };
                }
                const catIndex = e.criteriaList.findIndex(c => c.id === categoryId);
                let insertIndex = catIndex + 1;
                while (insertIndex < e.criteriaList.length && e.criteriaList[insertIndex].type !== 'category') {
                    insertIndex++;
                }
                const newList = [...e.criteriaList];
                newList.splice(insertIndex, 0, { id: Date.now(), type: 'question', text: 'New Question' });
                return { ...e, criteriaList: newList };
            }
            return e;
        }));
    };

    const handleAddCategory = (evalId) => {
        setEvaluations(evaluations.map(e => {
            if (e.id === evalId) {
                return { ...e, criteriaList: [...e.criteriaList, { id: Date.now(), type: 'category', text: 'New Category Header' }] };
            }
            return e;
        }));
    };

    const handleRemoveCriteria = (evalId, criteriaId) => {
        setEvaluations(evaluations.map(e => {
            if (e.id === evalId) {
                const newScores = { ...e.scores };
                delete newScores[criteriaId];
                return { ...e, criteriaList: e.criteriaList.filter(c => c.id !== criteriaId), scores: newScores };
            }
            return e;
        }));
    };

    const handleCriteriaChange = (evalId, criteriaId, value) => {
        setEvaluations(evaluations.map(e => {
            if (e.id === evalId) {
                return { ...e, criteriaList: e.criteriaList.map(c => c.id === criteriaId ? { ...c, text: value } : c) };
            }
            return e;
        }));
    };

    const handleScoreChange = (evalId, criteriaId, score) => {
        setEvaluations(evaluations.map(e => {
            if (e.id === evalId) {
                return { ...e, scores: { ...e.scores, [criteriaId]: score } };
            }
            return e;
        }));
    };

    return (
        <div className="max-w-5xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader title="Submit Evaluation / Monitoring Data" subtitle="Encode client feedback using F-EXT-007 schema." />

            <div className="space-y-6">
                <section className="wireframe-card border-b-4 border-gray-400">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Batch Metadata</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Related Project (Optional)</label>
                            <select className="wireframe-input" value={project} onChange={e => setProject(e.target.value)}>
                                <option value="">-- Standalone / Unaligned --</option>
                                <option value="PRJ-2026-001">PRJ-2026-001 - Community Literacy Drive</option>
                                <option value="PRJ-2026-003">PRJ-2026-003 - Urban Gardening Initiatives</option>
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Select the parent project this evaluation stack belongs to.</p>
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Activity Title <span className="text-red-500">*</span></label>
                            <input type="text" className="wireframe-input" required value={activityId} onChange={e => setActivityId(e.target.value)} />
                            <p className="text-xs text-gray-500 mt-1">The F-EXT-008 Summary Report will automatically aggregate all evaluations sharing this exact Activity Title under this project.</p>
                        </div>
                        <div>
                            <label className="wireframe-label">Activity Date</label>
                            <input type="date" className="wireframe-input" value={activityDate} onChange={e => setActivityDate(e.target.value)} />
                        </div>
                        <div>
                            <label className="wireframe-label">Venue</label>
                            <input type="text" className="wireframe-input" value={venue} onChange={e => setVenue(e.target.value)} />
                        </div>
                    </div>
                </section>

                <div className="flex justify-between items-center mb-2 mt-8">
                    <h2 className="text-xl font-bold text-gray-800">Respondent Evaluations</h2>
                    <button onClick={handleAddEvaluation} className="wireframe-btn flex items-center shadow-sm text-sm"><Plus className="w-4 h-4 mr-1"/> Add Another Respondent</button>
                </div>

                {evaluations.map((ev, index) => (
                    <section key={ev.id} className="wireframe-card border-l-4 border-l-gray-500 relative">
                        {evaluations.length > 1 && (
                            <button onClick={() => handleRemoveEvaluation(ev.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 flex items-center text-xs">
                                <Trash2 className="w-3 h-3 mr-1"/> Remove Entry
                            </button>
                        )}
                        <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Entry #{index + 1}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="wireframe-label">Respondent Name (Optional)</label>
                                <input type="text" className="wireframe-input" value={ev.respondentName} onChange={e => updateEvalField(ev.id, 'respondentName', e.target.value)} placeholder="Leave blank if anonymous" />
                            </div>
                            <div>
                                <label className="wireframe-label">Client Type</label>
                                <select className="wireframe-input" value={ev.clientType} onChange={e => updateEvalField(ev.id, 'clientType', e.target.value)}>
                                    <option>Trainee</option>
                                    <option>Partner</option>
                                    <option>Beneficiary</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="wireframe-label">Office / Agency / School (Optional)</label>
                                <input type="text" className="wireframe-input" value={ev.office} onChange={e => updateEvalField(ev.id, 'office', e.target.value)} />
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                            <h4 className="font-bold text-gray-800">Scoring Matrix</h4>
                            <button className="text-emerald-600 hover:text-emerald-800 text-xs flex items-center font-medium" onClick={() => handleAddCategory(ev.id)}><Plus className="w-3 h-3 mr-1"/> Add Category</button>
                        </div>
                        <div className="hidden sm:flex justify-between items-end pb-2 mb-2">
                            <div className="flex-1 pr-4"><span className="font-bold text-gray-800">Criteria</span></div>
                            <div className="flex items-center space-x-2 shrink-0">
                                {[
                                    { score: 1, label: 'Poor' },
                                    { score: 2, label: 'Fair' },
                                    { score: 3, label: 'Satisfied' },
                                    { score: 4, label: 'Very Sat.' },
                                    { score: 5, label: 'Excellent' }
                                ].map(({score, label}) => (
                                    <div key={score} className="flex flex-col items-center justify-end w-12 md:w-16 text-center">
                                        <span className="text-[10px] text-gray-500 leading-tight mb-1">{label}</span>
                                        <span className="text-xs font-bold text-gray-700">{score}</span>
                                    </div>
                                ))}
                                <div className="w-4 ml-4"></div>
                            </div>
                        </div>
                        <div className="space-y-4 mb-6">
                            {ev.criteriaList.map((criteria, i) => (
                                criteria.type === 'category' ? (
                                    <div key={criteria.id} className="flex items-center justify-between border-b border-gray-200 bg-[#e8f3e8] px-2 py-2 mb-2">
                                        <input 
                                            type="text" 
                                            className="flex-1 text-sm font-bold text-gray-800 bg-transparent border-none focus:ring-0 px-2" 
                                            value={criteria.text} 
                                            onChange={(e) => handleCriteriaChange(ev.id, criteria.id, e.target.value)} 
                                        />
                                        <div className="flex items-center space-x-4 shrink-0">
                                            <button className="text-blue-600 hover:text-blue-800 text-xs flex items-center font-medium shrink-0" onClick={() => handleAddCriteria(ev.id, criteria.id)}><Plus className="w-3 h-3 mr-1"/> Add Question</button>
                                            <button className="text-gray-400 hover:text-red-500 shrink-0" onClick={() => handleRemoveCriteria(ev.id, criteria.id)}><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                ) : (
                                <div key={criteria.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 pl-4 sm:pl-6">
                                    <div className="flex-1 pr-4 mb-2 sm:mb-0 flex items-start space-x-2">
                                        <input 
                                            type="text" 
                                            className="wireframe-input flex-1 text-sm bg-gray-50 focus:bg-white" 
                                            value={criteria.text} 
                                            onChange={(e) => handleCriteriaChange(ev.id, criteria.id, e.target.value)} 
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2 shrink-0 mt-2 sm:mt-0">
                                        {[1, 2, 3, 4, 5].map(score => (
                                            <label key={score} className="flex justify-center items-center w-12 md:w-16">
                                                <input 
                                                    type="radio" 
                                                    name={`q${criteria.id}_eval${ev.id}`} 
                                                    className="text-gray-600 focus:ring-gray-500 w-4 h-4 cursor-pointer"
                                                    checked={ev.scores[criteria.id] === score}
                                                    onChange={() => handleScoreChange(ev.id, criteria.id, score)}
                                                />
                                            </label>
                                        ))}
                                        <button className="text-gray-400 hover:text-red-500 ml-4 flex-shrink-0" onClick={() => handleRemoveCriteria(ev.id, criteria.id)}><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                                )
                            ))}
                        </div>

                        <h4 className="font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4">General Comments</h4>
                        <textarea className="wireframe-input h-24" placeholder="Any additional notes or feedback..." value={ev.comments} onChange={e => updateEvalField(ev.id, 'comments', e.target.value)}></textarea>
                    </section>
                ))}

                <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
                    <button className="wireframe-btn" onClick={() => navigate('/documents-upload-center')}>Cancel</button>
                    <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/documents-upload-center')}><Send className="w-4 h-4 mr-2" /> Submit {evaluations.length} Evaluation(s)</button>
                </div>
            </div>
        </div>
    );
};

export default EvaluationMonitoringPage;
