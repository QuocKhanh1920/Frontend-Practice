import { logger2 } from './logger/index.js';
import * as constants from './constants.js';

console.log(constants);

logger2('Test message...', constants.TYPE_ERROR);