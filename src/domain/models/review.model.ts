/**
 * Interfaz que representa una reseña de un producto en el sistema.
 *
 * Contiene la información necesaria para mostrar una reseña
 * incluyendo el usuario que la realizó, el producto reseñado,
 * la calificación y comentario.
 *
 * @remarks
 * Cada reseña debe tener un `id` único, referencias a usuario y producto,
 * una calificación entre 1 y 5, un comentario descriptivo y fecha.
 *
 * @example
 * ```ts
 * const review: Review = {
 *   id: 1,
 *   userId: 1,
 *   productId: 1,
 *   rating: 5,
 *   comment: 'Excelente producto, muy recomendado. Llegó en perfecto estado.',
 *   date: '2024-04-20'
 * };
 * ```
 */
export interface Review {
  id: number;
  userId: number;
  productId: number;
  rating: number;
  comment: string;
  date: string;
}
