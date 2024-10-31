import React, { useState } from 'react';

// [Keep the same TEST_GROUP_DATA and helper functions]

export default function HomePage() {
  const [expandedPlayer, setExpandedPlayer] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Loser Challenge Standings</h1>
        
        <div className="space-y-4">
          {Object.entries(TEST_GROUP_DATA)
            .sort(([,a], [,b]) => b.total - a.total)
            .map(([id, player], rank) => (
              <div key={id} className="bg-white rounded-lg shadow">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedPlayer(expandedPlayer === id ? null : id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xl text-gray-400">#{rank + 1}</span>
                      <div>
                        <h2 className="text-lg font-bold">{player.playerName}</h2>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-gray-600">
                            Total Points: <span className="font-bold">{player.total}</span>
                          </span>
                          {getActiveStreak(player.weeks) > 0 && (
                            <span className="text-sm text-green-700 bg-green-50 px-3 py-1 rounded-full">
                              Last Loser Active
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 text-xl">
                      {expandedPlayer === id ? '↑' : '↓'}
                    </button>
                  </div>
                </div>

                {expandedPlayer === id && (
                  <div className="border-t border-gray-100 p-6">
                    <div className="space-y-4">
                      {player.weeks.map((week, idx) => {
                        const status = determinePickStatus(player.weeks, idx);
                        return (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-600">Week {idx + 1}</span>
                            <div className="flex items-center gap-3">
                              <span className={`
                                px-3 py-1 rounded-lg
                                ${status === 'streak' ? 'bg-green-50 text-green-700' : ''}
                                ${status === 'incorrect' ? 'text-red-600' : ''}
                                ${status === 'correct' ? 'text-blue-600' : ''}
                              `}>
                                {week.pick} ({week.points > 0 ? '+' : ''}{week.points})
                              </span>
                              {status === 'streak' && (
                                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                  LL
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
