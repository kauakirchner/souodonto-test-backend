# souodonto-test-backend

Este é o projeto back-end para o SouOdonto, uma aplicação para gerenciar materiais odontológicos.

## Como rodar o projeto

Para executar o projeto, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Abra o terminal e navegue até a pasta raiz do projeto.
3. Execute o seguinte comando para instalar as dependências do projeto:

```sh
npm install
```
4. Crie um Banco de dados no MongoDb atlas ou MongoDB compass e insira a string de conexão em um arquivo .env na raiz do projeto com o seguinte nome:

### MONGO_DB_URL

5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor:

```sh
npm start
```
5. O servidor estará em execução e você poderá acessar os endpoints fornecidos abaixo.

## Endpoints

Estes são os endpoints fornecidos pela API:

### GET: /products/get-products

Este endpoint retorna uma lista de produtos cadastrados.

Exemplo de resposta:
```json
[
{
 "productId": 1,
 "productImage": "caminho/para/imagem.jpg",
 "productName": "Nome do Produto",
 "productBrand": "Marca do Produto",
 "productQuantity": 10,
 "isProductRequired": true
},
{
 "productId": 2,
 "productImage": "caminho/para/imagem2.jpg",
 "productName": "Nome do Produto 2",
 "productBrand": "Marca do Produto 2",
 "productQuantity": 5,
 "isProductRequired": false
}
]
```

### POST: /products/create

Este endpoint permite a criação de novos produtos

Body da Requisição:
```json
{
  "productImage": "img.jpg",
  "productName": "Nome do Novo Produto",
  "productBrand": "Marca do Novo Produto",
  "productQuantity": 20,
  "isProductRequired": true
}
```

### Link para o Front end: 
```sh
https://github.com/kauakirchner/souodonto-test-frontend
```
