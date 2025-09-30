const VehicleModel = require('../models/VehicleModel')
const vehicle = new VehicleModel()

exports.get = (req, resp) => {
  var result = vehicle.GetAll();
  resp.render("homeView", { vehicle: result,saved : false });    
}

exports.save = (req, resp) => {
  var result = vehicle.Save(req.body.nome, req.body.id);
  resp.render("carroAddView", { saved: true },);
};

exports.delete = (req, resp) => {
  let { id } = req.params;
  vehicle.Delete(id);
  let result = vehicle.GetAll();
  resp.render("homeView", { vehicle: result, saved: false });
};

exports.editForm = (req, resp) => {
  let { id } = req.params;
  const veiculo = vehicle.GetById(id); 
  resp.render("editView", { vehicle: veiculo, saved: false });
}

exports.update = (req, resp) => {
  let { id } = req.params;
  const novoNome = req.body.nome;
  vehicle.Update(id, novoNome); 
  resp.redirect('/'); 
};