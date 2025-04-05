import pino from 'pino';

import { IS_PROD } from './constants';

export const logger = pino({
  level: IS_PROD ? 'info' : 'debug',
  timestamp: pino.stdTimeFunctions.isoTime,
});
