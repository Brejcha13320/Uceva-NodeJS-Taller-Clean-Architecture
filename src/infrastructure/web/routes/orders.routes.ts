import { Router } from "express";
import { GetAllOrdersUseCase } from "../../../application/usecases/get-all-orders.usecase";
import { OrderDatasource } from "../../datasources/order.datasource";
import { OrderRepositoryImpl } from "../../repositories/order.repository.impl";
import { OrdersController } from "../controllers/orders.controller";

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new OrderRepositoryImpl(new OrderDatasource());
    const getAllOrders = new GetAllOrdersUseCase(repository);
    const controller = new OrdersController(getAllOrders);

    /**
     * @openapi
     * /api/orders/{countOrders}:
     *   get:
     *     summary: Obtener listado de órdenes
     *     description: Retorna una lista de órdenes generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Orders
     *     parameters:
     *       - in: path
     *         name: countOrders
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de órdenes a generar
     *     responses:
     *       201:
     *         description: Lista de órdenes generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countOrders", controller.getAllOrders);

    return router;
  }
}