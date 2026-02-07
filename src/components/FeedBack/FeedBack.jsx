import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FeedBack = () => (
  <Box sx={{ p: 5, pb: 15 }}>
    <Typography
      variant="h3"
      textAlign="center"
      sx={{
        color: '#603809',
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: '54px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    >
      Our coffee perfection feedback
    </Typography>

    <Typography
      variant="h6"
      textAlign="center"
      sx={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '34px',
        color: '#707070',
        mt: 2,
      }}
    >
      Our customers have amazing things to say about us
    </Typography>

    <Box
      sx={{
        width: '75%',
        bgcolor: '#FFF9F1',
        position: 'relative',
        margin: '40px auto 0 auto',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        boxSizing: 'border-box',
        minHeight: 250,
      }}
    >
      {/* Feedback Text */}
      <Typography sx={{ textAlign: 'center', lineHeight: 1.6 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....
      </Typography>

      {/* Customer Name */}
      <Typography sx={{ mt: 3, fontWeight: 700,fontSize: '20px', textAlign: 'center' }}>
        Jonny Thomas
      </Typography>

      {/* Customer Designation */}
      <Typography sx={{ mt: 2, fontWeight: 400, textAlign: 'center', color: '#707070' }}>
        Project Manager
      </Typography>

      {/* Left Arrow */}
      <IconButton
        sx={{
          position: 'absolute',
          left: -25, // moved a bit more out
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: '#F9C06A',
          borderRadius: 2,
          boxShadow: 2,
          width: 50, // bigger button
          height: 50, // bigger button
          '&:hover': { bgcolor: '#F9C06A' },
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: 20 }} /> {/* smaller icon */}
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        sx={{
          position: 'absolute',
          right: -25, // moved a bit more out
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: '#F9C06A',
          borderRadius: 2,
          boxShadow: 2,
          width: 50, // bigger button
          height: 50, // bigger button
          '&:hover': { bgcolor: '#F9C06A' },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 20 }} /> {/* smaller icon */}
      </IconButton>

      {/* Bottom center square image */}
      <Box
        component="img"
        src="/Images/BeanCoffee.jpg"
        alt="Small image"
        sx={{
          position: 'absolute',
          bottom: -40, // increased gap
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 60,
          borderRadius: 2,
          border: '3px solid #FFF9F1',
        }}
      />
    </Box>
  </Box>
);

export default FeedBack;
