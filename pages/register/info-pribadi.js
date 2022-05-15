import {
  ArrowBackIos,
  CheckBox,
  CheckBoxOutlineBlank,
  Google,
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
  FormControlLabel,
  Checkbox,
  withStyles,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const fontFamily = "Poppins";
const color1 = "#ffffff";
const color2 = "#EBFF00";

export default function InfoPribadi() {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);

  const CheckedIcon = () => {
    const check = <CheckBox sx={{ fill: "black" }} />;
    const unCheck = <CheckBoxOutlineBlank sx={{ fill: "black" }} />;

    return checked ? check : unCheck;
  };

  const ButtonType = () => {
    const aktif = (
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
        Daftar Akun
      </Button>
    );

    const mati = (
      <Button
        disabled
        sx={{
          background: "rgba(0, 0, 0, 0.15)",
          fontFamily,
          width: "100%",
          "&:hover": { background: "#040C1F" },
        }}
      >
        Daftar Akun
      </Button>
    );

    return checked ? aktif : mati;
  };

  return (
    <Box sx={{ background: "white" }}>
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
            <Box sx={{ opacity: 0.5 }}>
              <ArrowBackIos fontSize="10" sx={{ fill: "black" }} />
              <Typography
                variant="body1"
                component="span"
                sx={{ fontFamily, color: "black" }}
              >
                Kembali
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column">
              <Typography
                variant="body1"
                component="span"
                sx={{ fontFamily, color: "black" }}
              >
                Langkah 1/2
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontFamily, color: "black" }}
              >
                Info Pribadi
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
                Daftarkan akun Anda
              </Typography>

              <Typography
                variant="body1"
                component="div"
                sx={{ color: "black", fontFamily, mb: 5 }}
              >
                Untuk regulasi kami, harap isi data dibawah
              </Typography>

              <Table>
                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Nama Depan*
                    </Typography>
                    <TextField
                      autoFocus={true}
                      required
                      sx={{
                        width: "100%",
                        input: { background: "rgba(0,0,0,0.05)" },
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Nama Belakang*
                    </Typography>
                    <TextField
                      required
                      sx={{
                        width: "100%",
                        input: { background: "rgba(0,0,0,0.05)" },
                      }}
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
                      Email*
                    </Typography>
                    <TextField
                      required
                      type="email"
                      sx={{
                        width: "100%",
                        input: { background: "rgba(0,0,0,0.05)" },
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Password*
                    </Typography>
                    <TextField
                      required
                      type="password"
                      sx={{
                        width: "100%",
                        input: { background: "rgba(0,0,0,0.05)" },
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: "black", fontFamily }}
                    >
                      Re-type Password*
                    </Typography>
                    <TextField
                      required
                      type="password"
                      sx={{
                        width: "100%",
                        input: { background: "rgba(0,0,0,0.05)" },
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell colSpan={2}>
                    <FormControlLabel
                      xs={{ background: "black" }}
                      label={
                        <Typography sx={{ color: "black", fontFamily }}>
                          Saya setuju dengan syarat dan ketentuan
                        </Typography>
                      }
                      control={<CheckedIcon />}
                      onClick={handleChecked}
                      sx={{
                        opacity: 0.7,
                        fontFamily,
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell colSpan={2}>
                    <ButtonType />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell colSpan={2}>
                    <Divider flexItem sx={{ opacity: 0.7 }}>
                      <Typography sx={{ fontFamily, color: "black" }}>
                        Atau
                      </Typography>
                    </Divider>
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 3, borderColor: "none" }}>
                  <TableCell colSpan={2}>
                    <Button
                      startIcon={<Google sx={{ fill: "black" }} />}
                      sx={{ width: "100%", fontFamily, color: "black" }}
                      variant="outlined"
                    >
                      Daftar dengan Google
                    </Button>
                  </TableCell>
                </TableRow>
              </Table>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
