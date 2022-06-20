import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box alignItems="center" justifyContent="center" sx={{ my: 1 }}>
      {/* <Box sx={{ width: 500 }} > */}
      {/* <Box maxWidth="lg" alignItems="center" display="flex" justifyContent="center"> */}
      <BottomNavigation
        // sx={{ bgcolor: '#CBF7ED', borderRadius: '16px' }}
        // sx={{ bgcolor: '#F5C7F7' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          href={`https://github.com/qd9069`}
          sx={{ mt: 1 }}
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href={`https://www.linkedin.com/in/qiling-deng-ed20/`}
          sx={{ mt: 1 }}
        />
        <BottomNavigationAction
          label="Twitter"
          icon={<TwitterIcon />}
          href={`https://twitter.com/ED20_20`}
          sx={{ mt: 1 }}
        />
      </BottomNavigation>
    </Box>
  );
}