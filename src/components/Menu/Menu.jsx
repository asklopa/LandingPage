import { Box, Grid, Typography } from "@mui/material";
import MenuCard from "./MenuCard";

const items = [
  { name: "Cappuccino", percent: "Coffee 50% | Milk 50%", price: 199, img: "/Images/Cappucino.jpg" },
  { name: "Cappuccino", percent: "Coffee 50% | Milk 50%", price: 199, img: "/Images/ChaiLatte.jpg" },
  { name: "Cappuccino", percent: "Coffee 50% | Milk 50%", price: 199, img: "/Images/Macchiato.jpg" },
  { name: "Cappuccino", percent: "Coffee 50% | Milk 50%", price: 199, img: "/Images/Expresso.jpg" }
];

const Menu = () => (
  <Box sx={{ p: 5 }}>
    <Typography
      variant="h3"
      textAlign="center"
      sx={{ color: '#603809', fontWeight: '700' }}
    >
      Enjoy a new blend of coffee style
    </Typography>

    <Typography
      variant="h6"
      textAlign="center"
      sx={{ fontSize: "1rem", color: "#707070", mt: 2 }}
    >
      Explore all flavours of coffee with us. There is always a new cup worth experiencing
    </Typography>

    <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
      {items.map((i, idx) => (
        <Grid item key={idx}><MenuCard {...i} /></Grid>
      ))}
    </Grid>
  </Box>
);

export default Menu;
