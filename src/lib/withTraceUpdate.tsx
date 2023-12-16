import { ComponentType, forwardRef } from "react";
import useTraceUpdate, { UseTraceUpdateOptions } from "./useTraceUpdate";

export default function withTraceUpdate<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends Record<string, any> = Record<string, any>
>(Component: ComponentType<T>, options?: UseTraceUpdateOptions<T>) {
    const WithTraceUpdate = forwardRef<ComponentType<T>, T>((props, ref) => {
        useTraceUpdate(props, options);
        return <Component {...props} ref={ref} />;
    });

    const name = Component.displayName || Component.name || "Unknown";
    WithTraceUpdate.displayName = `WithTraceUpdate(${name})`;

    return WithTraceUpdate;
}
