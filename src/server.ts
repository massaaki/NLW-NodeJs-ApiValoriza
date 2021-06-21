import express from 'express';

const app = express();

/**
 * GET    => Search for informations
 * POST   => Insert/create informations
 * PUT    => change information
 * DELETE => Remove data
 * PATCH  => Change specific information
 */
app.get('/test', (request, response) => {
	return response.send('hello nlw!');
})

app.post('/test-post', (request, response) => {
	return response.send('Hello nlw post method');
})

app.listen(3000, () => console.log('Server is running'));