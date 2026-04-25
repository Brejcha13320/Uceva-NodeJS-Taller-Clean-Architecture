/**
 * Interfaz que representa una orden del sistema.
 *
 * Contiene la información básica necesaria para mostrar una orden
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada orden debe tener un `id` único, número de orden, información del cliente,
 * precio total, estado y fecha de creación.
 *
 * @example
 * ```ts
 * const orden: Order = {
 *   id: 1,
 *   orderNumber: 'ORD-001',
 *   customerName: 'Juan Pérez',
 *   totalPrice: 150000,
 *   status: 'Completed',
 *   createdDate: '2026-04-10',
 *   itemsCount: 3
 * };
 * ```
 */
export interface Order {
  /** Identificador único de la orden */
  id: number;

  /** Número de orden (referencia del cliente) */
  orderNumber: string;

  /** Nombre del cliente que realiza la orden */
  customerName: string;

  /** Precio total de la orden en pesos */
  totalPrice: number;

  /** Estado de la orden */
  status: OrderStatus;

  /** Fecha de creación de la orden */
  createdDate: string;

  /** Cantidad de artículos en la orden */
  itemsCount: number;
}

/**
 * Tipo de estado de una orden.
 *
 * @remarks
 * Estados posibles de una orden:
 * - 'Pending' - Orden recibida, pendiente de procesar
 * - 'Processing' - Orden en proceso
 * - 'Completed' - Orden completada
 * - 'Cancelled' - Orden cancelada
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Completed';
 * ```
 */
export type OrderStatus = 'Pending' | 'Processing' | 'Completed' | 'Cancelled';