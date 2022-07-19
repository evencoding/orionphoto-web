import { makeVar, ApolloClient, InMemoryCache } from "@apollo/client";

const DARK_MODE = "DARK_MODE";

export const darkModeVar = makeVar(
  localStorage.getItem(DARK_MODE)
    ? localStorage.getItem(DARK_MODE) === "enabled"
      ? true
      : false
    : false
);
export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};
export const disableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "abled");
  darkModeVar(false);
};

export const client = new ApolloClient({
  link: null,
  cache: new InMemoryCache(),
});
