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

# Expose port
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["bun", "run", "dev"]
