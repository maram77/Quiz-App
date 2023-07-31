# Stage d'été réalisé avec MERN Stack
## Réalisation d'une application web de Quiz sur l’hameçonnage pour les employés TT

## Requirements 
* Node.js (v18.16.1) https://nodejs.org/en/

## Installation
1. Clone repo
```
$ git clone https://github.com/maram77/Quiz-App.git
$ cd Quiz-App
```
2. Backend Configuration
```
$ cd server
$ npm install
$ npm install express-async-handler
```


3. Frontend Configuration
```
$ cd client
$ npm install
```
4. Create a cluster in mongodb than create an empty database

5. Copy .env.example to .env
6. Set up database ATLAS_URI in: /.env with your own cluster configuration and database name

7. Run Backend
```
$ cd server
$ nodemon server
```
8. Run Frontend
```
$ cd client
$ npm start
```