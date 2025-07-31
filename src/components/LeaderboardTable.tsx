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
  columns: { key: string; label: string }[];
  onTeamClick: (team: Team) => void;
}

const rankBg = [
  'bg-yellow-300/80 text-gray-900',   // ทอง soft
  'bg-gray-300/80 text-gray-900',     // เงิน soft
  'bg-orange-300/80 text-gray-900'    // ทองแดง soft
];

export default function LeaderboardTable({ data, columns, onTeamClick }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto">
       <div className="flex justify-center min-w-full">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <table className="bg-neutral-900 text-white table-auto border-collapse">
            <thead>
              <tr className="bg-black">
                <th className="px-4 py-2 text-center">Rank</th>
                <th className="px-4 py-2 text-center">Group</th>
                {columns.map(col => (
                  <th key={col.key} className="px-4 py-2 text-center">{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((team: Team, idx: number) => (
                <tr
                  key={team.name}
                  className={`transition-all duration-200 cursor-pointer ${idx < 3 ? rankBg[idx] : ''} hover:bg-red-400/40`}
                  onClick={() => onTeamClick(team)}
                >
                  <td className={`px-4 py-2 font-bold text-center ${idx === 0 ? 'rounded-tl-xl' : ''}`}>{idx + 1}</td>
                  <td className="px-4 py-2 font-bold text-center">{team.name}</td>
                  {columns.map(col => (
                    <td key={col.key} className={`px-4 py-2 text-center ${idx === 0 && col.key === columns[columns.length - 1].key ? 'rounded-tr-xl' : ''}`}>{team[col.key as keyof Team]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
    </div>
  );
}