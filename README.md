Node.js backend for `newtest`

Setup
1. Copy `.env.example` to `.env` and set values (DB credentials, JWT_SECRET).
2. Create the database and tables. You can run `backend/sql/schema.sql` in phpMyAdmin or via `mysql` CLI.

Install dependencies and start server:

```bash
cd backend
npm install
npm run dev  # requires nodemon, or use `npm start`
```

Endpoints
- `POST /api/auth/register` — body: `{name,email,password}`
- `POST /api/auth/login` — body: `{email,password}`
- `GET /api/users` — list users (id,name,email,created_at)

Notes
- This uses `mysql2` with a connection pool.
- If you're using XAMPP, keep MySQL running and use the same DB credentials from phpMyAdmin.
