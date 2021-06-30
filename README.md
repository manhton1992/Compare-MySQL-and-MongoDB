# Einführung
This Project was created to compare the difference and performance between SQL and NoSQL in general and MySql and MongoDB in particular.

### Prerequisites
What things you need to install the software and how to install them?  
- [Node.js](https://nodejs.org/docs/latest/api/)  
- [npm](https://www.npmjs.com/package/npm-api)
- [express](https://expressjs.com/de/api.html)
- [MongoDb](https://mongoosejs.com/)
- [MySQL] (https://dev.mysql.com/)

### How to run project?
- MongoServer: Tutorial in MongoServer
- MySQLServer: Tutorial in MySQLServer

## Zusammenfassung und Fazit
Jedes Datenbanksystem bietet Vor- und Nachteile.

| Eigenschaft |   MongoDB  |   MySQL  |
| ------- | ------------ | ------------ |
| DatenModell | Dokumentorientert | Ralational |
| Abfragespreche | Mongo Shell | SQL |
| Beziehung | Nein | Ja |
| Schema | schemalos | vordefiniert |
| Insert | schneller | langsammer |
| Delete | schneller | langsammer |
| Update | schneller | langsammer |
| Get    | langsammer | schneller |
| Flexibilität | flexibler | vordefiniert | 
| Skalierbarkeit | horizontal | vertikal |

MongoDB sollte verwendetwerden,  wenn  eine  Flexibilität  der  Datenstruktur  ,  horizontale  Skalierbarkeit,und eine gute Peformance beim Einfügen, Ändern und Löschen der Daten inder Datenbank erforderlich ist. Darüber hinaus ist MongoDB in Zukunft pas-sender bei Projekten, die mit einfachen und vorausberechneten CRUD-Abfragenarbeiten.

MySQL  sollte  verwendet  werden,  wenn  die  Struktur  der  Daten  klar  definiert ist oder wenn es sich um komplexe Abfragen und Datenkonsistenz handelt. InZukunft ist MySQL noch eine gute Wahl für Projekte, die eine hohe Datenkon-sistenz benötigen, wie z.B. bei der Benutzerverwaltung oder im Bankensystem.