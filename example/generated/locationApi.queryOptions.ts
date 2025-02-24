import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./Location API.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const apiexternallocationfiltersgetcollectionQueryOptions = (
	params: Partial<Parameters<typeof apiClient.apiexternallocationfiltersgetcollection>[0]>
) => {
	const enabled = hasDefinedProps(params, "service");
	return queryOptions({
		queryKey: ["apiexternallocationfiltersgetcollection", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.apiexternallocationfiltersgetcollection(params);
					return response.data;
				}
			: skipToken,
	});
};

export const apiexternallocationstruckchargingavailabilitygetcollectionQueryOptions = (
	params: Partial<Parameters<typeof apiClient.apiexternallocationstruckchargingavailabilitygetcollection>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["apiexternallocationstruckchargingavailabilitygetcollection", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.apiexternallocationstruckchargingavailabilitygetcollection(params);
					return response.data;
				}
			: skipToken,
	});
};

export const apiexternallocationsidwashprogramsgetcollectionQueryOptions = (
	params: Partial<Parameters<typeof apiClient.apiexternallocationsidwashprogramsgetcollection>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["apiexternallocationsidwashprogramsgetcollection", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.apiexternallocationsidwashprogramsgetcollection(params);
					return response.data;
				}
			: skipToken,
	});
};

export const apiexternallocationslocationidserviceservicedescriptiongetQueryOptions = (
	params: Partial<Parameters<typeof apiClient.apiexternallocationslocationidserviceservicedescriptionget>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationId", "service");
	return queryOptions({
		queryKey: ["apiexternallocationslocationidserviceservicedescriptionget", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.apiexternallocationslocationidserviceservicedescriptionget(params);
					return response.data;
				}
			: skipToken,
	});
};

export const getv1locationsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getv1locations>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getv1locations", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getv1locations(params);
					return response.data;
				}
			: skipToken,
	});
};

export const getv1locationslocationid_QueryOptions = (
	params: Partial<Parameters<typeof apiClient.getv1locationslocationid_>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationId");
	return queryOptions({
		queryKey: ["getv1locationslocationid_", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getv1locationslocationid_(params);
					return response.data;
				}
			: skipToken,
	});
};

export const getv1locationsparkingavailabilityQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getv1locationsparkingavailability>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationIds[]", "arrivalDateTime", "departureDateTime");
	return queryOptions({
		queryKey: ["getv1locationsparkingavailability", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getv1locationsparkingavailability(params);
					return response.data;
				}
			: skipToken,
	});
};

export const getv1locationspoiQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getv1locationspoi>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getv1locationspoi", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getv1locationspoi(params);
					return response.data;
				}
			: skipToken,
	});
};
