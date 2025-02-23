import type { AxiosInstance } from "axios";

let location_apiInstance: AxiosInstance;

export function configurelocation_apiInstance(instance: AxiosInstance) {
	location_apiInstance = instance;
}

export function getlocation_apiInstance(): AxiosInstance {
	if (!location_apiInstance) {
		throw new Error("location_api API instance not configured. Call configurelocation_apiInstance first.");
	}
	return location_apiInstance;
}
