# TODO Backend

## Tech
- Node.js
- Express.js
- MongoDB (Mongoose)

## Setup (local)
1. Install dependencies
```bash
cd todo-backend
npm install
```

2. Create `.env` file (you can copy `.env.sample`) and set `MONGO_URI`.

3. Start server
```bash
npm run dev
# or
npm start
```

## API Endpoints
- GET /api/todos
- POST /api/todos
- PUT /api/todos/:id
- PATCH /api/todos/:id/done
- DELETE /api/todos/:id

