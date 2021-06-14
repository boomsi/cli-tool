import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, ButtonGroup, Box, Paper, Grid, Fab } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Webpack from '@/pages/webpack';
import Vite from '@/pages/vite';
import { PACKAGE_LIST, IPackageItem } from '@/utils/const';
import './index.less';

function Home() {
  const [type, setType] = useState(PACKAGE_LIST[0].name);

  const judgePackage = () => {
    switch (type) {
      case 'Webpack':
        return <Webpack />;
      case 'Vite':
        return <Vite />;
      default:
        return <Webpack />;
    }
  };

  return (
    <div className="index-wrapper">
      <Container maxWidth="md">
        <h1>Create Your App</h1>
        <Grid container spacing={6}>
          <Grid item md={5}>
            <p className="index-title-tips">Please choose your scaffolding tool</p>
            <Box component="div">
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                {PACKAGE_LIST.map((item: IPackageItem) => (
                  <Button key={item.name} startIcon={<img className="index-logo" src={item.icon} alt="" />}>
                    <NavLink to={item.route}>{item.name}</NavLink>
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
            <p className="index-title-tips">Please start your configuration</p>
            {judgePackage()}
          </Grid>
          <Grid item md={7}>
            <Paper elevation={1} className="index-code-body">
              dsakl dsa
            </Paper>
          </Grid>
        </Grid>
        <Box className="index-confirm">
          <p className="index-title-tips">Download to local</p>
          <Fab color="primary" aria-label="add" variant="extended" size="small">
            <SaveAltIcon />
            Confirm
          </Fab>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
