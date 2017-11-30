## **POST** _/login_

Generate JWT token for user

#### Headers

No extra headers needed

#### Parameters

Not necessary

#### Payload

Name | Value | Description
--- | --- | ---
`identifier` | _string_ | Unique identifier
`password` | _string_ | Password which associated with `identifier`

###### Example JSON payload
`{
  "identifier": "user",
  "password": "pass"
}`

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
- Bad credentials

##### 500
- Something went wrong

#### Examples

URI | Payload | Status code | Content
--- | --- | --- | ---
/login | `{"identifier": "john.doe@example.com", "password": "joe123"}` | 200 | `{"userData": {"firstname": "John","lastname": "Doe","email": "john.doe@example.com"},"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjEsImlhdCI6MTUxMTkzNjQwNCwibmJmIjoxNTExOTM2NDA0LCJleHAiOjE1MTI1NDEyMDQsImlzcyI6IlRvRG8gTGlzdCBBUEkiLCJzdWIiOiJCYXNlIENvbW11bmljYXRpb24ifQ.kFGd876pcOXsRpKydHudfB3KkxZboSjnZ374jbNnwyI"}`
/login | `{"identifier": "john.doe@example.com", "password": "joe12"` | 404 | none

