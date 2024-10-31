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
  'pr-test-8d4f2-2': {
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
  'dm-test-9e3a7-2': {
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

// In the render part, update the cell styling:
{player.weeks.map((week, idx) => (
  <td key={idx} className="px-4 py-2">
    <div style={{ 
      fontWeight: week.isEligible ? '700' : 'normal',  // Changed to 700 for bolder text
      color: week.points < 0 ? '#DC2626' : 'inherit'   // Using a specific red color
    }}>
      {week.pick}
    </div>
    <div style={{ 
      color: week.points < 0 ? '#DC2626' : 'inherit'
    }}>
      {week.points}
    </div>
  </td>
))}
