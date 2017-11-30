## **DELETE** _/api/todo/:id_

Remove todo from id with _:id_

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../post/login.md)

#### Parameters

No available parameters for this resource

#### Payload

Not necessary

#### Response

These are valid responses (codes and content)

###### 200
- _:id_ removed

###### 404
- _:id_ not found

###### 500
- Something went wrong

#### Examples

URI | Query string | Payload | Status code | Content
--- | --- | --- | --- | ---
/api/todo/1 | - | - | 200 | none
/api/todo/1 | - | - | 404 | Content: none

