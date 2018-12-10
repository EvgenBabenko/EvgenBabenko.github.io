/*
Создать класс car на прототипах. Добавить и использовать вспомогательный 
метод getRealDistance(speed) внутри метода drive. Взять за основу файл с 
вебинара. Характеристики (скорости, расход топлива) машины устанавливаются 
при создании экземпляра класса.
*/


function Car(carCharacteristics) {
	// debugger
	this.speeds = carCharacteristics.speeds;
	this.gas = carCharacteristics.gas;
	this.durability = carCharacteristics.durability;
}

Car.prototype._getRealDistance = function(distance, speed) {
	var speedCharacteristics = this.speeds[speed];
	var drivingDistance = Math.min(distance, this.gas / speedCharacteristics.gas * 100);

	var durabilitySpent = realDistance * speedCharacteristics.durability;
	var durabilityLeft = this.durability - durabilitySpent;

	var realDistance;
	if (durabilityLeft < 0) {
		realDistance = this.durability / speedCharacteristics.durability;
	} else {
		realDistance = drivingDistance;
	}

	return realDistance;
};

Car.prototype.drive = function(distance, speed) {
	var speedCharacteristics = this.speeds[speed];
	var realDistance = this._getRealDistance(distance, speed);


	var realDurabilitySpent = realDistance * speedCharacteristics.durability;
	var realGasSpent = realDistance * speedCharacteristics.gas / 100;
	this.durability -= realDurabilitySpent;
	this.gas -= realGasSpent;
};


var fordSpeeds = {
	durability: 0.78,
	gas: 100,
	speeds: {
		slow: {
			durability: 0.001,
			gas: 7
		},
		average: {
			durability: 0.001,
			gas: 6.5
		},
		fast: {
			durability: 0.003,
			gas: 6
		}
	}
};

var ford = new Car(fordSpeeds);
console.log(ford);
ford.drive(100, 'slow');
console.log(ford);