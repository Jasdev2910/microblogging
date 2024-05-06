# Microblogging Platform API

## Overview

This API is designed for a microblogging platform, enabling users to create profiles, post content, and track followers. It uses Node.js with Express and MongoDB as the data store.

## Prerequisites

- Node.js (version 12.x or higher)
- npm (comes with Node.js)
- MongoDB (Local or cloud instance e.g., MongoDB Atlas)

## Installation

1. **Clone the Repository**

   Clone the code repository to your local machine using:

   ```bash
   git clone https://github.com/Jasdev2910/microblogging.git
   cd microblogging
   ```

2. **Install Dependencies**

   Run the following command in the root directory of your project to install the necessary packages:

   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables**

   Create a `.env` file in the root directory of your project. This file should contain the MongoDB URI and the port number on which your server will run. Example:

   ```plaintext
   PORT=3000
   DB_URL=mongodb://localhost:27017/microblogging
   ```

   Replace `mongodb://localhost:27017/microblogging` with your MongoDB connection string if different, especially when using MongoDB Atlas or another remote service.

## Running the Server

To start the server, run:

```bash
npm start
```

This command will launch the server on `http://localhost:3000` or on another port if specified in your `.env` file.

## Testing the API

### Using Postman

I have provided a Postman collection for easy testing of the API endpoints.

1. **Download the Postman Collection**

   Download the Postman collection from this link: [Postman Collection](./microblogging.postman_collection.json).
