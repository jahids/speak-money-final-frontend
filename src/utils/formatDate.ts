// const formatDate = (date: string): string => {
// 	const d = new Date(date);
// 	let month: string | number = `${d.getMonth() + 1}`;
// 	let day: string | number = `${d.getDate()}`;
// 	const year = d.getFullYear();

// 	if (month.length < 2) {
// 		month = `0${month}`;
// 	}
// 	if (day.length < 2) {
// 		day = `0${day}`;
// 	}

// 	return [year, month, day].join("-");
// };

// export default formatDate;

const formatDate = (date: string | Date): string => {
	const d = new Date(date);
	let month: string | number = `${d.getMonth() + 1}`;
	let day: string | number = `${d.getDate()}`;
	const year = d.getFullYear();

	if (month.length < 2) {
		month = `0${month}`;
	}
	if (day.length < 2) {
		day = `0${day}`;
	}

	return [year, month, day].join("-");
};

export default formatDate;
