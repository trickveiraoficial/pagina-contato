import React from 'react';

const Summary: React.FC = () => {
    return (
        <section className="px-4 py-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
                Sobre Mim
            </h2>
            <hr className="border-b-2 border-blue-500 mb-6" />
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Sou uma pessoa simpática e colaborativa, com experiência em marketplace. Busco constantemente aprender, crescer e me desafiar, valorizando o trabalho em equipe e uma forte ética profissional.
            </p>
        </section>
    );
};

export default Summary;