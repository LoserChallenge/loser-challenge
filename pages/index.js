import React, { useState } from 'react';

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
    total: 151
  },
  'dm': {
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
  'pr2': {
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
  'pd': {
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
  'fm': {
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
  'ea': {
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

const determinePickStatus = (weeks, currentWeekIndex) => {
  const hadPreviousIncorrectPick = weeks.slice(0, currentWeekIndex).some(week => week.points < 0);
  
  if (weeks[currentWeekIndex].points < 0) {
    return 'incorrect';
  } else if (!hadPreviousIncorrectPick) {
    return 'streak';
  } else {
    return 'correct';
  }
};

const getActiveStreak = (weeks) => {
  let streakCount = 0;
  for (let week of weeks) {
    if (week.points > 0) {
      streakCount++;
    } else {
      break;
    }
  }
  return streakCount;
};

export default function HomePage() {
  const [expandedPlayer, setExpandedPlayer] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Loser Challenge Standings</h1>
        
        <div className="grid gap-4">
          {Object.entries(TEST_GROUP_DATA)
            .sort(([,a], [,b]) => b.total - a.total)
            .map(([id, player], rank) => (
              <div key={id} className="bg-white rounded-lg shadow">
                <div className="p-4 flex items-center justify-between cursor-pointer"
                     onClick={() => setExpandedPlayer(expandedPlayer === id ? null : id)}>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-gray-400">#{rank + 1}</span>
                    <div>
                      <h2 className="font-bold text-lg">{player.playerName}</h2>
                      <div className="flex space-x-2 text-sm">
                        <span className="text-gray-600">Total Points: </span>
                        <span className="font-bold">{player.total}</span>
                        {getActiveStreak(player.weeks) > 0 && (
                          <span className="bg-green-100 text-green-800 px-2 rounded-full text-xs">
                            {getActiveStreak(player.weeks)} Week Streak
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    {expandedPlayer === id ? '↑' : '↓'}
                  </button>
                </div>

                {expandedPlayer === id && (
                  <div className="border-t border-gray-100 p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {player.weeks.map((week, idx) => {
                        const status = determinePickStatus(player.weeks, idx);
                        return (
                          <div key={idx} className="flex justify-between items-center py-2">
                            <span className="text-gray-600">Week {idx + 1}</span>
                            <div className="flex items-center space-x-4">
                              <span className={`
                                ${status === 'streak' ? 'font-bold text-green-600' : ''}
                                ${status === 'incorrect' ? 'text-red-600' : ''}
                                ${status === 'correct' ? 'text-blue-600' : ''}
                              `}>
                                {week.pick} ({week.points > 0 ? '+' : ''}{week.points})
                              </span>
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
