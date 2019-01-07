/* jshint -W097 */
/*jshint esversion: 6 */
/* jshint node: true */
"use strict";

const app = require('./app.js');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }`));
