import { Router, RouterContext } from "./deps.ts";
import { authMiddleware } from "./middleware/authMiddleware.ts";
import authController from "./controllers/AuthController.ts";
import bookController from './controllers/BookController.ts';

const router = new Router();


router.get("/", (ctx: RouterContext) => {
    ctx.response.body = "Get Hello World";
});

router
    .post('/auth/register', authController.register)
    .post('/auth/login', authController.login)
    .get('/auth/check', authMiddleware, authController.check)
    .post('/book/create', authMiddleware, bookController.create)
    .get('/book/books', bookController.getBooks)


export default router;


