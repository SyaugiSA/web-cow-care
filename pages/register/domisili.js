import {
  ArrowBackIos,
  CheckBox,
  CheckBoxOutlineBlank,
  LockOutlined,
} from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  Divider,
  Table,
  TableRow,
  TableCell,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import Head from "next/head";

const fontFamily = "Poppins";
const color1 = "#ffffff";
const color2 = "#EBFF00";

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

export default function Domisili() {
  const [lsitProvinsi, setListProvinsi] = useState([]);
  const [listKabupaten, setListKabupaten] = useState([]);
  const router = useRouter();
  const [checked, setChecked] = useState(false);
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

  const [provinsi, setProvinsi] = useState();
  const [kabupaten, setKabupaten] = useState();

  const handleProvinsi = (event) => {
    setProvinsi(event.target.value);
    axios
      .get(
        `http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${event.target.value}`
      )
      .then((res) => setListKabupaten(res.data.kota_kabupaten));
  };
  const handleKabupaten = (event) => setKabupaten(event.target.value);

  const CheckedIcon = () => {
    const check = <CheckBox sx={{ fill: "black" }} />;
    const unCheck = <CheckBoxOutlineBlank sx={{ fill: "black" }} />;

    return checked ? check : unCheck;
  };

  useEffect(() => {
    axios
      .get("http://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => setListProvinsi(res.data.provinsi));
  }, []);

  return (
    <Box sx={{ background: "white" }}>
      <Head>
        <title>MooCare-Register</title>
      </Head>

      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Image src="/register.png" alt="Sapi" width={650} height={975} />
      </Box>

      <Container>
        <Box
          sx={{
            position: { md: "absolute", xs: "relative" },
            top: 0,
            width: { md: "83%", xs: "100%" },
            mb: 6,
            background: { xs: "white", md: "none" },
          }}
        >
          <Box sx={{ background: { xs: "#040c1f", md: "none" } }}>
            <Typography
              variant="h3"
              component="span"
              sx={{ fontFamily: "Poppins", color: "#ffffff" }}
            >
              Moo
            </Typography>
            <Typography
              variant="h3"
              component="span"
              sx={{ fontFamily: "Poppins", color: "#EBFF00" }}
            >
              Care
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ float: "right", width: { md: "50%", xs: "100%" }, mb: 10 }}
          >
            <Box onClick={() => router.back()} sx={{ cursor: "pointer" }}>
              <ArrowBackIos fontSize="10" sx={{ fill: "black" }} />
              <Typography
                variant="body1"
                component="span"
                sx={{ fontFamily, color: "black" }}
              >
                Kembali
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: "right" }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{ fontFamily, color: "black" }}
              >
                Langkah 2/2
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontFamily, color: "black" }}
              >
                Domisili
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              background: "linear-gradient(#000000, rgba(0,0,0,0))",
              width: "100%",
              position: "relative",
              top: 70,
              my: 2,
            }}
          />

          <Box display="flex" width="100%">
            <Box
              width="50%"
              sx={{ display: { md: "block", xs: "none" } }}
            ></Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <Typography
                variant="h4"
                component="div"
                sx={{ color: "black", fontFamily, mb: 2 }}
              >
                Lengkapi akun Anda
              </Typography>

              <Typography
                variant="body1"
                component="div"
                sx={{ color: "black", fontFamily, mb: 5 }}
              >
                Untuk kebutuhan dan regulasi kami, harap isi data dibawah
              </Typography>

              <form>
                <Table>
                  <TableRow sx={{ border: 3, borderColor: "none" }}>
                    <TableCell colSpan={2}>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ color: "black", fontFamily }}
                      >
                        Nomor Handphone*
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
                        Provinsi*
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
                        Kabupaten/Kota*
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

                  <TableRow sx={{ border: 3, borderColor: "none" }}>
                    <TableCell colSpan={2}>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ color: "black", fontFamily }}
                      >
                        Alamat*
                      </Typography>
                      <TextField
                        required
                        sx={{
                          width: "100%",
                          input: { background: "rgba(0,0,0,0.05)", fontFamily },
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ border: 3, borderColor: "none" }}>
                    <TableCell colSpan={2}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#040C1F",
                          color: "white",
                          fontFamily,
                          width: "100%",
                          "&:hover": { background: "#040C1F" },
                        }}
                      >
                        Simpan & Lanjutkan
                      </Button>
                    </TableCell>
                  </TableRow>
                </Table>
              </form>

              <Typography
                sx={{
                  fontFamily,
                  color: "black",
                  opacity: 0.7,
                  textAlign: "center",
                }}
              >
                <LockOutlined sx={{ fill: "black", fontSize: 15 }} /> Informasi
                anda kami jamin keamanan dan kerahasiaannya
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
