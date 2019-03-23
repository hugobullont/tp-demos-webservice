let bleId = '';
let name = '';

exports.get = (req,res) => {
    console.log('sending data!')
    res.send({
        ble: bleId,
        name: name
    });
};

exports.set = (req,res) => {
    bleId = req.body.ble;
    name = req.body.name;
    res.send({message: 'All Set'})
};