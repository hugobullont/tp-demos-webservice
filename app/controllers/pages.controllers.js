let page = '';

exports.get = (req, res) => {
    console.log('Sending HTML PAGE');
    var json = JSON.stringify({html: page});
    res.send(json);
}

exports.set = (req, res) => {
    page = req.body.html;
    res.send({message: 'All Set'});
}