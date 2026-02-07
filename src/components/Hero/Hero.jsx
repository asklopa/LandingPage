import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";

const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            {/* Logo */}
            <Typography
              sx={{
                fontFamily: "'Clicker Script', cursive",
                fontWeight: 400,
                fontSize: { xs: "24px", sm: "35px" },
                color: "#fff",
              }}
            >
              Bean Scene
            </Typography>

            {/* Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 6,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {["Home", "Menu", "About Us", "Contact Us"].map((item) => (
                <Button
                  key={item}
                  disableRipple
                  sx={{ textTransform: "none", padding: 0, minWidth: "auto" }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#fff",
                    }}
                  >
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>

            {/* Auth Buttons */}
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 } }}>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontFamily: "Playfair Display",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: { xs: "2px 6px", sm: "6px 12px" },
                }}
              >
                Sign In
              </Button>
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
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: "url(/Images/BeanCoffee.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              color: "#fff",
              maxWidth: { xs: "90%", sm: "600px" },
              mt: { xs: 5, sm: 10, md: 15 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "14px", sm: "18px", md: "22px" },
                mb: 2,
              }}
            >
              We've got your morning covered with
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Clicker Script", cursive',
                fontWeight: 400,
                lineHeight: 1,
                fontSize: "clamp(40px, 12vw, 200px)",
              }}
            >
              Coffee
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
                lineHeight: { xs: "22px", sm: "28px", md: "34px" },
                mt: 2,
                mb: 3,
              }}
            >
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
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
        </Container>
      </Box>
    </>
  );
};

export default Hero;
