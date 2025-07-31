import React from 'react';

type Team = {
  name: string;
  week1: number;
  week2: number;
  week3: number;
  total: number;
};

interface PodiumProps {
  teams: Team[];
  scoreKey?: keyof Team;
}

const podiumColors = [
  'bg-yellow-300/80 text-gray-900',   // 1st (ทอง soft)
  'bg-gray-300/80 text-gray-900',     // 2nd (เงิน soft)
  'bg-orange-300/80 text-gray-900'    // 3rd (ทองแดง soft)
];

export default function Podium({ teams, scoreKey = "total" }: PodiumProps) {
  // teams: [{ name, ... }], sorted by rank
  return (
    <div className="flex justify-center items-end gap-4 py-8 bg-black relative" style={{backgroundImage: 'url(/checkerboard.png)', backgroundSize: '80px', opacity: 0.97}}>
      {/* 2nd */}
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white drop-shadow mb-1">{teams[1]?.name}</div>
        <div className={`h-30 w-20 rounded-t-lg ${podiumColors[1]}`}></div>
        <div className="bg-gray-900 text-white px-2 py-1 rounded-b-lg w-24 text-center font-bold">{teams[1]?.[scoreKey]}</div>
      </div>
      {/* 1st */}
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white drop-shadow mb-1">{teams[0]?.name}</div>
        <div className={`h-40 w-20 rounded-t-lg ${podiumColors[0]}`}></div>
        <div className="bg-gray-900 text-white px-2 py-1 rounded-b-lg w-24 text-center font-bold">{teams[0]?.[scoreKey]}</div>
      </div>
      {/* 3rd */}
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white drop-shadow mb-1">{teams[2]?.name}</div>
        <div className={`h-20 w-20 rounded-t-lg ${podiumColors[2]}`}></div>
        <div className="bg-gray-900 text-white px-2 py-1 rounded-b-lg w-24 text-center font-bold">{teams[2]?.[scoreKey]}</div>
      </div>
      {/* Checkerboard overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url(/checkerboard.png)', opacity: 0.15}}></div>
    </div>
  );
}
