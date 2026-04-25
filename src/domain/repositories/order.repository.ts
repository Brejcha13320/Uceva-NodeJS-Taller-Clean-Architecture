import { Order } from "../models/order.model";

/**
 * Contrato del repositorio de órdenes.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y representa
 * una abstracción de acceso a datos de órdenes.
 *
 * Define qué operaciones están disponibles para
 * los casos de uso, sin exponer detalles técnicos
 * ni decisiones de infraestructura.
 *
 * Las implementaciones concretas viven en la capa
 * de *Infrastructure*.
 *
 * @see {@link Order}
 */
export abstract class OrderRepository {

  /**
   * Obtiene un listado de órdenes.
   *
   * @remarks
   * Representa una operación del dominio relacionada
   * con la obtención de órdenes.
   *
   * No define:
   * - Cómo se obtienen los datos
   * - Desde qué fuente provienen
   * - Qué tecnología se utiliza
   *
   * @param countOrders - Cantidad de órdenes a obtener
   * @returns Promesa que resuelve un arreglo de {@link Order}
   */
  abstract getAll(countOrders: number): Promise<Order[]>;
}