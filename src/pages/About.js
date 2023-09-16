import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import ImageUpload from "../components/upload";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const About = () => {
  return (
    <>
    <Header/>
    <div>
      <ImageUpload/>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default About;
