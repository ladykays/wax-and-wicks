
// import React from "react";
// //import Navbar from "../components/navBar";
// //import Footer from "../components/footer";

// const products = [
//   {
//     id: 1,
//     name: "XXX candle",
//     imageSrc: "XXX",
//     imageAlt: "Photo of a XX",
//     price: "£7.99",
//   },
//   {
//     id: 2,
//     name: "XXX candle",
//     imageSrc: "XXX",
//     imageAlt: "Photo of a XX",
//     price: "£7.99",
//   },
//   {
//     id: 3,
//     name: "XXX candle",
//     imageSrc: "XXX",
//     imageAlt: "Photo of a XX",
//     price: "£7.99",
//   },
//   {
//     id: 4,
//     name: "XXX candle",
//     imageSrc: "XXX",
//     imageAlt: "Photo of a XX",
//     price: "£7.99",
//   },
//   {
//     id: 5,
//     name: "XXX candle",
//     imageSrc: "XXX",
//     imageAlt: "Photo of a XX",
//     price: "£7.99",
//   },
//   {
//     id: 6,
//     name: "XXX candle",
//     imageSrc: "XXX",
//     imageAlt: "Photo of a XX",
//     price: "£7.99",
//   },
// ];

// export default function Home() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Check out our candle range below
//           </h2>

//           <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (
//               <div key={product.id} className="group relative">
//                 <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
//                   <img
//                     src={product.imageSrc}
//                     alt={product.imageAlt}
//                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
//                       <a href={product.href}>
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {product.name}
//                       </a>
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {product.color}
//                     </p>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">
//                     {product.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//        {/* <Footer /> */}
//     </>
//   );
// }

// home.js
import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Container, Button } from '@mui/material';



const useStyles = makeStyles((theme) => ({
  headerRight: {
    backgroundColor: "orange",
    padding: theme.spacing(4),
    color: "white",
  },
  ourStory: {
    backgroundColor: "cream",
    padding: theme.spacing(4),
    textAlign: "center",
  },
  repeatHeader: {
    backgroundColor: "orange",
    padding: theme.spacing(4),
    color: "white",
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "white",
    color: "orange",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
        <img src="Image1.png" alt="example" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.headerRight}>
          <Typography variant="h4" gutterBottom>
            Thank you for choosing our candles
          </Typography>
          <Typography variant="body1">
            Here you will find a wide range of hand-poured candles that are made
            with care and love. Our candles are perfect for creating a relaxing
            ambiance in your home, or for setting the mood for a special occasion.
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.ourStory}>
        <Container>
          <Typography variant="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1">
            Our story text Here you will find a wide range of hand-poured candles
            that are made with care and love. Our candles are perfect for creating
            a relaxing ambiance in your home, or for setting the mood for a special
            occasion.
          </Typography>
        </Container>
      </div>
      <Grid container spacing={4} className={classes.repeatHeader}>
        <Grid item xs={12} md={6}>
        <img src="Image1.png" alt="example" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
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
    </div>
  );
}
