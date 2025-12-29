## useContext / Context API

React Context lets you share data globally (like theme, user, language) without passing props at every level.

- Solves prop drilling.

### When should you use Context?

Use Context when:

- Many components need the same data
- Data is mostly global
    Examples:
        Auth user
        Theme (dark/light)
        Language
        App settings


### Context has 3 main parts

   1. `createContext` – create the context

   2. `Provider` – supply the data

   3. `useContext` – consume the data


#### Step 1:
createContext - Creates a global container.

```
    import { createContext } from 'react';

    export const ThemeContext = createContext();
```

#### Step 2:

Create provider - Provider wraps components and provides shared data.

```
    import { useState } from "react";
    import { ThemeContext } from "./ThemeContext";

    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState("light");

      const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

```

#### Step 3:
Wrap App with Provider - Now any child component can access the context.

```
    import { ThemeProvider } from "./ThemeProvider";

    function App() {
    return (
        <ThemeProvider>
        <Home />
        </ThemeProvider>
    );
    }

    export default App;
```

#### Step 4:
Consume Context (useContext)

```
    import { useContext } from "react";
    import { ThemeContext } from "./ThemeContext";

    const Dashboard = () => {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme, toggleTheme } = context;

    return (
        <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
    };

```
