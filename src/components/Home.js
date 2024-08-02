import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleEnroll = (course) => {
        const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
        enrolledCourses.push(course);
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        alert(`Enrolled in course: ${course.title}`);
        navigate('/dashboard');
    };

    const courses = [
        { id: 1, title: 'MERN Full Stack', description: 'Learn to build full-stack applications with MongoDB, Express, React, and Node.js.', video: 'https://www.youtube.com/embed/98BzS5Oz5E4' },
        { id: 2, title: 'Java Full Stack', description: 'Master Java programming and full-stack development.', video: 'https://www.youtube.com/embed/8KaJRw-rfn8' },
        { id: 3, title: 'Data Engineer', description: 'Get skilled in data engineering and big data technologies.', video: 'https://www.youtube.com/embed/bWIZqtlcnnY' },
        // Add more courses as needed
    ];

    return (
        <div className="home">
            <h1>Welcome to EduPortal</h1>
            <p>Explore our demo courses and enroll now!</p>
            <div className="courses">
                {courses.map(course => (
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
                        <button onClick={() => handleEnroll(course)}>Enroll Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
