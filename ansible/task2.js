db.users.find({
  mail: /@example.org/i,

  'lastLogin.coord.0': { $gte: -90, $lte: 0 },
  'lastLogin.coord.1': { $gte: -180, $lte: 0 },

  unsuccessfulAttempts: {
    $gt: 0
  },

  role: {
    $nin: ['admin', 'client']
  },

  $where: "this.activeSessions.length > 1",
  // 'activeSessions.duration': {$gte: 8}
  'activeSessions': {
    $elemMatch: {
      'duration': {$gte: 8}
    }
  }

});
