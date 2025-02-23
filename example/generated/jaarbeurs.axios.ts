import type { AxiosInstance } from "axios";

let jaarbeursInstance: AxiosInstance;

export function configurejaarbeursInstance(instance: AxiosInstance) {
	jaarbeursInstance = instance;
}

export function getjaarbeursInstance(): AxiosInstance {
	if (!jaarbeursInstance) {
		throw new Error("jaarbeurs API instance not configured. Call configurejaarbeursInstance first.");
	}
	return jaarbeursInstance;
}
