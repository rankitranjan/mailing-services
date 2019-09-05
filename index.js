var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/send_no_reply', (req, res) => {
	console.log('called');
	const exec = require('child_process').exec;
    // const child = exec('echo "Hello there" | mail -s "testing" -r no-reply@appbrowzer.com rankit4u@gmail.com');
    // `child process exited with code ${code}`
    let { body, subject, from, to } = req.body;
    if (body && subject && to) {
	    from =  req.body.from || 'no-reply@appbrowzer.com';
	    console.log(`echo "${body}" | mail -s "${subject}" -r ${from} ${to}`);
	    const child = exec(`echo "${body}" | mail -s "${subject}" -r ${from} ${to}`);
		child.stdout.on('data', (chunk) => {
			console.log(`op => ${chunk}`);
			res.send('Done');
		});
	} else {
		res.send('invalid request');
	}
});

app.listen(process.env.PORT || 3340, function() {
  console.log('Listening on port 3340');
});

