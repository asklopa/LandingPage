import { Box, Typography, Button, TextField } from "@mui/material";

const Footer = () => (
  <>
    {/* ===== SUBSCRIBE SECTION ===== */}
    <Box
      sx={{
        minHeight: { xs: "auto", md: "40vh" },
        py: { xs: 6, md: 10 },
        backgroundImage: `linear-gradient(rgba(96, 56, 9, 0.6), rgba(96, 56, 9, 0.6)), url(/Images/LargeCoffee.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 8 },
        color: "#fff",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: { xs: "32px", sm: "40px", md: "54px" },
          mb: 2,
        }}
      >
        Subscribe to get the Latest News
      </Typography>

      <Typography
        sx={{
          fontFamily: "Playfair Display, serif",
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          lineHeight: "34px",
          mb: 4,
        }}
      >
        Don’t miss out on our latest news, updates, tips and special offers
      </Typography>

      {/* Input + Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          maxWidth: "640px",
          mx: "auto",
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter your mail"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "50px",
              backgroundColor: "#FFF9F1",
              "& fieldset": { border: "none" },
            },
          }}
        />
        <Button
          sx={{
            height: "50px",
            backgroundColor: "#F9C06A",
            fontWeight: "bold",
            px: 4,
            "&:hover": { backgroundColor: "#F9C06A" },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>

    {/* ===== FOOTER SECTION ===== */}
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(68, 40, 8, 0.9), rgba(68, 40, 8, 0.9)), url(/Images/Footer.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        color: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Brand */}
        <Box sx={{ flex: "1 1 250px" }}>
          <Typography
            sx={{
              fontFamily: "Clicker Script, cursive",
              fontSize: "54px",
              mb: 2,
            }}
          >
            BeanScene
          </Typography>
          <Typography sx={{ fontSize: "14px", lineHeight: "22px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </Box>

        {/* About */}
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "26px", mb: 2 }}>
            About
          </Typography>
          {["Menu", "Features", "News & Blogs", "Help & Supports"].map(item => (
            <Typography key={item} sx={{ fontSize: "18px", lineHeight: "42px" }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Company */}
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "26px", mb: 2 }}>
            Company
          </Typography>
          {["How we work", "Terms of service", "Pricing", "FAQ"].map(item => (
            <Typography key={item} sx={{ fontSize: "18px", lineHeight: "42px" }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Contact */}
        <Box sx={{ flex: "1 1 250px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "26px", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: "18px", lineHeight: "32px" }}>
            Akshya Nagar 1st Block, Bangalore-560016
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>+1202-918-2132</Typography>
          <Typography sx={{ fontSize: "18px" }}>beanscene@mail.com</Typography>
          <Typography sx={{ fontSize: "18px" }}>www.beanscene.com</Typography>
        </Box>
      </Box>
    </Box>
  </>
);

export default Footer;
