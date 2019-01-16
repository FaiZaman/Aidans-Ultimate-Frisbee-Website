/* jshint -W097 */
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
"use strict";

const app = require('./app.js');
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running at localhost:${ port }`));
