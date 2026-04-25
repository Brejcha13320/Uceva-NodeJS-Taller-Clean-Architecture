/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - orderNumber
 *         - customerName
 *         - totalPrice
 *         - status
 *         - createdDate
 *         - itemsCount
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         orderNumber:
 *           type: string
 *           example: ORD-1640000000000-1
 *         customerName:
 *           type: string
 *           example: Juan Pérez
 *         totalPrice:
 *           type: number
 *           example: 150000
 *         status:
 *           type: string
 *           enum:
 *             - Pending
 *             - Processing
 *             - Completed
 *             - Cancelled
 *           example: Completed
 *         createdDate:
 *           type: string
 *           format: date
 *           example: 2026-04-10
 *         itemsCount:
 *           type: number
 *           example: 3
 */
export { };
