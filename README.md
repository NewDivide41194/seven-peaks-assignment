# Seven Peaks Assignment

- **Technology stack**: This project primarly used React JS, HTML and pure CSS. Used Redux for state management.
- **Status**: 1.1

## Dependencies
-  "@reduxjs/toolkit": "^1.9.1",
-  "@testing-library/jest-dom": "^5.16.5",
-  "@testing-library/user-event": "^13.5.0",
-  "react": "^18.2.0",
-  "react-redux": "^8.0.5",
-  "react-scripts": "5.0.1",
-  "web-vitals": "^2.1.4"

## Installation and Run

```bash
npm install
npm start
```

## Configuration (.env)
- REACT_APP_GUARDIAN_API_KEY="test"
- REACT_APP_GUARDIAN_BASE_URL="https://content.guardianapis.com/"

## Known Issues
1. Bookmark data lost when browser reload because bookmark data saved in redux store.

## Credits and references
1. https://css-tricks.com/
2. https://www.w3schools.com/
3. https://redux.js.org/