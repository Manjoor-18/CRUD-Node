import dotenv from 'dotenv';
dotenv.config();
const ormconfig: any = {
  type: 'mssql',
  host: process.env.TYPEORM_HOST,
  port:  8090,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: process.env.TYPEORM_LOGGING === 'true',
  synchronize: true,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS_DIR],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
};

export =  ormconfig;

