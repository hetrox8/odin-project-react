/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function GeneralInfo() {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
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
  };

  return (
    <div className='edu'>
      <h2 className='heading'>General Information</h2>
      {editMode ? (
        <>
          <label>
            Name :{' '}
            <input
              type="text"
              name='name'
              value={info.name}
              onChange={handleInputChange} 
            />
          </label>
          <label>
            Email :{' '}
            <input
              type="text"
              name='email'
              value={info.email}
              onChange={handleInputChange}  
            />
          </label>
          <label>
            Phone :{' '}
            <input
              type="text"
              name='phone'
              value={info.phone}
              onChange={handleInputChange}  
            />
          </label>
          <button onClick={handleSubmit}>submit</button>
        </>
      ) : (
        <>
          <p>Name: {info.name}</p>
          <p>email: {info.email}</p>
          <p>phone: {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
