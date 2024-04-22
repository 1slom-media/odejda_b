import { Router } from "express";
import form from "../controller/form";
import category from "../controller/category";
import products from "../controller/products";
import news from "../controller/news";
import seo from "../controller/seo";

const router = Router();

// form
router.get("/form", form.Get);
router.get("/form/:id", form.GetId);
router.post("/form", form.Post);
router.put("/form/:id", form.Put);
router.delete("/form/:id", form.Delete);

// news
router.get("/news", news.Get);
router.get("/news/:id", news.GetId);
router.post("/news", news.Post);
router.put("/news/:id", news.Put);
router.delete("/news/:id", news.Delete);

// category
router.get("/category", category.Get);
router.get("/category/:id", category.GetId);
router.post("/category", category.Post);
router.put("/category/:id", category.Put);
router.delete("/category/:id", category.Delete);

// products
router.get("/products", products.Get);
router.get("/products/:id", products.GetId);
router.post("/products", products.Post);
router.put("/products/:id", products.Put);
router.delete("/products/:id", products.Delete);

// route seo
router.get("/seo", seo.Get);
router.get("/seo/:id", seo.GetId);
router.post("/seo", seo.Post);
router.put("/seo/:id", seo.Put);
router.delete("/seo/:id", seo.Delete);

export default router;
