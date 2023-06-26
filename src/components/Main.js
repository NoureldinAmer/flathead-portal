import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

function Main(props) {
  const { title } = props;

  const posts = [
    `
  # A New Approach to Startup Growth: The Venture Studio Model

  _June 23, 2023 by [Flathead Forge Team](/)_

  At Flathead Forge, we're reinventing the wheel when it comes to nurturing startups. We've taken the bold step of embracing the venture studio model, ensuring our startups have all the support they need to thrive. 

  So, what does this model mean for our startups?
  - **Comprehensive Support**: We're investing not just in capital, but also in mentorship, industry knowledge, strategic guidance, and operational support.
  - **Risk Mitigation**: By being involved in their management and growth, we're able to better safeguard our investments.
  - **Synergistic Growth**: With investments in interlinked companies, growth is enhanced and risks are reduced.
  
  Our model diversifies exposure across our portfolio of companies and offers investors attractive and leveraged returns. It's a win-win for all involved!
  `,
    `
  # The Future is Here: Industrial Water & Gas Tech

  _June 1, 2023 by [Flathead Forge Team](/)_

  At Flathead Forge, we're excited about the future – a future powered by cutting-edge industrial water and gas technologies. We're proud to specialize in this field and to support the talented entrepreneurs who are making strides in environment and sustainability.

  Our portfolio companies are driving transformative changes in the industry:
  - **Company A** is pioneering a new method of water purification.
  - **Company B** is developing an efficient way to capture and store carbon emissions.
  - **Company C** is harnessing the power of hydrogen for clean energy solutions.
  
  By investing in companies with common customers and complementary products, we're building a powerful and synergistic ecosystem. Stay tuned for more updates!
  `,
    `
  # Building a Brighter Future: Our Scholarship and Grant Programs

  _May 10, 2023 by [Flathead Forge Team](/)_

  At Flathead Forge, we're committed to fostering the next generation of innovators. We believe in the power of education and the potential of bright, dedicated minds. That's why we're proud to dedicate 25% of our carried interest to our grant and scholarship fund.

  Here's how we're making a difference:
  - **Scholarships**: We're funding promising students' education in fields that are integral to sustainability and energy transition.
  - **Grants**: We're providing financial support to innovative projects that can have a real impact on our environment.
  - **Mentorship**: We're giving the leaders of tomorrow the guidance they need to succeed today.
  
  Stay tuned for updates about our scholarship and grant recipients, and how to apply for our next funding cycle.
  `,
    `
  # Our Approach to Risk Management

  _January 12, 2023 by [Flathead Forge Team](/)_

  At Flathead Forge, risk management is a priority. Here's our three-step approach:

  1. **Portfolio Diversification**: We mitigate risk by diversifying our investments across various startups in the Industrial Water and Gas sectors.
  
  2. **Hands-On Involvement**: We stay actively involved in the strategic and operational development of our portfolio companies.
  
  3. **Strategic Partnerships**: We build synergies with experienced individuals and organizations to share risk and increase our reach.
  
  Stay tuned to learn more about our unique venture studio model.
  `,
  ];

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Markdown
          key={index}
          sx={{
            py: 3,
          }}
        >
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
