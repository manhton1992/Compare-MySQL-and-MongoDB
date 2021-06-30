# Compare-MySQL-and-MongoDB
Compare Performance von MySQL and MongoDB using management of eacht flight data.
## Getting Started
### Prerequisites
What things you need to install the software and how to install them?  
- [Node.js](https://nodejs.org/docs/latest/api/)  
- [npm](https://www.npmjs.com/package/npm-api)
- [express](https://expressjs.com/de/api.html)
- [MongoDb](https://mongoosejs.com/)
- [MySQL] (https://dev.mysql.com/)


## MySQL Server 
$ npm run dev

### Endpoint: localhost:3002/api/aircrafts

| Method  | HTTP request | Endpoint | Description |
| ----      | ---------------- | ----------------------------------|
| list      |  GET    |       | Returns a list of all aircrafts. |
| get       |  GET    | /:id  | Return a single aircraft with given id. If there is no aircraft that has matching id,  
|           |         |       | nothing is returned. |
| insert    |  POST   |       | Create a new aircraft. The newly created aircraft is returned. |
| inserts   |   POST  | addMultiple/:number | Create a new aircrafts |
| update    |  PUT    | /update/:id | Update a aircraft with the given id. The newly updated aircraft |
| delete    | DELETE  | /delete/:id | Delete a aircraft with the given id |
| deletes   | DELETE  | /deleteAll  | Delete all aircrafts |

### Endpoint: localhost:3002/api/positions

| Method  | HTTP request | Endpoint | Description |
| ----      | ---------------- | ----------------------------------|
| list      |  GET    |       | Returns a list of all positions. |
| get       |  GET    | /:id  | Return a single position with given id. If there is no position that has matching id,  
|           |         |       | nothing is returned. |
| insert    |  POST   |       | Create a new position. The newly created position is returned. |
| inserts   |   POST  | addMultiple/:number | Create a new positions with number of give position |
| update    |  PUT    | /update/:id | Update a positions with the given id. The newly updated aircraft |
| update    |  PUT    | /updateAircraftIdForPositions | update aircraftId for all positions |
| delete    |  DELETE | /delete/:id | Delete a position with the given id |
| deletes   |  DELETE | /deleteAll  | Delete all position |

### Example

Download and import postman file for easier testing.

