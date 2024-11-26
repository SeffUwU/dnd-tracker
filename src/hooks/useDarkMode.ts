import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

// TODO make pretty + fix
export default function useDarkMode() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorageState('_ui.darkMode', {
    defaultValue: false,
    storageSync: true,
  });

  useEffect(() => {
    const isCurrentDOMDark = Boolean(document.documentElement.classList.values().find((v) => v === 'dark'));

    if ((isDarkModeEnabled && !isCurrentDOMDark) || (!isDarkModeEnabled && isCurrentDOMDark)) {
      document.documentElement.classList.toggle('dark');
    }
  }, [isDarkModeEnabled]);

  return {
    toggleTheme: () => {
      setIsDarkModeEnabled((prev) => !prev);
    },
    isDarkModeEnabled,
  };
}
