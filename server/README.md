# Back-end da Api

Back end responsável por gerência os end-points da api.

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v14 ou superior (utilizado v16.18.1)

## Tecnologias usadas

- nodeJs
- express
- dotenv
- sequelize
- mysql2
- nodemon
- cors
- express-async-errors

## Funcionalidades

- Listar dados de transação

### End-point

- /order

```bash
http://localhost:3001/order
```

- Retorno da requisição

```bash
[
    {
        "id": 1,
        "orderNfId": "1605181324132",
        "orderNumber": "18153",
        "orderPath": null,
        "orderFileName": null,
        "orderOriginalName": null,
        "emissionDate": "2020-10-30T11:00:00-03:00",
        "pdfFile": null,
        "emitedTo": "22843980000127",
        "nNf": "18153",
        "CTE": "",
        "value": "198450",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "0",
        "orderStatusProvider": "0",
        "deliveryReceipt": null,
        "cargoPackingList": null,
        "deliveryCtrc": null,
        "createdAt": "2020-10-30T17:54:18.000Z",
        "updatedAt": "2020-10-30T17:54:18.000Z",
        "users": {
            "id": 1,
            "name": "ALLAN SOUZA",
            "email": "allan@cashforce.com.br",
            "phoneNumber": null,
            "mobile": null,
            "departament": null,
            "verificationCode": "",
            "emailChecked": true,
            "cashforceAdm": true,
            "createdAt": "2020-10-01T21:31:37.000Z",
            "updatedAt": "2020-10-01T22:41:23.000Z"
        },
        "cnpjs": {
            "id": 1,
            "cnpj": "00000000000001",
            "companyType": "2",
            "createdAt": "2020-10-29T21:20:33.000Z",
            "updatedAt": "2020-10-29T21:20:33.000Z"
        },
        "buyers": {
            "id": 1,
            "name": "SACADO 001",
            "tradingName": "SACADO 001 LTDA",
            "cashforceTax": "0",
            "responsibleName": null,
            "responsibleEmail": null,
            "responsiblePosition": null,
            "responsiblePhone": null,
            "responsibleMobile": null,
            "website": null,
            "postalCode": null,
            "address": null,
            "number": null,
            "complement": null,
            "neighborhood": null,
            "city": null,
            "state": null,
            "phoneNumber": null,
            "situation": null,
            "situationDate": null,
            "cnpjId": 1,
            "confirm": true,
            "email": null,
            "createdAt": "2020-10-29T21:20:33.000Z",
            "updatedAt": "2020-10-29T21:20:34.000Z"
        },
        "providers": {
            "id": 1,
            "name": "CEDENTE 002",
            "tradingName": "CEDENTE 002 LTDA",
            "cashforceTax": null,
            "responsibleName": null,
            "responsibleEmail": null,
            "responsiblePosition": null,
            "responsiblePhone": null,
            "responsibleMobile": null,
            "website": null,
            "postalCode": null,
            "address": null,
            "number": null,
            "complement": null,
            "neighborhood": null,
            "city": null,
            "state": null,
            "bank": null,
            "bankAgency": null,
            "account": null,
            "documents": null,
            "phoneNumber": null,
            "situation": null,
            "situationDate": null,
            "cnpjId": 2,
            "email": null,
            "createdAt": "2020-10-29T21:22:21.000Z",
            "updatedAt": "2020-10-29T21:22:22.000Z"
        }
    }
]
```

- /provider/:id

```bash
localhost:3001/provider/1
```

- Retorno da requisição

```bash
{
    "id": 1,
    "name": "CEDENTE 002",
    "tradingName": "CEDENTE 002 LTDA",
    "cashforceTax": null,
    "responsibleName": null,
    "responsibleEmail": null,
    "responsiblePosition": null,
    "responsiblePhone": null,
    "responsibleMobile": null,
    "website": null,
    "postalCode": null,
    "address": null,
    "number": null,
    "complement": null,
    "neighborhood": null,
    "city": null,
    "state": null,
    "bank": null,
    "bankAgency": null,
    "account": null,
    "documents": null,
    "phoneNumber": null,
    "situation": null,
    "situationDate": null,
    "cnpjId": 2,
    "email": null,
    "createdAt": "2020-10-29T21:22:21.000Z",
    "updatedAt": "2020-10-29T21:22:22.000Z",
    "cnpjs": {
        "id": 2,
        "cnpj": "00000000000002",
        "companyType": "1",
        "createdAt": "2020-10-29T21:20:33.000Z",
        "updatedAt": "2020-10-29T21:20:33.000Z"
    }
}
```

## Rodando localmente

Entre na pasta do servidor

```bash
  cd server
```

Inicie o servidor

```bash
  npm run dev
```

## Rodando os tests

```bash
  npm test
```

## Autor

- [@eemr3](https://www.github.com/eemr3)
