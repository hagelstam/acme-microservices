/* eslint-disable node/no-process-env */

export const PORT = process.env.PORT || 3001;

export const IS_PROD = process.env.NODE_ENV === 'production';
