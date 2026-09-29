'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SafeImage from './SafeImage';
import { gallery, restaurant } from '@/data/restaurant';

const stats = [
  { icon: <StarIcon />, value: `${restaurant.googleRating}/5`, label: `${restaurant.googleReviews} Google reviews` },
  { icon: <LocalDiningIcon />, value: 'Rs 290+', label: 'Pulao, BBQ & deals' },
  { icon: <AccessTimeIcon />, value: '1 AM', label: 'Open late' },
  { icon: <DeliveryDiningIcon />, value: 'Delivery', label: 'Dine-in · Takeaway' },
];

export default function Hero() {
  const bg = gallery[0];
  return (
    <Box id="home" sx={{ position: 'relative', minHeight: { xs: 'auto', md: '100vh' }, pt: { xs: 16, md: 18 }, pb: { xs: 8, md: 10 }, overflow: 'hidden',
      background: 'radial-gradient(1200px 600px at 80% 0%, rgba(229,67,43,.25), transparent), radial-gradient(900px 500px at 0% 100%, rgba(244,161,29,.18), transparent), #120C09' }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: { xs: 5, md: 6 }, alignItems: 'center' }}>
          <Box>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Chip icon={<StarIcon />} color="primary" variant="outlined" label="Taxila & Wah Cantt's favourite platter house" sx={{ mb: 2, maxWidth: '100%' }} />
              <Typography variant="h1" sx={{ fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' }, lineHeight: 1.05 }}>
                Chefs <Box component="span" sx={{ color: 'primary.main' }}>&</Box> Pulao Station
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 2, fontWeight: 400, maxWidth: 560 }}>
                Platters specialist, authentic yakhni pulao & fast food — pizza, steaks, Chinese and burgers. Served fresh, opposite COMSATS University, GT Road.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button size="large" variant="contained" startIcon={<CallIcon />} href={`tel:${restaurant.phoneTel}`}>
                  Call to Order
                </Button>
                <Button size="large" variant="outlined" color="success" startIcon={<WhatsAppIcon />} href={`https://wa.me/${restaurant.whatsapp}`} target="_blank">
                  WhatsApp
                </Button>
                <Button size="large" variant="text" color="inherit" startIcon={<RestaurantMenuIcon />} href="#menu">
                  View Menu
                </Button>
              </Stack>
            </motion.div>
          </Box>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <Box sx={{ position: 'relative', mx: 'auto', maxWidth: 460 }}>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
                <Box sx={{ borderRadius: '32px', overflow: 'hidden', aspectRatio: '1 / 1', border: '3px solid', borderColor: 'primary.main',
                  boxShadow: '0 30px 80px rgba(229,67,43,.35)', bgcolor: 'background.paper',
                  background: 'linear-gradient(135deg,#3a1d10,#1D1410)' }}>
                  <SafeImage local={bg.local} remote={bg.remote} alt={bg.alt} />
                </Box>
              </motion.div>
              <Box sx={{ position: 'absolute', bottom: -18, left: -12, bgcolor: 'primary.main', color: 'primary.contrastText', px: 2.5, py: 1.2, borderRadius: 3, boxShadow: 6 }}>
                <Typography sx={{ fontWeight: 800, lineHeight: 1 }}>BBQ Platters</Typography>
                <Typography variant="caption">Chicken Pulao from Rs 490</Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ mt: { xs: 8, md: 10 }, display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 2 }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
              <Box sx={{ p: 2, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid', borderColor: 'divider', display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>{s.icon}</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, lineHeight: 1.1 }}>{s.value}</Typography>
                  <Typography variant="caption" color="text.secondary">{s.label}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
