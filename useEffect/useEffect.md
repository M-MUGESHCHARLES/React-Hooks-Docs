## useEffect

The `useEffect` Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.
```
 useEffect(<function>, <dependency>)
```
1. No dependency passed:

```
    useEffect(() => {
        //Runs on every render
      });
```

1. An empty array:

```
   useEffect(() => {
       //Runs only on the first render
    }, []);
```

1. Props or state values:

```
    useEffect(() => {
        //Runs on the first render
         //And any time any dependency value changes
    }, [prop, state]);
```
