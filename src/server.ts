import app from './app';
import { database } from './config/db/mongo';

const PORT = process.env.PORT || 3000;

database.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});