const express = require("express");
const app = express();

const initRoutes = require("./routes/tutorials.routes");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);




let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
