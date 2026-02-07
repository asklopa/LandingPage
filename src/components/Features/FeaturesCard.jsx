import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const FeaturesCard = ({ img, name, price, percent }) => (
  <Card
    sx={{
      maxWidth: 280,
      boxShadow: "none",
      backgroundColor: "#FFF8E1",
    }}
  >
    <CardMedia
      component="img"
      image={img}
      alt={name}
      sx={{
        width: "80px",
        height: "60px",
        objectFit: "contain",
        margin: "5px auto",      // gap kam kiya
        borderRadius: "8px",
      }}
    />
    <CardContent sx={{ textAlign: "center", paddingTop: "8px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ whiteSpace: "normal", wordBreak: "break-word", mt: 1 }}
      >
        {percent}
      </Typography>
    </CardContent>
  </Card>
);

export default FeaturesCard;
