const querystring = require('querystring')

module.exports =  function postParams(req) {
  return new Promise(resolve => {
    let str = "";
    req.on("data", function (data) {
      str += data;
    })
    req.on("end", function () {
      var post = querystring.parse(str);
      resolve(post)
    })
  })
}