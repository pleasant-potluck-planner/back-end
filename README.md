# Pleasant Potluck Planner API Documentation
[Hosted Here](https://potluck-planner-5.herokuapp.com/) on Heroku
***
## Resources
Stores users, potlucks, user organizing the potluck, users attending, food items requested, and if a user is bringing that item.

## Endpoints
    | Method | URL                            | Description                                                                                         |
    | ------ | ------------------------------ | ----------------------------------------------------------------------------------------------      |
    | GET    | /api/potlucks:potluck_id       | Returns an object.                                                                                  |
    | GET    | /api/potlucks:user_id          | Returns array of objects with potlucks organized by user.                                           |
    | POST   | /api/potlucks                  | Returns an object with the new potluck.                                                             |
    | PUT    | /api/potlucks:potluck_id       | Returns an object with the updated potluck.                                                         |
    | DELETE | /api/potlucks:potluck_id       | Returns a 200 success message.                                                                      |
    | DELETE | /api/potlucks/food:potluck_id  | Returns a 200 success message.                                                                      |
    | POST   | /api/register      | Creates a user from { user_name, user_password } in the `request body`, responds with newly created user.       |
    | POST   | /api/login         | Checks { user_name, user_password } in the `request body`, responds with a welcome message.                     |
    
## Request / Response Shapes
**GET /api/potlucks:potluck_id**
```es6
// potluck_id will need to be included in the Axios call to request potluck by id

// Response Object
{
  potluck_id: 1,
  potluck_name: "John's Potluck",
  potluck_location: "John's House",
  potluck_time: '18:00:00',
  potluck_date: '2022-02-10',
  organizer: 'John',
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
}
```
**GET /api/potlucks:user_id**

```
