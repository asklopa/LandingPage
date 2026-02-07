import { Box, Typography, Button } from "@mui/material";

const Coffee = () => (
  <>
    {/* Hero Section */}
    <Box
      sx={{
        position: "relative",
        height: { xs: "auto", md: "85vh" },
        backgroundImage: `linear-gradient(rgba(96, 56, 9, 0.6), rgba(96, 56, 9, 0.6)), url(/Images/LargeCoffee.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-start",
        px: { xs: 3, md: 8 },
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 },
        color: "#fff",
        minHeight: { xs: "80vh", md: "85vh" },
      }}
    >
      {/* Text Content */}
      <Box
        textAlign="left"
        zIndex={2}
        sx={{
          maxWidth: { xs: "100%", md: "600px" },
          mb: { xs: "200px", md: 0 }, // space above images on mobile
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: { xs: "36px", md: "54px" },
            lineHeight: "100%",
          }}
        >
          Get a chance to have an
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: { xs: "36px", md: "54px" },
            lineHeight: "100%",
          }}
        >
          Amazing morning
        </Typography>
        <Typography
          variant="h6"
          sx={{
            my: 2,
            maxWidth: "500px",
            whiteSpace: "normal",
            lineHeight: 1.6,
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          We are giving you a one-time opportunity to experience a better life with coffee.
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            backgroundColor: "#F9C06A",
            color: "#1E1E1E",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.5, sm: 1 },
            fontSize: { xs: "12px", sm: "14px" },
            "&:hover": { backgroundColor: "#f5b84f" },
          }}
        >
          Order Now
        </Button>
      </Box>

      {/* Bottom Right Image */}
      <Box
        component="img"
        src="/Images/CoffeeWing.png"
        alt="Coffee"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: "150px", md: "400px" },
          height: "auto",
          zIndex: 1,
        }}
      />

      {/* Right Center Image */}
      <Box
        component="img"
        src="/Images/BigCupCoffee.png"
        alt="Right Side Coffee"
        sx={{
          position: "absolute",
          top: { xs: "auto", md: "50%" },
          bottom: { xs: "0", md: "auto" },
          right: { xs: "5%", md: "16%" },
          transform: { xs: "none", md: "translateY(-50%)" },
          width: { xs: "120px", md: "240px" },
          height: "auto",
          zIndex: 1,
        }}
      />
    </Box>
  </>
);

export default Coffee;
