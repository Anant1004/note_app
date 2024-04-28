# Simple Notes App

This is a simple notes-making web application built with Node.js, Express, and EJS. It allows users to create, edit, and view text notes.

## Features

- **Create Notes**: Users can create new notes by providing a title and description.
- **Edit Notes**: Notes can be edited by renaming the note's title.
- **View Notes**: Users can view the content of each note.
- **About Page**: Includes an "About" page with information about the application.

## Prerequisites

- Node.js and npm installed on your machine

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anant1004/notes-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd notes-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:4000` to use the application.

## Usage

1. **Create a Note**:
   - Navigate to the home page (`/`).
   - Enter a title and description for your note, then click "Create Note".

2. **View a Note**:
   - Click on the title of a note from the home page to view its content.

3. **Edit a Note**:
   - Click on the "Edit" button next to a note on the home page.
   - Enter a new title for the note, then click "Save Changes".

4. **About Page**:
   - Visit `/about` to learn more about the application.

## File Structure

- `app.js`: Entry point of the application, contains the Express server setup.
- `views/`: Contains EJS templates for rendering HTML pages.
- `public/`: Static assets (CSS, JavaScript) for the front-end.
- `Files/`: Directory to store text files representing notes.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [EJS](https://www.npmjs.com/package/ejs): Embedded JavaScript templating.
- [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can customize this README with additional information, such as detailed usage instructions, deployment instructions, or any other relevant details about your notes app. Feel free to tailor it to best fit the structure and functionality of your project. Good luck! 🚀