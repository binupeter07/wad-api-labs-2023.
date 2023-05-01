import express from 'express';
import Genre from './genresModel'
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', async (req, res) => {
    const genre = await Genre.find();
    res.status(200).json(genre);
});
export default router;
