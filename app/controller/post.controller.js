const postService = require('../services/post/post.service');
const responseHandler = require('../config/responseHandler');
const {
  create,update
} = require('../validations/post.valiodation');

class UserController {
  async create(req, res) {
    try {
      const requestData = req.body;
      await create.validateAsync(requestData);

      const insertData = await postService.create(
       requestData
      );
      if (insertData) {
        return res.json(responseHandler('Post created successfully.', true,insertData));
      }
      return res.json(
        responseHandler('Something went wrong! Please try again.', false)
      );
    } catch (err) {
      console.log(err);
      return res.json(responseHandler(err.message, false, {}));
    }
  }

  async update(req, res) {
    try {
      const requestData = req.body;
      const postId=requestData.postId
      await update.validateAsync(requestData);

      const updateData = await postService.update(
        postId, requestData
      );
      if (updateData) {
        return res.json(responseHandler('Post updated successfully.', true,updateData));
      }
      return res.json(
        responseHandler('Something went wrong! Please try again.', false)
      );
    } catch (err) {
      console.log(err);
      return res.json(responseHandler(err.message, false, {}));
    }
  }

  async detail(req, res) {
    try {
      const requestData = req.query;
      const postId=requestData.postId
      const findData = await postService.detail(
        postId
      );
      if (findData) {
        return res.json(responseHandler('Post details successfully.', true,findData));
      }
      return res.json(
        responseHandler('Something went wrong! Please try again.', false)
      );
    } catch (err) {
      console.log(err);
      return res.json(responseHandler(err.message, false, {}));
    }
  }

  async delete(req, res) {
    try {
        const postId = req.query.postId;
        const deletedPost = await postService.delete(postId);
        if (deletedPost) {
            return res.json(responseHandler('Post delete successfully.', true, deletedPost));
        }
        return res.json(responseHandler('Post not found or already deleted.', false));
    } catch (err) {
        console.log(err);
        return res.json(responseHandler(err.message, false, {}));
    }
}

async list(req, res) {
    try {
        const posts = await postService.list();
        return res.json(responseHandler('Posts retrieved successfully.', true, posts));
    } catch (err) {
        console.log(err);
        return res.json(responseHandler(err.message, false, []));
    }
}

async postStatus(req, res) {
  try {
      const postStatusCount = await postService.postStatusCount();
      return res.json(responseHandler('Active and Inactive post data.', true, postStatusCount));
  } catch (err) {
      console.log(err);
      return res.json(responseHandler(err.message, false, []));
  }
}

async retrivePost(req, res) {
  try {
    const {latitude,longitude}=req.query
      const retrivePost = await postService.retrivePost(latitude,longitude);
      return res.json(responseHandler('Post list.', true, retrivePost));
  } catch (err) {
      console.log(err);
      return res.json(responseHandler(err.message, false, []));
  }
}
}

module.exports = new UserController();
