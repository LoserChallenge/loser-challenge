import React from 'react';
import Link from 'next/link';

// Update player IDs to match exact URL patterns
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
  'dm-test-9e3a7': { // Dan's first entry
    playerName: 'Dan McCarley',
    linkId: 'dm-test-9e3a7',
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
  'dm-test-9e3a7-2': { // Dan's Fly McMarty entry
    playerName: 'Fly McMarty',
    linkId: 'dm-test-9e3a7',
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
  'pr-test-8d4f2-2': { // Paul's second entry
    playerName: 'Paul Rusch (#2)',
    linkId: 'pr-test-8d4f2',
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
  // ... rest of the data stays the same
};

export default function StandingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold mb-6">Loser Challenge Standings</h1>
        
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Name</th>
                {[1, 2, 3, 4, 5, 6, 7].map(week => (
                  <th key={week} className="px-4 py-2 text-left">
                    Week {week}
                  </th>
                ))}
                <th className="px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {Object.entries(TEST_GROUP_DATA)
                .sort(([,a], [,b]) => b.total - a.total)
                .map(([id, player]) => (
                <tr key={id} className="border-b">
                  <td className="px-4 py-2">
                    <Link 
                      href={`/player/${player.linkId || id}`} 
                      className="text-purple-600 hover:text-purple-800"
                    >
                      {player.playerName}
                    </Link>
                  </td>
                  {player.weeks.map((week, idx) => (
                    <td key={idx} className="px-4 py-2">
                      <div style={{ 
                        fontWeight: week.isEligible ? 'bold' : 'normal',
                        color: week.points < 0 ? 'red' : 'inherit'
                      }}>
                        {week.pick}
                      </div>
                      <div style={{ color: week.points < 0 ? 'red' : 'inherit' }}>
                        {week.points}
                      </div>
                    </td>
                  ))}
                  <td className="px-4 py-2 font-bold">
                    {player.total}
                  </td>
                </tr>
              ))}
              {/* Pick of the Week row */}
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-bold">PICK OF THE WEEK</td>
                <td className="px-4 py-2">
                  <div>BAL</div>
                  <div>30</div>
                </td>
                <td className="px-4 py-2">
                  <div>SF</div>
                  <div>31</div>
                </td>
                <td className="px-4 py-2">
                  <div>SF</div>
                  <div>31</div>
                </td>
                <td className="px-4 py-2">
                  <div>PHI</div>
                  <div>28</div>
                </td>
                <td className="px-4 py-2">
                  <div>BUF</div>
                  <div>29</div>
                </td>
                <td className="px-4 py-2">
                  <div>WAS</div>
                  <div>26</div>
                </td>
                <td className="px-4 py-2">
                  <div>MIN</div>
                  <div>32</div>
                </td>
                <td className="px-4 py-2 font-bold">207</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
