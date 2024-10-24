CRUD (Create, Read, Update, Delete) — это основные операции, которые выполняются над ресурсами в RESTful API. Они соответствуют четырём основным HTTP-методам: POST, GET, PUT/PATCH и DELETE. В RESTful API ресурсы обычно представляются в виде URL, а операции над ними выполняются с использованием этих методов.

### 1. **Create (Создание ресурса)**

Создание нового ресурса осуществляется с помощью метода **POST**. Данные для создания ресурса передаются в теле запроса в формате JSON или другого подходящего формата.

- **Пример запроса на создание пользователя**:
```http
POST /api/users HTTP/1.1
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```
- **Пример успешного ответа** (HTTP Status Code: 201 Created):
```http
HTTP/1.1 201 Created
Location: /api/users/123
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "created_at": "2024-10-15T10:00:00Z"
}
```
- **Общие HTTP-коды для операции создания**:
  - `201 Created`: Ресурс успешно создан.
  - `400 Bad Request`: Некорректные данные.
  - `409 Conflict`: Конфликт при создании ресурса (например, дублирование данных).

### 2. **Read (Чтение ресурса)**

Чтение (или получение) ресурса выполняется с помощью метода **GET**. Запрос может быть направлен как на получение списка ресурсов, так и на получение одного конкретного ресурса.

- **Пример запроса на получение списка пользователей**:
```http
GET /api/users HTTP/1.1
```
- **Пример ответа** (HTTP Status Code: 200 OK):
```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": 123,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 124,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]
```
- **Пример запроса на получение одного пользователя**:
```http
GET /api/users/123 HTTP/1.1
```
- **Пример ответа** (HTTP Status Code: 200 OK):
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```
- **Общие HTTP-коды для операции чтения**:
  - `200 OK`: Ресурс успешно получен.
  - `404 Not Found`: Ресурс не найден.

### 3. **Update (Обновление ресурса)**

Для обновления существующего ресурса используются методы **PUT** или **PATCH**. Разница между ними заключается в том, что **PUT** обычно используется для полного обновления ресурса, а **PATCH** — для частичного обновления.
#### **PUT (Полное обновление)**:
- **Пример запроса на полное обновление пользователя**:
```http
PUT /api/users/123 HTTP/1.1
Content-Type: application/json

{
  "name": "John Doe Updated",
  "email": "john.doe.new@example.com",
  "password": "newpassword"
}
```
- **Пример успешного ответа** (HTTP Status Code: 200 OK):
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe Updated",
  "email": "john.doe.new@example.com"
}
```
#### **PATCH (Частичное обновление)**:
- **Пример запроса на частичное обновление пользователя**:
```http
PATCH /api/users/123 HTTP/1.1
Content-Type: application/json

{
  "email": "john.doe.new@example.com"
}
```
- **Пример успешного ответа** (HTTP Status Code: 200 OK):
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe.new@example.com"
}
```
- **Общие HTTP-коды для операции обновления**:
  - `200 OK`: Ресурс успешно обновлён.
  - `204 No Content`: Успешное обновление без содержимого в ответе.
  - `400 Bad Request`: Некорректные данные.
  - `404 Not Found`: Ресурс не найден.

### 4. **Delete (Удаление ресурса)**

Удаление ресурса осуществляется с помощью метода **DELETE**. Удалённый ресурс больше не будет доступен через API.

- **Пример запроса на удаление пользователя**:
```http
DELETE /api/users/123 HTTP/1.1
```
- **Пример успешного ответа** (HTTP Status Code: 204 No Content):
```http
HTTP/1.1 204 No Content
```

- **Общие HTTP-коды для операции удаления**:
  - `204 No Content`: Ресурс успешно удалён.
  - `404 Not Found`: Ресурс не найден.
  - `403 Forbidden`: У пользователя нет прав на удаление ресурса.

### Заключение

Операции CRUD являются основой взаимодействия с ресурсами в RESTful API. Вот основные соответствия между HTTP-методами и CRUD-операциями:

| Операция   | HTTP-метод | Пример действия                      | Возможные HTTP-коды                           |
| ---------- | ---------- | ------------------------------------ | --------------------------------------------- |
| **Create** | POST       | Создание нового пользователя         | `201 Created`, `400 Bad Request`              |
| **Read**   | GET        | Получение списка пользователей       | `200 OK`, `404 Not Found`                     |
| **Update** | PUT/PATCH  | Обновление информации о пользователе | `200 OK`, `204 No Content`, `400 Bad Request` |
| **Delete** | DELETE     | Удаление пользователя                | `204 No Content`, `404 Not Found`             |

Эти четыре операции обеспечивают базовую функциональность любого RESTful API и могут быть расширены с использованием методов фильтрации, аутентификации и авторизации для обеспечения безопасности и удобства использования API.