const user = require('./productaddschmea')
const productadd = (req, res) => {
  let data = user({
    name: req.body.name,
    categorey: req.body.categorey,
    description: req.body.description,
    price: req.body.price,
    image: req.file
  })
  data.save().then(data => {
    res.json({
      status: 200,
      msg: "product added",
      data: data
    });
  }).catch(err => {
    res.json({
      status: 500,
      msg: "product not added"
    });
  });

}

const viewproduct = (req, res) => {
  user
    .find()
    .exec()
    .then((data) => {
      //   console.log(data);
      res.json({
        status: 200,
        msg: "view product",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "faild",
      });
    });
}
const del = (req, res) => {
  user.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "delete sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: " delete faild",
      });
    });
}
const update = (req, res) => {
  user.findByIdAndUpdate({ _id: req.body.id },
    { name: req.body.name, price: req.body.price })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "update sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: " update faild",
      });
    });
}

module.exports = { productadd, viewproduct, del, update }