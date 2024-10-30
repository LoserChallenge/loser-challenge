import React from 'react';

const TEST_GROUP_DATA = {
  // Paul Rusch entries
  'Paul Rusch (#1)': {
    weeks: [
      { week: 1, pick: 'BAL', points: 19 },
      { week: 2, pick: 'CIN', points: 24, isEligible: true },
      { week: 3, pick: 'JAX', points: 22, isEligible: true },
      { week: 4, pick: 'LAC', points: 15 },
      { week: 5, pick: 'NYJ', points: 19 },
      { week: 6, pick: 'WAS', points: 26, isEligible: true },
      { week: 7, pick: 'TB', points: 25 }
    ],
    total: 151
  },
  'Paul Rusch (#2)': {
    weeks: [
      { week: 1, pick: 'LAR', points: 18 },
      { week: 2, pick: 'DET', points: 15 },
      { week: 3, pick: 'LAR', points: -9.5 },
      { week: 4, pick: 'PHI', points: 28 },
      { week: 5, pick: 'HOU', points: -14 },
      { week: 6, pick: 'SEA', points: 22 },
      { week: 7, pick: 'HOU', points: 28 }
    ],
    total: 87.5
  },
  'Dan McCarley': {
    weeks: [
      { week: 1, pick: 'NYJ', points: 18 },
      { week: 2, pick: 'CIN', points: 24 },
      { week: 3, pick: 'JAX', points: 16 },
      { week: 4, pick: 'JAX', points: 16 },
      { week: 5, pick: 'NYJ', points: 18 },
      { week: 6, pick: 'NO', points: 19 },
      { week: 7, pick: 'SEA', points: 11 }
    ],
    total: 100
  },
  'Fly McMarty': {
    weeks: [
      { week: 1, pick: 'WAS', points: 18 },
      { week: 2, pick: 'CIN', points: 5 },
      { week: 3, pick: null, points: -15 },
      { week: 4, pick: 'BUF', points: 16 },
      { week: 5, pick: null, points: 18 },
      { week: 6, pick: 'WAS', points: 26 },
      { week: 7, pick: null, points: -11 }
    ],
    total: 70.5
  },
  'Phil Defigh': {
    weeks: [
      { week: 1, pick: 'LAR', points: 18 },
      { week: 2, pick: 'CIN', points: 24 },
      { week: 3, pick: 'JAX', points: 16 },
      { week: 4, pick: 'JAX', points: 16 },
      { week: 5, pick: 'AZ', points: -4 },
      { week: 6, pick: 'WAS', points: 26 },
      { week: 7, pick: 'SEA', points: -11 }
    ],
    total: 85
  },
  'Erika Arthun': {
    weeks: [
      { week: 1, pick: 'GB', points: 25 },
      { week: 2, pick: 'GB', points: -12.5 },
      { week: 3, pick: null, points: -10 },
      { week: 4, pick: 'GB', points: 25 },
      { week: 5, pick: null, points: -8 },
      { week: 6, pick: 'WAS', points: -14.5 },
      { week: 7, pick: 'HOU', points: 28 }
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {[1, 2, 3, 4, 5, 6, 7].map(week => (
                  <th key={week} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Week {week}
                  </th>
                ))}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(TEST_GROUP_DATA)
                .sort(([,a], [,b]) => b.total - a.total)
                .map(([name, data]) => (
                <tr key={name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {name}
                  </td>
                  {data.weeks.map((week, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${week.isEligible ? 'font-bold' : ''} ${week.points < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                        {week.pick || '-'}
                      </div>
                      <div className={`text-sm ${week.points < 0 ? 'text-red-600' : 'text-gray-500'}`}>
                        {week.points}
                      </div>
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    {data.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
