const Admin = require('../db/model/admin')
const team=require('../db/model/team')
exports.createAdmin = async (req, res) => {
    try {
      const { password, email } = req.body;
      const admin = await Admin.create({ password, email });
      res.status(201).json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  exports.getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).json({ error: 'Admin not found' });
      }
      res.json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  
  exports.updateAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const { username, password, email } = req.body;
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).json({ error: 'Admin not found' });
      }
      admin.username = username;
      admin.password = password;
      admin.email = email;
      await admin.save();
      res.json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };

  exports.deleteAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).json({ error: 'Admin not found' });
      }
      await admin.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  exports.getAllTeam=async(req,res)=>{
    
team.findAll({ where:{team:req.params.team}})
.then((result)=>{
  res.json(result)
})
    
    .catch((err)=>{
res.status(500).send(err)
    })
  }