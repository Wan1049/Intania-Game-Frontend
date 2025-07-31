import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

type Team = {
  name: string;
  week1: number;
  week2: number;
  week3: number;
  total: number;
};

interface TeamModalProps {
  open: boolean;
  onClose: () => void;
  team: Team | null;
}

export default function TeamModal({ open, onClose, team }: TeamModalProps) {
  if (!open || !team) return null;
  const data = [
    { week: 'Week 1', points: team.week1 },
    { week: 'Week 2', points: team.week2 },
    { week: 'Week 3', points: team.week3 }
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#1c1c1c] rounded-lg p-8 w-full max-w-md relative racing-font text-white shadow-2xl border-4 border-red-600">
        <button className="absolute top-2 right-2 text-white text-xl" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-4">{team.name} - คะแนนแต่ละสัปดาห์</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="week" stroke="#fff" fontSize={14} />
            <YAxis stroke="#fff" fontSize={14} />
            <Tooltip contentStyle={{ background: '#222', color: '#fff', border: '1px solid #ff0000' }} />
            <Line type="monotone" dataKey="points" stroke="#ff0000" strokeWidth={4} dot={{ r: 6, fill: '#FFD700' }} isAnimationActive={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
