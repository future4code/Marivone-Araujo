import {Knex} from "knex";
import knex from "knex";

export class BaseDatabase {

   protected connection: Knex = knex({
        client: "mysql",
        connection: {
         host: process.env.DB_HOST,
         port: Number(process.env.DB_PORT || "3306"),
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_SCHEMA,
           multipleStatements: true
        }
     })
}