import { createContext, useState, useContext } from 'react';
const StyleContext = createContext();

// 提供 Context 的 Provider 元件
export const StyleProvider = ({ children }) => {
  const [font, setFont] = useState('sans-serif');
  const [background, setBackground] = useState('#fff');

  return (
    <StyleContext.Provider value={{ font, setFont, background, setBackground }}>
      {children}
    </StyleContext.Provider>
  );
};

// 使用 Context 的自定 Hook
export const useStyleContext = () => {
  return useContext(StyleContext);
};
