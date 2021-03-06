## **PUT** _/api/todo/:id_

Modify an existing todo

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../post/login.md)

#### Parameters

Not necessary

#### Payload

Name | Value | Description
--- | --- | ---
`updateData` | _object_ | Properties what you want to modify/add (*_id* will be ignored)

###### Example JSON payload
`{
  "updateData": {
    "test": "update",
    "this_will_be_added": true
  }
}`

#### Response

These are valid responses (codes and content)

##### 200
- Returns inserted ID

##### 500
- Something went wrong

#### Examples

URI | Payload | Status code | Content
--- | --- | --- | ---
/api/todo/1 | `{"updateData": {"test": "insert", "added": true}}` | 200 | none

