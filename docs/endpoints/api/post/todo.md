## **POST** _/api/todo_

Create new todo

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../post/login.md)

#### Parameters

Not necessary

#### Payload

Name | Value | Description
--- | --- | ---
`insertData` | _object_ | The value is on you thanks to MongoDB it can be anything (*_id* will be ignored)

###### Example JSON payload
`{
  "insertData": {
    "test": "insert"
  }
}`

#### Response

These are valid responses (codes and content)

##### 200
- Returns inserted ID

##### 500
- Something went wrong

#### Examples

URI | Payload | Response
--- | --- | ---
/api/todo | `{"insertData": {"test": "insert"}}` | Status code: 200 Content: `{id: 1}`

