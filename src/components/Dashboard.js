import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Dashboard.css';

const Dashboard = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
        setEnrolledCourses(courses);
    }, []);

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <h1>Your Enrolled Courses</h1>
                {enrolledCourses.length === 0 ? (
                    <p>No courses enrolled yet.</p>
                ) : (
                    <div className="enrolled-courses">
                        {enrolledCourses.map((course) => (
                            <div className="course-card" key={course.id}>
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <div className="video-container">
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src={course.video}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={course.title}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
