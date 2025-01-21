# Use Bun as base image
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy project files
COPY . .

# Build the Next.js application
RUN bun run build

# Expose port
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["bun", "run", "start"]