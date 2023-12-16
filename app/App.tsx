import { useState } from "react";
import Component from "./components/Component";
import WithTraceUpdate from "./components/WithTraceUpdate";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <Component count={count} />
            <WithTraceUpdate count={count} />
        </div>
    );
}

export default App;
