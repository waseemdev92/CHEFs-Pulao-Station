import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    ember: string;
  }
  interface PaletteOptions {
    ember?: string;
  }
}

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: { main: '#F4A11D', contrastText: '#1A0F08' },
    secondary: { main: '#E5432B' },
    ember: '#E5432B',
    background: { default: '#120C09', paper: '#1D1410' },
    text: { primary: '#FFF4E6', secondary: '#C9B8A6' },
    divider: 'rgba(244,161,29,0.18)',
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'var(--font-body), "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: 'var(--font-display), serif', fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontFamily: 'var(--font-display), serif', fontWeight: 800, letterSpacing: '-0.01em' },
    h3: { fontFamily: 'var(--font-display), serif', fontWeight: 700 },
    h4: { fontFamily: 'var(--font-display), serif', fontWeight: 700 },
    h5: { fontFamily: 'var(--font-display), serif', fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 999, paddingInline: 24, paddingBlock: 10 } },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: 'none', border: '1px solid rgba(244,161,29,0.15)' },
      },
    },
    MuiCssBaseline: {
      styleOverrides: { html: { scrollBehavior: 'smooth' }, body: { overflowX: 'hidden' } },
    },
  },
});
