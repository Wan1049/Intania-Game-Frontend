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
  'bg-[#FFD700] text-black',   // 1st (ทอง)
  'bg-[#C0C0C0] text-black',   // 2nd (เงิน)
  'bg-[#CD7F32] text-white'    // 3rd (ทองแดง)
];

export default function LeaderboardTable({ data, columns, onTeamClick }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <table className="min-w-full bg-[#1c1c1c] text-white">
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
                  <td key={col.key} className="px-4 py-2 text-center">{team[col.key as keyof Team]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}