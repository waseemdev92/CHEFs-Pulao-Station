'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import SafeImage from './SafeImage';
import { gallery } from '@/data/restaurant';

export default function Gallery() {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <Box id="gallery" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow="GALLERY" title="Fresh From Our Kitchen" sub="A look at what's being served at Chefs & Pulao Station." />
        <Box sx={{ columnCount: { xs: 2, sm: 3, md: 4 }, columnGap: 2 }}>
          {gallery.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
              whileHover={{ scale: 1.03 }}
              style={{ breakInside: 'avoid', marginBottom: 16 }}
            >
              <Box onClick={() => setSel(i)} sx={{ cursor: 'pointer', borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', minHeight: 80 }}>
                <SafeImage local={g.local} remote={g.remote} alt={g.alt} sx={{ height: 'auto' }} />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
      <Dialog open={sel !== null} onClose={() => setSel(null)} maxWidth="md" PaperProps={{ sx: { borderRadius: 4, overflow: 'hidden' } }}>
        <IconButton onClick={() => setSel(null)} sx={{ position: 'absolute', right: 8, top: 8, bgcolor: 'rgba(0,0,0,.5)' }}><CloseIcon /></IconButton>
        {sel !== null && <SafeImage local={gallery[sel].local} remote={gallery[sel].remote} alt={gallery[sel].alt} sx={{ height: 'auto', maxHeight: '85vh' }} />}
      </Dialog>
    </Box>
  );
}
