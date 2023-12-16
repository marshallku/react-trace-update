# react-trace-update

Tracing prop updates in a React component

[![License](https://img.shields.io/npm/l/react-trace-update.svg)](https://www.npmjs.com/package/react-trace-update)
[![NPM Version](https://img.shields.io/npm/v/react-trace-update.svg)](https://www.npmjs.com/package/react-trace-update)
[![Known Vulnerabilities](https://snyk.io/test/github/marshallku/react-trace-update/badge.svg)](https://snyk.io/test/github/marshallku/react-trace-update)
[![NPM Downloads](https://img.shields.io/npm/dm/react-trace-update.svg)](https://www.npmjs.com/package/react-trace-update)

## Usage

### `useTraceUpdate`

```jsx
function MyComponent(props) {
    useTraceUpdate(props);
    return <div>Hello World!</div>;
}
```

Call the `useTraceUpdate` hook inside your functional component and pass in the props object.\
Whenever the component is re-rendered, the hook will log the changed props to the console.

### `withTraceUpdate`

```jsx
const WithTraceUpdate = withTraceUpdate(({ count }) => <div>{count}</div>, {
    onUpdate(props) {
        console.log("WithTraceUpdate props updated", props);
    },
});
```

`withTraceUpdate` allows you to wrap a component and automatically apply the useTraceUpdate hook to it.

## Options

| Property | Type                                                         | required | Description                                                                                         |
| -------- | ------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| onUpdate | (changedProps: Partial<Record<keyof T, [any, any]>>) => void | false    | A callback function that is called when props change. It receives the changed props as an argument. |
