## **POST** _/register_

Register user with the given data and generate a token

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
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "joe123"
}`

#### Response

These are valid responses (codes and content)

##### 200
- Returns an active and valid JWT token
`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjEzLCJpYXQiOjE1MTIwNzI3OTUsIm5iZiI6MTUxMjA3Mjc5NSwiZXhwIjoxNTEyNjc3NTk1LCJpc3MiOiJUb0RvIExpc3QgQVBJIiwic3ViIjoiQmFzZSBDb21tdW5pY2F0aW9uIn0.hiMtLsUa6NnkgGfjs-hum8DyZtvHkLXZGKFqf4MX0dc"
}`
##### 418
- E-mail already exists

##### 500
- Something went wrong

#### Examples

URI | Payload | Response
--- | --- | ---
/register | `{"identifier": "john.doe@example.com", "password": "joe123"}` | Status code: 200 Content: `{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjEzLCJpYXQiOjE1MTIwNzI3OTUsIm5iZiI6MTUxMjA3Mjc5NSwiZXhwIjoxNTEyNjc3NTk1LCJpc3MiOiJUb0RvIExpc3QgQVBJIiwic3ViIjoiQmFzZSBDb21tdW5pY2F0aW9uIn0.hiMtLsUa6NnkgGfjs-hum8DyZtvHkLXZGKFqf4MX0dc"}`
/register | `{"identifier": "john.doe@example.com", "password": "joe123"}` | Status code: 418 Content: none

