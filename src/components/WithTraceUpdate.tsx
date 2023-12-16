import withTraceUpdate from "../lib/withTraceUpdate";

export interface WithTraceUpdateProps {
    count: number;
}

const WithTraceUpdate = withTraceUpdate<WithTraceUpdateProps>(({ count }) => (
    <div>{count}</div>
));

export default WithTraceUpdate;
