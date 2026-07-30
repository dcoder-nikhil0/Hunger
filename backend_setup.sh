#!/usr/bin/env bash
set -e

echo "Creating FastAPI backend..."

mkdir -p backend
cd backend

python -m venv venv

source venv/Scripts/activate || true

# pip install --upgrade pip

pip install \
fastapi \
uvicorn \
sqlalchemy \
alembic \
psycopg2-binary \
python-dotenv \
pydantic \
python-multipart \
passlib[bcrypt] \
python-jose \
supabase

mkdir -p app/{api/{auth,restaurants,menu,cart,orders,payment,addresses,profile,notification,upload},core,database/{migrations,seed},middleware,models,repositories,schemas,services,websocket,workers,utils,tests}

cat > app/main.py <<EOF
from fastapi import FastAPI

app = FastAPI(title="Hungrr API")

@app.get("/")
def root():
    return {"status":"running"}
EOF

touch app/core/{config.py,security.py,auth.py,database.py,logger.py,dependencies.py}

pip freeze > requirements.txt

cat > .env <<EOF
DATABASE_URL=
SUPABASE_URL=
SUPABASE_KEY=
SECRET_KEY=
EOF

echo "Backend setup complete!"