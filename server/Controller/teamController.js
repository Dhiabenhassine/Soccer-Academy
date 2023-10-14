const Team = require('../db/model/team');
const Player = require('../db/model/player'); 

module.exports = {
  createTeam: async (req, res) => {
    try {
      const { teamName } = req.body;
 
      const newTeam = await Team.create({
        teamName: teamName,
      });

      res.status(200).json(newTeam);
    } catch (error) {
      console.error('Error creating team:', error);
      res.status(500).json({ error: 'Unable to create team' });
    }
  },
  getAllTeams: async (req, res) => {
    try {
      const teams = await Team.findAll();
      res.status(200).json(teams);
    } catch (error) {
      console.error('Error fetching teams:', error);
      res.status(500).json({ error: 'Unable to fetch teams' });
    }
  },

  // Get team by ID
  getTeamById: async (req, res) => {
    try {
      const teamId = req.params.teamId;
      const team = await Team.findByPk(teamId);

      if (!team) {
        return res.status(404).json({ error: 'Team not found' });
      }

      res.status(200).json(team);
    } catch (error) {
      console.error('Error fetching team:', error);
      res.status(500).json({ error: 'Unable to fetch team' });
    }
  },

  // Delete team by ID
  deleteTeam: async (req, res) => {
    try {
      const teamId = req.params.teamId;
      const team = await Team.findByPk(teamId);

      if (!team) {
        return res.status(404).json({ error: 'Team not found' });
      }

      await team.destroy();
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting team:', error);
      res.status(500).json({ error: 'Unable to delete team' });
    }
  },

  // Update team by ID
  updateTeam: async (req, res) => {
    try {
      const teamId = req.params.teamId;
      const { teamName } = req.body;
      const team = await Team.findByPk(teamId);

      if (!team) {
        return res.status(404).json({ error: 'Team not found' });
      }

      // Update the team's name
      team.teamName = teamName;
      await team.save();

      res.status(200).json(team);
    } catch (error) {
      console.error('Error updating team:', error);
      res.status(500).json({ error: 'Unable to update team' });
    }
  },
};
