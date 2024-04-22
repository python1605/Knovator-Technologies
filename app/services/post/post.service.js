
const mongoose = require('mongoose');

const postSchema = require('../../Schema/post');

class UserService {
  
  async create(data) {
    return await postSchema.create(data);
  }
 
  async update(postId, updatedData) {
    return await postSchema.updateOne({ _id: postId }, { $set: updatedData });
}

async detail(postId) {
  return await postSchema.findById(postId);
}

async delete(postId) {
  return await postSchema.findByIdAndDelete(postId);
}

async list() {
  return await postSchema.find();
}

async postStatusCount() {
  const activeCount = await postSchema.countDocuments({ active: true });
  const inactiveCount = await postSchema.countDocuments({ active: false });
  return { active: activeCount, inactive: inactiveCount };
}
 
async retrivePost(latitude, longitude) {
  try {
      const lat = parseFloat(latitude);
      const long = parseFloat(longitude);

   
      const maxDistance = 10000; 

      const posts = await postSchema.find({
          latitude: { $gte: lat - (maxDistance / 111000), $lte: lat + (maxDistance / 111000) },
          longitude: { $gte: long - (maxDistance / (111000 * Math.cos(lat * Math.PI / 180))), $lte: long + (maxDistance / (111000 * Math.cos(lat * Math.PI / 180))) }
      });

      return posts;
  } catch (err) {
      console.log(err);
      throw new Error('Error retrieving posts based on latitude and longitude.');
  }
}



}

module.exports = new UserService();
