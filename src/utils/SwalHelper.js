import swal from 'sweetalert';

class SwalHelper {
	constructor() {
		this.error = this.error.bind(this);
		this.success = this.success.bind(this);
	}

	static error(message) {
		swal({
			title: "Error",
			text: message,
			icon: "error",
			timer: 3000
		});
	}

	static success(message) {
		swal({
			title: "Guardado",
			text: message,
			icon: "success",
			timer: 3000
		});
	}
}

export default SwalHelper;
