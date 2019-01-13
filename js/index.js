/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
"use strict";

const app = require('./app.js');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at localhost:${ port }`));

function openForm() {
  if (document.getElementById("add-member").style.display != "block"){
    document.getElementById("add-member").style.display = "block";
  }
  else {
  document.getElementById("add-member").style.display = "none";
  }
}

function closeForm() {
  document.getElementById("add-member").style.display = "none";
}
