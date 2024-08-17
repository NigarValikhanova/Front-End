var cars = [
    {
        name: 'Toyota',
        id: 1,
        models: ['Auris', 'Avalon', 'Camry', 'Corolla', 'Rav4', 'Harrier']
    },
    {
        name: 'Ford',
        id: 2,
        models: ['Cargo', 'Contour', 'Fusion', 'Escape', 'Fiesta', 'Mustang']
    },
    {
        name: 'Chevrolet',
        id: 3,
        models: ['Impala67', 'Malibu', 'Lumina', 'Nexia', 'Onix', 'Tahoe']
    },
    {
        name: 'Mercedes',
        id: 4,
        models: ['A140', 'B150', 'C180', 'E200', 'G400', 'E350']
    },
    {
        name: 'Fiat',
        id: 5,
        models: ['Albea', 'Coupe', 'Doblo', 'Tempra', 'Linea', 'Ulysse']
    }
]

var carSelect = document.getElementById("selectCar");
var modelSelect = document.getElementById("selectModel");
for (let i = 0; i < cars.length; i++) {
    var option = document.createElement('option');
    option.textContent = cars[i].name;
    option.value = cars[i].id;
    carSelect.appendChild(option)
}

carSelect.addEventListener('change', CarModel);

function CarModel() {
    var selectedCarIndex = carSelect.value;
    modelSelect.innerHTML="";
    console.log(selectedCarIndex)
    cars.forEach(element => {
        if (element.id == selectedCarIndex) {
            element.models.forEach(element2 => {
                var optionModel = document.createElement('option');
                optionModel.textContent = element2;
                modelSelect.appendChild(optionModel)
            })
        }
    })
}