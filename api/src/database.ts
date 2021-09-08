import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { databaseConfig } from './config';
import { Todo } from './entity/Todo';

createConnection({
  type: 'mysql',
  ...databaseConfig,
  entities: [__dirname + '/entity/*.ts'],
}).then((connection) => {});
