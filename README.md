# Tech.Care — Patient Dashboard

Coalition Technologies Front End Skills Test submission. A single-page React app that
fetches live patient data and displays Jessica Taylor's profile, vitals, blood pressure
history, and diagnostic records.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Chart.js (`react-chartjs-2`) for the blood pressure chart

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs a static bundle to dist/ (dist/index.html + assets)
npm run preview  # serve the production build locally
```

## Data source

Patient data comes from Coalition Technologies' public FED skills-test API
(`https://fedskillstest.coalitiontechnologies.workers.dev`), authenticated with HTTP
Basic Auth using the test credentials documented in the API's Postman collection. The
app fetches the full patient list on load and renders only Jessica Taylor's record.
