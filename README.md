# Rainwater Harvesting Calculator

A web application to help Indian homeowners calculate rainwater harvesting potential and design water storage systems.

## What is this?

This project calculates:
- How much rainwater a roof can collect per year
- What size tank you need based on monthly rainfall patterns
- Cost estimates for setting up a rainwater harvesting system
- Whether artificial recharge (underground water replenishment) is feasible for your location

It's based on CGWB (Central Ground Water Board) guidelines and uses rainfall data for Indian cities.

## Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Hook Form + Zod (form validation)
- Shadcn/ui components

**Backend:**
- Node.js + Express
- PostgreSQL + Drizzle ORM
- jsPDF (PDF generation)

## Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Install & Run

```bash
git clone https://github.com/yourname/rainwater-harvesting
cd rainwater-harvesting
npm install

# Set up database
npm run db:push

# Start dev server
npm run dev
```

Frontend runs on http://localhost:5173  
Backend runs on http://localhost:5000

## Features

- **Multi-step calculator** - Input building details, get detailed analysis
- **Save results** - View calculation history and past submissions
- **PDF reports** - Download analysis as PDF
- **City-specific data** - Uses real rainfall patterns for your location
- **Mobile-friendly** - Works on phones and tablets

## How the calculation works

1. Takes your roof area, location, and household size
2. Looks up monthly rainfall data for your city
3. Calculates runoff based on roof type (RCC, GI, etc.)
4. Determines storage tank size needed
5. Estimates costs and payback period

## Folder Structure

```
├── client/          # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── pages/        # Page components
│       └── lib/          # utilities
├── server/          # Express backend
│   ├── routes.ts
│   ├── storage.ts
│   └── utils/
└── shared/          # Types and validation
```

## API Endpoints

**POST /api/calculate** - Run a calculation
```json
{
  "userInputs": {
    "name": "John",
    "location": "Delhi",
    "pincode": "110001",
    "roofArea": 100,
    "roofType": "RCC",
    "dwellers": 4,
    "purpose": "Domestic",
    "soilType": "Loamy",
    "budget": "Medium"
  },
  "calculationType": "rainwater"
}
```

**GET /api/history** - Get past calculations  
**GET /api/submission/:id** - Get specific calculation  
**POST /api/generate-pdf** - Download as PDF  

## Future improvements

- [ ] User authentication
- [ ] Compare multiple designs
- [ ] Live government subsidy information
- [ ] Contractor recommendations
- [ ] Mobile app

## Learning outcomes

This project helped me understand:
- Full-stack web development (React + Node.js)
- Database design with PostgreSQL
- Form validation and error handling
- Hydrological calculations
- Building a real-world application

## Author

[Your Name] - 3rd Year IT Student

## License

MIT