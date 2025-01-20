# FiguTrack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`, streamlined for figure collection pre-order management.

## About

FiguTrack addresses the challenges of managing anime figure pre-orders across multiple retailers. While comprehensive databases like MyFigureCollection (MFC) exist for tracking figure releases, FiguTrack focuses specifically on the financial and logistical aspects of collecting:

- Track payment deadlines and upcoming financial commitments
- Visualize monthly spending across different retailers
- Identify shipping consolidation opportunities
- Manage pre-orders with varying payment timelines

## Tech Stack

We've kept this project intentionally simple, using only the essential T3 Stack components needed for our MVP:

- [Next.js](https://nextjs.org) - React framework for the web application
- [Tailwind CSS](https://tailwindcss.com) - For styling and UI components
- IndexedDB - Client-side storage for offline-first functionality

While the T3 Stack provides additional technologies (tRPC, Prisma, NextAuth.js, Drizzle), we're focusing on a streamlined client-side application for the initial release.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/figutrack.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
src/
├── app/           # Next.js app router
├── app/           # Reusable UI components
├── styles/        # Global styles and Tailwind config
└── utils/         # Utility functions and IndexedDB setup
```

## Features

Current implementation focuses on core functionality:

- Pre-order tracking
- Payment deadline management
- Monthly budget visualization


## Development

We prioritize simplicity and offline-first functionality. The application uses IndexedDB for local storage, making it immediately useful without requiring user accounts or server infrastructure.

## Potential Future Plans

- Figure Search
- MFC integration
- User accounts and cloud sync
- Shipping consolidation opportunities
- Price tracking across retailers
- Collection sharing features
- Community features
- Integration with figure databases

## Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

[MIT](https://choosealicense.com/licenses/mit/)