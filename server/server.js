import express from 'express';
//import is compatible everywhere,
// where as "require" is only usable under certain circumstances so unless you are working
//with a legacy codebase that already uses "require" you should use "import" instead.
//import 'dotenv/config//
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
