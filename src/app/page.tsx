'use client';

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Podium from "../components/Podium";
import Tabs from "../components/Tabs";
import LeaderboardTable from "../components/LeaderboardTable";
import TeamModal from "../components/TeamModal";
import { fetchLeaderboard } from "../utils/api";

const tabs = ["Overall", "Week 1", "Week 2", "Week 3"];

type Team = {
  name: string;
  week1: number;
  week2: number;
  week3: number;
  total: number;
};

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [leaderboardData, setLeaderboardData] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchLeaderboard(selectedTab === 0 ? 'overall' : `week${selectedTab}`)
      .then(data => setLeaderboardData(data))
      .catch(() => setLeaderboardData([]))
      .finally(() => setLoading(false));
  }, [selectedTab]);

  const filteredData = leaderboardData;

  const columns = [
    { key: "week1", label: "Week 1" },
    { key: "week2", label: "Week 2" },
    { key: "week3", label: "Week 3" },
    { key: "total", label: "Total Points" },
  ];

  const getTableColumns = () => {
    if (selectedTab === 0) return columns; // Overall
    return [columns[selectedTab - 1]]; // Week1/2/3
  };

  const getSortedData = () => {
    if (selectedTab === 0) {
      // Overall: sort by total
      return [...leaderboardData].sort((a, b) => b.total - a.total);
    }
    // Week1/2/3: sort by weekX
    const weekKey = `week${selectedTab}` as keyof Pick<Team, 'week1' | 'week2' | 'week3'>;
    return [...leaderboardData].sort((a, b) => b[weekKey]! - a[weekKey]!);
  };

  const podiumTeams = getSortedData().slice(0, 3);

  return (
    <div className="min-h-screen bg-black racing-font text-white relative overflow-hidden">
      {/* Track curve decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-red-700 via-black to-red-700 opacity-40 pointer-events-none" style={{borderBottomLeftRadius: '80px', borderBottomRightRadius: '80px'}}></div>
      <Header />
      <Podium 
        teams={podiumTeams}
        scoreKey={selectedTab === 0 ? "total" : `week${selectedTab}` as keyof Team} 
      />
      <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} />
      <div className="px-4 md:px-12 py-6">
        {loading ? (
          <div className="text-center py-12 text-red-500 racing-font text-xl">Loading...</div>
        ) : (
          <LeaderboardTable
            data={getSortedData()}
            columns={getTableColumns()}
            onTeamClick={(team: Team) => { setSelectedTeam(team); setModalOpen(true); }}
          />
        )}
      </div>
      <TeamModal open={modalOpen} team={selectedTeam} onClose={() => setModalOpen(false)} />
      {/* Track curve bottom decoration */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-red-700 via-black to-red-700 opacity-40 pointer-events-none" style={{borderTopLeftRadius: '80px', borderTopRightRadius: '80px'}}></div> */}
    </div>
  );
}