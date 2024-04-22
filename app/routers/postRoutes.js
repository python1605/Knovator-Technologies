const express = require('express');

const router = express.Router();
const postController = require('../controller/post.controller');

const { authenticate } = require('../middleware/authentication');

// Login admin
router.route('/create').post(authenticate,postController.create);
router.route('/update').post(authenticate,postController.update);
router.route('/detail').get(authenticate,postController.detail);
router.route('/list').get(authenticate,postController.list);
router.route('/delete').delete(authenticate,postController.delete);
router.route('/postStatus').get(authenticate,postController.postStatus);
router.route('/retrivePost').get(authenticate,postController.retrivePost);




module.exports = router;
