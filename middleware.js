/*
 * @Date: 2024-09-05 12:01:14
 * @Description: 功能：
 */
import { next } from '@vercel/edge';
import { getImgUrls } from './functions/bing.mjs';

export default async function middleware(req) {
  const imgs = await getImgUrls();
  return next({
    headers: {
      'Referrer-Policy': 'origin-when-cross-origin',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'on',
      'Strict-Transport-Security':
        'max-age=31536000; includeSubDomains; preload',
    },
  });
}
