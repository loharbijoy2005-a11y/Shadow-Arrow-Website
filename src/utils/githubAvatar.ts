// Dynamic GitHub Avatar URL provider for Founder Bijoy Lohar
export const GITHUB_USERNAME = 'loharbijoy2005-a11y';

export const getGitHubAvatarUrl = (cacheBust = false) => {
  return cacheBust 
    ? `https://github.com/${GITHUB_USERNAME}.png?t=${Date.now()}` 
    : `https://github.com/${GITHUB_USERNAME}.png`;
};

export const FALLBACK_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="100%" height="100%" fill="%230F172A"/><text x="50%" y="55%" font-family="sans-serif" font-size="56" font-weight="bold" fill="%233B82F6" text-anchor="middle" dominant-baseline="middle">BL</text></svg>`;
