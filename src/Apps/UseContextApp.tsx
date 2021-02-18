import * as React from "react";
import { useRenderCount } from "../hooks";
import { Card } from "../Card";

type Theme = "light" | "dark";
interface ThemeContextState {
  theme?: Theme;
  setTheme?: Function;
}
const ThemeContext = React.createContext<ThemeContextState>({});

export const UseContextApp = () => {
  return (
    <ThemeWrapperApp>
      <Radios />
      <Status />
      <Card title="Child #1" size="large" enableRenderCount={true}>
        <Card title="Child #2" enableRenderCount={true}>
          <ChildWithContext />
        </Card>
      </Card>
    </ThemeWrapperApp>
  );
};

const Status = () => {
  const { theme } = React.useContext(ThemeContext);
  return <div className="status-bar">VALUE: {String(theme)}</div>;
};

const ThemeWrapperApp = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Radios = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <>
      <p>Click to toggle theme.</p>
      <p>
        The child cards indicate if they got rendered with a count specified in
        the top right corner. Child-N is the last child which renders because
        its part of the child which is actually consuming the context
      </p>

      <div>
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          onChange={(e) => setTheme?.(e?.target?.value as Theme)}
          checked={theme === "light"}
        />
        <label htmlFor="light">light</label>
      </div>
      <div>
        <input
          type="radio"
          id="dark"
          checked={theme === "dark"}
          name="theme"
          value="dark"
          onChange={(e) => setTheme?.(e?.target?.value as Theme)}
        />
        <label htmlFor="dark">dark</label>
      </div>
    </>
  );
};

const ChildWithContext = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <span>{theme}</span>
      <Card title="Child-N" size="mini" enableRenderCount={true}></Card>
    </>
  );
};
