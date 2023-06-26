import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeaturedPost";
import FeaturedPost from "../components/FeaturedPost";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { HeaderContext } from "../contexts/HeaderContext";

const sections = [
  { title: "Industrial Water Tech", url: "#/industrial-water-tech" },
  { title: "Industrial Gas Tech", url: "#/industrial-gas-tech" },
  { title: "Energy Transition", url: "#/energy-transition" },
  { title: "Startup Support", url: "#/startup-support" },
  { title: "Investment Models", url: "#/investment-models" },
  { title: "Scholarships & Grants", url: "#/scholarships-grants" },
  { title: "Venture Studio Model", url: "#/venture-studio-model" },
  { title: "Community Impact", url: "#/community-impact" },
  {
    title: "Co-Investment Opportunities",
    url: "#/co-investment-opportunities",
  },
  { title: "Engagement Tools", url: "#/engagement-tools" },
];

const mainFeaturedPost = {
  title: "Redefining Sustainability in the Energy Sector",
  description:
    "Uncover the evolving role of sustainability in the energy sector. We delve deep into how innovative technologies, emerging trends, and regulatory changes are reshaping our perspective on sustainable energy. Learn how organizations are integrating green initiatives into their core strategies to pave the way for a more sustainable future.",
  image: "https://source.unsplash.com/random?night-energy",
  imageText: "Sustainability in Energy",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title:
      "Embracing the Energy Transition: Opportunities in the Industrial Water Sector",
    date: "Jul 2",
    description:
      "As the global energy landscape shifts, the industrial water sector presents unique opportunities. Explore how the nexus of energy and water is creating new avenues for innovation and investment, and learn how these advancements are contributing to a more sustainable, efficient future.",
    image: "https://source.unsplash.com/random?industrial-water",
    imageLabel: "Industrial Water",
  },
  {
    title: "Promoting Sustainability through Industrial Processes",
    date: "Jun 18",
    description:
      "Learn about the latest trends in industrial processes aiming to reduce environmental impact and promote sustainability.",
    image: "https://source.unsplash.com/random?sustainability",
    imageLabel: "Sustainable Industrial Process",
  },
  {
    title:
      "The Future of Energy Transition: From Fossil Fuels to Renewable Sources",
    date: "Jun 24",
    description:
      "Explore the shift from traditional fossil fuels to renewable energy sources. Understand the challenges and opportunities that this transition presents for both established industries and innovative startups. This detailed overview covers technological advancements, regulatory impacts, and the vital role of sustainable initiatives in shaping our energy future.",
    image: "https://source.unsplash.com/random?renewable-energy",
    imageLabel: "Renewable Energy",
  },
  {
    title: "Harnessing Industrial Gases for a Greener Tomorrow",
    date: "Jun 30",
    description:
      "Industrial gases like Hydrogen and Nitrogen have a crucial role to play in achieving a sustainable, green future. This piece delves into how these gases can be harnessed more efficiently, and the technological breakthroughs making it possible. Learn about the exciting developments in this space and their potential impact on industries and the environment.",
    image: "https://source.unsplash.com/random?industrial-gases",
    imageLabel: "Industrial Gases",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2023", url: "#" },
    { title: "February 2023", url: "#" },
    { title: "January 2023", url: "#" },
    { title: "November 2022", url: "#" },
    { title: "October 2022", url: "#" },
    { title: "September 2021", url: "#" },
    { title: "August 2020", url: "#" },
    { title: "July 2020", url: "#" },
    { title: "June 2020", url: "#" },
    { title: "May 2020", url: "#" },
    { title: "April 2019", url: "#" },
  ],
  social: [
    { name: "LinkedIn", icon: LinkedInIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
    { name: "YouTube", icon: YouTubeIcon },
  ],
};

const theme = createTheme();

export default function NewsPage() {
  const { setCurrentHeader } = React.useContext(HeaderContext);

  React.useEffect(() => {
    document.title = "News & Research";
    setCurrentHeader("News & Research");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Recent Articles" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Flathead Forge Venture Studio"
        description="Building a synergistic ecosystem of innovation in sustainability and energy transition. Together, we create a lasting impact."
      />
    </ThemeProvider>
  );
}
