import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { FormEntity } from "./entities/forma"
import { NewsEntity } from "./entities/news"
import { SeoEntity } from "./entities/seo"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1sU*DtM&9RfB",
    // password: "islom_01",
    database: "odejda_b", 
    synchronize: true,
    logging: false,
    entities: [CategoryEntity , ProductsEntity , NewsEntity , FormEntity,SeoEntity],
    migrations: [],
    subscribers: [],
})
