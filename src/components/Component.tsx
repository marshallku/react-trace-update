import { useTraceUpdate } from "..";

export interface ComponentProps {
    count: number;
}

export default function Component(props: ComponentProps) {
    useTraceUpdate(props);
    return <div>{props.count}</div>;
}
