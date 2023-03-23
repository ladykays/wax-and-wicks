import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";

export default function Review(props) {
  const { basketItems, getTotalBasketAmt } = React.useContext(ShopContext);
  const totalAmt = getTotalBasketAmt();

  const basketContent = products
    .filter((product) => basketItems[product.id] !== 0)
    .map((product) => ({ ...product, quantity: basketItems[product.id] }));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {basketContent.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={`${product.name} (${product.quantity})`} />
            <Typography variant="subtitle1">£{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            £{totalAmt}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} /*  sm={6} */>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Address
          </Typography>
          <Typography gutterBottom>
            {props.address.firstName} {props.address.lastName}
          </Typography>
          <Typography gutterBottom>{props.address.address1}</Typography>
          {props.address.address2 && (
            <Typography>{props.address.address2}</Typography>
          )}
          <Typography>
            {props.address.city}, {props.address.state} {props.address.zip}
          </Typography>
          <Typography>{props.address.country}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
