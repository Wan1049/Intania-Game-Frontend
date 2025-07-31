import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white font-bold racing-font border-b-4 border-red-600 relative flex items-center px-6 py-4 shadow-lg">
      <span className="text-3xl mr-3">🏁</span>
      <h1 className="text-2xl md:text-3xl tracking-wide">Intania Game 2025 - Grand Prix Leaderboard</h1>
      <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600" style={{backgroundImage: 'repeating-linear-gradient(90deg, #ff0000 0 10px, transparent 10px 20px)'}}></div>
    </header>
  );
}
