# Hunger

``` bash
hungrr/
│
├── frontend/
│   ├── public/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── fonts/
│   │   ├── favicon.ico
│   │   └── manifest.json
│   │
│   ├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── animations/
│   │   ├── lottie/
│   │   └── svg/
│   │
│   ├── api/
│   │   ├── axios.ts
│   │   ├── auth.api.ts
│   │   ├── restaurant.api.ts
│   │   ├── menu.api.ts
│   │   ├── cart.api.ts
│   │   ├── order.api.ts
│   │   ├── payment.api.ts
│   │   ├── address.api.ts
│   │   ├── notification.api.ts
│   │   └── profile.api.ts
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── buttons/
│   │   ├── inputs/
│   │   ├── forms/
│   │   ├── cards/
│   │   ├── bottom-sheet/
│   │   ├── modal/
│   │   ├── navigation/
│   │   ├── loaders/
│   │   ├── restaurant/
│   │   ├── menu/
│   │   ├── cart/
│   │   ├── order/
│   │   ├── payment/
│   │   ├── profile/
│   │   └── maps/
│   │
│   ├── constants/
│   │   ├── colors.ts
│   │   ├── routes.ts
│   │   ├── api.ts
│   │   ├── storage.ts
│   │   └── enums.ts
│   │
│   ├── context/
│   │
│   ├── hooks/
│   │
│   ├── layouts/
│   │   ├── AuthLayout.tsx
│   │   ├── MainLayout.tsx
│   │   └── EmptyLayout.tsx
│   │
│   ├── lib/
│   │
│   ├── pages/
│   │
│   │   ├── Splash/
│   │   ├── Onboarding/
│   │   ├── Login/
│   │   ├── OTP/
│   │   ├── Home/
│   │   ├── Search/
│   │   ├── Restaurant/
│   │   ├── Menu/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Orders/
│   │   ├── OrderTracking/
│   │   ├── Notifications/
│   │   ├── Coupons/
│   │   ├── Wallet/
│   │   ├── Favorites/
│   │   ├── Address/
│   │   ├── Profile/
│   │   ├── Reviews/
│   │   ├── Settings/
│   │   └── NotFound/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   ├── store/
│   │   ├── auth.store.ts
│   │   ├── cart.store.ts
│   │   ├── order.store.ts
│   │   ├── restaurant.store.ts
│   │   ├── notification.store.ts
│   │   └── location.store.ts
│   │
│   ├── styles/
│   │
│   ├── types/
│   │
│   ├── utils/
│   │
│   ├── validations/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│
│   ├── app/
│   │
│   ├── api/
│   │   ├── auth/
│   │   ├── restaurants/
│   │   ├── menu/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── payment/
│   │   ├── addresses/
│   │   ├── profile/
│   │   ├── notification/
│   │   └── upload/
│   │
│   ├── core/
│   │   ├── config.py
│   │   ├── security.py
│   │   ├── auth.py
│   │   ├── database.py
│   │   ├── logger.py
│   │   └── dependencies.py
│   │
│   ├── database/
│   │   ├── migrations/
│   │   ├── seed/
│   │   └── init_db.py
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │
│   ├── repositories/
│   │
│   ├── schemas/
│   │
│   ├── services/
│   │
│   ├── websocket/
│   │
│   ├── workers/
│   │
│   ├── utils/
│   │
│   ├── tests/
│   │
│   ├── main.py
│   │
│   └── requirements.txt
│
├── supabase/
│   ├── migrations/
│   ├── functions/
│   ├── storage/
│   ├── policies/
│   └── seed.sql
│
├── docs/
│   ├── api/
│   ├── architecture/
│   ├── database/
│   ├── ui/
│   └── deployment/
│
├── scripts/
│   ├── setup.sh
│   ├── dev.sh
│   ├── build.sh
│   └── deploy.sh
│
├── .env
├── .gitignore
├── docker-compose.yml
├── README.md
└── LICENSE

```