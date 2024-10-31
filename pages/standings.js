import React from 'react';
import Link from 'next/link';

const PICK_OF_THE_WEEK = [
  { week: 1, pick: 'BAL', points: 30 },
  { week: 2, pick: 'SF', points: 31 },
  { week: 3, pick: 'SF', points: 31 },
  { week: 4, pick: 'PHI', points: 28 },
  { week: 5, pick: 'BUF', points: 29 },
  { week: 6, pick: 'WAS', points: 26 },
  { week: 7, pick: 'MIN', points: 32 }
];

const TEST_GROUP_DATA = {
  'pr-test-8d4f2': {
    playerName: 'Paul Rusch (#1)',
    weeks: [
      { pick: 'BAL', points: 19, isEligible: true },
      { pick: 'CIN', points: 24, isEligible: true },
      { pick: 'JAX', points: 22, isEligible: true },
      { pick: 'LAC', points: 15, isEligible: true },
      { pick: 'NYJ', points: 19, isEligible: true },
      { pick: 'WAS', points: 26, isEligible: true },
      { pick: 'TB', points: 25, isEligible: true }
    ],
    total: 151
  },
  'dm-test-9e3a7': {
    playerName: 'Dan McCarley',
    weeks: [
      { pick: 'NYJ', points: 18 },
      { pick: 'CIN', points: 24 },
      { pick: 'JAX', points: 16 },
      { pick: 'JAX', points: 16 },
      { pick: 'NYJ', points: 18 },
      { pick: 'NO', points: 19 },
      { pick: 'SEA', points: 11 }
    ],
    total: 100
  },
  'pr2-test-8d4f2': {
    playerName: 'Paul Rusch (#2)',
    weeks: [
      { pick: 'LAR', points: 18 },
      { pick: 'DET', points: 15 },
      { pick: 'LAR', points: -9.5 },
      { pick: 'PHI', points: 28 },
      { pick: 'HOU', points: -14 },
      { pick: 'SEA', points: 22 },
      { pick: 'HOU', points: 28 }
    ],
    total: 87.5
  },
  'pd-test-2c6b5': {
    playerName: 'Phil Defigh',
    weeks: [
      { pick: 'LAR', points: 18 },
      { pick: 'CIN', points: 24 },
      { pick: 'JAX', points: 16 },
      { pick: 'JAX', points: 16 },
      { pick: 'AZ', points: -4 },
      { pick: 'WAS', points: 26 },
      { pick: 'SEA', points: -11 }
    ],
    total: 85
  },
  'fm-test-9e3a8': {
    playerName: 'Fly McMarty',
    weeks: [
      { pick: 'WAS', points: 18 },
      { pick: 'CIN', points: 5 },
      { pick: '-', points: -15 },
      { pick: 'BUF', points: 16 },
      { pick: '-', points: 18 },
      { pick: 'WAS', points: 26 },
      { pick: '-', points: -11 }
    ],
    total: 70.5
  },
  'ea-test-7h1k9': {
    playerName: 'Erika Arthun',
    weeks: [
      { pick: 'GB', points: 25 },
      { pick: 'GB', points: -12.5 },
      { pick: '-', points: -10 },
      { pick: 'GB', points: 25 },
      { pick: '-', points: -8 },
      { pick: 'WAS', points: -14.5 },
      { pick: 'HOU', points: 28 }
    ],
    total: 38
  }
};

export default function StandingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold mb-6">Loser Challenge Standings</h1>
        
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b">Name</th>
                {[1, 2, 3, 4, 5, 6, 7].map(week => (
                  <th key={week} className="px-4 py-2 text-left border-b">
                    Week {week}
                  </th>
                ))}
                <th className="px-4 py-2 text-left border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(TEST_GROUP_DATA)
                .sort(([,a], [,b]) => b.total - a.total)
                .map(([id, player]) => (
                <tr key={id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">
                    <Link href={`/player/${id}`} className="text-blue-600 hover:underline">
                      {player.playerName}
                    </Link>
                  </td>
                  {player.weeks.map((week, idx) => (
                    <td key={idx} className="px-4 py-2 border-b">
                      <div className={`
                        ${week.isEligible ? 'font-bold' : ''}
                      `}>
                        {week.pick}
                      </div>
                      <div className={`
                        ${week.points < 0 ? 'text-red-600' : ''}
                      `}>
                        {week.points}
                      </div>
                    </td>
                  ))}
                  <td className="px-4 py-2 border-b font-bold">
                    {player.total}
                  </td>
                </tr>
              ))}
              {/* Pick of the Week Row */}
              <tr className="bg-gray-100">
                <td className="px-4 py-2 border-b font-bold">PICK OF THE WEEK</td>
                {PICK_OF_THE_WEEK.map((week, idx) => (
                  <td key={idx} className="px-4 py-2 border-b">
                    <div>{week.pick}</div>
                    <div>{week.points}</div>
                  </td>
                ))}
                <td className="px-4 py-2 border-b">207</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
