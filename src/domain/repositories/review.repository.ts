import { Review } from "../models/review.model";

/**
 * Contrato del repositorio de reseñas.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y representa
 * una abstracción de acceso a datos de reseñas de productos.
 *
 * Define qué operaciones están disponibles para
 * los casos de uso, sin exponer detalles técnicos
 * ni decisiones de infraestructura.
 *
 * Las implementaciones concretas viven en la capa
 * de *Infrastructure*.
 *
 * @see {@link Review}
 */
export abstract class ReviewRepository {

  /**
   * Obtiene un listado de reseñas.
   *
   * @remarks
   * Representa una operación del dominio relacionada
   * con la obtención de reseñas de productos.
   *
   * No define:
   * - Cómo se obtienen los datos
   * - Desde qué fuente provienen
   * - Qué tecnología se utiliza
   *
   * @param countReviews - Cantidad de reseñas a obtener (opcional)
   * @returns Promesa que resuelve un arreglo de {@link Review}
   */
  abstract getAll(countReviews?: number): Promise<Review[]>;
}
