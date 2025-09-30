module.exports = class VehicleModel {

    vehicles = [{
        id: 1,
        nome: "carro"
    },
    {
        id: 2,
        nome: "carro2"
    }]

    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    };

    GetAll() {
        return this.vehicles;
    }

    GetById(id) {

        return this.vehicles.find((x) => x.id == id);
    }

    Save(id, nome) {
        let veihcle = new VehicleModel(nome, id)
        this.vehicles.push(veihcle)
    };

    Update(id, nome) {
        const vehicle = this.vehicles.find((x) => x.id == id);
        vehicle.nome = nome;
    };

    Delete(id) {
        const index = this.vehicles.findIndex((x) => x.id == id);
        this.vehicles.splice(index, 1);
    }

}