import type { AxiosInstance } from "axios";

let diksInstance: AxiosInstance;

export function configurediksInstance(instance: AxiosInstance) {
	diksInstance = instance;
}

export function getdiksInstance(): AxiosInstance {
	if (!diksInstance) {
		throw new Error("diks API instance not configured. Call configurediksInstance first.");
	}
	return diksInstance;
}
