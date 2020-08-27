const express = require('express');
const path = require('path');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.use(express.static('../public'));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

const color = app.listen(PORT, () => {
  console.log(chalk.blue('App listening to: ') + chalk.red.bold(`http://localhost:${PORT}`));
});
