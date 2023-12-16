import { useTraceUpdate } from "..";

export interface ComponentProps {
    count: number;
}

export default function Component(props: ComponentProps) {
    useTraceUpdate(props, {
        onUpdate(props) {
            console.log("Component props updated", props);
        },
    });
    return <div>{props.count}</div>;
}
