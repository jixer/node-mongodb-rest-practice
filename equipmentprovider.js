// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_rest_practice');
var Schema = mongoose.Schema;

// Model Schema
var Equipment = new Schema({
    Name          : String
  , Description   : String
  , Price         : Number
});

var Equipment = mongoose.model("Equipment", Equipment);

// Repository
var EquipmentRepository = function(){};
EquipmentRepository.prototype.findAll = function(callback) {
	Equipment.find({}, function(err, equipment){
		callback(equipment);
	});
};

EquipmentRepository.prototype.save = function(equipmentItem, callback) {
	var instance = new Equipment(equipmentItem);
	instance.save(function(err){
		callback();
	});
};

exports.EquipmentRepository = EquipmentRepository;