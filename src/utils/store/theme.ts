import { createStore, createEvent, sample } from "effector"
import { ThemeMode } from "../types"

const THEME_LS_KEY = "theme_mode";

const loadTheme = (): ThemeMode => {
  try {
    const raw = localStorage.getItem(THEME_LS_KEY);
    return raw === 'light' || raw === 'dark' ? raw : 'light';
  } catch {
    return 'light';
  }
};

export const $themeMode = createStore<ThemeMode>(loadTheme());

$themeMode.updates.watch(theme => {
  localStorage.setItem(THEME_LS_KEY, theme);
});

export const changeThemeModeEv = createEvent()

sample({
    clock: changeThemeModeEv,
    source: $themeMode,
    fn: (theme) => theme === 'light' ? 'dark' : 'light',
    target: $themeMode,
})

