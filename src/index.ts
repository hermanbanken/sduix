import {App} from './model';
import renderToJson from './renderToJson';

const result = renderToJson(App);

const util = require('util');
console.log(util.inspect(result, false, null, true /* enable colors */));
