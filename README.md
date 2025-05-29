# Frontend - My Personal Portfolio

This is the frontend of my personal portfolio, built with Vue 3, Vite, TypeScript, and Tailwind CSS. It includes a contact form that connects to my FastAPI backend.

## Features

- Responsive and modern portfolio layout
- Contact form integrated with backend API
- Built with reusable and clean Vue 3 components
- Hosted on Vercel for optimal performance

## Technologies

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)

## Setup and Run

1. Clone the repository:

```bash
git clone <your-repo-url>
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add the backend URL:

```env
VITE_API_URL=https://<your-backend-service>.onrender.com
```

4. Run the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Deployment

Deployed on [Vercel](https://vercel.com/). Ensure environment variables are set properly on Vercel.

## License

This project is licensed under the MIT License.
