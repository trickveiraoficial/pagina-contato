import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const MailIcon = FiMail as React.FC<React.ComponentProps<'svg'>>;
const LinkedinIcon = FiLinkedin as React.FC<React.ComponentProps<'svg'>>;
const GithubIcon = FiGithub as React.FC<React.ComponentProps<'svg'>>;

const Contact: React.FC = () => {
    return (
        <div className="mt-8 px-4 py-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
                Contatos
            </h2>
            <hr className="border-b-2 border-blue-500 mb-6" />
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                Sinta-se à vontade para entrar em contato comigo por e-mail ou nas redes sociais!
            </p>
            <div className="mt-4 space-y-4">
                <p className="text-xl flex items-center space-x-2">
                    <MailIcon className="text-2xl text-blue-500 transition-transform hover:scale-110" />
                    <span>Email:</span>
                    <a 
                        href="mailto:your-email@example.com" 
                        className="text-blue-500 hover:underline"
                    >
                        your-email@example.com
                    </a>
                </p>
                <p className="text-xl flex items-center space-x-2">
                    <LinkedinIcon className="text-2xl text-blue-500 transition-transform hover:scale-110" />
                    <span>LinkedIn:</span>
                    <a 
                        href="https://www.linkedin.com/in/your-profile" 
                        className="text-blue-500 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        your-profile
                    </a>
                </p>
                <p className="text-xl flex items-center space-x-2">
                    <GithubIcon className="text-2xl text-blue-500 transition-transform hover:scale-110" />
                    <span>GitHub:</span>
                    <a 
                        href="https://github.com/your-username" 
                        className="text-blue-500 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        your-username
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;