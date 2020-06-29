'use strict';

const div = document.querySelector('#div');

class Greeding {
	constructor() {
		this.timesOfDay = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
		this.dayOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		this.dateToday = new Date(),
		this.dateNewYear = new Date('1 January 2021');
	}

	getTimesOfDay() {
		return (this.dateToday.getHours() >= 6 && this.dateToday.getHours() < 12) ? this.timesOfDay[0] : (this.dateToday.getHours() >= 12 && this.dateToday.getHours() < 18) ? this.timesOfDay[1] : (this.dateToday.getHours() >= 18 && this.dateToday.getHours() < 23) ? this.timesOfDay[2] : this.timesOfDay[3];
	}

	getDayOfTheWeek() {
		return this.dayOfTheWeek[this.dateToday.getDay()];
	}

	getAmountOfDays() {
		const amountOfDays = Math.ceil((this.dateNewYear - this.dateToday) / 86400000);
		return (amountOfDays % 10 === 1 && amountOfDays % 10 !== 11) ? amountOfDays + ' день' : (amountOfDays % 10 === 2 || amountOfDays % 10 === 3 || amountOfDays % 10 === 4) ? amountOfDays + ' дня' : amountOfDays + ' дней';
	}
}

const greeding = new Greeding();


div.innerHTML = `<p>${greeding.getTimesOfDay()}</p>
                <p>Сегодня: ${greeding.getDayOfTheWeek()}</p>
                <p>Текущее время: ${greeding.dateToday.toLocaleTimeString('en-US')}</p>
                <p>До нового года осталось ${greeding.getAmountOfDays()}</p>`;
