'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

// Tries the local file first (npm run fetch-images), then the original remote link, then hides itself.
export default function SafeImage({
  local, remote, alt, sx,
}: { local: string; remote?: string; alt: string; sx?: SxProps<Theme> }) {
  const [src, setSrc] = useState(local);
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => (src === local && remote ? setSrc(remote) : setFailed(true))}
      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...(sx as object) }}
    />
  );
}
