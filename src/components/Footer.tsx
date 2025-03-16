import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-center mt-8">
            <p className="text-sm text-gray-700 dark:text-gray-200">
                &copy; {new Date().getFullYear()} Vanessa Oliveira. Todos os direitos reservados.
            </p>
            
        </footer>
    );
};

export default Footer;