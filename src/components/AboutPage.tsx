import React from 'react';
import Header from './common/Header';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">
            <Header onChatIconClick={() => console.log('Chat toggle TBD')} /> 
            <main className="max-w-4xl mx-auto p-4 md:p-8 py-20">
                <h1 className="text-5xl font-extrabold text-accent-purple mb-8 text-center">
                    Our Story & Vision
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Sylektus Agency was founded on the principle that digital excellence should be accessible to all businesses, regardless of size. Our journey started in 2015, focusing on blending cutting-edge technology with creative storytelling.
                </p>
                <h2 className="text-3xl font-bold text-primary-blue mt-10 mb-4">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    To transform concepts into dominating digital realities, providing full-spectrum solutions from web development to global advertising campaigns. We aim to be your single, trusted partner for digital growth.
                </p>
                {/* You can add your process section or values here */}
            </main>
        </div>
    );
};

export default AboutPage;