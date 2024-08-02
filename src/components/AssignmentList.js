import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssignmentList.css';
import Navbar from './Navbar';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem('assignments')) || [];
    setAssignments(storedAssignments);
  }, []);

  const handleNewAssignmentClick = () => {
    navigate('/submit-assignment');
  };

  return (
    <div className='my-assignments-page-container'>
      <Navbar />
      <div className="assignment-list">
        <h2>My Assignments</h2>
        <div className='btn-container' >
          <button className="submit-new-assignment" onClick={handleNewAssignmentClick}>
            Submit New Assignment
          </button>
        </div>
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              <p><strong>Title:</strong> {assignment.title}</p>
              <p><strong>Submitted on:</strong> {new Date(assignment.submissionTimestamp).toLocaleString()}</p>
              <p><a href={assignment.file_url} target="_blank" rel="noopener noreferrer">View Assignment</a></p>
              <div className="feedback">
                <strong>Feedback:</strong>
                {assignment.feedback.length > 0 ? (
                  <ul>
                    {assignment.feedback.map((fb, index) => (
                      <li key={index}>
                        <p>{fb.message}</p>
                        <p className="timestamp">{new Date(fb.timestamp).toLocaleString()}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No feedback yet</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default AssignmentList;
