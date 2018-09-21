## Blog API

 This project demonstrates how to build a simple RESTful API using Laravel 5.7

## Available end points

- POST `/api/register` - Register a new user (required fields: `name`, `email`, `password`, `password_confirmation`)
- POST `/api/login` - Login a user (required fields: `email`, `password`)
- POST `/api/logout` - Logout a user
- GET `/api/articles` - Returns a list of articles
- GET `/api/articles/<id>` - Returns a single article
- POST `/api/articles` - Add a new article (required fields: `title`, `body`)
- PUT `/api/articles/<id>` - Edit an existing article (required fields: `title`, `body`)
- DELETE `/api/articles/<id>` - Delete an article

## Requirements

Ensure that you have installed the following on your local machine;
- `PHP 7.1.*`
- `Composer, for application dependency management`, [installation instructions here](https://getcomposer.org/download/)


## Running the API

It's very simple to get the API up and running. First, create the database (and database
user if necessary) and add them to the `.env` file in the project root directory.

```
DB_DATABASE=your_db_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_password
```

Then install, migrate, seed, all that jazz:

1. `composer install`
2. `php artisan migrate`
3. `php artisan db:seed`
4. `php artisan serve`

The API will be running on `localhost:8000`.

## Testing the API

Run the tests in the `tests/` directory by running;
```
composer test
```

Test the endpoint responses using an HTTP client e.g. curl, Postman

## Credit
This project was built while following a tutorial available at [https://www.toptal.com/laravel/restful-laravel-api-tutorial](https://www.toptal.com/laravel/restful-laravel-api-tutorial)
