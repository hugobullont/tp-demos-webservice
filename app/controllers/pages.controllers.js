let page = '';

exports.get = (req, res) => {
    console.log('Sending HTML PAGE');
    res.send({body: page});
}

exports.set = (req, res) => {
    page = req.body.html;
    res.send({message: 'All Set'});
}