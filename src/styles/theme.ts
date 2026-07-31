export type ThemeMode = 'light' | 'dark' | 'system';

const THEME_KEY = 'aurora-theme';

export function getTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  return (localStorage.getItem(THEME_KEY) as ThemeMode) || 'system';
}

export function applyTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  let isDark = false;

  if (theme === 'system') {
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    isDark = theme === 'dark';
  }

  if (isDark) {
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  }
}

export function setTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

export function initTheme() {
  if (typeof window === 'undefined') return;

  // Initial apply
  applyTheme(getTheme());

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemChange = () => {
    if (getTheme() === 'system') {
      applyTheme('system');
    }
  };

  // Remove listener if already added (safety)
  mediaQuery.removeEventListener('change', handleSystemChange);
  mediaQuery.addEventListener('change', handleSystemChange);
}
