# Pleasant Potluck Planner API Documentation
[Hosted Here](https://potluck-planner-5.herokuapp.com/) on Heroku
***
## Resources
Stores users, potlucks, user organizing the potluck, users attending, food items requested, and if a user is bringing that item.

## Endpoints
    | Method | URL                            | Description                                                                                         |
    | ------ | ------------------------------ | ----------------------------------------------------------------------------------------------      |
    | GET    | /api/potlucks:user_id          | Returns array of objects with potlucks organized by user.                                           |
    | POST   | /api/potlucks                  | Returns an object with the new potluck.                                                             |
    | PUT    | /api/potlucks:potluck_id       | Returns an object with the updated potluck.                                                         |
    | DELETE | /api/potlucks:potluck_id       | Returns a 200 success message.                                                                      |
    | DELETE | /api/potlucks/food:potluck_id  | Returns a 200 success message.                                                                      |
    | POST   | /api/register                  | Returns an object with newly created user.                                                          |
    | POST   | /api/login                     | Returns a 200 success message.                                                                      |
    
## Request / Response Shapes
**GET /api/potlucks:user_id**
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
