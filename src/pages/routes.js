import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedIcon from "@mui/icons-material/Feed";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";

const routes = [
  {
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "News & Research",
    link: "/news",
    icon: <FeedIcon />,
  },
  {
    title: "Tools",
    link: "/engagement",
    icon: <ConstructionIcon />,
  },
  {
    title: "Scholarships & Grants",
    link: "/grants",
    icon: <SchoolIcon />,
  },
];

export default routes;
