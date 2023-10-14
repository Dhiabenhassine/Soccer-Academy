const Player = require('../db/model/player');

module.exports = {
  updatePlayer: (req, res) => {
    const playerId = req.params.id;
    const updatedPlayerData = req.body;

    Player.findByPk(playerId)
      .then((player) => {
        if (!player) {
          return res.status(404).json({ error: 'Player not found' });
        }

        // Update player data
        player
          .update(updatedPlayerData)
          .then((updatedPlayer) => {
            res.json(updatedPlayer);
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to update player' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  },

  getOneByid: (req, res) => {
    const playerId = req.params.id;

    Player.findByPk(playerId)
      .then((player) => {
        if (!player) {
          return res.status(404).json({ error: 'Player not found' });
        }
        res.json(player);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  },

  deletePlayer: (req, res) => {
    const playerId = req.params.id;

    Player.findByPk(playerId)
      .then((player) => {
        if (!player) {
          return res.status(404).json({ error: 'Player not found' });
        }

        player
          .destroy()
          .then(() => {
            res.json({ message: 'Player deleted successfully' });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to delete player' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  },
};
