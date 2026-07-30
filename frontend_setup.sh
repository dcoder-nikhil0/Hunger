#!/usr/bin/env bash
set -e

echo "Creating Vite React + TypeScript frontend..."

npm create vite@latest frontend -- --template react-ts

cd frontend

npm install

npm install \
react-router-dom \
axios \
zustand \
@tanstack/react-query \
react-hook-form \
zod \
@hookform/resolvers \
framer-motion \
lucide-react \
react-hot-toast \
clsx \
tailwind-merge \
@supabase/supabase-js

npm install -D \
tailwindcss \
@tailwindcss/vite \
autoprefixer \
postcss \
eslint \
prettier

mkdir -p src/{assets/{icons,images,animations,lottie,svg},api,components/{common,ui,buttons,inputs,forms,cards,bottom-sheet,modal,navigation,loaders,restaurant,menu,cart,order,payment,profile,maps},constants,context,hooks,layouts,lib,pages/{Splash,Onboarding,Login,OTP,Home,Search,Restaurant,Menu,Cart,Checkout,Orders,OrderTracking,Notifications,Coupons,Wallet,Favorites,Address,Profile,Reviews,Settings,NotFound},routes,services,store,styles,types,utils,validations}

touch src/api/{axios.ts,auth.api.ts,restaurant.api.ts,menu.api.ts,cart.api.ts,order.api.ts,payment.api.ts,address.api.ts,notification.api.ts,profile.api.ts}
touch src/store/{auth.store.ts,cart.store.ts,order.store.ts,restaurant.store.ts,notification.store.ts,location.store.ts}
touch src/constants/{api.ts,colors.ts,routes.ts,storage.ts,enums.ts}

cat > .env <<EOF
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_API_URL=http://localhost:8000
EOF

echo "Frontend setup complete!"