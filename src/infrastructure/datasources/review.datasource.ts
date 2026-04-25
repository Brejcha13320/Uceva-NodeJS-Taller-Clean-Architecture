import { faker } from '@faker-js/faker';
import { Review } from "../../domain/models/review.model";


/**
 * Datasource encargado de generar reseñas simuladas.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como
 * una fuente de datos temporal para desarrollo y pruebas.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información aleatoria de reseñas de productos.
 *
 * ❗ No contiene reglas de negocio.
 * ❗ No debe ser consumido directamente por casos de uso.
 *
 * Es utilizado por `ReviewRepositoryImpl`.
 */
export class ReviewDatasource {

    /**
     * Comentarios de ejemplo para reseñas de productos.
     *
     * @remarks
     * Se selecciona un comentario de forma aleatoria
     * al generar cada reseña.
     */
    private reviewComments: string[] = [
        'Excelente producto, muy recomendado. Llegó en perfecto estado.',
        'Buena calidad a precio justo. Satisfecho con la compra.',
        'No me impresionó mucho. Esperaba más por el precio.',
        'Producto defectuoso. Fue reemplazado rápidamente.',
        'Entrega rápida y producto en excelentes condiciones.',
        'La mejor compra que he hecho. Volveré a comprar.',
        'Producto promedio. Nada de especial.',
        'Muy satisfecho. Lo vuelvo a comprar sin dudarlo.',
        'Llego dañado, pero el servicio al cliente fue excepcional.',
        'Recomendado 100%. Producto de calidad garantizada.',
        'Precio un poco alto, pero la calidad lo justifica.',
        'Exactamente lo que esperaba. Muy contento.',
        'No funciona como se describe. Deseo devolverlo.',
        'Superó mis expectativas. Excelente compra.',
        'Entrega tardía, pero el producto llegó en buen estado.',
    ];

    /**
     * Obtiene una lista de reseñas simuladas.
     *
     * @remarks
     * Genera dinámicamente una cantidad específica de reseñas
     * con datos aleatorios.
     *
     * @param countReviews - Cantidad de reseñas a generar (opcional, por defecto 10)
     * @returns Promesa que resuelve un arreglo de {@link Review}
     *
     * @example
     * ```ts
     * const datasource = new ReviewDatasource();
     * const reviews = await datasource.getAll(5);
     * ```
     */
    async getAll(countReviews: number = 10): Promise<Review[]> {
        const reviews: Promise<Review>[] = [];

        for (let i = 1; i <= countReviews; i++) {
            reviews.push(this.generateReview(i));
        }

        return Promise.all(reviews);
    }

    /**
     * Genera una reseña individual con datos simulados.
     *
     * @remarks
     * Método interno utilizado únicamente por el datasource
     * para construir reseñas aleatorias.
     *
     * @param id - Identificador único de la reseña
     * @returns Promesa que resuelve una {@link Review}
     */
    private generateReview(id: number): Promise<Review> {
        return Promise.resolve({
            id,
            userId: faker.number.int({ min: 1, max: 100 }),
            productId: faker.number.int({ min: 1, max: 50 }),
            rating: faker.number.int({ min: 1, max: 5 }),
            comment: faker.helpers.arrayElement(this.reviewComments),
            date: faker.date.past({ years: 1 }).toISOString().split('T')[0],
        });
    }

}
