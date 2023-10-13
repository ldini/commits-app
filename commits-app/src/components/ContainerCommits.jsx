import React, { useState, useEffect } from 'react';
import Commit from './Commit';

const ContainerCommits = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3100/github/commits');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div className="app">
            <h1>Lista de tareas</h1>
            {tasks.map((commit, index) => (
                <Commit
                    key={index}
                    authorName={commit.commit.author.name}
                    authorEmail={commit.commit.author.email}
                    authorAvatar={commit.commit.avatar_url}
                    commitDate={commit.commit.author.date}
                    commitMessage={commit.commit.message}
                />
            ))}
        </div>
    );
};

export default ContainerCommits;
