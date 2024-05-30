import React, { useReducer } from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return {
                count: state.count>0? state.count - 1:state.count,
            };

        case "Increment":
            return {
                count: state.count<10? state.count + 1:state.count,
            };

        default:
            return state;
    }
};

export const Count = () => {
    const [state, dispatch] = useReducer(countReducer, {
        count: 0,
    });
    return (
        <div>
            <h1>Counter Number {state.count}</h1>
            <button className="button-style" onClick={() => dispatch({ type: "decrement" })}>
                -
            </button>
            <button className="button-style" onClick={() => dispatch({ type: "Increment" })}>
                +
            </button>
        </div>
    );
};
