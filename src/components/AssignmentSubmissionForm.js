import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AssignmentSubmission.css';
import Navbar from './Navbar';

const AssignmentSubmission = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleCloseClick = () => {
        navigate('/my-assignments');
      };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title || !file) {
            return; // Basic validation
        }

        const newAssignment = {
            id: Date.now(), // Generate a unique ID based on timestamp
            title,
            file_url: URL.createObjectURL(file), // Create a temporary URL for file
            feedback: [],
            submissionTimestamp: new Date().toISOString(),
        };

        const existingAssignments = JSON.parse(localStorage.getItem('assignments')) || [];
        existingAssignments.push(newAssignment);
        localStorage.setItem('assignments', JSON.stringify(existingAssignments));

        // Clear form fields
        setTitle('');
        setFile(null);

        // navigate back to the list page
        window.location.href = '/my-assignments'; // This will refresh the page and navigate back to the AssignmentList
    };

    return (
        <div className='assignments-submission-page-container'>
            <Navbar />
            <div className="assignment-submission">
                <div className='close-txt' onClick={handleCloseClick}>Close</div>
                <h2>Submit Assignment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Assignment Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Upload File</label>
                        <input
                            type="file"
                            id="file"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AssignmentSubmission;
