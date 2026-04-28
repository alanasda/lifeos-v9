# Variáveis de ambiente do LifeOS V9 no Render

Crie o Web Service do backend com estas configurações:

- Name: `lifeos-v9-api`
- Root Directory: `backend`
- Runtime: `Python 3`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn "main:create_app()" --bind 0.0.0.0:$PORT --workers 2 --timeout 120`

Variáveis para adicionar em Environment:

```text
FLASK_ENV=production
SECRET_KEY=<cole sua secret key>
ALLOWED_ORIGINS=https://lifeos-v9-frontend.onrender.com
SUPABASE_URL=<cole sua URL do Supabase>
SUPABASE_SERVICE_ROLE_KEY=<cole sua service role key>
FIREBASE_CREDENTIALS_JSON=<cole o JSON completo do Firebase em uma linha>
GROQ_API_KEY=<cole sua chave Groq>
AI_ONBOARDING_KEY=<cole sua chave Groq ou chave específica>
AI_PLANNING_KEY=<cole sua chave Groq ou chave específica>
AI_DAILY_KEY=<cole sua chave Groq ou chave específica>
WEBHOOK_EMAIL_ENABLED=false
```

O frontend deste pacote aponta para:

```text
https://lifeos-v9-api.onrender.com
```

Depois crie o Static Site:

- Name: `lifeos-v9-frontend`
- Root Directory: `frontend`
- Build Command: deixe vazio
- Publish Directory: `.`
