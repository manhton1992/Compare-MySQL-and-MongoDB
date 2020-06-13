# Compare-MySQL-and-MongoDB
Compare Performance von MySQL and MongoDB using management of eacht flight data.
## Getting Started
### Prerequisites
What things you need to install the software and how to install them?  
- [Node.js](https://nodejs.org/docs/latest/api/)  
- [npm](https://www.npmjs.com/package/npm-api)
- [express](https://expressjs.com/de/api.html)
- [MongoDb](https://mongoosejs.com/)
- [MySQL]

$ npm install
## MongoDb Server
$ npm run dev
| Method  | HTTP request | Description |
| ---- | ---------------- | ----------------------------------|
| list  |  GET /aircraft| Returns a list of all aircrafts. |
| list  | GET /aircraft/aircraft:id  | Return a single aircraft with given id. If there is no aircraft that has matching id, nothing is returned. |
| list  |  GET /position | Returns a list of all position. |
| list  |  GET /position/position:id | Returns a single position with given id. If there is no position that has matching id, nothing is returned. |
| list  |  GET /allposition/aircraft:id | return all position belong to one aircraft |
| insert  |  POST /aircraft| Create a new aircraft. The newly created aircraft is returned. |
| delete  |  DELETE /aircraft/delete/aircraft:id | Delete a aircraft with the given id. The newly deleted aircraft is returned. |
| update  |  PUT /aircraft/update/aircraft:id | Update a aircraft with the given id. The newly updated aircraft is returned. |
| insert  |  POST /position| Create a new position. The newly created position is returned. |
| delete  |  DELETE /position/delete/position:id | Delete a position with the given id. The newly deleted position is returned. |
| update  |  PUT /position/update/position:id | Update a position with the given id. The newly updated position is returned. |

### Example
 - The URL: *http://localhost:3001/api/aircraft * returns result


## MySQL Server 
$ node Server1.js
