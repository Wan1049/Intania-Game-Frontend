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
}

const podiumColors = [
  '#C0C0C0', // 2nd
  '#FFD700', // 1st
  '#CD7F32'  // 3rd
];

export default function Podium({ teams }: PodiumProps) {
  // teams: [{ name, total }], sorted by rank
  return (
    <div className="flex justify-center items-end gap-4 py-8 bg-black relative" style={{backgroundImage: 'url(/checkerboard.png)', backgroundSize: '80px', opacity: 0.97}}>
      {/* 2nd */}
      <div className="flex flex-col items-center">
        <div className="h-32 w-20 rounded-t-lg" style={{background: podiumColors[0]}}></div>
        <div className="bg-gray-900 text-white px-2 py-1 rounded-b-lg w-20 text-center font-bold">{teams[1]?.name}</div>
        <div className="text-white font-bold">{teams[1]?.total}</div>
        <div className="text-sm text-gray-400">2</div>
      </div>
      {/* 1st */}
      <div className="flex flex-col items-center">
        <div className="h-40 w-24 rounded-t-lg" style={{background: podiumColors[1]}}></div>
        <div className="bg-gray-900 text-white px-2 py-1 rounded-b-lg w-24 text-center font-bold">{teams[0]?.name}</div>
        <div className="text-white font-bold">{teams[0]?.total}</div>
        <div className="text-sm text-gray-400">1</div>
      </div>
      {/* 3rd */}
      <div className="flex flex-col items-center">
        <div className="h-28 w-16 rounded-t-lg" style={{background: podiumColors[2]}}></div>
        <div className="bg-gray-900 text-white px-2 py-1 rounded-b-lg w-16 text-center font-bold">{teams[2]?.name}</div>
        <div className="text-white font-bold">{teams[2]?.total}</div>
        <div className="text-sm text-gray-400">3</div>
      </div>
      {/* Checkerboard overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url(/checkerboard.png)', opacity: 0.15}}></div>
    </div>
  );
}
