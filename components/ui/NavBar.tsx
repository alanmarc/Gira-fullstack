import { useContext } from 'react';

import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { UIContext } from '../../context/ui';
import NextLink from 'next/link';


export const NavBar  = () => {

  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={ 0 }>
        <Toolbar>
            <IconButton 
            size="large"
            edge="start"
            onClick={ openSideMenu}
            >
                <MenuOpenOutlinedIcon/>
            </IconButton>
            <NextLink legacyBehavior href="/" passHref>
              <Link underline='none' color="white">
                <Typography variant="h6">OpenJira</Typography>
              </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
};
