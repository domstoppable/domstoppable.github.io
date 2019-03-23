
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
	return (a, b) => {
		if(!Array.isArray(fields)){
			fields = [fields];
		}
		for(let field of fields){
			if(a.hasOwnProperty(field) && b.hasOwnProperty(field)){
				if(a[field] < b[field]){
					return 1;
				}else if(a[field] > b[field]){
					return -1;
				}
			}else if(a.hasOwnProperty(field)){
				return 1;
			}else if(b.hasOwnProperty(field)){
				return -1;
			}
		}

		return 0;
	};
}

