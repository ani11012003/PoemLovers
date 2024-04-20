const express=require('express');
const AuthMiddleware=require('../middlewares/auth-middleware')
const AdminMiddleware=require('../middlewares/admin-middleware');
const {getAllUsers,getAllContacts,getAllServices,deleteUserById,deleteContactById,getUserById,updateUserById} = require('../controllers/admin-controller');
const router=express.Router();
router.route('/users').get(AuthMiddleware,AdminMiddleware,getAllUsers);
router.route('/users/:id').get(AuthMiddleware,AdminMiddleware,getUserById);
router.route('/users/delete/:id').delete(AuthMiddleware,AdminMiddleware,deleteUserById);
router.route('/users/update/:id').patch(AuthMiddleware,AdminMiddleware,updateUserById);
router.route('/contacts/delete/:id').delete(AuthMiddleware,AdminMiddleware,deleteContactById);
router.route('/contacts').get(AuthMiddleware,AdminMiddleware,getAllContacts);
router.route('/services').get(AuthMiddleware,getAllServices);
module.exports=router;