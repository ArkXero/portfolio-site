import React from 'react';
import HolographicCard from './components/ui/holographic-card';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-gray-300">Interactive Holographic Card Demo</p>
        </div>
        
        <div className="flex justify-center">
          <HolographicCard />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Move your mouse over the card to see the holographic effect
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;