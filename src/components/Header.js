import React from 'react';
import { Sheet, Typography } from '@mui/joy';
import { Button } from '@mui/joy'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="plain"
      color="neutral" 
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
    </Button>
  );
};

export function Header(props) {
    return (
        <Sheet variant='soft' sx={{width:'100%', display:'flex', flexDirection:'row'}}>
          <Sheet variant='soft'sx={{padding:'0.5vh', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignContent:'center', flexGrow:'1'}}>
            <Typography level="h3" component="h1">
              <b>code-fiddle</b>
            </Typography>
          </Sheet>
          <Sheet variant='soft'sx={{padding:'0.5vh', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignContent:'center'}}>
            <ModeToggle/>
          </Sheet>
        </Sheet>
    );
}