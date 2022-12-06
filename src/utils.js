
export function parseDate(dateString) {
	let date = new Date(dateString);
	if(date instanceof Date && !isNaN(date)){
		return date;
	}else if(dateString.indexOf('-') > 0){
		let parts = dateString.split('-');
		return parts[1] + ', ' + parts[0];
	}else{
		return dateString;
	}
}

export function sortByFields(fields){
	if(!Array.isArray(fields)){
		fields = [fields];
	}

	return (a, b) => {
		for(let field of fields){
			let order = 1;
			if(field[0] === '-'){
				field = field.substring(1);
				order = -1;
			}
			if(a.hasOwnProperty(field) && b.hasOwnProperty(field)){
				if(a[field] < b[field]){
					return 1 * order;
				}else if(a[field] > b[field]){
					return -1 * order;
				}
			}else if(a.hasOwnProperty(field)){
				return 1 * order;
			}else if(b.hasOwnProperty(field)){
				return -1 * order;
			}
		}

		return 0;
	};
}

