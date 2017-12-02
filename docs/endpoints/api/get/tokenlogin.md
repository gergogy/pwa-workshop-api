## **GET** _/api/tokenLogin_

Authenticate with an old but active and valid token
It will send back a new token too

#### Headers

Name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <jwt_token>` | jwt_token: See [`/login`](../../post/login.md)

#### Parameters

Not necessary

#### Payload

Cannot applied (GET request)

#### Response

These are valid responses (codes and content)

##### 200
- Returns userdata and an active and valid JWT token

*Example*
`{
  "userData": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjEsImlhdCI6MTUxMTkzNjQwNCwibmJmIjoxNTExOTM2NDA0LCJleHAiOjE1MTI1NDEyMDQsImlzcyI6IlRvRG8gTGlzdCBBUEkiLCJzdWIiOiJCYXNlIENvbW11bmljYXRpb24ifQ.kFGd876pcOXsRpKydHudfB3KkxZboSjnZ374jbNnwyI"
}`

##### 401
- Expired, inactive or invalid token

##### 500
- Something went wrong

#### Examples

URI | Query string | Status code | Content
--- | --- | --- | ---
/api/tokenLogin | - | 200 | `{"userData": {"firstname": "John","lastname": "Doe","email": "john.doe@example.com"},"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjEsImlhdCI6MTUxMTkzNjQwNCwibmJmIjoxNTExOTM2NDA0LCJleHAiOjE1MTI1NDEyMDQsImlzcyI6IlRvRG8gTGlzdCBBUEkiLCJzdWIiOiJCYXNlIENvbW11bmljYXRpb24ifQ.kFGd876pcOXsRpKydHudfB3KkxZboSjnZ374jbNnwyI"}`
/api/tokenLogin | - | 401 | -
