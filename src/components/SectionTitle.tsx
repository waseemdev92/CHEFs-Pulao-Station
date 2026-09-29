'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';

export default function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, maxWidth: 720, mx: 'auto' }}>
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 4, fontWeight: 700 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mt: 0.5 }}>
          {title}
        </Typography>
        <Box sx={{ width: 64, height: 4, borderRadius: 2, bgcolor: 'primary.main', mx: 'auto', my: 2 }} />
        {sub && <Typography color="text.secondary">{sub}</Typography>}
      </Box>
    </Reveal>
  );
}
