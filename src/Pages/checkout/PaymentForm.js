import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// function for payment form
export default function PaymentForm({ setPayment }) {
  const [payment, setPaymentState] = React.useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    rememberCard: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentState({
      ...payment,
      [name]: value,
    });
  };
  // Use effect hook to set payment state
  React.useEffect(() => {
    setPayment(payment);
  }, [payment, setPayment]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="text"
            minlength="2"
            maxlength="30"
            id="nameOnCard"
            name="nameOnCard"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={payment.nameOnCard}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="text"
            minlength="16"
            maxlength="20"
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={payment.cardNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="month"
            min="2015-01"
            id="expiryDate"
            name="expiryDate"
            label=". . . . . . . . . .Expiry Date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={payment.expiryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="text"
            minlength="2"
            maxlength="30"
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={payment.cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
