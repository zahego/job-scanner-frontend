import React from 'react';
import '../Styling/JobPanel.css';
import JobPosting from './JobPosting';
const JobPanel=()=>{
return (
    <div className="job-panel">
        <JobPosting title="World Chef" description="Five star Michelin only pls. No fan mail."  emergency={true}></JobPosting>
        <JobPosting title="World Engineer" description="Top world builder only. No fan mail"  ></JobPosting>
        <JobPosting title="World AI Master" description="Must be able to train Tesla car. No fan mail" emergency={true} favorite={true}></JobPosting>
        <JobPosting title="World Hunter" description="Must have hunt a deer twice. No fan mail"  applied={true}></JobPosting>
    </div>
)
}

export default JobPanel;