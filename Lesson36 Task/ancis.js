function addCar() {
    var make = document.getElementById('make').value;
    var model = document.getElementById('model').value;
    var year = document.getElementById('year').value;

    var carDetails = document.getElementById('carDetails');
    var newCar = document.createElement('p');
    newCar.textContent = 'Car: ' + make + ' ' + model + ', Year: ' + year;
    carDetails.appendChild(newCar);

    // Clear the form after adding a car
    document.getElementById('carForm').reset();
  }