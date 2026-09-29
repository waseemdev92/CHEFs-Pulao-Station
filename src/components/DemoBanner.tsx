'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function DemoBanner() {
  return (
    <Box
      sx={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 36, zIndex: (t) => t.zIndex.appBar + 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 1,
        background: 'linear-gradient(90deg,#E5432B,#F4A11D)', color: '#1A0F08',
      }}
    >
      <AutoAwesomeIcon sx={{ fontSize: 16 }} />
      <Typography variant="caption" sx={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        Demo website prepared for you by{' '}
        <Link href="#pos" color="inherit" underline="always">Aevrix AI Technologies</Link>
      </Typography>
    </Box>
  );
}
