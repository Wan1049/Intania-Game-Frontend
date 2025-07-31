import React from 'react';

type Team = {
  name: string;
  week1: number;
  week2: number;
  week3: number;
  total: number;
};

interface LeaderboardTableProps {
  data: Team[];
  onTeamClick: (team: Team) => void;
}

const rankBg = [
  'bg-yellow-400 text-black', // 1
  'bg-gray-300 text-black',   // 2
  'bg-orange-600 text-white'  // 3
];

export default function LeaderboardTable({ data, onTeamClick }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#1c1c1c] text-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-black">
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Group</th>
            <th className="px-4 py-2">Week1 Points</th>
            <th className="px-4 py-2">Week2 Points</th>
            <th className="px-4 py-2">Week3 Points</th>
            <th className="px-4 py-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team: Team, idx: number) => (
            <tr
              key={team.name}
              className={`transition-all duration-200 cursor-pointer ${idx < 3 ? rankBg[idx] : ''} hover:bg-red-400/40`}
              onClick={() => onTeamClick(team)}
            >
              <td className="px-4 py-2 font-bold">{idx + 1}</td>
              <td className="px-4 py-2 font-bold">{team.name}</td>
              <td className="px-4 py-2">{team.week1}</td>
              <td className="px-4 py-2">{team.week2}</td>
              <td className="px-4 py-2">{team.week3}</td>
              <td className="px-4 py-2 font-bold">{team.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
