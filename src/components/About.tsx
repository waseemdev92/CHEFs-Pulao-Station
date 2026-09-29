'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const cards = [
  { icon: <RiceBowlIcon />, title: 'Yakhni Pulao', text: 'Traditional, aromatic pulao with kabab and chicken roast — the Pulao Station signature.' },
  { icon: <LocalFireDepartmentIcon />, title: 'Special Platters', text: 'BBQ & chicken platters with pulao for 2–6 people — perfect for families and groups.' },
  { icon: <LocalPizzaIcon />, title: 'Fast Food', text: 'Pizza, burgers, steaks and Chinese — all your fast-food cravings under one roof.' },
  { icon: <SetMealIcon />, title: 'Value Deals', text: 'Student, Family and Mighty deals — pizza, zinger burgers and drinks from Rs 800.' },
];

export default function About() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow="WHY CHEFS" title="Taste Taxila Talks About" sub="Chefs & Pulao Station is a platter specialist, yakhni pulao spot and fast food restaurant — dine in, take away or get it delivered." />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 3 }}>
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }} style={{ height: '100%' }}>
                <Box sx={{ p: 3, height: '100%', borderRadius: 5, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: 3, display: 'grid', placeItems: 'center', bgcolor: 'primary.main', color: 'primary.contrastText', mb: 2 }}>
                    {c.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1 }}>{c.title}</Typography>
                  <Typography color="text.secondary" variant="body2">{c.text}</Typography>
                </Box>
              </motion.div>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
