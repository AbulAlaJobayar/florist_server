# Project Name:
Flower Management Server

## Project Overview

ExpressTSAuth is a sophisticated authentication system built using Express, Mongoose, TypeScript, and state-of-the-art technologies. It focuses on schema validation using Zod, secure password encryption with bcrypt, and user validation through JWT tokens. This project provides a robust foundation for implementing authentication in your applications with ease.

## Live URL
[Flower Management Dashboard](https://flower-management-server-weld.vercel.app)


## Features
- **User Registration:** Seamlessly register new users with Zod schema validation.
- **Secure Passwords:** Utilize bcrypt for industry-standard password encryption.
- **JWT Authentication:** Implement JSON Web Tokens for secure user validation.
- **Express and TypeScript:** Leverage the power of Express.js and TypeScript for a scalable backend.
- **Product Management:**
  - **Create Product:** Add new products with detailed information.
  - **Get Products:** Retrieve a list of all available products.
  - **Get Single Product:** Fetch detailed information about a specific product.
- **Sales Management:**
  - **Create Sale:** Record sales transactions with relevant details.
  - **Get Sales:** Retrieve a list of all sales transactions.
- **Flower Filtering:**
  - **Filter by Price:** Allow Salesman to set a price range for flowers.
  - **Filter by Bloom Date:** Provide options for filtering flowers based on their bloom date.
  - **Filter by Color:** Implement real-time search functionality for flower colors.
  - **Filter by Type:** Categorize flowers into types and allow filtering by preferred categories.
  - **Filter by Size:** Include a filter for flower sizes to manage flowers of specific sizes.
  - **Filter by Fragrance:** Allow Salesman to filter flowers based on fragrance.
  - **Additional Relevant Filter Parameters:** Introduce other relevant filter parameters such as arrangement style or occasion.
  ## Additional Features

- **Bulk Delete Product Options**: Enable Managers to efficiently manage their inventory by implementing a bulk delete feature for flowers.
- **Coupon & Discount Functionality**: Implement coupon code functionality for discounts on purchases.
- **Duplicate & Edit Feature**: Managers can duplicate existing products to create new ones with modifications.
- **Customer Membership & Points on Purchase**: Introduce a membership system where customers can earn points on purchases.


## Installation

### 1. Clone the GitHub repository:
Use the `git clone` command to clone the project repository from GitHub to your local machine

### 2. Open the project in Visual Studio Code:
Use the `code` command to open the project in Visual Studio Code.

### 3. Run `npm init` in the VS Code terminal:
This initializes a new Node.js project. It will prompt you to provide information about your project.

### 4. Install npm packages: 
Use `npm install` or `npm i` to install the project dependencies listed in the package.json file.

### 5. Create an .env file:
Create a new file named `.env` in the root folder of your project.

### 6. Set environment variables in .env file:
Open the `.env` file in a text editor and set the following variables:

```plaintext
NODE_ENV=production
PORT=5000
DB_URL=mongodb+srv://name:password@cluster0.ph1akes.mongodb.net/product?retryWrites=true&w=majority
BCRYPT_SLAT_ROUND=12
JWT_ACCESS_SECRET=b66e2d3838abdf2aa40348211171ab9bf3f30b7acdbbdbafd32ea2a14fa30392
JWT_ACCESS_EXPIRES_IN=7d
JWT_REFRESH_SECRET=db001fd3e572a55930e88086a2ee97b385d93d31b604be83fc2f8c4cee3b4e28e617600524f1423300873d72e91833f0ba617d6f6f14ede7e37d5ef95e009007
JWT_REFRESH_EXPIRES_IN=3d

`DATABASE_URL=example(mongodb+srv://name:password@cluster0.ph1akes.mongodb.net/courses?retryWrites=true&w=majority)`
## Development Workflow

Run the project in development mode:

```bash
  npm run start:dev
```
Run in Production Mode:
```bash
  npm run start:prod
```
Build Project:
```bash
  npm run build
  ```

## API Reference

#### Domain: https://flower-management-server-weld.vercel.app/

#### seller Registration

```http
  POST /api/v1/user/register
```

####  User Login

```http
  POST /api/v1/auth/login
```

#### Refresh Token

```http
  POST /api/v1/auth/refresh-token

```



#### Create a Product 

```http
  POST /api/v1/product/create-flower

```
```http
 Authorization: Token
```


#### Get All Product 

```http
 GET /api/v1/product/flowers


#### Get single Product 
```http
 Authorization: Token
``` 
```http
 GET /api/v1/product/_id



#### Update single Product 


```http
 Authorization: Token
``` 
```http
 PATCH /api/v1/product/_id
```

#### Delete single Product 


```http
 Authorization: Token
``` 
```http
 DELETE /api/v1/product/_id
```
#### Delete many Product 


```http
 Authorization: Token
``` 
```http
 Post /api/v1/product/delateMany
```


#### Create a sell **

```http
POST /api/v1/sale/createSale
```
```http
 Authorization: token
```


#### Get All sell

```http
 GET /api/v1/sale/allSales
 ```
#### Get Single sell

```http
 GET /api/v1/sale/sellerSales
```

#### create coupon 

```http
 post /api/v1/coupon/createCoupon

```
#### verify coupon 

```http
post /api/v1/coupon/verify

```
{
    "coupon":"borno25"
}



## if need any information
contact me

- abulalajobayar@gmail.com
- jobayar.dev@gmail.com

