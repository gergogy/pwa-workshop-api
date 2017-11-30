## **GET** _/api/todo/:id_

Returns with one of todos with _:id_

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../../post/login.md)

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

URI | Query string | Response
--- | --- | ---
/api/todo/1 | - | Status code: 200 Content: `{_id: 1,"test":"test"}`
/api/todo/130 | - | Status code: 404 Content: none

