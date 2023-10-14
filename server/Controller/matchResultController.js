const MatchResult = require('../db/model/matchResult');

module.exports = {
  getResult: async (req, res) => {
    try {
      const results = await MatchResult.findAll();
      res.status(200).json(results); // Use 200 for success, not 201
    } catch (err) {
      console.log("Error:", err);
      res.status(500).json(err);
    }
  },

  getResultById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await MatchResult.findByPk(id);

      if (!result) {
        res.status(404).json({ error: 'Result not found' });
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      console.log('Error getting result', error);
      res.status(500).json({ error: 'Error getting result' });
    }
  },

  addResult: async (req, res) => {
    try {
      const { matchId } = req.params;
      const { winner, homeTeamGoals, awayTeamGoals } = req.body;

      const result = await MatchResult.create({
        winner,
        homeTeamGoals,
        awayTeamGoals,
        matchId:matchId,
      });

      res.status(201).json(result);
    } catch (error) {
      console.log('Error adding match result', error);
      res.status(500).json({ error: 'Error adding match result' });
    }
  },
};
