import Home from "../components/Home";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Home />,
    hiddin: true,
    private: false,
  },
  {
    id: 2,
    title: "Categories",
    path: "/categories",
    Element: <Home />,
    hiddin: true,
    private: false,
  },
  {
    id: 3,
    title: "My Collections",
    path: "/mycollections",
    Element: <Home />,
    hiddin: true,
    private: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    Element: <Home />,
    hiddin: true,
    private: false,
  },
  {
    id: 5,
    title: "Login",
    path: "/login",
    Element: <Home />,
    hiddin: false,
    private: false,
  },
  {
    id: 6,
    title: "Sign up",
    path: "/signup",
    Element: <Home />,
    hiddin: false,
    private: false,
  },
];
