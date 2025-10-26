import React from 'react';
import Header from './common/Header';
import CareerForm from './CareerForm'; // Reusing the form from Home

const CareersPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">
            <Header onChatIconClick={() => console.log('Chat toggle TBD')} /> 
            <main className="max-w-5xl mx-auto p-4 md:p-8 py-20 text-center">
                <h1 className="text-5xl font-extrabold text-accent-purple mb-4">
                    Join Our Innovative Team
                </h1>
                <p className="text-xl text-gray-400 mb-12">
                    We're always looking for passionate digital architects, developers, and creatives to push the boundaries of what's possible.
                </p>
                
                <h2 className="text-3xl font-bold text-primary-blue mb-8">
                    Open Positions
                </h2>
                <div className="space-y-6 mb-12 text-left">
                    {/* Placeholder for Job Listings */}
                    <div className="p-4 bg-dark-card rounded-lg border border-gray-700">
                        <h3 className="text-xl font-semibold">Senior React Developer</h3>
                        <p className="text-gray-400">Full-time | Remote/Indore</p>
                    </div>
                    <div className="p-4 bg-dark-card rounded-lg border border-gray-700">
                        <h3 className="text-xl font-semibold">Video Production Specialist</h3>
                        <p className="text-gray-400">Full-time | On-site</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-primary-blue mb-6">
                    Apply Now
                </h2>
                <CareerForm />
            </main>
        </div>
    );
};

export default CareersPage;