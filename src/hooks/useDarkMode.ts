export default function useDarkMode() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return { toggleTheme };
}
