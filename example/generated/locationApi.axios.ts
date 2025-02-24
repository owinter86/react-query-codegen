import type { AxiosInstance } from "axios";

let locationApiInstance: AxiosInstance;

export function configurelocationApiInstance(instance: AxiosInstance) {
	locationApiInstance = instance;
}

export function getlocationApiInstance(): AxiosInstance {
	if (!locationApiInstance) {
		throw new Error("locationApi API instance not configured. Call configurelocationApiInstance first.");
	}
	return locationApiInstance;
}
