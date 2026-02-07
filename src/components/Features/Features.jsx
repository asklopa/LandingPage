import { Box, Grid, Typography, Button } from "@mui/material";
import FeaturesCard from "./FeaturesCard";

const items = [
  { name: "Supreme Beans", percent: "Beans that provides great taste", price: 199, img: "/Images/CoffeeBeans.png" },
  { name: "Supreme Beans", percent: "Beans that provides great taste", price: 199, img: "/Images/Badge.png" },
  { name: "Supreme Beans", percent: "Beans that provides great taste", price: 199, img: "/Images/coffee-cup.png" },
  { name: "Supreme Beans", percent: "Beans that provides great taste", price: 199, img: "/Images/bestprice.png" }
];

const Features = () => (
  <Box sx={{ p: 5, position: "relative" }}>
    {/* Heading with decorative image on the right */}
    <Box sx={{ position: "relative", display: "inline-block", width: "100%", textAlign: "center", mb: 2 }}>
      <Typography
        variant="h3"
        sx={{
          color: '#603809',
          display: 'inline-block',
          position: 'relative',
          zIndex: 1,
          fontFamily: 'Playfair Display',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '54px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
      >
        Why are we different?
      </Typography>
      {/* Right side decorative image */}
      <Box
        component="img"
        src="/Images/Wing.png"
        alt="Decorative wing"
        sx={{
          width: { xs: 100, md: 200 }, // smaller on mobile
          height: 'auto',               // keeps aspect ratio
          position: "absolute",
          top: { xs: -50, md: -100 },   // adjusts top for smaller screens
          right: { xs: -20, md: -44 },    // align to right side responsively
          transform: { xs: 'rotate(-180deg)', md: 'rotate(-180deg)' },
          opacity: 1,
          display: { xs: "none", md: "block" },
          zIndex: 0
        }}
      />
    </Box>

    <Typography
      variant="h6"
      textAlign="center"
      sx={{ fontSize: "1rem", color: "#707070" }}
    >
      We don’t just make your coffee, we make your day!
    </Typography>

    <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
      {items.map((i, idx) => (
        <Grid item key={idx}><FeaturesCard {...i} /></Grid>
      ))}
    </Grid>

    <Typography
      variant="h6"
      textAlign="center"
      sx={{ fontSize: "1rem", color: "#707070", marginTop: "40px" }}
    >
      Great ideas start with great coffee, Lets help you achieve that
    </Typography>

    <Typography variant="h5" textAlign="center" sx={{ color: '#603809', marginTop: "4px" }}>
      Get started today.
    </Typography>

    {/* Join Us button with more spacing below */}
    <Button
      variant="contained"
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        backgroundColor: "#F9C06A",
        px: 3,
        display: "block",
        margin: "20px auto 0 auto", // Top margin added to move it down
      }}
    >
      Join Us
    </Button>
  </Box>
);

export default Features;
