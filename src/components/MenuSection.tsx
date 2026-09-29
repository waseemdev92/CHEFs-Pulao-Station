'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { AnimatePresence, motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SectionTitle from './SectionTitle';
import SafeImage from './SafeImage';
import { menu, menuCards, restaurant } from '@/data/restaurant';

export default function MenuSection() {
  const [tab, setTab] = useState(menu[0].id);
  const current = menu.find((m) => m.id === tab)!;
  return (
    <Box id="menu" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow="OUR MENU" title="Something for Every Craving" sub="Pulao, BBQ platters, pizza, burgers & great-value deals — tap any dish to order on WhatsApp." />
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ mb: 4, '& .MuiTabs-flexContainer': { justifyContent: { md: 'center' } } }}
        >
          {menu.map((m) => <Tab key={m.id} value={m.id} label={m.label} sx={{ fontWeight: 700 }} />)}
        </Tabs>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)' }, gap: 2.5 }}>
              {current.items.map((it) => (
                <Box key={it.name} sx={{ p: 3, borderRadius: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{it.name}</Typography>
                      {it.tag && <Chip size="small" icon={<LocalFireDepartmentIcon />} color="secondary" label={it.tag} sx={{ mt: 0.5 }} />}
                    </Box>
                    {it.price && <Typography variant="h6" color="primary" sx={{ fontWeight: 800, whiteSpace: 'nowrap' }}>{it.price}</Typography>}
                  </Box>
                  {it.desc && <Typography variant="body2" color="text.secondary">{it.desc}</Typography>}
                  {it.sizes && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {it.sizes.map(([k, v]) => (
                        <Box key={k} sx={{ px: 1.5, py: 0.5, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(244,161,29,0.08)' }}>
                          <Typography variant="caption" color="text.secondary">{k} </Typography>
                          <Typography component="span" variant="body2" color="primary" sx={{ fontWeight: 800 }}>Rs {v}</Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                  <Button
                    size="small" variant="outlined" color="success" startIcon={<WhatsAppIcon />} sx={{ alignSelf: 'flex-start', mt: 'auto' }}
                    href={`https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(`Assalam-o-Alaikum, I would like to order: ${it.name}`)}`} target="_blank"
                  >
                    Order on WhatsApp
                  </Button>
                </Box>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 8, mb: 3 }}>Official Menu Cards</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 2, alignItems: 'start' }}>
          {menuCards.map((c) => (
            <Box key={c.id} component="a" href={c.local} target="_blank" sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider', display: 'block', '&:empty': { display: 'none' } }}>
              <SafeImage local={c.local} remote={c.remote} alt={c.alt} sx={{ height: 'auto' }} />
            </Box>
          ))}
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 4 }}>
          Prices as per the restaurant&apos;s official menu. Prices & availability may change — please confirm on call.
        </Typography>
      </Container>
    </Box>
  );
}
