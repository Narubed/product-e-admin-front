/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useCurrentUser from "@/lib/hook/useCurrentUser";
import { LoadingButton } from "@mui/lab";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@/lib/store/loading";
import { Helmet } from "react-helmet";

import {
  Stack,
  TextField,
  Container,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Form,
  Button,
  ListItem,
  InputAdornment,
  Grid,
  Box,
  FormControlLabel,
  Switch,
  Autocomplete,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import Main from "@/components/main";

import iconEng from "~/public/static/icons/Eng.png";
import iconThai from "~/public/static/icons/Thai.png";
import iconCambodia from "~/public/static/icons/Cambodia.png";
import iconMyanmar from "~/public/static/icons/Myanmar.png";
import iconLaos from "~/public/static/icons/Laos.png";
import iconChina from "~/public/static/icons/China.png";

import imagesicon from "~/public/product-express/NoImage.png";
import axios from "axios";
import HeaderSubmitEdit from "@/components/pages/partners/company/edit/handleSubmitedit";
const ImgStyled = styled("img")(({ theme }) => ({
  width: "25%",
  height: "25%",
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ImgIcon = styled("img")(({ theme }) => ({
  width: "24px",
  height: "16px",
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
  },
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
    fontSize: "16px",
  },
}));

export default function edit() {
  const { fetcherWithToken, currentUser } = useCurrentUser();
  const token = useSelector((state) => state.session.token);
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    CompanyImage: "",
    Thai: "",
    Eng: "",
    Cambodia: "",
    Myanmar: "",
    Laos: "",
    China: "",
    AddressThai: "",
    AddressEng: "",
    AddressCambodia: "",
    AddressMyanmar: "",
    AddressLaos: "",
    AddressChina: "",
  });
  useEffect(() => {
    if (currentUser) {
      fetcherCompany();
    }
  }, [currentUser]);

  const fetcherCompany = async () => {
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_EXPRESS_BACKEND}/company/${query.id}`;
    await fetcherWithToken(url)
      .then((json) => {
        console.log(json.data);
        setValues({
          ...values,
          CompanyImage: json.data.company_image,
          Thai: json.data.company_name.Thai,
          Eng: json.data.company_name.Eng,
          Cambodia: json.data.company_name.Cambodia,
          Myanmar: json.data.company_name.Myanmar,
          Laos: json.data.company_name.Laos,
          China: json.data.company_name.China,
          AddressThai: json.data.company_address.Thai,
          AddressEng: json.data.company_address.Eng,
          AddressCambodia: json.data.company_address.Cambodia,
          AddressMyanmar: json.data.company_address.Myanmar,
          AddressLaos: json.data.company_address.Laos,
          AddressChina: json.data.company_address.China,
        });
      })
      .catch(() => {
        router.push("/404");
      });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    HeaderSubmitEdit({
      values,
      setValues,
      fetcherWithToken,
      file,
      query,
      router,
      token,
      setLoading,
      dispatch,
    });
  };

  const [imgSrc, setImgSrc] = useState(null);
  const [file, setfile] = useState([]);

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      setfile(files[0]);
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  if (!currentUser) return <Main />;

  return (
    <div className="main home">
      <Helmet>
        <title>แก้ไขบริษัท</title>
      </Helmet>

      <h1 className="d-none">แก้ไขบริษัท - admin</h1>
      <Container sx={{ pb: "8%", pt: "4%" }}>
        <Typography variant="h4" gutterBottom sx={{ mt: "6px" }}>
          แก้ไขบริษัท
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Grid item xs={12} sx={{ marginBottom: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {file.length === 0 ? (
                  values.CompanyImage === "ไม่มี" ? (
                    <ImgStyled src={imagesicon.src} alt={imagesicon.src} />
                  ) : (
                    <ImgStyled
                      src={`${process.env.NEXT_PUBLIC_PRODUCT_EXPRESS_BACKEND}/static/images/company/${values.CompanyImage}`}
                      alt={`${process.env.NEXT_PUBLIC_PRODUCT_EXPRESS_BACKEND}/static/images/company/${values.CompanyImage}`}
                    />
                  )
                ) : (
                  <ImgStyled src={imgSrc} alt="Profile Pic" />
                )}
                <Box>
                  <ButtonStyled
                    component="label"
                    variant="contained"
                    htmlFor="account-settings-upload-image"
                    sx={{ fontSize: "16px" }}
                  >
                    เปลี่ยนรูปภาพที่แสดง
                    <input
                      hidden
                      type="file"
                      onChange={onChange}
                      accept="image/png, image/jpeg"
                      id="account-settings-upload-image"
                    />
                  </ButtonStyled>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 5, fontSize: "14px", color: "red" }}
                  >
                    แนะนำให้เป็นไฟล์ png ขนาด 348x348 เท่านั้น.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ mt: "16px", color: "purple" }}
            >
              ชื่อบริษัท
            </Typography>
            <Grid item xs={12} sx={{ marginBottom: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItem disablePadding>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="Thai" sx={{ fontSize: "16px" }}>
                      ชื่อภาษาไทย
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="Thai"
                      value={values.Thai}
                      onChange={handleChange("Thai")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconThai.src} alt={iconThai.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="Eng" sx={{ fontSize: "16px" }}>
                      ชื่อภาษาอังกฤษ
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="Eng"
                      value={values.Eng}
                      onChange={handleChange("Eng")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconEng.src} alt={iconEng.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </ListItem>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItem disablePadding>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="Cambodia" sx={{ fontSize: "16px" }}>
                      ชื่อกัมพูชา
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="Cambodia"
                      value={values.Cambodia}
                      onChange={handleChange("Cambodia")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon
                            src={iconCambodia.src}
                            alt={iconCambodia.src}
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="Myanmar" sx={{ fontSize: "16px" }}>
                      ชื่อภาษาพม่า
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="Myanmar"
                      value={values.Myanmar}
                      onChange={handleChange("Myanmar")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon
                            src={iconMyanmar.src}
                            alt={iconMyanmar.src}
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </ListItem>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItem disablePadding>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="Laos" sx={{ fontSize: "16px" }}>
                      ชื่อภาษาลาว
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="Laos"
                      value={values.Laos}
                      onChange={handleChange("Laos")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconLaos.src} alt={iconLaos.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="China" sx={{ fontSize: "16px" }}>
                      ชื่อภาษาจีน
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="China"
                      value={values.China}
                      onChange={handleChange("China")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconChina.src} alt={iconChina.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </ListItem>
              </Box>
            </Grid>
            {/* --------------------------------------------------------------------- */}

            <Typography
              variant="h5"
              gutterBottom
              sx={{ mt: "16px", color: "purple" }}
            >
              ที่อยู่บริษัท
            </Typography>
            <Grid item xs={12} sx={{ marginBottom: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItem disablePadding>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="AddressThai" sx={{ fontSize: "16px" }}>
                      ที่อยู่ภาษาไทย
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="AddressThai"
                      value={values.AddressThai}
                      onChange={handleChange("AddressThai")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconThai.src} alt={iconThai.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="AddressEng" sx={{ fontSize: "16px" }}>
                      ที่อยู่ภาษาอังกฤษ
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="AddressEng"
                      value={values.AddressEng}
                      onChange={handleChange("AddressEng")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconEng.src} alt={iconEng.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </ListItem>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItem disablePadding>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel
                      htmlFor="AddressCambodia"
                      sx={{ fontSize: "16px" }}
                    >
                      ที่อยู่กัมพูชา
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="AddressCambodia"
                      value={values.AddressCambodia}
                      onChange={handleChange("AddressCambodia")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon
                            src={iconCambodia.src}
                            alt={iconCambodia.src}
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel
                      htmlFor="AddressMyanmar"
                      sx={{ fontSize: "16px" }}
                    >
                      ที่อยู่ภาษาพม่า
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="AddressMyanmar"
                      value={values.AddressMyanmar}
                      onChange={handleChange("AddressMyanmar")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon
                            src={iconMyanmar.src}
                            alt={iconMyanmar.src}
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </ListItem>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItem disablePadding>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="AddressLaos" sx={{ fontSize: "16px" }}>
                      ที่อยู่ภาษาลาว
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="AddressLaos"
                      value={values.AddressLaos}
                      onChange={handleChange("AddressLaos")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconLaos.src} alt={iconLaos.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel
                      htmlFor="AddressChina"
                      sx={{ fontSize: "16px" }}
                    >
                      ที่อยู่ภาษาจีน
                    </InputLabel>
                    <Input
                      sx={{ fontSize: "16px" }}
                      id="AddressChina"
                      value={values.AddressChina}
                      onChange={handleChange("AddressChina")}
                      startAdornment={
                        <InputAdornment position="start">
                          <ImgIcon src={iconChina.src} alt={iconChina.src} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </ListItem>
              </Box>
            </Grid>
            <LoadingButton
              fullWidth
              variant="contained"
              type="submit"
              color="secondary"
              sx={{ fontSize: "16px" }}
            >
              ยืนยัน
            </LoadingButton>
          </Box>
        </form>
      </Container>
    </div>
  );
}
