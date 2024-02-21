/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Styles/Education.css';

export default function Education() {
  const [info, setInfo] = useState({ school: '', degree: '', graduationDate: '' });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = () => {
    setEditMode(false);
    // Handle form submission logic here
  };

  return (
    <div className='edu'>
      <h2 className='heading'>Education Info</h2>
      {editMode ? (
        <>
          <label>School: <input type="text" name="school" value={info.school} onChange={handleInputChange} /></label>
          <label>Degree: <input type="text" name="degree" value={info.degree} onChange={handleInputChange} /></label>
          <label>Graduation Date: <input type="text" name="graduationDate" value={info.graduationDate} onChange={handleInputChange} /></label>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>School: {info.school}</p>
          <p>Degree: {info.degree}</p>
          <p>Graduation Date: {info.graduationDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
