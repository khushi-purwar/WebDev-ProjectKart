import ChatBox from "../Components/ChatApp/ChatBox";
import Dashboard from "../Components/Others/Dashboard";
import Layout from "../pages/Alumni/Layout";
import LayoutClg from "../pages/College/Layout";
import PageNotFound from "../pages/Alumni/PageNotFound";
import AllAlumniPage from "../pages/College/AllAlumniPage";
import LoginRegister from "../Components/Others/LoginRegister";
import Interface from "../pages/Interface";
import Events from "../Components/Others/Events";
import VideoApp from "../Components/Others/Video/VideoApp";
import { ContextProvider } from "../Components/Others/Video/Context";
import AllColleges from "../pages/Directorate/AllColleges";
import LayoutDirec from "../pages/Directorate/Layout";

const routes = [
  {
    path: "alumni",
    element: <Layout />,
    children: [
      { path: "", element: <Dashboard name="SAHIL" /> },

      { path: "dashboard", element: <Dashboard name="SAHIL" /> },
      { path: "chat", element: <ChatBox /> },
      { path: "events", element: <Events role={"alumni"} /> },
      {
        path: "videoCall",
        element: (
          <ContextProvider>
            <VideoApp />
          </ContextProvider>
        ),
      },
    ],
  },
  {
    path: "college",
    element: <LayoutDirec />,
    children: [
      { path: "", element: <Dashboard name="MITS" /> },

      { path: "dashboard", element: <Dashboard name="MITS" /> },
      { path: "chat", element: <ChatBox /> },
      { path: "AlumniList", element: <AllAlumniPage /> },
      { path: "events", element: <Events role={"college"} /> },
      { path: "allColleges", element: <AllColleges /> },

      {
        path: "videoCall",
        element: (
          <ContextProvider>
            <VideoApp />
          </ContextProvider>
        ),
      },
    ],
  },

  {
    path: "directorate",
    element: <LayoutClg />,
    children: [
      // { path: "", element: <Dashboard name="MITS" /> },

      { path: "dashboard", element: <Dashboard name="MITS" /> },
      { path: "chat", element: <ChatBox /> },
      { path: "AlumniList", element: <AllAlumniPage /> },
      { path: "events", element: <Events role={"college"} /> },
      { path: "allColleges", element: <AllColleges /> },

      {
        path: "videoCall",
        element: (
          <ContextProvider>
            <VideoApp />
          </ContextProvider>
        ),
      },
    ],
  },

  {
    path: "/",
    element: <Interface />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routes;
