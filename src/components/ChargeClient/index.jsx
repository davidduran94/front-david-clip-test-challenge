import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ChargeClient = ({ idClient }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Cargar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Realizar un cargo al cliente por el monto de:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Monto en MXN"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Realizar cargo</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChargeClient;
