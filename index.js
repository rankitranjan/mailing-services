var express = require('express');
var app = express();


app.get('/', (req, res) => {
	console.log('called');
  const { spawn } = require('child_process');
	const child = spawn('ls', );
	child.stdout.on('data', (chunk) => {
		console.log(`child process exited with code ${chunk}`);
		res.send('Hello World!');
	});
});

app.listen(process.env.PORT || 3340, function() {
  console.log('Listening on port 3340');
});
