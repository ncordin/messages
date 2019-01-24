# MESSAGES

A messages app with React 💬 ⚛️

[Online demo](https://react-messages.netlify.com/)

<p align="center">
  <img width="450" src="https://github.com/ncordin/messages/blob/master/demo.png" alt="demo">
</p>

## Development

Run it locally:

```
npm install
npm run start
```

The stack:

- [React](https://facebook.github.io/react/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Antd](https://ant.design/)

## Structure explaination:

```
└── src/
    ├── common/           # Any reusable components
    │   └── Layout/       # Components used to build pages
    ├── components/       # Small blocks of interface, used by pages
    │   ├── App/          # Main component, contains pages
    │   ├── Pages/        # App pages. Contains subcomponents
    │   └── */            # Any subcomponents
    ├── constants/        # Reusable constants
    └── helpers/          # Reusable helpers
```

## Bootstrapped with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Coverage report: `npm test -- --coverage`
