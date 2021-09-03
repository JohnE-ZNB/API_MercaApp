# API MercaApp
## _API para de administración de productos en MercaApp_

## Características

- Consultar todos los productos
- Consultar producto más detallado
- Crear un producto
- Editar un producto
- Eliminar un producto

## Endpoints

- GET https://b88gnw8zxf.execute-api.us-east-1.amazonaws.com/dev/productos
- GET https://b88gnw8zxf.execute-api.us-east-1.amazonaws.com/dev/productos/:id
- POST https://b88gnw8zxf.execute-api.us-east-1.amazonaws.com/dev/productos
- PUT https://b88gnw8zxf.execute-api.us-east-1.amazonaws.com/dev/productos/:id
- DELETE https://b88gnw8zxf.execute-api.us-east-1.amazonaws.com/dev/productos/:id

BODY: **json**
```sh
{
    "nombre": "Nombre del producto",
    "descripcion": "Una descripcion del producto",
    "categoria": "Una categoria",
    "precio": valor,
    "cantidad": cantidad
}
```

## Tecnología

Se trabajó con las siguientes herramientas:

- [NodeJS](https://nodejs.org/es/) versión 14.17.5
- [Serverless](https://www.serverless.com/framework/docs/getting-started) versión 2.21
- [Mongo DB](https://www.npmjs.com/package/mongodb) version 4.1.1 
- [AWS Api Gateway](https://aws.amazon.com/es/api-gateway/?nc2=type_a)
- [AWS Lambda](https://aws.amazon.com/es/lambda/?nc2=type_a)


## Instalación

Serverless
```sh
npm install -g serverless
```
MongoDB

```sh
npm install mongdb
```

## Plugins Serverless

Se utilizaron los siguientes plugin para validación de request y documentación API

| Plugin | Versión |
| ------ | ------ |
| [serverless-reqvalidator-plugin](https://www.npmjs.com/package/serverless-reqvalidator-plugin) | 2.0.0 |
| [serverless-aws-documentation](https://www.npmjs.com/package/serverless-aws-documentation) | 1.1.0 |

Instalación de plugins

```sh
npm install serverless-reqvalidator-plugin
npm install serverless-aws-documentation --save-dev
```

## Desarrollo

Configuración de credenciales para los deploy de serveless

```sh
serverless config credentials --provider aws --key key --secret secret
serverless create --template aws-nodejs --path mercaApp
```

Configuración de plugins

Dentro del archivo serverless.yml posterior a service: <nombre_app>
```sh
plugins:
  - serverless-reqvalidator-plugin
  - serverless-aws-documentation
```

Uso de Mongo DB como layer de lambda
```sh
npm install --prefix ./nodejs mongodb
```

## Prueba Local

Probar una función de forma local

```sh
serverless invoke local --function getProducts
#Enviando Información
serverless invoke local --function createProduct --data '{ "nombre": "nombre producto" }'
```

## Desplegar

Desplegar todo el proyecto

```sh
serverles deploy
```

Desplegar una función en específico

```sh
serverless deploy --function <nombre_funcion>
```

## License

MIT

**Aplicación como prueba técnica!**