import { queryOptions, skipToken } from "@tanstack/react-query";
import type { ApiClient } from "./location-api.client";

const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const _api__external_location_filters_get_collectionQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["_api__external_location_filters_get_collection"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "service");
	return queryOptions({
		queryKey: ["_api__external_location_filters_get_collection", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient._api__external_location_filters_get_collection(params);
					return response.data;
				}
			: skipToken,
	});
};

export const _api__external_locations_truckcharging_availability_get_collectionQueryOptions = (
	apiClient: ApiClient,
	params: Partial<
		Parameters<ApiClient["_api__external_locations_truckcharging_availability_get_collection"]>[0]
	>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["_api__external_locations_truckcharging_availability_get_collection", params],
		queryFn: enabled
			? async () => {
					const response =
						await apiClient._api__external_locations_truckcharging_availability_get_collection(params);
					return response.data;
				}
			: skipToken,
	});
};

export const _api__external_locations__id__wash_programs_get_collectionQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["_api__external_locations__id__wash_programs_get_collection"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["_api__external_locations__id__wash_programs_get_collection", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient._api__external_locations__id__wash_programs_get_collection(params);
					return response.data;
				}
			: skipToken,
	});
};

export const _api__external_locations__locationId__service__service__description_getQueryOptions = (
	apiClient: ApiClient,
	params: Partial<
		Parameters<ApiClient["_api__external_locations__locationId__service__service__description_get"]>[0]
	>
) => {
	const enabled = hasDefinedProps(params, "locationId", "service");
	return queryOptions({
		queryKey: ["_api__external_locations__locationId__service__service__description_get", params],
		queryFn: enabled
			? async () => {
					const response =
						await apiClient._api__external_locations__locationId__service__service__description_get(params);
					return response.data;
				}
			: skipToken,
	});
};

export const get_v1_locationsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["get_v1_locations"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["get_v1_locations", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.get_v1_locations(params);
					return response.data;
				}
			: skipToken,
	});
};

export const get_v1_locations_locationId_QueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["get_v1_locations_locationId_"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationId");
	return queryOptions({
		queryKey: ["get_v1_locations_locationId_", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.get_v1_locations_locationId_(params);
					return response.data;
				}
			: skipToken,
	});
};

export const get_v1_locations_parking_availabilityQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["get_v1_locations_parking_availability"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationIds[]", "arrivalDateTime", "departureDateTime");
	return queryOptions({
		queryKey: ["get_v1_locations_parking_availability", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.get_v1_locations_parking_availability(params);
					return response.data;
				}
			: skipToken,
	});
};

export const get_v1_locations_poiQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["get_v1_locations_poi"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["get_v1_locations_poi", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.get_v1_locations_poi(params);
					return response.data;
				}
			: skipToken,
	});
};
