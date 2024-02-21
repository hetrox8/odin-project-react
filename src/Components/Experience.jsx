/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Experience() {
  const [info, setInfo] = useState({ company: '', position: '', jobDescription: '' });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Fix the variable name here
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = () => {
    setEditMode(false);
  };

  return (
    <div className='edu'>
      <h2 className='heading'>Experience Info</h2>
      {editMode ? (
        <>
          <label key="companyLabel">Company: <input type="text" name="company" value={info.company || ''} onChange={handleInputChange} /></label><br />
          <label key="positionLabel">Position: <input type="text" name="position" value={info.position || ''} onChange={handleInputChange} /></label><br />
          <label key="jobDescLabel">Job Description: <input type="text" name="jobDescription" value={info.jobDescription || ''} onChange={handleInputChange} /></label><br />
          <button onClick={handleSubmit}>submit</button>
        </>
      ) : (
        <>
          <p>Company: {info.company}</p>
          <p>Position: {info.position}</p>
          <p>Job Description: {info.jobDescription}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Experience;
