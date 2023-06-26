import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Paragraph } from "./Typography";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" },
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>Scholarships & Grants</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={1}>
                Scholarship/Grant Name
              </TableCell>
              <TableCell sx={{ px: 3 }} align="center" colSpan={1}>
                Contact Name
              </TableCell>
              <TableCell sx={{ px: 3 }} align="center" colSpan={1}>
                Scholarship/Grant Name
              </TableCell>
              <TableCell sx={{ px: 3 }} align="center" colSpan={1}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {scholarshipList.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell
                  align="left"
                  colSpan={1}
                  sx={{ paddingLeft: 3, textTransform: "capitalize" }}
                >
                  {row.scholarshipName}
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={1}
                  sx={{ px: 0, textTransform: "capitalize" }}
                >
                  {row.contactName}
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={1}
                  sx={{ px: 0, textTransform: "capitalize" }}
                >
                  {row.contactEmail}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="center" colSpan={1}>
                  {(() => {
                    if (row.status === "Open") {
                      return <Small bgcolor={bgPrimary}>{row.status}</Small>;
                    } else if (row.status === "Pending") {
                      return <Small bgcolor={bgSecondary}>{row.status}</Small>;
                    } else if (row.status === "Closed") {
                      return <Small bgcolor={bgError}>{row.status}</Small>;
                    } else {
                      return <Small bgcolor={bgError}>No status</Small>;
                    }
                  })()}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const scholarshipList = [
  {
    imgUrl: "/assets/images/scholarships/energy-transition.jpg",
    scholarshipName: "Energy Transition Fellowship",
    status: "Open",
    contactName: "John Doe",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/sustainability-award.jpg",
    scholarshipName: "Sustainability Award",
    status: "Closed",
    contactName: "Jane Smith",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/industrial-water-grant.jpg",
    scholarshipName: "Industrial Water Innovation Grant",
    status: "Open",
    contactName: "David Johnson",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/industrial-gas-award.jpg",
    scholarshipName: "Industrial Gas Technology Award",
    status: "Pending",
    contactName: "Emily Williams",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/hydrogen-heroes-fellowship.jpg",
    scholarshipName: "Hydrogen Heroes Fellowship",
    status: "Open",
    contactName: "Michael Brown",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/clean-energy-scholarship.jpg",
    scholarshipName: "Clean Energy Scholarship",
    status: "Closed",
    contactName: "Sarah Davis",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/nextgen-innovators-award.jpg",
    scholarshipName: "NextGen Innovators Award",
    status: "Pending",
    contactName: "Robert Miller",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/sustainability-leaders-fellowship.jpg",
    scholarshipName: "Sustainability Leaders Fellowship",
    status: "Open",
    contactName: "Mary Wilson",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/energy-transition.jpg",
    scholarshipName: "Energy Transition Fellowship",
    status: "Open",
    contactName: "John Doe",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/sustainability-award.jpg",
    scholarshipName: "Sustainability Award",
    status: "Closed",
    contactName: "Jane Smith",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/industrial-water-grant.jpg",
    scholarshipName: "Industrial Water Innovation Grant",
    status: "Open",
    contactName: "David Johnson",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/industrial-gas-award.jpg",
    scholarshipName: "Industrial Gas Technology Award",
    status: "Pending",
    contactName: "Emily Williams",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/hydrogen-heroes-fellowship.jpg",
    scholarshipName: "Hydrogen Heroes Fellowship",
    status: "Open",
    contactName: "Michael Brown",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/clean-energy-scholarship.jpg",
    scholarshipName: "Clean Energy Scholarship",
    status: "Closed",
    contactName: "Sarah Davis",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/nextgen-innovators-award.jpg",
    scholarshipName: "NextGen Innovators Award",
    status: "Pending",
    contactName: "Robert Miller",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/sustainability-leaders-fellowship.jpg",
    scholarshipName: "Sustainability Leaders Fellowship",
    status: "Open",
    contactName: "Mary Wilson",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/energy-transition.jpg",
    scholarshipName: "Energy Transition Fellowship",
    status: "Open",
    contactName: "John Doe",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/sustainability-award.jpg",
    scholarshipName: "Sustainability Award",
    status: "Closed",
    contactName: "Jane Smith",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/industrial-water-grant.jpg",
    scholarshipName: "Industrial Water Innovation Grant",
    status: "Open",
    contactName: "David Johnson",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/industrial-gas-award.jpg",
    scholarshipName: "Industrial Gas Technology Award",
    status: "Pending",
    contactName: "Emily Williams",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/hydrogen-heroes-fellowship.jpg",
    scholarshipName: "Hydrogen Heroes Fellowship",
    status: "Open",
    contactName: "Michael Brown",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/clean-energy-scholarship.jpg",
    scholarshipName: "Clean Energy Scholarship",
    status: "Closed",
    contactName: "Sarah Davis",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/nextgen-innovators-award.jpg",
    scholarshipName: "NextGen Innovators Award",
    status: "Pending",
    contactName: "Robert Miller",
    contactEmail: "scholarships@flatheadforge.com",
  },
  {
    imgUrl: "/assets/images/scholarships/sustainability-leaders-fellowship.jpg",
    scholarshipName: "Sustainability Leaders Fellowship",
    status: "Open",
    contactName: "Mary Wilson",
    contactEmail: "scholarships@flatheadforge.com",
  },
];

export default TopSellingTable;
