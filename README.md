# Next.js V13 Ecommerce App

## Description & Architecture Overview
An eCommerce app follows a server-side rendered (SSR) approach using Next.js and uses Prisma as the ORM for interacting with the PostgreSQL database. NextAuth.js is used for user authentication and session management. AWS S3 is used for storing product images, and CloudFront is used as the CDN for efficient content delivery. 

## Development Tools
- Docker

## Features
- User authentication and authorization using NextAuth.js.
- Product listing, searching, and filtering.
- Shopping cart functionality.
- Order placement and management.
- User profile management.
- Integration with AWS S3 and CloudFront for image storage and delivery.



## Development Progress

### Current Status
The eCommerce app is currently in development and making steady progress.  the initial setup and configuration of the project is completed, including the following tasks:

- Setting up the Next.js project structure and routing.
- Database schema design and creation of necessary tables.
- Configuring Prisma as the ORM for database interactions.
- Integrating NextAuth.js for user authentication and session management.
- Coding the design with TailwindCSS
- Implementing basic CRUD operations for managing products.
- Integration with AWS S3 for storing and retrieving product images.
- User authentication and registration functionality using NextAuth.js.


### Work in Progress
- Product listing page with basic filtering and pagination.
- Shopping cart functionality with the ability to add and remove products.


### Next Steps
- Implementing the order placement and management features.
- Enhancing the product listing page with advanced search and filtering options.
- Adding more features such as wishlists, reviews, and ratings.
- Adding user profile management functionality.
- Implementing the checkout process and integrating with payment gateways.
- Optimizing performance and user experience.
- Adding more features such as wishlists, reviews, and ratings.
- Testing and bug fixing to ensure the stability of the application.

<!-- ### Challenges and Considerations
 -->

## Development Environment Setup

To set up the development environment for the eCommerce app, follow these steps:

1. Clone the repository: `git clone https://github.com/abdullah-omar-aly/Next13_Eccommerce`
2. Install dependencies: `pnpm install`
3. Set up the PostgreSQL database and configure the database connection.
4. set up the OAuth Conscent screen with a google account and provide the app with (Google client Id - Google client secret)
5. Configure the AWS S3 credentials and bucket settings.
6. Run the development server: `pnpm run dev`
