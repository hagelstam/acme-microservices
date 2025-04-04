import app from './app';
import { PORT } from './config/constants';
import { logger } from './config/logger';

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
