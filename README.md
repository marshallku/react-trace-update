# react-trace-update

Tracing prop updates in a React component

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
