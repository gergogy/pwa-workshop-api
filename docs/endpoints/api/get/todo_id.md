## **GET** _/api/todo/:id_

Returns with one of todos with _:id_

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../post/login.md)

#### Parameters

No paramters available for this resource

#### Payload

Cannot applied (*GET* request)

#### Response

These are valid responses (codes and content)

###### 200
- Returns an item

###### 404
- Item not found with _:id_

###### 500
- Something went wrong

#### Examples

URI | Query string | Status code | Content
--- | --- | --- | ---
/api/todo/1 | - | 200 | `{_id: 1,"test":"test"}`
/api/todo/130 | - | 404 | none

