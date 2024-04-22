const responseHandler = (msg, success, data) => {
  const obj = {};
  obj.message = msg;
  obj.success = success;
  obj.data = data;
  // obj.success_code = code;
  return obj;
};

module.exports = responseHandler;
