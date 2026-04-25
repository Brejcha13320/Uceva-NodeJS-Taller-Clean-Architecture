import { Review } from "../../domain/models/review.model";
import { ReviewRepository } from "../../domain/repositories/review.repository";
import { ReviewDatasource } from "../datasources/review.datasource";

/**
 * Implementación concreta del repositorio de reseñas.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **adaptador** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link ReviewRepository}
 * utilizando {@link ReviewDatasource} como origen de datos.
 *
 * Este diseño permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar a los casos de uso
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link ReviewRepository}
 * @see {@link ReviewDatasource}
 */
export class ReviewRepositoryImpl extends ReviewRepository {

  /**
   * Crea una nueva instancia del repositorio de reseñas.
   *
   * @param datasource - Fuente de datos encargada
   * de generar u obtener las reseñas
   */
  constructor(private datasource: ReviewDatasource) {
    super();
  }

  /**
   * Obtiene el listado de reseñas.
   *
   * @remarks
   * Implementa el método definido en
   * {@link ReviewRepository#getAll}.
   *
   * En esta capa se pueden aplicar:
   * - Transformaciones de datos
   * - Validaciones técnicas
   * - Manejo de errores
   *
   * @param countReviews - Cantidad de reseñas a obtener (opcional)
   * @returns Promesa que resuelve un arreglo de {@link Review}
   *
   * @example
   * ```ts
   * const repository = new ReviewRepositoryImpl(new ReviewDatasource());
   * const reviews = await repository.getAll(5);
   * ```
   */
  getAll(countReviews?: number): Promise<Review[]> {
    return this.datasource.getAll(countReviews);
  }

}
