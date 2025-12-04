import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("app", "routes/app.tsx"),
  route("tryout", "routes/tryout.tsx"),
  route("paket", "routes/paket.tsx"),
  route("", "routes/_dashboard.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    route("dashboard/materi", "routes/dashboard/materi.tsx"),
    route("dashboard/materi/addmateri", "routes/dashboard/addmateri.tsx"),
  ]),

  route("materi", "pages/MateriPages.tsx"),
] satisfies RouteConfig;
