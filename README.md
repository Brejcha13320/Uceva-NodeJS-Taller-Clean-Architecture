# Clean Architecture

```
src
├── domain
│   ├── models
│   │   ├── user.entity.ts
│   │   └── product.entity.ts
│   └── repositories
│       ├── user.repository.ts
│       └── product.repository.ts
│
├── application
│   └── use-cases
│       ├── get-all-users.usecase.ts
│       └── get-all-products.usecase.ts
│
├── infrastructure
│   ├── controllers
│   │   ├── user.controller.ts
│   │   └── product.controller.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   └── product.repository.impl.ts
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   └── product.datasource.ts
│   └── web
│       ├── config/
│       ├── errors/
│       ├── interfaces/
│       ├── controllers/
│       ├── routes/
│       └── server.ts
│
└── app.ts
```

## Paso 1 - Crear Modelos

## Paso 2 - Crear Repositorios

## Paso 3 - Crear Casos de Uso

## Paso 4 - Crear Datasources

## Paso 5 - Crear Repositorios Implementadores