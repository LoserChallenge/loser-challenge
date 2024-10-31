import React, { useState } from 'react';

export default function HomePage() {
  const TEST_GROUP_DATA = {
    'pr1': {
      playerName: 'Paul Rusch (#1)',
      weeks: [
        { pick: 'BAL', points: 19 },
        { pick: 'CIN', points: 24 },
        { pick: 'JAX', points: 22 },
        { pick: 'LAC', points: 15 },
        { pick: 'NYJ', points: 19 },
        { pick: 'WAS', points: 26 },
        { pick: 'TB', points: 25 }
      ],
      total: 151,
      isLastLoserActive: true
    }
    // For now let's just show one player to match the example
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Loser Challenge Standings</h1>
        
        {Object.entries(TEST_GROUP_DATA)
          .map(([id, player], rank) => (
            <div key={id} className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-gray-400 font-semibold">#{rank + 1}</span>
                    <div>
                      <h2 className="text-xl font-bold">{player.playerName}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-600">Total Points:</span>
                        <span className="font-semibold">{player.total}</span>
                        {player.isLastLoserActive && (
                          <span className="text-green-700 bg-green-50 px-3 py-0.5 rounded-full text-sm">
                            Last Loser Active
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {player.weeks.map((week, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-600">Week {idx + 1}</span>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg font-medium">
                          {week.pick} ({week.points > 0 ? '+' : ''}{week.points})
                        </span>
                        <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                          LL
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
