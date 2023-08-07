# E-Commerce Back End

## Description

This application was created as part of a UT Full Stack Coding Bootcamp challenge. Given the starter code of a working Express.js API, code was configured to use Sequelize to interact with a MySQL database. 

Code syncs Sequelize models to a MySQL database on the server start, includes column definitions for all four models and model associations, and provides the following GET, POST, PUT, and DELETE routes:

**Category**
 * GET all categories, GET a single category by ID, POST(create) a new category, PUT(update) and existing category by ID, and DELETE an existing category by ID. 

**Tag**
 * GET all tags, GET a single tag by ID, POST(create) a new tag, PUT(update) an existing tag by ID, and DELETE an existing tag by ID.

**Product (including ProductTag)**
 * GET all products, GET products by ID, and DELETE products by ID. POST(create) and PUT(update) product routes were provided in starter code.
  
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)

**Watch [video](https://drive.google.com/file/d/100kSriYMz0mfKECMtBlch7cjPPMxgpiI/view?usp=sharing) to see application set-up in VSCode and demonstration all API routes' endpoints using Insomnia:**

https://user-images.githubusercontent.com/116515976/236651137-fe235966-b5bf-4064-bfe5-d8391c539f99.mov

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source schema.sql`. Log out of MySQL with command `\q`.
* Seed database with command `npm run seed`.

## Usage
* Start server with command `npm start`.
* Alternatively, start server with Nodemon (and restart server automatically when making changes to code) with command `npm run watch`.
* Access API routes with Insomnia using the following endpoints:

|                                   | CATEGORY                                 | TAG                                | PRODUCT                                |
|-----------------------------------|------------------------------------------|------------------------------------|----------------------------------------|
| GET (ALL), POST(CREATE)           | http://localhost:3001/api/categories/    | http://localhost:3001/api/tags/    | http://localhost:3001/api/products/    |
| GET (BY ID), PUT(UPDATE),  DELETE | http://localhost:3001/api/categories/:id | http://localhost:3001/api/tags/:id | http://localhost:3001/api/products/:id |


* Make POST and PUT requests with the following JSON body formats:

 **CATEGORY**
  ```
  { 
  "categoryName": "STRING INPUT" 
  }
  ```
 **TAG**
  ```
  { 
  "tagName": "STRING INPUT" 
  }
  ```
  **PRODUCT**
  ```
  { 
  "product_name": "STRING INPUT",   
  "price": DECIMAL INPUT,   
  "stock": INTEGER INPUT,   
  "tagIds": INTEGER INPUT
  }
  ```
## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

[Starter code]([https://github.com/coding-boot-camp/miniature-eureka](https://github.com/coding-boot-camp/fantastic-umbrella)) was provided by Xander Rapstine ([Xandromus](https://github.com/Xandromus)) and UT Austin Boot Camps.

Tables in README created using [table-magic](https://github.com/stevecat/table-magic) by Steve GunTrip ([stevecat](https://github.com/stevecat)).

## Questions

Contact:
* Email elizabetholsavsky@gmail.com
* LinkedIn [https://www.linkedin.com/in/elizabetholsavsky/](https://www.linkedin.com/in/elizabetholsavsky/)
* Portfolio [https://elizabetholsavsky.com/](https://elizabetholsavsky.com/)
* Hashnode [https://elizabetholsavsky.hashnode.dev/](https://elizabetholsavsky.hashnode.dev/)
* Twitter [@elizavsky](https://twitter.com/home)
