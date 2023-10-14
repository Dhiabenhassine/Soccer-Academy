const Match = require('../db/model/match');

module.exports = {
    //get All Match
  getMatch: async (req, res) => {
    try {
      const matches = await Match.findAll();

      res.status(200).json({ matches });
    } catch (error) {
      console.error('Error getting matches:', error);
      res.status(500).json({ error: 'Error getting matches' });
    }
  },
  //get match by id
  getMatchById:
  async (req, res) => {
    try {
      const { id } = req.params;
  
      const match = await Match.findByPk(id);
  
      if (!match) {
        res.status(404).json({ error: 'Match not found' });
      } else {
        res.status(200).json({ match });
      }
    } catch (error) {
      console.error('Error getting match by ID:', error);
      res.status(500).json({ error: 'Error getting match by ID' });
    }
},
// create match
createMatch: async (req, res) => {
    try {
      const { dateAndTime, homeTeamId, awayTeamId } = req.body;
  
      const match = await Match.create({
        dateAndTime,
        homeTeamId,
        awayTeamId,
      });
  
      res.status(201).json({ match });
    } catch (error) {
      console.error('Error creating match:', error);
      res.status(500).json({ error: 'Error creating match' });
    }
  },
  //update time match
  updateMatchDateAndTime(req, res) {
    const { matchId } = req.params;
    const { dateAndTime } = req.body;

    Match.findByPk(matchId)
      .then((match) => {
        if (!match) {
          res.status(404).json({ error: 'Match not found' });
        } else {
          match
            .update({ dateAndTime })
            .then(() => {
              res.status(200).json({ message: 'Match date and time updated successfully' });
            })
            .catch((error) => {
              console.error('Error updating match date and time:', error);
              res.status(500).json({ error: 'Error updating match date and time' });
            });
        }
      })
      .catch((error) => {
        console.error('Error getting match by ID:', error);
        res.status(500).json({ error: 'Error getting match by ID' });
      });
  },
};
