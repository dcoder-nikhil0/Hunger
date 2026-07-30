from fastapi import FastAPI

app = FastAPI(title="Hungrr API")

@app.get("/")
def root():
    return {"status":"running"}
