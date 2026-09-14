# ==========================================
# STAGE 1: Build Stage
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build-time environment variables for Vite Supabase frontend client
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY

ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

# Copy application source code
COPY . .

# Build static production assets
RUN npm run build

# ==========================================
# STAGE 2: Production Runtime Stage
# ==========================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Security Hardening: Create non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy compiled frontend dist and backend server files from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server

# Ensure runtime directory permissions
RUN mkdir -p /app/server/data && chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

EXPOSE 5000

# Container Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/health || exit 1

CMD ["node", "server/server.js"]
