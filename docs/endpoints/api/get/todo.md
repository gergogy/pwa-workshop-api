## **GET** _/api/todo_

List of todos (limit 20)

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../post/login.md)

#### Parameters

Name | Type | Description
--- | --- | ---
`page` | _integer_ | For paginition default item limit is 20

#### Payload

Cannot applied (GET request)

#### Response

These are valid responses (codes and content)

##### 200
- Returns an array with items in DB (content depends on `page`)

##### 404
- No item in DB
- `page` value is too high

##### 500
- Something went wrong

#### Examples

URI | Query string | Status code | Content
--- | --- | --- | ---
/api/todo | - or `page=1` | 200 | `[{_id: "1","test":"test"},{_id: "2","test2":"test2"},... 18 more]`
/api/todo | `page=2` | 200 | `[{_id: "21","test21":"test21"},{_id: "22","test22":"test22"}]`
/api/todo | `page=20` | 404 | none

