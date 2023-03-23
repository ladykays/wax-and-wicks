import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#783510",
      dark: "#fb923d",
      contrastText: "#fff",
    },
  },
});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderNumber, setOrderNumber] = React.useState("");
  const [address, setAddress] = React.useState({});
  const [payment, setPayment] = React.useState({});

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      const newOrderNumber = `#${Math.floor(Math.random() * 10000000)}`;
      setOrderNumber(newOrderNumber);
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);

    if (activeStep === 1) {
      setPayment({});
    }
  };

  // Define a function to check if the address is empty
  const isAddressEmpty = () => {
    const { firstName, lastName, address1, city, zip, country } = address;
    return !firstName || !lastName || !address1 || !city || !zip || !country;
  };

  const isPaymentEmpty = () => {
    const { nameOnCard, cardNumber, expiryDate, cvv } = payment;
    return !nameOnCard || !cardNumber || !expiryDate || !cvv;
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm setAddress={setAddress} />;
      case 1:
        return <PaymentForm setPayment={setPayment} />;
      case 2:
        return <Review address={address} payment={payment} />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is {orderNumber}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={
                    (activeStep === 0 && isAddressEmpty()) ||
                    (activeStep === 1 && isPaymentEmpty())
                  }
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
