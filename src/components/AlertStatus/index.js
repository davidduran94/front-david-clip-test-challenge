import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function AlertStatus({ type }) {
  const [alert, setAlert] = useState("");
  useEffect(() => {
    switch (type) {
      case "error":
        setAlert(
          <Alert severity="error">
            No fue posible realizar la operacion, intente nuevamente
          </Alert>
        );
        break;

      case "success":
        setAlert(
          <Alert severity="success">Operación realizada exitosamente!</Alert>
        );
        break;

      default:
        return "foo";
    }
    setTimeout(() => {
      setAlert("");
    }, 2000);
  }, [type]);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {alert}
    </Stack>
  );
}
