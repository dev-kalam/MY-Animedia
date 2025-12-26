const express = require('express');
const cors = require('cors');
const path = require('path');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const reviewsRouter = require('./routes/reviews');
const favoritesRouter = require('./routes/favorites');
const listsRouter = require('./routes/lists');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api/lists', listsRouter);

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Fallback to index.html for non-API routes (so visiting http://localhost:3000 serves the frontend)
app.get('*', (req, res, next) => {
	if (req.path.startsWith('/api')) return next();
	res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
