'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { restaurant } from '@/data/restaurant';
import { aevrix } from './PosPitch';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 5 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems="center" textAlign={{ xs: 'center', md: 'left' }}>
          <Box>
            <Typography variant="h6" sx={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Chefs & Pulao Station</Typography>
            <Typography variant="body2" color="text.secondary">{restaurant.address}</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            {[
              { i: <InstagramIcon />, h: restaurant.instagram },
              { i: <FacebookIcon />, h: restaurant.facebook },
              { i: <YouTubeIcon />, h: restaurant.youtube },
              { i: <MusicNoteIcon />, h: restaurant.tiktok },
            ].map((s) => (
              <IconButton key={s.h} href={s.h} target="_blank" color="primary" aria-label="social">{s.i}</IconButton>
            ))}
          </Stack>
        </Stack>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 4 }}>
          Demo website designed & developed by <Link href={aevrix.site} target="_blank" color="primary">{aevrix.name}</Link>. Restaurant name, photos and details belong to their respective owner and are used for demonstration only.
        </Typography>
      </Container>
    </Box>
  );
}
