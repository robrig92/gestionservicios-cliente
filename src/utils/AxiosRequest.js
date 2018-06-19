import axios from 'axios';

class AxiosRequest {
	constructor() {
		this.client = axios.create({
			baseURL: 'http://localhost:8000/api/',
			timeout: 3000
		});
	}
}

const instance = new AxiosRequest();
Object.freeze(instance)

export default instance;
