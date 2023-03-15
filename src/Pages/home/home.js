import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Container, Button } from '@mui/material';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  headerRight: {
    backgroundColor: "#636D5C",
    padding: theme.spacing(4),
    textAlign: "center",
    color: "white",
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
  },
  ourStory: {
    backgroundColor: "#F2EBE1",
    padding: theme.spacing(4),
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    height: '544px',
    margin: '-64px 0 0 0',
  },
  repeatHeaderRight: {
    backgroundColor: "#A75A38",
    padding: theme.spacing(4),
    color: "white",
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    height: '720px',
    margin: '-64px 0 0 0',
  },
  repeatHeaderLeft: {
    backgroundColor: "#C0A385",
    padding: theme.spacing(4),
    color: "white",
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '720px',
    marginTop: 0,
  },
  testimonials: {
    backgroundColor: "#636D5C",
    padding: theme.spacing(4),
    color: "white",
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    height: '544px',
    margin: '-64px 0 0 0',
  },
  bestSeller: {
    backgroundColor: "#F2EBE1",
    
    padding: theme.spacing(4),
    textAlign: "center",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '1000px',
  },
  h2: {
    marginBottom: theme.spacing(4),
  },
  card: {
    width: 345,
    marginBottom: theme.spacing(4),
  },
  cardMedia: {
    height: 345,
  },
  cardButton: {
    backgroundColor: "orange !important",
    color: "white",
  },
}));
  
export default function Home() {
  const classes = useStyles();
  return (
    <div>
{/* cover section */}
<Grid container spacing={4} className={classes.headerRight} style={{height: '720px'}}>
          <Grid item xs={12} md={6}>
          <img src={require('../../assets/Image1.png')} alt="candle" className={classes.image}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
            Thank you for choosing our candles
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
        </Grid>





{/* Our Story section */}
      <div className={classes.ourStory}>
        <Container>
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
        </div>

{/* Luxury Thank You Gifts section */}
        <Grid container spacing={4} className={classes.repeatHeaderRight} style={{height: '720px'}}>
          <Grid item xs={12} md={6}>
          <img src="https://placehold.it/300x200" alt="candle" className={classes.image}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Luxury Thank You Gifts
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
        </Grid>
{/* House Warming Gifts section */}
        <Grid container spacing={4} className={classes.repeatHeaderLeft} style={{height: '720px'}}>
        <Grid item xs={12} md={6} order={2}>
            <img src="https://placehold.it/300x200" alt="candle" className={classes.image}/>
        </Grid>
        <Grid item xs={12} md={6} order={1}>
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
        </Grid>
        
 { /* Best Sellers section */}
 <div className={classes.bestSeller}>
        <Container>
          <Typography variant="h2" gutterBottom>
            Our Best Sellers
          </Typography>
          <Typography variant="body2">
              Our story text Here you will find a wide range of hand-poured candles
              that are made with care and love. Our candles are perfect for creating
              a relaxing ambiance in your home, or for setting the mood for a special
              occasion.
            </Typography>




            
            <Grid container spacing={2} className="grid grid-cols-3">
            <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://placehold.it/300x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Black Cherry Large Jar Candle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://placehold.it/300x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Black Cherry Large Jar Candle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://placehold.it/300x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Black Cherry Large Jar Candle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            </Grid>
     </Container>
</div>


{/* testimonials section */}
        <div className={classes.testimonials}>
            <Container>
            <Typography variant="h2" gutterBottom>
            Testimonial
            </Typography>
            <Typography variant="body1">
            "I am blown away by the quality and beauty of these candles. The scents are unique and carefully crafted, and the eco-friendly ingredients are appreciated. The personalized touch and attention to detail truly sets this shop apart. I will be purchasing more candles and recommending to others."
            </Typography>
            <Typography variant="h3" >
            - Sarah M.            
            </Typography>
            </Container>
            </div>   
      </div>
    );
  }
