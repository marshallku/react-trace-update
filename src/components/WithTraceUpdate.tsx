import withTraceUpdate from "../lib/withTraceUpdate";

export interface WithTraceUpdateProps {
    count: number;
}

const WithTraceUpdate = withTraceUpdate<WithTraceUpdateProps>(
    ({ count }) => <div>{count}</div>,
    {
        onUpdate(props) {
            console.log("WithTraceUpdate props updated", props);
        },
    }
);

export default WithTraceUpdate;
