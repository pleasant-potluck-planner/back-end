# Pleasant Potluck Planner API Documentation
[Hosted Here](https://potluck-planner-5.herokuapp.com/) on Heroku
***
## Resources
Stores users, potlucks, user organizing the potluck, users attending, food items requested, and if a user is bringing that item.

## Endpoints
    | Method | URL                            | Description                                                         |
    | ------ | ------------------------------ | ----------------------------------------------------------------    |
    | GET    | /api/potlucks/potluck_id       | Returns an object with the potluck matching id                      |
    | GET    | /api/potlucks/user/:user_id    | Returns array of objects with potlucks organized by user.           |
    | POST   | /api/potlucks                  | Returns an object with the new potluck.                             |
    | PUT    | /api/potlucks/:potluck_id      | Returns an object with the updated potluck.                         |
    | DELETE | /api/potlucks/:potluck_id      | Returns a 200 success message.                                      |
    | DELETE | /api/potlucks/:potluck_id/food | Returns a 200 success message.                                      |
    | POST   | /api/register                  | Returns an object with newly created user.                          |
    | POST   | /api/login                     | Returns a 200 success message.                                      |
    
## Request / Response Shapes
#### /api/auth
**POST /api/auth/register**
```es6
{
      user_id: 5
      user_name: 'tdubs',
      user_password: '1234' // returned password will be encrypted and will look like LOIDSFSDJFB83274323JD once db is fully hooked up
}
```
**POST /api/auth/login**
```es6
{
      token: OISKBVOIKSLJNDFBNSUIODBF // this is not a valid token. Response will have a valid JWT
}
```
#### /api/potlucks
**GET /api/potlucks/:potluck_id**
```es6
// Response Object
{
      "potluck_date": "2022-02-10T08:00:00.000Z",
      "potluck_id": 1,
      "potluck_location": "John's house",
      "potluck_name": "John's potluck",
      "potluck_time": "18:00:00"
      "user_id": 1
}
```
**GET /api/potlucks/user/:user_id**
```es6
// Response Array
[
  {
      organizer: "John",
      user_id: 1,
      potluck_id: 1,
      potluck_name: "John's Potluck",
      potluck_location: "John's House",
      potluck_time: '18:00:00',
      potluck_date: '2022-02-10',
      items: [
        {
          item_name: 'Chocolate Cake',
          guestBringingItem: 'John'
        },
        {
          item_name: 'Red Wine',
          guestBringingItem: 'John'
        }
      ]
    },
  {
      organizer: "John",
      user_id: 1,
      potluck_id: 2,
      potluck_name: "John's Potluck",
      potluck_location: "1234",
      potluck_time: '20:00:00',
      potluck_date: '2022-02-17',
      items: [
        {
          item_name: 'bread',
          guestBringingItem: 'foo'
        },
        {
          item_name: 'olives',
          guestBringingItem: 'Joe'
        }
      ]
    }
  ]
```
**POST /api/potlucks**
```es6
// Response Object
{
      potluck_id: 6,
      potluck_name: 'Taco Tuesday',
      potluck_date: '2022-04-20',
      potluck_time: '16:20:00',
      potluck_location: 'Nowhere'
}
```
**PUT /api/potlucks/:potluck_id**
```es6
// Response Object
{
      potluck_id: 6,
      potluck_name: 'Taco Thursday',
      potluck_date: '2022-04-20',
      potluck_time: '16:20:20',
      potluck_location: 'Somewhere'
}
```
**DELETE /api/potlucks/:potluck_id**
```es6
// Response JSON Object
{
    "message": "potluck with id 1 successfully deleted"
}
```
**DELETE /api/potlucks/:potluck_id/items/item:id**
```es6
// Response JSON Object
{
    "message": "item with id 3 has been removed from potluck with id 1"
}
```
