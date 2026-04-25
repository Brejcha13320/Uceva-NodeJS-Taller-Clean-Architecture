import { Router } from "express";
import { GetAllReviewsUseCase } from "../../../application/usecases/get-all-reviews.usecase";
import { ReviewDatasource } from "../../datasources/review.datasource";
import { ReviewRepositoryImpl } from "../../repositories/review.repository.impl";
import { ReviewsController } from "../controllers/reviews.controller";

export class ReviewsRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new ReviewRepositoryImpl(new ReviewDatasource());
    const getAllReviews = new GetAllReviewsUseCase(repository);
    const controller = new ReviewsController(getAllReviews);

    /**
     * @openapi
     * /api/reviews/{countReviews}:
     *   get:
     *     summary: Obtener listado de reseñas
     *     description: Retorna una lista de reseñas de productos generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Reviews
     *     parameters:
     *       - in: path
     *         name: countReviews
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de reseñas a generar
     *     responses:
     *       200:
     *         description: Lista de reseñas generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Review'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}
