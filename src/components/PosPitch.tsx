'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import KitchenIcon from '@mui/icons-material/Kitchen';
import InventoryIcon from '@mui/icons-material/Inventory2';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export const aevrix = {
  name: 'Aevrix AI Technologies',
  phone: '0347 8520705',
  wa: '923478520705',
  email: 'aevrixtechnologies@gmail.com',
  site: 'https://aevrixai.vercel.app',
};

const features = [
  { icon: <TableRestaurantIcon />, t: 'Tables, Dine-in & Takeaway', d: 'Table management, split bills, discounts and quick counter billing.' },
  { icon: <KitchenIcon />, t: 'Kitchen Order Tickets (KOT)', d: 'Orders print/appear in the kitchen instantly — fewer mistakes, faster service.' },
  { icon: <InventoryIcon />, t: 'Inventory & Recipe Costing', d: 'Track stock, wastage and per-dish cost so you know your real profit.' },
  { icon: <DeliveryDiningIcon />, t: 'Delivery & WhatsApp Orders', d: 'Manage rider orders and receive website/WhatsApp orders straight into your POS.' },
  { icon: <InsightsIcon />, t: 'Owner Dashboard', d: 'Daily sales, best sellers, staff and branch reports — on your phone, anywhere.' },
  { icon: <CloudOffIcon />, t: 'Works Even Offline', d: 'Load-shedding or internet down? Billing keeps running and syncs when back online.' },
];

const compare = [
  ['Built around YOUR menu & workflow', true, false],
  ['Urdu + English receipts', true, false],
  ['Website & WhatsApp order integration', true, false],
  ['Works offline, syncs automatically', true, false],
  ['You own your data — no lock-in', true, false],
  ['Direct local support (call / WhatsApp)', true, false],
  ['Custom features added on request', true, false],
  ['Transparent pricing, no hidden charges', true, false],
] as const;

export default function PosPitch() {
  return (
    <Box id="pos" sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg,#120C09 0%,#1b0f0a 50%,#120C09 100%)' }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow="A MESSAGE FROM AEVRIX" title="Now Let's Power Up Your Restaurant" sub="You've seen your new website. Here's what else we can build for Chefs & Pulao Station." />

        <Reveal>
          <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: 6, border: '1px solid', borderColor: 'primary.main', bgcolor: 'rgba(244,161,29,0.06)', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'auto 1fr' }, gap: 4, alignItems: 'center' }}>
            <motion.div animate={{ rotate: [0, -4, 4, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
              <Box sx={{ width: 96, height: 96, borderRadius: 4, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'grid', placeItems: 'center', mx: { xs: 'auto', md: 0 } }}>
                <PointOfSaleIcon sx={{ fontSize: 56 }} />
              </Box>
            </motion.div>
            <Box>
              <Typography sx={{ mb: 1.5 }}>Assalam-o-Alaikum,</Typography>
              <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                We at <b>{aevrix.name}</b> have prepared this demo website exclusively for <b>Chefs & Pulao Station</b> to show how your restaurant can look and perform online. If you like it, we would be glad to take it live for you.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                In addition, we design and develop <b>custom Restaurant POS systems</b>. If you are interested, we would be happy to build a complete POS tailored to your operations — billing, kitchen, inventory and reporting in one place — so you can run and grow your business with more control and less effort.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" size="large" startIcon={<WhatsAppIcon />} href={`https://wa.me/${aevrix.wa}?text=${encodeURIComponent('Assalam-o-Alaikum, I am interested in the website & POS system for Chefs & Pulao Station.')}`} target="_blank">
                  Chat on WhatsApp
                </Button>
                <Button variant="outlined" size="large" startIcon={<CallIcon />} href={`tel:${aevrix.phone.replace(/\s/g, '')}`}>
                  {aevrix.phone}
                </Button>
              </Stack>
            </Box>
          </Box>
        </Reveal>

        <Typography variant="h4" sx={{ textAlign: 'center', mt: 10, mb: 4 }}>What Your POS Will Do</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: 3 }}>
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 0.08}>
              <motion.div whileHover={{ y: -6 }} style={{ height: '100%' }}>
                <Box sx={{ p: 3, height: '100%', borderRadius: 5, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{f.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{f.t}</Typography>
                  <Typography variant="body2" color="text.secondary">{f.d}</Typography>
                </Box>
              </motion.div>
            </Reveal>
          ))}
        </Box>

        <Typography variant="h4" sx={{ textAlign: 'center', mt: 10, mb: 1 }}>Why Aevrix POS Is Better</Typography>
        <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>Compared with generic, off-the-shelf POS software</Typography>
        <Reveal>
          <Box sx={{ borderRadius: 5, overflow: 'hidden', border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 64px 64px', sm: '1fr 140px 140px' }, px: { xs: 2, sm: 3 }, py: 2, bgcolor: 'rgba(244,161,29,0.12)', fontWeight: 800 }}>
              <Typography sx={{ fontWeight: 800 }}>Feature</Typography>
              <Typography sx={{ fontWeight: 800, textAlign: 'center', color: 'primary.main' }}>Aevrix</Typography>
              <Typography sx={{ fontWeight: 800, textAlign: 'center' }} color="text.secondary">Others</Typography>
            </Box>
            {compare.map(([label, a, b], i) => (
              <Box key={label} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 64px 64px', sm: '1fr 140px 140px' }, px: { xs: 2, sm: 3 }, py: 1.6, alignItems: 'center', borderTop: '1px solid', borderColor: 'divider', bgcolor: i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <Typography variant="body2">{label}</Typography>
                <Box sx={{ textAlign: 'center', color: 'success.main' }}>{a ? <CheckCircleIcon /> : <CancelIcon />}</Box>
                <Box sx={{ textAlign: 'center', color: 'text.disabled' }}>{b ? <CheckCircleIcon /> : <CancelIcon />}</Box>
              </Box>
            ))}
          </Box>
        </Reveal>

        <Reveal>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1, color: 'primary.main' }}>
              <StorefrontIcon /><LanguageIcon />
            </Stack>
            <Typography variant="h5">Website + POS + Automation — one trusted tech partner.</Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>Engineering Intelligence. Empowering Businesses.</Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
