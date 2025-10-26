import React from 'react';
import Header from './common/Header'; // Assuming Header is in common
import TeamSection from './TeamSection'; // Reusing the section from Home

const TeamPage: React.FC = () => {
    // You can fetch all team data here if you need more detail than home page
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">
            {/* Header should handle its own chat toggle */}
            <Header onChatIconClick={() => console.log('Chat toggle TBD')} /> 
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <h1 className="text-5xl font-extrabold text-primary-blue text-center py-10">
                    Meet Our Entire Leadership
                </h1>
                {/* You can reuse the TeamSection component here */}
                <TeamSection /> 
                
                {/* Add more detailed team bios here if needed */}
            </main>
        </div>
    );
};

export default TeamPage;