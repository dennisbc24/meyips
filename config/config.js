require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    //esto corresponde a la BD
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}

module.exports = { config };


//volumes:
//- "~/postgres_data:/var/lib/postgresql/data"


//volumes:
 //     - "~/PGADMIN_FOLDER:/var/lib/pgadmin"