import { Request, Response } from "express";
import { GetAllReviewsUseCase } from "../../../application/usecases/get-all-reviews.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con reseñas.
 *
 * @remarks
 * Forma parte de la **capa de Frameworks & Drivers**
 * y actúa como un **adaptador HTTP** entre Express
 * y la capa de Application.
 *
 * Su función es:
 * - Interpretar la request HTTP
 * - Delegar la ejecución al caso de uso
 * - Enviar la respuesta HTTP adecuada
 *
 * @see {@link GetAllReviewsUseCase}
 */
export class ReviewsController {

  /**
   * Crea una nueva instancia del controlador de reseñas.
   *
   * @param getAllReviewsUseCase - Caso de uso encargado
   * de obtener el listado de reseñas
   */
  constructor(private getAllReviewsUseCase: GetAllReviewsUseCase){}


    /**
   * Maneja la petición HTTP para obtener reseñas.
   *
   * @remarks
   * Obtiene el parámetro `countReviews` desde la request,
   * ejecuta el caso de uso correspondiente y devuelve
   * la respuesta en formato JSON.
   *
   * El manejo de errores se delega al componente
   * {@link HandleError}.
   *
   * El retardo artificial (`setTimeout`) se utiliza
   * únicamente con fines demostrativos.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllReviews = (req: Request, res: Response): void => {
    const { countReviews } = req.params;

    setTimeout(() => {
      this.getAllReviewsUseCase
      .execute(Number(countReviews))
      .then((reviews) => res.status(201).json(reviews))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
