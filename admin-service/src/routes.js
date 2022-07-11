import { BrandController } from "./controllers/Brand.controller.js";

const _routes = [
    ["/brands", BrandController]
]

export const routes = (app) => {
    _routes.forEach(route => {
        const [url, ...rest] = route;
        app.use(url, rest);
    });
}