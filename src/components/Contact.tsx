'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsIcon from '@mui/icons-material/Directions';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { restaurant } from '@/data/restaurant';

const rows = [
  { icon: <PlaceIcon />, label: 'Address', value: restaurant.address, sub: restaurant.plusCode },
  { icon: <CallIcon />, label: 'Phone / WhatsApp', value: restaurant.phone },
  { icon: <EmailIcon />, label: 'Email', value: restaurant.email },
  { icon: <AccessTimeIcon />, label: 'Hours', value: restaurant.hours, sub: restaurant.service.join(' · ') },
];

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow="VISIT US" title="Find Us on GT Road" sub="Right opposite COMSATS University, Jamilabad — easy parking and roadside collection." />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' }, gap: 4 }}>
          <Reveal x={-30} y={0}>
            <Stack spacing={2.5}>
              {rows.map((r) => (
                <Box key={r.label} sx={{ display: 'flex', gap: 2, p: 2.5, borderRadius: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ color: 'primary.main' }}>{r.icon}</Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="caption" color="text.secondary">{r.label}</Typography>
                    <Typography sx={{ fontWeight: 600, wordBreak: 'break-word' }}>{r.value}</Typography>
                    {r.sub && <Typography variant="caption" color="text.secondary">{r.sub}</Typography>}
                  </Box>
                </Box>
              ))}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" startIcon={<DirectionsIcon />} href={restaurant.mapsUrl} target="_blank">Get Directions</Button>
                <Button variant="outlined" startIcon={<CallIcon />} href={`tel:${restaurant.phoneTel}`}>Call Now</Button>
              </Stack>
            </Stack>
          </Reveal>
          <Reveal x={30} y={0}>
            <Box sx={{ borderRadius: 5, overflow: 'hidden', border: '1px solid', borderColor: 'divider', minHeight: { xs: 320, md: 460 }, height: '100%' }}>
              <iframe
                title="Chefs & Pulao Station map"
                src={restaurant.mapsEmbed}
                style={{ border: 0, width: '100%', height: '100%', minHeight: 320, filter: 'invert(0.9) hue-rotate(180deg) saturate(.8)' }}
                loading="lazy"
              />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
