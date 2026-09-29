'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { restaurant } from '@/data/restaurant';

export default function Reviews() {
  const items = [
    { icon: <GoogleIcon />, big: `${restaurant.googleRating}`, sub: `${restaurant.googleReviews} Google reviews`, rating: true },
    { icon: <ThumbUpIcon />, big: `${restaurant.fbRecommend}%`, sub: `recommend us on Facebook (${restaurant.fbReviews} reviews)` },
    { icon: <FacebookIcon />, big: restaurant.fbFollowers, sub: 'Facebook followers' },
  ];
  return (
    <Box id="reviews" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow="LOVED BY CUSTOMERS" title="Rated & Recommended" sub="What the Taxila & Wah community says about us online." />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
          {items.map((it, i) => (
            <Reveal key={it.sub} delay={i * 0.1}>
              <Box sx={{ p: 4, textAlign: 'center', borderRadius: 5, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', height: '100%' }}>
                <Box sx={{ color: 'primary.main', mb: 1 }}>{it.icon}</Box>
                <Typography variant="h2" sx={{ fontSize: '3.2rem' }}>{it.big}</Typography>
                {it.rating && <Rating value={restaurant.googleRating} precision={0.1} readOnly />}
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>{it.sub}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 5 }}>
          <Button variant="outlined" startIcon={<InstagramIcon />} href={restaurant.instagram} target="_blank">Follow on Instagram</Button>
          <Button variant="outlined" startIcon={<FacebookIcon />} href={restaurant.facebook} target="_blank">Like on Facebook</Button>
        </Box>
      </Container>
    </Box>
  );
}
