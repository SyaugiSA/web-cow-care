import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Table } from "@mui/material";
import { TableCell } from "@mui/material";
import { TextField } from "@mui/material";
import { TableRow } from "@mui/material";
import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import NumberFormat from "react-number-format";
import Sidebar from "../../components/sidebar";
import PropTypes from "prop-types";
import axios from "axios";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";

const fontFamily = "Poppins";
const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      prefix="+62 "
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Profil() {
  const [lsitProvinsi, setListProvinsi] = React.useState([]);
  const [listKabupaten, setListKabupaten] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [phone, setPhone] = React.useState({
    numberformat: "851",
  });

  const handlePhone = (event) => {
    setPhone({
      ...phone,
      [event.target.name]: event.target.value,
    });
  };

  const handleChecked = () => setChecked(!checked);

  const [provinsi, setProvinsi] = React.useState();
  const [kabupaten, setKabupaten] = React.useState();

  const handleProvinsi = (event) => {
    setProvinsi(event.target.value);
    axios
      .get(
        `http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${event.target.value}`
      )
      .then((res) => setListKabupaten(res.data.kota_kabupaten));
  };
  const handleKabupaten = (event) => setKabupaten(event.target.value);

  React.useEffect(() => {
    axios
      .get("http://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => setListProvinsi(res.data.provinsi));
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>MooCare-Profil</title>
      </Head>

      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, background: "#FFFFFF", p: 5 }}>
        <Toolbar />

        <Typography
          variant="h5"
          component="span"
          sx={{ fontFamily, color: "black", mb: 2 }}
        >
          Profil
        </Typography>

        <Box
          width={200}
          height={200}
          sx={{
            borderRadius: 100,
            border: "1px solid black",
            p: 1,
            mx: "auto",
            mb: 3,
          }}
        >
          <Image
            src="/foto.png"
            width={200}
            height={200}
            style={{ borderRadius: 100 }}
          />
        </Box>

        <form>
          <Box display="flex" justifyContent="space-evenly">
            <Box>
              <Table sx={{ width: 450 }}>
                <TableRow sx={{ border: 2, borderColor: "white" }}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Nama Depan
                    </Typography>

                    <TextField
                      sx={{
                        input: {
                          background: "rgba(0, 0, 0, 0.05)",
                          fontFamily,
                          color: "black",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Nama Belakang
                    </Typography>

                    <TextField
                      sx={{
                        input: {
                          background: "rgba(0, 0, 0, 0.05)",
                          fontFamily,
                          color: "black",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 2, borderColor: "white" }}>
                  <TableCell colSpan={2}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Email
                    </Typography>

                    <TextField
                      sx={{
                        input: {
                          background: "rgba(0, 0, 0, 0.05)",
                          fontFamily,
                          color: "black",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 2, borderColor: "white" }}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Password
                    </Typography>

                    <TextField
                      type="password"
                      sx={{
                        input: {
                          background: "rgba(0, 0, 0, 0.05)",
                          fontFamily,
                          color: "black",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Retype Password
                    </Typography>

                    <TextField
                      type="password"
                      sx={{
                        input: {
                          background: "rgba(0, 0, 0, 0.05)",
                          fontFamily,
                          color: "black",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 2, borderColor: "white" }}>
                  <TableCell colSpan={2}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Alamat
                    </Typography>

                    <TextField
                      sx={{
                        input: {
                          background: "rgba(0, 0, 0, 0.05)",
                          fontFamily,
                          color: "black",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </Table>
            </Box>

            <Box>
              <Table sx={{ width: 450 }}>
                <TableRow sx={{ border: 2, borderColor: "white" }}>
                  <TableCell colSpan={2}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Nomor Handphone
                    </Typography>

                    <TextField
                      value={phone.nunumberformat}
                      onChange={handlePhone}
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                      fullWidth
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell colSpan={2}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Provinsi
                    </Typography>

                    <Select
                      onChange={handleProvinsi}
                      required
                      value={provinsi}
                      sx={{ width: "100%", fontFamily }}
                    >
                      {lsitProvinsi.map((val) => (
                        <MenuItem
                          key={val.id}
                          value={val.id}
                          sx={{ fontFamily, color: "black" }}
                        >
                          {val.nama}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell colSpan={2}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Kabupaten/Kota
                    </Typography>

                    <Select
                      required
                      onChange={handleKabupaten}
                      value={kabupaten}
                      sx={{ width: "100%", fontFamily }}
                    >
                      {listKabupaten.map((val) => (
                        <MenuItem
                          key={val.id}
                          value={val.id}
                          sx={{ fontFamily, color: "black" }}
                        >
                          {val.nama}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
              </Table>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                background: "#040C1F",
                width: 350,
                height: 50,
                fontFamily,
                fontWeight: 600,
                "&:hover": { background: "#5b5b5d" },
              }}
            >
              Simpan Perubahan
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
