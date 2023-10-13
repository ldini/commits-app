import React from 'react';

const Commit = ({ authorName, authorEmail, authorAvatar, commitDate, commitMessage }) => {
    return (
        <div className="flex items-center bg-gray-800 border-slate-500 text-white shadow-lg hover:bg-gray-700 transform hover:scale-105 transition duration-300 rounded-lg p-6 m-4">
            <div className="text-left w-full">
                <img className="rounded-full w-20 h-20 float-left mr-4" src={authorAvatar} alt="Author Avatar" />
                <div>
                    <p className="text-sm mb-2">Mensaje: {commitMessage}</p>
                    <p className="text-lg font-semibold mb-2">Autor: {authorName}</p>
                    <p className="text-sm mb-2">Contacto: {authorEmail}</p>     
                    <p className="text-sm">Hora: {commitDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Commit;