# Amazing List

An application for displaying an infinite list of users using Vue 3 and TypeScript.

## Live Demo

Explore the application here: [Amazing List](https://amazing-list.vercel.app/)

## Documentation

Read the full documentation here: [Amazing List Documentation](https://amazing-list-docs.vercel.app/)

## Requirements

- Node.js v18.0.0 or higher
- npm v7.0.0 or higher

## Technologies

- Vue 3
- TypeScript
- Vite
- TypeDoc
- ESLint
- Prettier
- Husky
- RandomUser.me API

## Installation

```bash
# Clone repository
git clone https://github.com/helloris25/amazing-list.git

# Navigate to project directory
cd amazing-list

# Install dependencies
npm install
```

## Running

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Additional Commands

```bash
# Type checking
npm run typecheck

# Type checking in watch mode
npm run typecheck:watch

# Generate documentation
npm run docs

# Generate documentation in watch mode
npm run docs:dev
```

## Features

- Infinite scroll user list
- Automatic data loading on scroll
- Performance optimization through throttling
- URL state synchronization (page number)
- API error handling
- Responsive design

## Formatting and Linting Commands

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Run linter
npm run lint

# Fix linting errors
npm run lint:fix
```

## Project Structure

```
src/
├── components/          # Vue components
│   └── UserCard.vue    # User card component
├── composables/        # Vue composables
│   └── useUsers/       # Users logic
├── config/            # Configuration
│   └── settings/      # App settings
├── services/          # Services for API
│   └── userApi/       # RandomUser.me API client
├── utils/             # Utilities
│   └── throttle.ts    # Throttle function
└── App.vue            # Root component
```

## API

The application uses [RandomUser.me API](https://randomuser.me/) to fetch user data.

## Documentation

Documentation is generated using TypeDoc and is available in the `docs` directory after running `npm run docs`.

## Development

### Type Checking

```bash
npm run typecheck
```

### Workflow

1. Start the project in development mode:
```bash
npm run dev
```

2. Before committing, ensure:
- Type checks pass: `npm run typecheck`
- Code is formatted: `npm run format`
- Linter shows no errors: `npm run lint`

### Working with API

The `services/userApi` module is used to work with RandomUser.me API. All API requests should be made through this service.

### Code Documentation

Use TypeDoc comments for documentation. Documentation automatically updates when running:
```bash
npm run docs:dev
```

### Application Configuration

Main application settings are located in `config/settings`. Edit files in this directory to change application behavior.

