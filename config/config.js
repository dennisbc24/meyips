require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    
    //esto corresponde a la BD
    dbPassword: process.env.DB_PASSWORD,
    dbUser: process.env.DB_USER,
    dbName: process.env.DB_NAME,
    
}

module.exports = { config };


//volumes:
//- "~/postgres_data:/var/lib/postgresql/data"


//volumes:
 //     - "~/PGADMIN_FOLDER:/var/lib/pgadmin"