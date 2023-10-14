const express = require('express');
const router = express.Router();
const {createAdmin,getAdminById,updateAdmin,deleteAdmin} =require('../Controller/adminController')

router.post('/',createAdmin);
router.get('/get/:id', getAdminById);
router.put('/update/:id', updateAdmin);
router.delete('/delete/:id', deleteAdmin);

module.exports = router;
