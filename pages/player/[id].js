import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NFL_TEAMS } from '../../data/teams';

const TEST_PLAYERS = {
  'pr-test-8d4f2': {
    name: 'Paul Rusch',
    entries: [
      { id: 1, name: 'Paul Rusch (#1)', currentPick: null },
      { id: 2, name: 'Paul Rusch (#2)', currentPick: null }
    ]
  },
  'dm-test-9e3a7': {
    name: 'Dan McCarley',
    entries: [
      { id: 3, name: 'Dan McCarley', currentPick: null },
      { id: 4, name: 'Fly McMarty', currentPick: null }
    ]
  },
  'pd-test-2c6b5': {
    name: 'Phil Defigh',
    entries: [
      { id: 5, name: 'Phil Defigh', currentPick: null }
    ]
  },
  'ea-test-7h1k9': {
    name: 'Erika Arthun',
    entries: [
      { id: 6, name: 'Erika Arthun', currentPick: null }
    ]
  }
};

export default function PlayerPage() {
  const router = useRouter();
  const { id } = router.query;
  const [player, setPlayer] = useState(TEST_PLAYERS[id]);
  const [selectedEntry, setSelectedEntry] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [submittedPicks, setSubmittedPicks] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!selectedEntry && player.entries.length > 1) || !selectedTeam) {
      return;
    }
    
    const entryId = player.entries.length > 1 ? selectedEntry : player.entries[0].id;
    const team = NFL_TEAMS.find(t => t.abbr === selectedTeam);
    
    // Update submitted picks
    const newSubmittedPicks = {
      ...submittedPicks,
      [entryId]: {
        team: team.name,
        points: team.points,
        timestamp: new Date().toLocaleTimeString()
      }
    };
    setSubmittedPicks(newSubmittedPicks);

    // Clear selection
    setSelectedTeam('');
    if (player.entries.length > 1) {
      setSelectedEntry('');
    }
  };

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Invalid Player Link</h1>
          <p className="text-gray-600">This link is not valid or has expired.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Player Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{player.name}'s Picks</h1>
          <p className="text-gray-600">Week 8</p>
        </div>

        {/* Pick Submission Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Submit Your Pick</h2>
          
          {/* Entry Selection */}
          {player.entries.length > 1 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Entry
              </label>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedEntry}
                onChange={(e) => setSelectedEntry(e.target.value)}
              >
                <option value="">Choose entry...</option>
                {player.entries.map(entry => (
                  <option key={entry.id} value={entry.id}>
                    {entry.name} 
                    {submittedPicks[entry.id] && ` (Current: ${submittedPicks[entry.id].team})`}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Team Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Team
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
            >
              <option value="">Choose team...</option>
              {NFL_TEAMS.map(team => (
                <option key={team.abbr} value={team.abbr}>
                  {team.name} ({team.points} points)
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            disabled={(!selectedEntry && player.entries.length > 1) || !selectedTeam}
          >
            Submit Pick
          </button>
        </form>

        {/* Current Picks Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Current Picks</h2>
          {player.entries.map(entry => (
            <div key={entry.id} className="flex justify-between py-2 border-b last:border-0">
              <span>{entry.name}</span>
              {submittedPicks[entry.id] ? (
                <div className="text-right">
                  <span className="text-green-600 font-medium">
                    {submittedPicks[entry.id].team} ({submittedPicks[entry.id].points} pts)
                  </span>
                  <div className="text-xs text-gray-500">
                    Submitted at {submittedPicks[entry.id].timestamp}
                  </div>
                </div>
              ) : (
                <span className="text-gray-600">No pick submitted</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
