import { Box, Typography, Button } from "@mui/material";

const About = () => (
  <Box
    sx={{
      minHeight: "85vh",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      px: { xs: 2, md: 8 },
      gap: { xs: 4, md: 0 },
    }}
  >
    {/* Left Side */}
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        alignSelf: { md: "flex-start" }, // 👈 top align on md
        mt: { md: 8 }, // 👈 gap from top
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: "#603809",
          mt: { xs: 0, md: 2 }, // 👈 extra breathing space
        }}
      >
        Discover the best Coffee
      </Typography>

      <Typography
        sx={{
          mt: 2,
          color: "text.secondary",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "34px",
          letterSpacing: "0%",
        }}
      >
        Bean Scene is a coffee shop that provides you with quality coffee
        that helps boost your productivity and helps build your mood.
        Having a cup of coffee is good, but having a cup of real coffee is
        greater. There is no doubt that you will enjoy this coffee more
        than others you have ever tasted.
      </Typography>

      <Button
        variant="contained"
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          backgroundColor: "#F9C06A",
          color: "#1E1E1E",
          px: 3,
          mt: 3,
          "&:hover": {
            backgroundColor: "#f1b854",
          },
        }}
      >
        Learn More
      </Button>

      {/* Decorative Image */}
      <Box
        sx={{
          position: "relative",
          mt: 4,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          component="img"
          src="/Images/Wing.png"
          alt="Decorative wing"
          sx={{
            width: 300,
            height: "auto",
            position: "absolute",
            left: -80,
            transform: "skewY(-8deg)",
          }}
        />
      </Box>
    </Box>

    {/* Right Side Image */}
    <Box
      sx={{
        width: { xs: "100%", md: "45%" },
        height: { xs: 250, md: 400 },
        backgroundImage: `url(/Images/CupCoffee.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
      }}
    />
  </Box>
);

export default About;
