import { Review } from "../../domain/models/review.model";
import { ReviewRepository } from "../../domain/repositories/review.repository";

/**
 * Caso de uso para obtener un listado de reseñas.
 *
 * @remarks
 * Forma parte de la **capa de Application** y define
 * una acción concreta que la aplicación puede ejecutar.
 *
 * Este caso de uso:
 * - Orquesta el acceso a datos
 * - Aplica reglas de negocio si es necesario
 * - Aísla la lógica de la UI y la infraestructura
 *
 * Depende únicamente del contrato
 * {@link ReviewRepository}.
 *
 * @see {@link ReviewRepository}
 * @see {@link Review}
 */
export class GetAllReviewsUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param reviewRepository - Repositorio de reseñas
   * utilizado para acceder a la información
   */
  constructor(private reviewRepository: ReviewRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad específica de reseñas
   * utilizando el repositorio del dominio.
   *
   * En este nivel se pueden implementar:
   * - Validaciones de entrada
   * - Reglas de negocio de la aplicación
   * - Composición de múltiples operaciones
   *
   * @param countReviews - Cantidad de reseñas a obtener (opcional)
   * @returns Promesa que resuelve un arreglo de {@link Review}
   *
   * @example
   * ```ts
   * const useCase = new GetAllReviewsUseCase(reviewRepository);
   * const reviews = await useCase.execute(5);
   * ```
   */
  execute(countReviews?: number): Promise<Review[]> {
    return this.reviewRepository.getAll(countReviews);
  }
}
