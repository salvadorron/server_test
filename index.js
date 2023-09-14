import express from 'express';
import { request } from './request.js';
import cron from 'node-cron';
const app = express();

const urls = ["http://example1.com", "http://example2.com", "http://example3.com", "http://example4.com"];


cron.schedule("*/5 * * * *", function() {
	
	urls.forEach(url => {
		request(url);
	})
	
 });

const PORT = process.env.PORT ?? 8378

app.listen(PORT, () => {
    console.log("Service Started");
});