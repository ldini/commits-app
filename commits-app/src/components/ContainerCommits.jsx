import React, { useState, useEffect } from 'react';
import Commit from './Commit';

const ContainerCommits = () => {

    const [tasks, setTasks] = useState({ name_repo: "", commits: [] });

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
            <h1 className="text-white text-3xl underline decoration-1 text-left m-4">Repository: {tasks.name_repo} </h1>
            {tasks.commits.map((commit, index) => (
                <Commit
                    key={index}
                    authorName={commit.author.name}
                    authorEmail={commit.author.email}
                    authorAvatar={commit.avatar_url}
                    commitDate={commit.author.date}
                    commitMessage={commit.message}
                />
            ))}
        </div>
    );
};

export default ContainerCommits;
