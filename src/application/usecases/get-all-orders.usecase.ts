import { Order } from "../../domain/models/order.model";
import { OrderRepository } from "../../domain/repositories/order.repository";

/**
 * Caso de uso para obtener un listado de órdenes.
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
 * {@link OrderRepository}.
 *
 * @see {@link OrderRepository}
 * @see {@link Order}
 */
export class GetAllOrdersUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param orderRepository - Repositorio de órdenes
   * utilizado para acceder a la información
   */
  constructor(private orderRepository: OrderRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad específica de órdenes
   * utilizando el repositorio del dominio.
   *
   * En este nivel se pueden implementar:
   * - Validaciones de entrada
   * - Reglas de negocio de la aplicación
   * - Composición de múltiples operaciones
   *
   * @param countOrders - Cantidad de órdenes a obtener
   * @returns Promesa que resuelve un arreglo de {@link Order}
   *
   * @example
   * ```ts
   * const useCase = new GetAllOrdersUseCase(orderRepository);
   * const orders = await useCase.execute(5);
   * ```
   */
  execute(countOrders: number): Promise<Order[]> {
    return this.orderRepository.getAll(countOrders);
  }
}