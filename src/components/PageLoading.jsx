import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./PageLoading.css";

const PageLoading = () => {
  return (
    <div className="w-full h-[100vh]  flex items-center justify-center">
      <CircularProgress color="success" />
    </div>
  );
};

export default PageLoading;
