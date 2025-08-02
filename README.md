# Sean Stevens Take Home Exercise

## Frameworks/Tools

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **React Router DOM** - Client-side routing
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:theseanz/sean-stevens-socotra-takehome.git
   cd sean-stevens-socotra-takehome
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Open your browser**

   The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Application header
│   ├── MultiStepForm.tsx # Main form container
│   ├── QuoteProgress.tsx # Progress tracking sidebar
│   └── Toast.tsx       # Notification component
├── pages/              # Form step pages
│   ├── LandingPage.tsx # Welcome/intro page
│   ├── PersonalInfo.tsx # Personal information form
│   ├── AddressDetails.tsx # Address information
│   ├── VehicleInformation.tsx # Vehicle details
│   ├── CoverageOptions.tsx # Insurance coverage
│   ├── ReviewQuote.tsx # Review all information
│   └── Success.tsx     # Confirmation page
├── constants/          # Application constants
│   └── steps.ts        # Step definitions and navigation
├── types/              # TypeScript type definitions
│   └── index.ts        # Form data interfaces
└── App.tsx             # Main application component
```

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 with PostCSS integration. Custom theme definitions are in `src/App.css` using the `@theme` directive (though I could not get this to work).
