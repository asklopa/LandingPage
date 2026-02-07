import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const MenuCard = ({ img, name, price, percent }) => (
  <Card 
    sx={{ maxWidth: 280, backgroundColor: "#FFF9EC" }} 
    elevation={0} // removes the shadow
  >
    <CardMedia component="img" height="180" image={img} />
    <CardContent sx={{ textAlign: "center" }}>
      <Typography 
        variant="h5" 
        sx={{ fontWeight: "bold", mb: 0.5 }} // bigger and bold
      >
        {name}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ fontWeight: 300, mb: 0.5 }} // thin text
      >
        {percent}
      </Typography>
      <Typography 
        color="primary" 
        sx={{ fontWeight: 300, mb: 1 }} // thin text
      >
        ₹{price}
      </Typography>
      <Button 
        variant="contained" 
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          backgroundColor: "#F9C06A",
          px: 3,
          display: "block",
          margin: "0 auto" // center the button
        }}
      >
        Order Now
      </Button>
    </CardContent>
  </Card>
);

export default MenuCard;
