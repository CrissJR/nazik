import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    "MYFIRSTBASE",
    "postgres",
    "1029384756",
    {
        dialect: 'postgres',
        host: "localhost",
        port: 5432
    }
);

export default sequelize;