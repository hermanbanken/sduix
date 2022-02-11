import {App} from '../model/model';
import renderToJson from './renderToJson';
import {inspect} from 'util';

const result = renderToJson(App);
console.log(inspect(result, false, null, true /* enable colors */));

import {createServer} from 'http';
createServer((req, res) => {
  res.write(Buffer.from(JSON.stringify(result, null, 2)));
  res.end();
}).listen(8080);
