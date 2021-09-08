import 'reflect-metadata';
import { createConnection } from 'typeorm';
import databaseConfig from './config/dbConfig';
import { Todo } from './entity/Todo';

createConnection({
  type: 'mysql',
  ...databaseConfig,
  entities: [__dirname + '/entity/*.ts'],
}).then((connection) => {});
