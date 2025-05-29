
# Frontend - My Personal Portfolio

🚀 **Modern, responsive, and high-performance personal portfolio** built with Vue 3, Vite, TypeScript, and Tailwind CSS. This frontend seamlessly integrates a secure contact form connected to a FastAPI backend, featuring reCAPTCHA v3 verification and rate limiting to prevent spam.

---

## 🌟 Features

- Fully **responsive** and clean UI with reusable Vue 3 components  
- **Contact form** with:  
  - Integration to FastAPI backend API  
  - Google reCAPTCHA v3 for spam protection  
  - Rate limiting handling (max 3 submissions per minute)  
  - User-friendly modals showing success/error messages dynamically  
- Environment variable driven configuration for easy deployment  
- Smooth UX with loading states and error handling  
- Hosted and optimized for production on **Vercel**

---

## 🛠 Technologies

- [Vue 3](https://vuejs.org/) — Frontend framework  
- [Vite](https://vitejs.dev/) — Build tool and dev server  
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework  
- [TypeScript](https://www.typescriptlang.org/) — Typed JavaScript  
- [Axios](https://axios-http.com/) — HTTP client for API calls  
- [vue-recaptcha-v3](https://github.com/ambians/vue-recaptcha-v3) — Google reCAPTCHA v3 integration

---

## ⚙️ Setup and Run Locally

1. **Clone the repo:**

```bash
git clone <your-repo-url>
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file** in the root with:

```env
VITE_BACKEND_URL=https://<your-backend-service>.onrender.com
VITE_RECAPTCHA_SITE_KEY=<your-recaptcha-site-key>
```

4. **Start development server:**

```bash
npm run dev
```

5. **Build for production:**

```bash
npm run build
```

6. **Preview production build locally:**

```bash
npm run preview
```

---

## 🚀 Deployment

- This project is **deployed on Vercel** for blazing fast performance.  
- Make sure to configure the following environment variables in your Vercel dashboard:  
  - `VITE_BACKEND_URL`  
  - `VITE_RECAPTCHA_SITE_KEY`  
- The contact form requires the backend API to be running and accessible from the frontend.

---

## 📝 Notes

- The contact form sends the reCAPTCHA token in the request header (`recaptcha-token`) to the backend for verification.  
- Rate limiting restricts form submissions to 3 per minute per IP to avoid spam.  
- Modals provide clear feedback on success or errors (including reCAPTCHA failures or too many requests).  

---

## 📄 License

This project is licensed under the MIT License.
