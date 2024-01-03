import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Stack,
  Button,
  InputAdornment,
  IconButton,
  MenuItem
} from "@mui/material";
import loginImg from "@/public/auth/login_image.png";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import {initialValues, validationSchema} from "@/component/auth/yupAndInitialValues"
import { mainColor } from "@/constants/Colors";

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  //personal/corporate imgs
  const router = useRouter()
  const redirectToRegister = () => {
    router.push("/register")
  }
  console.log("showPassword: ", showPassword);

  return (
    <>
        <Box sx={{ width: "100%", height: "100.5vh", marginTop:10 }}>
          <Grid container p={5} alignItems="center" justifyContent="center">
            <Grid item md={6} xl={6} display={{ xs: "none", sm: "block" }}>
              <Image src={loginImg} height={550} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ maxWidth: "100%", padding: "2rem" }}>
                <CardContent>
                  <Formik
                    initialValues={initialValues}
                    //    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    {({ errors, touched }) => (
                      <Form noValidate>
                        <Field
                          as={TextField}
                          type="email"
                          variant="outlined"
                          label="E-Mail"
                          name="email"
                          fullWidth
                          margin="dense"
                          error={Boolean(errors.email) && Boolean(touched.email)}
                          helperText={Boolean(touched.email) ? errors.email : ""}
                        />
                        <Field
                          as={TextField}
                          type={showPassword ? "text" : "password"}
                          variant="outlined"
                          label="Sifre"
                          name="password"
                          fullWidth
                          margin="dense"
                          error={
                            Boolean(errors.password) && Boolean(touched.password)
                          }
                          helperText={
                            Boolean(touched.password) ? errors.password : ""
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end" sx={{ pr: 2 }}>
                                <IconButton
                                  edge="end"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <VisibilityIcon />
                                  ) : (
                                    <VisibilityOffIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Stack justifyContent="center" alignItems="center" mt={2}>
                          <Button
                            sx={{ border: 1, borderColor: "grey.500", color: "#212121", width: "50%", ':hover': { bgcolor: mainColor }, }}
                            type="submit"
                            size="large"
                          >
                            {" "}
                            Giris Yap
                          </Button>
                        </Stack>
                      </Form>
                    )}
                  </Formik>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    component="div"
                    onClick={redirectToRegister}
                    sx={{ cursor: "pointer", mt: 1, color: mainColor }}
                  >
                    {" "}
                    Hesabiniz yok mu?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
    </>
  );
}

export default Login