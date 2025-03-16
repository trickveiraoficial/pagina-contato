import React from 'react';

const Photo: React.FC = () => {
    return (
        <div className="flex flex-col items-center mt-8 mb-8">
            <img 
                src="https://i.ibb.co/Kjz7H3cv/perfil-site.png" 
                alt="Vanessa de Oliveira" 
                className="rounded-full w-40 h-40 mb-4 shadow-lg border-2 border-blue-500 transform translate-y-2"
            />
            <h1 className="text-3xl font-extrabold font-serif text-blue-600 transform translate-y-2">
                Vanessa Oliveira
            </h1>
        </div>
    );
};

export default Photo;