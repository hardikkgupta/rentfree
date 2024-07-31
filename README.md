# RentFree
![Description](cover.png)
RentFree is a web application designed to facilitate property and holiday rentals booking. This README provides an overview of the features, setup instructions and usage.

## Features

### User Authentication
- **Login/Registration**: Users can create a new account or log in to an existing one using email and password.
- **Session Management**: Users stay logged in across sessions and can securely log out.

### Property Management
- **Property Listings**: Users can browse properties with detailed information including location, photos, descriptions, and pricing and extra information.
- **Add/Edit Property**: Users can add new properties or edit existing ones through a form.

### Booking System
- **Booking Form**: Users can select dates, provide booking check-in, booking check-out, number of guests, name and phone number and confirm their bookings.
- **Booking History**: Users can view their upcoming and past bookings in their profile.

### Profile Management
- **View Profile**: Users can view their profile information, including contact details and property listings.
- **Manage Properties**: Users can view and manage the properties they own or have listed.

### Responsive Design
- **Desktop and Mobile Views**: The application adapts to different screen sizes, ensuring a smooth experience on both desktop and mobile devices.

## Technologies
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, AWS S3
- **Database**: MongoDB
- **HTTP Requests**: Axios

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
