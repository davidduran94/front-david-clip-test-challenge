import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const rows = [
  {
    name: "david",
    email: "davidddr@gmail.com",
    phone: "34523423",
    creation_date: "12/2/2021",
    clabe: "42352345234523",
  },
];

const ClientsList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number&nbsp;</TableCell>
            <TableCell align="right">Creation Date&nbsp;</TableCell>
            <TableCell align="right">CLABE</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.creation_date}</TableCell>
              <TableCell align="right">{row.clabe}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="success">
                    Editar
                  </Button>
                  <Button variant="outlined" color="error">
                    Borrar
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientsList;
