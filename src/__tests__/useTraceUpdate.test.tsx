import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { useTraceUpdate } from "..";

const TestComponent = (props: { name: string; age: number }) => {
    useTraceUpdate(props, {
        onUpdate(changedProps) {
            console.log("TestComponent props updated", changedProps);
        },
    });
    return null;
};

describe("useTraceUpdate", () => {
    const consoleMock = vi
        .spyOn(console, "log")
        .mockImplementation(() => undefined);

    it("should log changed props", () => {
        const props = { name: "John", age: 25 };
        const updatedProps = { name: "John", age: 26 };
        const { rerender } = render(<TestComponent {...props} />);
        rerender(<TestComponent {...updatedProps} />);
        expect(consoleMock).toHaveBeenCalledWith(
            "TestComponent props updated",
            { age: [props.age, updatedProps.age] }
        );
    });
});
