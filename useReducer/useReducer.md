## useReducer

The `useReducer` Hook is similar to the useState Hook.

### Bacic syntax :

``` 
    const [state, dispatch] = useReducer(reducer, initialState);
```

### When to use useReducer :

    - Complex state
        Example : state management during data fetching (loading, success, error).
    - Multiple related values
    - Predictable state updates
    - Redux-like logic inside component

### Core Parts :

 1. State – current state value
 2. Action – object describing what to do
 3. Reducer – function that updates state
 4. Dispatch – sends actions to reducer

### Reducer function :

```
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
            return { count: state.count + 1 };

            case "decrement":
            return { count: state.count - 1 };

            default:
            return state;
        }
    };
```

### InitialState :

```
    const initialState = { count: 0 };
```

### Action State :

```
    import { useReducer } from "react";

    const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        <p>Count: {state.count}</p>

        <button onClick={() => dispatch({ type: "increment" })}>
            +
        </button>

        <button onClick={() => dispatch({ type: "decrement" })}>
            -
        </button>
        </>
    );
    };
```
