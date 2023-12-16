"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export interface UseTraceUpdateOptions<T> {
    onUpdate?(changedProps: Partial<Record<keyof T, [any, any]>>): void;
}

export default function useTraceUpdate<
    T extends Record<string, any> = Record<string, any>
>(props: T, { onUpdate }: UseTraceUpdateOptions<T> = {}) {
    const prev = useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            if (prev.current[k] !== v) {
                ps[k as keyof typeof ps] = [prev.current[k], v];
            }
            return ps;
        }, {} as Partial<Record<keyof T, [any, any]>>);

        if (Object.keys(changedProps).length > 0) {
            if (onUpdate) {
                onUpdate(changedProps);
            } else {
                // eslint-disable-next-line no-console
                console.log("Changed props:", changedProps);
            }
        }
        prev.current = props;
    });
}
