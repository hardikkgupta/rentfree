# RentFree

![Description](cover.png)

RentFree is a web application designed to facilitate property rentals. It features user authentication, profile management, booking functionalities, and property listings. This README provides an overview of the project's structure, key components, and setup instructions.

## Table of Contents
- [Features](#features)
- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Allows users to register, log in, and manage their accounts.
- **Responsive Design**: Ensures the application is usable on both desktop and mobile devices.
- **Property Listings**: Displays a list of available properties with detailed information.
- **Booking System**: Enables users to select dates and book properties.
- **Profile Management**: Users can view and edit their profile information and manage their properties.

## Functionalities

### User Authentication
- **Login/Registration**: Users can create a new account or log in to an existing one using email and password.
- **Session Management**: Users stay logged in across sessions and can securely log out.

### Property Management
- **Property Listings**: Users can browse properties with detailed information including photos, descriptions, and pricing.
- **Add/Edit Property**: Users can add new properties or edit existing ones through a form.

### Booking System
- **Search and Filter**: Users can search for properties based on location, date, and other criteria.
- **Booking Form**: Users can select dates, provide booking details, and confirm their bookings.
- **Booking History**: Users can view their past and upcoming bookings in their profile.

### Profile Management
- **View Profile**: Users can view their profile information, including contact details and property listings.
- **Edit Profile**: Users can update their profile information and preferences.
- **Manage Properties**: Users can view and manage the properties they own or have listed.

### Responsive Design
- **Desktop and Mobile Views**: The application adapts to different screen sizes, ensuring a smooth experience on both desktop and mobile devices.

## Technologies
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Date Handling**: date-fns
- **HTTP Requests**: Axios
- **Routing**: React Router

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/rentfree.git
    cd rentfree
    ```

2. **Navigate to the client and api directories and install dependencies:**
    ```bash
    npm install
    ```

3. **Start the Development Server**
    ```bash
    cd client
    npm install
    cd ../api
    npm install
    cd ..
    ```

    Start the frontend and backend servers.

4. **Open the Application**
    Visit in your browser to see the application in action.

## Usage

- **Login/Register**: Use the `/login` and `/register` routes to authenticate or create a new user account.
- **Profile Management**: Access your profile and manage your properties through `/account`.
- **Property Listings**: Browse properties on the homepage and view details on individual property pages.
- **Booking**: Select dates and book properties using the booking widget.

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. **Fork the Repository**
2. **Create a New Branch**
    ```bash
    git checkout -b feature/your-feature
    ```
3. **Make Changes**
4. **Commit Your Changes**
    ```bash
    git add .
    git commit -m "Add new feature"
    ```
5. **Push to Your Fork**
    ```bash
    git push origin feature/your-feature
    ```
6. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
