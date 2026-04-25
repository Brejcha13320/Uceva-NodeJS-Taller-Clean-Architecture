import { Order } from "../../domain/models/order.model";
import { OrderRepository } from "../../domain/repositories/order.repository";
import { OrderDatasource } from "../datasources/order.datasource";

/**
 * Implementación concreta del repositorio de órdenes.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **adaptador** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link OrderRepository}
 * utilizando {@link OrderDatasource} como origen de datos.
 *
 * Este diseño permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar a los casos de uso
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link OrderRepository}
 * @see {@link OrderDatasource}
 */
export class OrderRepositoryImpl extends OrderRepository {

  /**
   * Crea una nueva instancia del repositorio de órdenes.
   *
   * @param datasource - Fuente de datos encargada
   * de generar u obtener las órdenes
   */
  constructor(private datasource: OrderDatasource) {
    super();
  }

  /**
   * Obtiene el listado de órdenes.
   *
   * @remarks
   * Implementa el método definido en
   * {@link OrderRepository#getAll}.
   *
   * En esta capa se pueden aplicar:
   * - Transformaciones de datos
   * - Validaciones técnicas
   * - Manejo de errores
   *
   * @param countOrders - Cantidad de órdenes a obtener
   * @returns Promesa que resuelve un arreglo de {@link Order}
   *
   * @example
   * ```ts
   * const repository = new OrderRepositoryImpl(new OrderDatasource());
   * const orders = await repository.getAll(5);
   * ```
   */
  getAll(countOrders: number): Promise<Order[]> {
    return this.datasource.getAll(countOrders);
  }
}