// Utility for connecting to backend API
export async function fetchLeaderboard(tab: string = 'overall') {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/leaderboard?tab=${tab}`);
  if (!res.ok) throw new Error('Failed to fetch leaderboard');
  return res.json();
}
