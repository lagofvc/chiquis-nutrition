# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite + React website for a nutrition store (Chiquis Nutrition) that sells healthy food, beverages, and supplements.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React
- **Language**: JavaScript/TypeScript (to be determined)
- **Deployment**: Netlify

## Key Features & Pages

The website includes the following main sections:

1. **Products**: Display products with pictures and prices for:
   - Healthy food
   - Beverages
   - Supplements

2. **Location**: Store location information

3. **Contact Us**: Contact information and form

4. **Order Now**: Ordering functionality for products

## Development Commands

Once the project is initialized:

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Architecture Notes

- Keep product data structured to support images, prices, categories (food/beverages/supplements)
- Consider separate components for product listings, product cards, and product details
- Contact and location pages should be easily updatable
- Order flow should be clear and user-friendly
