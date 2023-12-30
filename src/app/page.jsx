import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import React from "react";
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <LatestNews />
          </Grid>
          <Grid item xs={4}>
          <Sidebar/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
