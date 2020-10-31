# Soar React/Redux Test

This is repository is the React-Redux test application.

## Requirements

- node `8.9.0`
- npm `^6.0.1`

## Installation

Install dependencies

```bash
$ npm install
$ npm run start      # Compiles and launches application
```

If everything works, you should get a message indicating so. In development Application will be served on port 8080
Open the web browser to http://localhost:3000/login

## Project Structure

The project structure presented in this starter kit is outlined below. This structure is only meant to serve as a guide.

```
├── public                # Transpiled react source code
└──src                    # React-redux related files
   ├── __tests__          # Unit tests
   ├── assets             # Assests - Images, stylesheets and
   │   ├── fonts          # Custom fonts for the application
   │   ├── images         # Images
   │   └── sass           # CSS files
   ├── components         # Collections of reducers/constants/actions
   ├── layouts            # Layouts for auth pages and other pages
   ├── pages              # Collections of landing pages for navigation items
   ├── redux              # Collections of reducers/constants/actions
   │   ├── actions        # Actions
   │   ├── reducers       # Reducers
   │   ├── constants.js   # Constants file
   │   └── store.js       # Redux store instance
   ├── routes             # Route declaration for the application  - private and public routes
   └── utils              # Utitily functions used in the application
```
