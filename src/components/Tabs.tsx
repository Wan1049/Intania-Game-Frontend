import React from 'react';

interface TabsProps {
  tabs: string[];
  selected: number;
  onSelect: (idx: number) => void;
}

export default function Tabs({ tabs, selected, onSelect }: TabsProps) {
  return (
    <div className="flex gap-2 justify-center py-4 bg-black">
      {tabs.map((tab: string, idx: number) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-t-lg font-bold racing-font text-white transition-all duration-300 border-b-4 ${selected === idx ? 'border-red-600 bg-gray-900' : 'border-transparent bg-gray-800 hover:bg-red-700'}`}
          onClick={() => onSelect(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
