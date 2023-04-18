// import area
import "./App.css";
import { useReducer } from "react";

let oldstate = 10;

let reducerFunction = (oldstate, action) => {
    console.log("oldstate---->", oldstate);
    console.log("action--->", action);
    console.log("action.type--->", action.type);

    switch (action.type) {
        case "ADDITION":
            return oldstate + 1;
            break;

        case "SUBTRACTION":
            return oldstate - 1;
            break;

        default:
            return oldstate;
            break;
    }
};
function App() {
    const [newstate, dispatch] = useReducer(reducerFunction, oldstate);
    return (
        <div className="App">
            <h1>{newstate}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "ADDITION", payload: 1 });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "SUBTRACTION", payload: 1 });
                }}
            >
                -
            </button>
        </div>
    );
}

export default App;
