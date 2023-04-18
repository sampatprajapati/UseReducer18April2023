// import area
import "./App.css";
import { useReducer } from "react";
// here we are using an object oldstate is now a object  so you have to spread the oldstate now and then you can perform your action on this.
let oldstate = {
    value: 5,
};

// function defiantion area
let reducerFunction = (oldstate, action) => {
    console.log("oldstate---->", oldstate);
    console.log("action--->", action);
    console.log("action.type--->", action.type);

    switch (action.type) {
        case "ADDITION":
            return { ...oldstate, value: oldstate.value + action.payload };
            break;

        case "SUBTRACTION":
            return { ...oldstate, value: oldstate.value - action.payload };
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
            <h1>{newstate.value}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "ADDITION", payload: 5 });
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
// export area
export default App;
