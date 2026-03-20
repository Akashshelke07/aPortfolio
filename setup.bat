@echo off
cd d:\Portfolio
npx -y create-vite@latest . --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react react-scroll clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-tabs @radix-ui/react-toast
echo Setup complete
