import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from "../../domain/models/order.model";


/**
 * Datasource encargado de generar órdenes simuladas.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como
 * una fuente de datos temporal para desarrollo y pruebas.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información aleatoria de órdenes.
 *
 * ❗ No contiene reglas de negocio.
 * ❗ No debe ser consumido directamente por casos de uso.
 *
 * Es utilizado por `OrderRepositoryImpl`.
 */
export class OrderDatasource {


    /**
     * Estados disponibles para las órdenes simuladas.
     *
     * @remarks
     * Se selecciona un estado de forma aleatoria
     * al generar cada orden.
     */
    private OrderStatuses: OrderStatus[] = [
        'Pending',
        'Processing',
        'Completed',
        'Cancelled',
    ];

    /**
     * Obtiene una lista de órdenes simuladas.
     *
     * @remarks
     * Genera dinámicamente una cantidad específica de órdenes
     * con datos aleatorios.
     *
     * @param countOrders - Cantidad de órdenes a generar
     * @returns Promesa que resuelve un arreglo de {@link Order}
     *
     * @example
     * ```ts
     * const datasource = new OrderDatasource();
     * const orders = await datasource.getAll(5);
     * ```
     */
    async getAll(countOrders: number): Promise<Order[]> {
        const orders: Promise<Order>[] = [];

        for (let i = 1; i <= countOrders; i++) {
            orders.push(this.generateOrder(i));
        }

        return Promise.all(orders);
    }

    /**
     * Genera una orden individual con datos simulados.
     *
     * @remarks
     * Método interno utilizado únicamente por el datasource
     * para construir órdenes aleatorias.
     *
     * @param id - Identificador único de la orden
     * @returns Promesa que resuelve una {@link Order}
     */
    private generateOrder(id: number): Promise<Order> {
        return Promise.resolve({
        id,
        orderNumber: this.generateOrderNumber(id),
        customerName: faker.person.fullName(),
        totalPrice: faker.number.float({ min: 10000, max: 500000, fractionDigits: 2 }),
        status: faker.helpers.arrayElement(this.OrderStatuses),
        createdDate: faker.date.past().toISOString().slice(0, 10),
        itemsCount: faker.number.int({ min: 1, max: 20 }),
        });
    }

    /**
     * Genera un número de orden único.
     *
     * @param id - Identificador de la orden
     * @returns Número de orden formateado
     */
    private generateOrderNumber(id: number): string {
        return `ORD-${Date.now()}-${id}`;
    }

}