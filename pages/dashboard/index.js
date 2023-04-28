import * as React from "react";
import Sidebar from "../../components/sidebar";
import {
  Table,
  TableCell,
  TableRow,
  Typography,
  List,
  ListItem,
  Toolbar,
  Box,
  ListItemIcon,
  Divider,
  ListItemText,
  styled,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Image from "next/image";
import { ArrowForwardIos, BorderColor, Delete } from "@mui/icons-material";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import { server } from "./../../lib/server";
import { ClickAction } from "../../lib/click";

const fontFamily = "Poppins";

export default function PermanentDrawerLeft() {
  const router = useRouter();
  const [data, setData] = React.useState({});
  const [jenisKelamin, setJenisKelamin] = React.useState("");
  const onJenisKelamin = (e) => setJenisKelamin(e.target.value);

  const [tipe, setTipe] = React.useState("");
  const onTipe = (e) => setTipe(e.target.value);

  const [kabupaten, setKabupaten] = React.useState("");

  const [time, setTime] = React.useState(1);

  const handleClick = (button) => {
    ClickAction(button, time, window.localStorage.getItem("username"));
    setTime(0);
  };

  React.useEffect(() => {
    const email = localStorage.getItem("mailLogin");
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
    axios
      .get(`${server}/user/${email}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data.user);

        axios
          .get(
            `http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${res.data.user.provinsi}`
          )
          .then((resp) => {
            var kot = resp.data.kota_kabupaten.filter(
              (val) => val.id === res.data.user.kota
            );
            setKabupaten(kot[0].nama);
          });
      });

    let interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 100);
    () => clearInterval(interval);
  }, []);

  const SubjectField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      background: "rgba(0, 0, 0, 0.05)",
      height: 40,
      width: 200,
      fontFamily,
    },
  });

  const Field = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      height: 40,
      width: 200,
      fontFamily,
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>MooCare-Dashboard</title>
      </Head>

      <Sidebar
        click={handleClick}
        nama={`${data.nama_depan} ${data.nama_belakang}`}
        kota={kabupaten}
      />

      <Box component="main" sx={{ flexGrow: 1, background: "#FFFFFF", p: 5 }}>
        <Toolbar />

        <Box>
          <Typography
            component="span"
            variant="h5"
            sx={{ fontFamily, color: "black", mb: 2 }}
          >
            Dashboard
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              mb: 8,
              mt: 4,
              border: "3px solid rgba(0, 49, 165, 0.2)",
              p: 3,
            }}
            width={710}
          >
            <Box>
              <Image
                width={150}
                height={150}
                src="/sapi.png"
                style={{ borderRadius: 100 }}
              />
            </Box>

            <Box>
              <form>
                <Table>
                  <TableRow sx={{ border: 3, borderColor: "white" }}>
                    <TableCell>
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{ color: "black", fontFamily, mb: 1 }}
                      >
                        Subject
                      </Typography>

                      <SubjectField disabled />
                    </TableCell>

                    <TableCell>
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{ color: "black", fontFamily, mb: 1 }}
                      >
                        Kode Device
                      </Typography>

                      <Field />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ border: 3, borderColor: "white" }}>
                    <TableCell>
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{ color: "black", fontFamily, mb: 1 }}
                      >
                        Jenis Kelamin
                      </Typography>

                      <Select
                        onChange={onJenisKelamin}
                        value={jenisKelamin}
                        sx={{
                          fontFamily,
                          width: 200,
                          height: 40,
                        }}
                      >
                        <MenuItem
                          value="jantan"
                          sx={{
                            fontFamily,
                            color: "black",
                            height: 40,
                            width: 200,
                          }}
                        >
                          Jantan
                        </MenuItem>
                        <MenuItem
                          value="betina"
                          sx={{
                            fontFamily,
                            color: "black",
                            height: 40,
                            width: 200,
                          }}
                        >
                          Betina
                        </MenuItem>
                      </Select>
                    </TableCell>

                    <TableCell>
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{ color: "black", fontFamily, mb: 1 }}
                      >
                        Tipe
                      </Typography>

                      <Select
                        onChange={onTipe}
                        value={tipe}
                        sx={{
                          fontFamily,
                          width: 200,
                          height: 40,
                        }}
                      >
                        <MenuItem
                          value="pedaging"
                          sx={{
                            fontFamily,
                            color: "black",
                            height: 40,
                            width: 200,
                          }}
                        >
                          Pedaging
                        </MenuItem>
                        <MenuItem
                          value="perah"
                          sx={{
                            fontFamily,
                            color: "black",
                            height: 40,
                            width: 200,
                          }}
                        >
                          Perah
                        </MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={2}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          onClick={() => handleClick("tombol update")}
                          variant="contained"
                          sx={{
                            background: "#040C1F",
                            width: 159,
                            height: 30,
                            "&:hover": { background: "#5b5b5d" },
                          }}
                        >
                          Update
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                </Table>
              </form>
            </Box>
          </Box>

          <Box
            width={710}
            sx={{ border: "3px solid rgba(0, 49, 165, 0.2)", p: 2 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily, color: "black", mb: 2 }}
            >
              Daftar Device
            </Typography>

            <Box width={670} display="flex" justifyContent="space-between">
              <Box width={500}>
                <List>
                  <ListItem
                    sx={{
                      background: "rgba(0, 0, 0, 0.05)",
                      borderRadius: 3,
                      mb: 3,
                    }}
                  >
                    <ListItemIcon>
                      <Image src="/miband.png" height={30} width={30} />
                    </ListItemIcon>

                    <ListItemText sx={{ height: "100%" }}>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          py: 2,
                          width: 0,
                        }}
                      />
                    </ListItemText>

                    <ListItemText>
                      <Typography
                        sx={{ color: "black", fontFamily, mr: 20, ml: 2 }}
                      >
                        MiBand/1
                      </Typography>
                    </ListItemText>

                    <ListItemText sx={{ height: "100%" }}>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          py: 2,
                          width: 0,
                        }}
                      />
                    </ListItemText>

                    <ListItemText onClick={() => router.push("/id")}>
                      <Typography
                        sx={{
                          color: "black",
                          fontFamily,
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        Cek Status
                      </Typography>
                    </ListItemText>

                    <ListItemIcon onClick={() => router.push("/id")}>
                      <ArrowForwardIos
                        sx={{ fill: "black", "&:hover": { cursor: "pointer" } }}
                      />
                    </ListItemIcon>
                  </ListItem>

                  <ListItem
                    sx={{ background: "rgba(0, 0, 0, 0.05)", borderRadius: 3 }}
                  >
                    <ListItemIcon>
                      <Image src="/miband.png" height={30} width={30} />
                    </ListItemIcon>

                    <ListItemText sx={{ height: "100%" }}>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          py: 2,
                          width: 0,
                        }}
                      />
                    </ListItemText>

                    <ListItemText>
                      <Typography
                        sx={{ color: "black", fontFamily, mr: 20, ml: 2 }}
                      >
                        MiBand/1
                      </Typography>
                    </ListItemText>

                    <ListItemText sx={{ height: "100%" }}>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          py: 2,
                          width: 0,
                        }}
                      />
                    </ListItemText>

                    <ListItemText onClick={() => router.push("/id")}>
                      <Typography
                        sx={{
                          color: "black",
                          fontFamily,
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        Cek Status
                      </Typography>
                    </ListItemText>

                    <ListItemIcon onClick={() => router.push("/id")}>
                      <ArrowForwardIos
                        sx={{ fill: "black", "&:hover": { cursor: "pointer" } }}
                      />
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Box>

              <Box>
                <List>
                  <ListItem
                    sx={{
                      background: "rgba(0, 0, 0, 0.05)",
                      borderRadius: 3,
                      mb: 3,
                    }}
                  >
                    <ListItemIcon>
                      <BorderColor
                        sx={{
                          fill: "black",
                          "&:hover": { cursor: "pointer" },
                          mx: "auto",
                        }}
                        onClick={() => router.push("/id")}
                      />
                    </ListItemIcon>

                    <ListItemText sx={{ height: "100%" }}>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          py: 2,
                          width: 0,
                        }}
                      />
                    </ListItemText>

                    <ListItemIcon>
                      <Delete
                        sx={{
                          fill: "black",
                          "&:hover": { cursor: "pointer" },
                          mx: "auto",
                        }}
                      />
                    </ListItemIcon>
                  </ListItem>

                  <ListItem
                    sx={{ background: "rgba(0, 0, 0, 0.05)", borderRadius: 3 }}
                  >
                    <ListItemIcon>
                      <BorderColor
                        sx={{
                          fill: "black",
                          "&:hover": { cursor: "pointer" },
                          mx: "auto",
                        }}
                        onClick={() => router.push("/id")}
                      />
                    </ListItemIcon>

                    <ListItemText sx={{ height: "100%" }}>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          py: 2,
                          width: 0,
                        }}
                      />
                    </ListItemText>

                    <ListItemIcon>
                      <Delete
                        sx={{
                          fill: "black",
                          "&:hover": { cursor: "pointer" },
                          mx: "auto",
                        }}
                      />
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
