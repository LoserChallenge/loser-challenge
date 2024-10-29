import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Loser Challenge
        </h1>
        
        {/* Test Version Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-center text-blue-800">
            Test Version
          </p>
        </div>

        {/* Content will go here */}
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-center text-gray-600">
            Loading game interface...
          </p>
        </div>

        {/* Disclaimer */}
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>
            This is an independent game for entertainment purposes only. 
            Not affiliated with, endorsed, or sponsored by the NFL or any NFL teams. 
            Team names are used for identification purposes only.
          </p>
        </footer>
      </div>
    </div>
  );
}
