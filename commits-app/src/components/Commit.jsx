import React from 'react';

const Commit = ({ authorName, authorEmail, authorAvatar, commitDate, commitMessage }) => {
    return (
        <figure className="flex bg-gray-800 border border-gray-600 text-white shadow-lg hover:shadow-xl hover:bg-gray-700 hover:scale-105 transition duration-300 rounded-lg p-6 m-4">
            <div className="flex flex-row text-left w-full items-center">
                <div className=''>
                    <img className="rounded-full w-16 h-16 mr-4" src={authorAvatar} alt="Author Avatar" />
                </div>
                <div className=''>
                    <p className="">Commit: {commitMessage}</p>
                    <p className="">Autor: {authorName}</p>
                    <p className="">Contacto: {authorEmail}</p>     
                    <p className="">Hora: {commitDate}</p>
                </div>
            </div>
        </figure>
    );
};

export default Commit;
