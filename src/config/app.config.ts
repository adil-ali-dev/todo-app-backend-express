import dotenv from 'dotenv';
dotenv.config();

// Application Config
export const APP_ENV = process.env.APP_ENV ?? 'dev';
export const APP_PORT = process.env.APP_PORT ?? 3000;
export const APP_NAME = process.env.APP_NAME ?? 'Todo list app';

// DB Config
export const MYSQL_HOST = process.env.MYSQL_HOST;
export const MYSQL_PORT = process.env.MYSQL_PORT;
export const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
