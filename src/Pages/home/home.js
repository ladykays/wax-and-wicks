import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Container, Button } from '@mui/material';
import { Box } from '@mui/material';




const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },


  media: {
    height: 200,
  },
  bgCream: {
    backgroundColor: '#F2EBE1',
  },
  bgGreen: {
    backgroundColor: '#636D5C',
  },
  bgOrange: {
    backgroundColor: '#A75A38',
  },
  bgTan: {
    backgroundColor: '#C0A385',
  },
  LButton: {
    backgroundColor: "#C0A385 !important",
    color: "white",
  },

}));

function HomePage() {
    const classes = useStyles();
  
    return (
      <div>
{/* Heading Section */}
    {/* Creates a box container from MUI. it sets the background colour and width. */}
        <Box sx={{ backgroundColor: '#636D5C', width: '100%' }}>
    {/* component limits the maximum width of the content inside this section. */}
             <Container maxWidth="lg" className={`${classes.section} ${classes.bgGreen}`}>
                <Grid container spacing={4} alignItems="center">
    {/* this creates a grid so that i can contain the image and text. */}
                <Grid item xs={12} md={6}>
                    <img src={require('../../assets/Image1.png')} alt="candle" className={classes.image}/>
                </Grid>
                <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
                    <Typography variant="h1" gutterBottom>
                    Thank you for choosing our candles
                    </Typography>
                    <Typography variant="body1">
                    Here you will find a wide range of hand-poured candles that are made
                    with care and love. Our candles are perfect for creating a relaxing
                    ambiance in your home, or for setting the mood for a special occasion.
                    </Typography>
        {/* this is for the button that links to the shop */}
                    <Button variant="contained"  href="/shop" className={`${classes.button}`}>
                    Shop Now
                    </Button>
                </Grid>
                </Grid>
            </Container>
        </Box>
        
{/* Our Story */}
        <Box sx={{ backgroundColor: '#F2EBE1', width: '100%' }}>
            <Container maxWidth="lg" className={`${classes.section} ${classes.bgCream}`}>
                <Typography variant="h2" gutterBottom>
                    Our Story
                </Typography>
                <Typography variant="body2">
                    Our story text Here you will find a wide range of hand-poured candles
                    that are made with care and love. Our candles are perfect for creating
                    a relaxing ambiance in your home, or for setting the mood for a special
                    occasion.
                </Typography>
                <Button variant="contained" className={classes.button} href="/shop">
                    Shop Now
                </Button>
            </Container>
        </Box>

  {/* House Gifts */}
  <Box sx={{ backgroundColor: '#C0A385', width: '100%' }}>
            <Container maxWidth="lg" className={`${classes.section} ${classes.bgTan}`}>
                <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6} style={{ textAlign: 'right' }}>
                    <Typography variant="h2" gutterBottom>
                    House Warming Gifts
                    </Typography>
                    <Typography variant="body1">
                    Here you will find a wide range of hand-poured candles that are made
                    with care and love. Our candles are perfect for creating a relaxing
                    ambiance in your home, or for setting the mood for a special occasion.
                    </Typography>
                    <Button variant="contained" className={classes.button} href="/shop">
                    Shop Now
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require('../../assets/images/Image2.png')} alt="candle" className={classes.image}/>
                </Grid>
                </Grid>
            </Container>
        </Box>

{/* luxury Gifts */}
        <Box sx={{ backgroundColor: '#A75A38', width: '100%' }}>
            <Container maxWidth="lg" className={`${classes.section} ${classes.bgOrange}`}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={6}>
                <img src={require('../../assets/Image1.png')} alt="candle" className={classes.image}/>
                </Grid>
                <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
                <Typography variant="h2" gutterBottom>
                    Luxury Thank You Gifts
                </Typography>
                <Typography variant="body1">
                    Here you will find a wide range of hand-poured candles that are made
                    with care and love. Our candles are perfect for creating a relaxing
                    ambiance in your home, or for setting the mood for a special occasion.
                </Typography>
                <Button variant="contained" className={classes.LButton} href="/shop">
                    Shop Now
                </Button>
                </Grid>
            </Grid>
            </Container>
        </Box>


        
{/* Testimonial */}
        <Box sx={{ backgroundColor: '#F2EBE1', width: '100%' }}>
            <Container maxWidth="lg" className={`${classes.section} ${classes.bgCream}`}>
            <Typography variant="h2" align="center" >
                Testimonial
            </Typography>
            <Typography variant="body2" gutterBottom align="center">
                “I am blown away by the quality and beauty of these candles. The scents are unique and carefully crafted, and the eco-friendly ingredients are appreciated. The personalized touch and attention to detail truly sets this shop apart. I will be purchasing more candles and recommending to others.”
            </Typography>
            <Typography variant="h3">
                - Sarah M.      
            </Typography>
            </Container>
        </Box>
      </div>
    );
  }
  
  export default HomePage;

