const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const upload = multer({ dest: 'uploads/' });

const app = (module.exports = express());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res, next) => {
	res.json({
		'size(Bytes)': req.file.size
	});
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Listening!');
});
