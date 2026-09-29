'use client';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { restaurant } from '@/data/restaurant';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'POS System', href: '#pos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 36,
          bgcolor: scrolled ? 'rgba(18,12,9,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all .3s',
          backgroundImage: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box component="a" href="#home" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}>
              <RamenDiningIcon color="primary" sx={{ fontSize: 34 }} />
              <Typography variant="h6" sx={{ fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.1 }}>
                Chefs <Box component="span" sx={{ color: 'primary.main' }}>&</Box> Pulao Station
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {links.map((l) => (
                <Button key={l.href} href={l.href} color="inherit" sx={{ px: 1.5 }}>
                  {l.label}
                </Button>
              ))}
              <Button variant="contained" startIcon={<CallIcon />} href={`tel:${restaurant.phoneTel}`} sx={{ ml: 1 }}>
                Order Now
              </Button>
            </Box>
            <IconButton sx={{ display: { md: 'none' } }} onClick={() => setOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 280, p: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <List>
          {links.map((l) => (
            <ListItemButton key={l.href} component="a" href={l.href} onClick={() => setOpen(false)}>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
        <Button variant="contained" fullWidth startIcon={<CallIcon />} href={`tel:${restaurant.phoneTel}`}>
          Call {restaurant.phone}
        </Button>
      </Drawer>
    </>
  );
}
