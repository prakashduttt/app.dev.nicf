import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// Serve static files from the Angular dist folder
const staticPath = path.join(__dirname, 'app-nicf-netoyed-com-au');
app.use(express.static(staticPath));
app.get('*', (req, res, next) => {
    res.sendFile(path.join(staticPath, 'index.html'), (err) => {
        // Type assertion here
        if (err) {
            res.status(err.status || 500).end(); // Use a default status if err.status is undefined
        }
    });
});
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
//# sourceMappingURL=server.js.map