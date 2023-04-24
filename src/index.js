var fs = require("fs");
var http = require("http");
const data = require("./data.json");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const LottieCompress = require("lottie-compress").default;

console.log(LottieCompress);
(async () => {
  const lottieCompress = new LottieCompress(data);
  const ret = await lottieCompress.execute();
  ret.layers = ret.layers.map((layer) => ({
    ...layer,
    nm: "",
  }));
  fs.writeFileSync("./new.json", ret);
  console.log("--------------");
  console.log("--------------");
})();
