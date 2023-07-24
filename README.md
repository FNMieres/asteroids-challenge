# Asteroid Explorer App

This is a small full-stack application that allows you to explore information about asteroids. It displays a list of asteroids, allows you to search by a range of dates, see detailed information about individual asteroids, and sort them by name. Additionally, there is an optional feature to add asteroids to your favorites and view a list of your favorite asteroids.

## Getting Started

To run this application, follow the steps below:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/FNMieres/asteroid-explorer-app.git
cd asteroid-explorer-app
```

2. Start the backend and frontend services using Docker Compose:

```bash
docker-compose up -d
```

3. Install the required dependencies for the frontend and backend:

```bash
npm install
```

4. Rename the `.env.example` file to `.env` in the `server` folder and provide your NASA API key:

```bash
mv server/.env.example server/.env
```

For most use cases, the demo API key should be sufficient. However, if you wish to make more extensive queries or require higher usage limits, 
you can obtain an API key by visiting [https://api.nasa.gov/](https://api.nasa.gov/).

After you have your API key, open the `.env` file in the `server` folder using a text editor and replace `NASA_API_KEY` with your own API key.

5. Run the development server for both frontend and backend:

```bash
npm run dev
```

Now, you should be able to access the application by navigating to `http://localhost:3000` in your web browser.

## Technologies Used

- Frontend: React with Typescript, Redux Toolkit, React Router, Material UI.
- Backend: Node.js, Express.js with Typescript, Mongoose.
- Database: MongoDB.

## Challenge Details

This application was developed as part of a tech challenge. The challenge requirements are listed in [CHALLENGE.md](CHALLENGE.md). It demonstrates my skills in full-stack development, utilizing best practices, and focusing on code reusability.

## Notes

- This application has been developed as a tech challenge to showcase my skills in full-stack development, using best practices, and focusing on code reusability.

- The backend acts as a proxy to the NASA API, allowing the frontend to fetch asteroid data without exposing the API key to the client.

- The favorites feature is optional, and you are free to explore other features or improvements you think would enhance the application.

- If you have any questions or feedback, feel free to contact me.

Enjoy exploring the fascinating world of asteroids! 🚀🪐
