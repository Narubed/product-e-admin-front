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

import FormInput from "~/components/pages/products/create/formInput";
import ChangeImages from "~/components/pages/products/create/changeImages";
import CardSizeDetail from "~/components/pages/products/create/cardSizeDetail";
import HeaderSubmitCreate from "@/components/pages/products/create/handleSubmitCreate";

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
  },
}));

export default function edit() {
  const { fetcherWithToken, currentUser } = useCurrentUser();
  const token = useSelector((state) => state.session.token);
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    Thai: "",
    Eng: "",
    Cambodia: "",
    Myanmar: "",
    Laos: "",
    China: "",

    DetailThai: "",
    DetailEng: "",
    DetailCambodia: "",
    DetailMyanmar: "",
    DetailLaos: "",
    DetailChina: "",

    SizeNameThai: "",
    SizeNameEng: "",
    SizeNameCambodia: "",
    SizeNameMyanmar: "",
    SizeNameLaos: "",
    SizeNameChina: "",

    BrandId: "",
    Status: true,
    TypeId: [],
    Tag: "",
  });

  const [isFile, setFile] = useState([]);
  const [isCardSizeDetail, setCardSizeDetail] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onChange = async (file) => {
    const { files } = file.target;

    if (files && files.length !== 0) {
      const formData = new FormData();
      formData.append("image", files[0]);
      const urlImage = `${process.env.NEXT_PUBLIC_PRODUCT_EXPRESS_BACKEND}/image/product`;
      const responseFile = await axios({
        method: "POST",
        url: urlImage,
        data: formData,
        headers: {
          "Content-Type": "application/json",
          "auth-token": `Bearer ${token}`,
        },
      });
      const images = isFile;
      images.push(responseFile.data.filename);
      console.log(images);
      setFile(images);
      setCount(count + 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    HeaderSubmitCreate({
      values,
      setValues,
      fetcherWithToken,
      token,
      isFile,
      setFile,
      dispatch,
      setLoading,
      isCardSizeDetail,
      router,
    });
    console.log(values);
    console.log(isFile);
    console.log(isCardSizeDetail);
  };

  if (!currentUser) return <Main />;

  return (
    <div className="main home">
      <Helmet>
        <title>เพิ่มสินค้าใหม่</title>
      </Helmet>

      <h1 className="d-none">สินค้าให่เพิ่มสินค้าใหม่ - admin</h1>
      <Container sx={{ pb: "8%", pt: "4%" }}>
        <Typography variant="h4" gutterBottom sx={{ mt: "16px" }}>
          เพิ่มสินค้าใหม่
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* <form> */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Grid item xs={12} sx={{ marginBottom: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <ButtonStyled
                    color="secondary"
                    component="label"
                    variant="contained"
                    htmlFor="account-settings-upload-image"
                    sx={{ fontSize: "16px" }}
                  >
                    เพิ่มรูปภาพสินค้า
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
                    แนะนำให้เป็นไฟล์ png หรือ jpeg ขนาด 300x338 เท่านั้น.
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={2}>
                {isFile.map((row) => (
                  <Grid item xs={6} sm={4} md={4} lg={4} key={row}>
                    <ChangeImages
                      row={row}
                      isFile={isFile}
                      setFile={setFile}
                      fetcherWithToken={fetcherWithToken}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <FormInput
              values={values}
              handleChange={handleChange}
              fetcherWithToken={fetcherWithToken}
              setValues={setValues}
            />

            <CardSizeDetail
              isCardSizeDetail={isCardSizeDetail}
              setCardSizeDetail={setCardSizeDetail}
            />

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
