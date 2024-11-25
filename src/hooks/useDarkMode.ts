import { useEffect, useState } from 'react';

// TODO make prettty + fix
export default function useDarkMode() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const toggleTheme = (keepLocalStorage?: boolean) => {
    document.documentElement.classList.toggle('dark');
    if (keepLocalStorage) {
      return;
    }
    const current = localStorage.getItem('_ui.darkMode');
    localStorage.setItem('_ui.darkMode', current ? '' : 'true');
    setIsDarkModeEnabled((prev) => !prev);
  };

  useEffect(() => {
    const darkModeValue = localStorage.getItem('_ui.darkMode') as 'true' | undefined;
    if (darkModeValue && document.documentElement.classList.values().find((v) => v === 'dark')) {
      toggleTheme(true);
      setIsDarkModeEnabled(true);
    }
  }, []);

  return { toggleTheme, isDarkModeEnabled };
}
