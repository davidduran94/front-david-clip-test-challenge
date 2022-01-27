import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import getClients from "../../services/getClients";
import deleteClient from "../../services/deleteClient";
import { getClients as getClientsAction } from "../../app/actions";
import { deleteClient as deleteClientAction } from "../../app/actions";

const ClientsList = () => {
  const dispatcher = useDispatch();
  const rows = useSelector((state) => state.clients);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getClients((res) => {
      let itemsRes = res.map((item) => {
        return { ...item, key: item.id };
      });

      dispatcher(getClientsAction(itemsRes));
      setIsLoading(false);
    });
  }, []);

  const handleDeleteClient = (id) => {
    deleteClient(id, (res) => {
      dispatcher(deleteClientAction(id));
    });
  };

  return !isLoading ? (
    <TableContainer component={Paper}>
      <p>Lista de Clientes {rows.length}</p>
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
              <TableCell align="right">{row.phone_number}</TableCell>
              <TableCell align="right">{row.creation_date}</TableCell>
              <TableCell align="right">{row.clabe}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="success">
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleDeleteClient(row.id)}
                    variant="outlined"
                    color="error"
                  >
                    Borrar
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <p>Obteniendo clientes...</p>
  );
};

export default ClientsList;
