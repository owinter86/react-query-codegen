import type { AxiosResponse } from "axios";
import { getlocationApiInstance } from "./locationApi.axios";
import type * as T from "./locationApi.schema";

/**
 * Retrieves location filters.
 * Retrieves a list of filters that can be applied to the locations collection and poi endpoints.
 * @param query.language - The language of the response.
 * @param query.service - Service locations offering the specified service.
 * @param query.vehicleCombination - Selected vehicle combination.
 * @param query.cleaningType - Service locations suitable for specified cleaning type.
 * @param query.disinfection - Service locations who offer disinfection cleaning programs.
 * @returns LocationFilterResource collection
 * @see _api__external_location_filters_get_collectionResponse200
 */
export async function _api__external_location_filters_get_collection(
	data: {
		language?: string;
		service: string;
		vehicleCombination?: number;
		cleaningType?: string;
		disinfection?: boolean;
	},
	headers?: Record<string, string>
): Promise<AxiosResponse<T._api__external_location_filters_get_collectionResponse200>> {
	const url = "/v1/location_filters";
	const queryData = {
		language: data.language,
		service: data.service,
		vehicleCombination: data.vehicleCombination,
		cleaningType: data.cleaningType,
		disinfection: data.disinfection,
	};
	return getlocationApiInstance().get<T._api__external_location_filters_get_collectionResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Retrieves the collection of TruckChargingAvailabilityResource resources.
 * Retrieves the collection of TruckChargingAvailabilityResource resources.
 * @param query.locationIds - Filter based on the location ids
 * @param query.arrivalDateTime - Filter based on the arrival date and time, where the minute value must be 00, 15, 30, or 45
 * @param query.departureDateTime - Filter based on the departure date and time, where the minute value must be 00, 15, 30, or 45
 * @param query.bayCapacity - Filter based on the bay capacity: minimum and maximum values. Pass as bayCapacity[]=min&bayCapacity[]=max. If only one value is passed, it will be considered as exact match.
 * @param query.baySize - Filter based on the bay size. Allowed values: "truck", "truck_with_trailer", "rigid_truck".
 * @param query.page - The collection page number
 * @param query.itemsPerPage - The number of items per page
 * @returns TruckChargingAvailabilityResource collection
 * @see _api__external_locations_truckcharging_availability_get_collectionResponse200
 */
export async function _api__external_locations_truckcharging_availability_get_collection(
	data: {
		locationIds?: Array<any>;
		arrivalDateTime?: string;
		departureDateTime?: string;
		bayCapacity?: Array<any>;
		baySize?: string;
		page?: number;
		itemsPerPage?: number;
	},
	headers?: Record<string, string>
): Promise<AxiosResponse<T._api__external_locations_truckcharging_availability_get_collectionResponse200>> {
	const url = "/v1/locations/truckcharging/availability";
	const queryData = {
		locationIds: data.locationIds,
		arrivalDateTime: data.arrivalDateTime,
		departureDateTime: data.departureDateTime,
		bayCapacity: data.bayCapacity,
		baySize: data.baySize,
		page: data.page,
		itemsPerPage: data.itemsPerPage,
	};
	return getlocationApiInstance().get<T._api__external_locations_truckcharging_availability_get_collectionResponse200>(
		url,
		{
			params: queryData,

			headers,
		}
	);
}

/**
 * Retrieves wash programs.
 * Retrieves the collection of Wash program prices for the specified location. Use parameters to only retrieve prices for wash programs meeting your specific requirements.
 * @param query.vehicleTypes - Wash programs suitable for the specified vehicle types. Vehicle type id’s can be retrieved via /v1/vehicle_types.
 * @param query.cleaningType - Wash programs for specified cleaning type.
 * @param query.disinfection - Use disinfection during cleaning.
 * @param params.id - Location identifier
 * @param query.page - The collection page number
 * @param query.itemsPerPage - The number of items per page
 * @returns WashProgramsPricelistResource collection
 * @see _api__external_locations__id__wash_programs_get_collectionResponse200
 */
export async function _api__external_locations__id__wash_programs_get_collection(
	data: {
		id: string;
		vehicleTypes?: Array<any>;
		cleaningType?: string;
		disinfection?: boolean;
		page?: number;
		itemsPerPage?: number;
	},
	headers?: Record<string, string>
): Promise<AxiosResponse<T._api__external_locations__id__wash_programs_get_collectionResponse200>> {
	const url = `/v1/locations/${data.id}/wash_programs`;
	const queryData = {
		vehicleTypes: data.vehicleTypes,
		cleaningType: data.cleaningType,
		disinfection: data.disinfection,
		page: data.page,
		itemsPerPage: data.itemsPerPage,
	};
	return getlocationApiInstance().get<T._api__external_locations__id__wash_programs_get_collectionResponse200>(
		url,
		{
			params: queryData,

			headers,
		}
	);
}

/**
 * Retrieves a location service description.
 * Retrieves the description for a specific location for a specific service. Used to give additional information about the location.
 * @param params.locationId - The ID of the location.
 * @param params.service - The name of the service.
 * @returns ServiceDescriptionResource resource
 * @see _api__external_locations__locationId__service__service__description_getResponse200
 */
export async function _api__external_locations__locationId__service__service__description_get(
	data: { locationId: number; service: string },
	headers?: Record<string, string>
): Promise<
	AxiosResponse<T._api__external_locations__locationId__service__service__description_getResponse200>
> {
	const url = `/v1/locations/${data.locationId}/service/${data.service}/description`;
	return getlocationApiInstance().get<T._api__external_locations__locationId__service__service__description_getResponse200>(
		url,
		{
			headers,
		}
	);
}

/**
	 * Search locations
	 * This endpoint allows you to get all locations available within the Travis system. Use parameters to filter on specific settings and return only locations meeting your specifications.
	 * @param query.page - Page number as used in pagination
	 * @param query.itemsPerPage - Items per page as used in pagination
	 * @param query.arrivalDate - When given only locations are returned which are open on this date, the format should be Y-m-d (only for tank cleaning)
	 * @param query.services - Service locations offering the specified service.
	 * @param query.paymentMethodId - Service locations who accepts your desired payment method. 
 Valid options are 1 (Travis), 2 (Shell), 4 (Hoyer), 5 (Logpay), 6 (Eurowag), 7 (E100), 8 (The Fuel Company), 9 (Plose), 10 (Diesel 24), 11 (DKV), 12 (UTA), 13 (AS24), 14 (UK Fuels).
	 * @param query.id[] - Specified service locations by id.
	 * @param query.country - Service locations for the specified country using 2 letters according ISO 3166.
	 * @param query.geoPoint - Service locations within a specified radius of a geoPoint. 
 Correct input is latitude and longitude. When this is given the radius parameter is required.
	 * @param query.radius - Service locations within a specified radius of a geoPoint. 
 Radius in kilometers. Only used when geoPoint is given.
	 * @param query.name - Service location with a specific location name.
	 * @param query.includeBookable - Include bookable
	 * @param query.vehicleCombination - Vehicle combination
	 * @param query.vehicleType[] - Service locations suitable for the specified vehicle types. Vehicle type id’s can be retrieved via /v1/vehicle_types. 
 Particularly useful if you are looking for a wash program for a specific type of vehicle (eg. tipper semi trailer).
	 * @param query.cleaningType - Service locations suitable for specified cleaning type.
	 * @param query.option[] - Options
	 * @param query.disinfection - Service locations who offer disinfection cleaning programs.
	 * @param query.security[] - Service locations who offer specified security features.
	 * @param query.vehicleFacility[] - Vehicle facilities
	 * @param query.driverFacility[] - Service locations who offer specified facilities for drivers.
	 * @param query.boundingBox[] - Bounding box
	 * @param query.baySize[] - Bay size
	 * @param query.chargingCapacity[] - Charging capacity. This is a range, give minimum and maximum
	 * @param query.cargoType[] - Filter for tank cleaning, this returns all the locations which support the given cargo type.
	 * @param query.tankCleaningOptions[] - Filter for tank cleaning, narrow your search by selecting cleaning options.
	 * @returns OK
	 * @see get_v1_locationsResponse200
	 */
export async function get_v1_locations(
	data: {
		page?: number;
		itemsPerPage?: number;
		arrivalDate?: string;
		services?: Array<any>;
		paymentMethodId?: number;
		"id[]"?: Array<any>;
		country?: string;
		geoPoint?: string;
		radius?: number;
		name?: string;
		includeBookable?: boolean;
		vehicleCombination?: string;
		"vehicleType[]"?: Array<any>;
		cleaningType?: string;
		"option[]"?: Array<any>;
		disinfection?: boolean;
		"security[]"?: Array<any>;
		"vehicleFacility[]"?: Array<any>;
		"driverFacility[]"?: Array<any>;
		"boundingBox[]"?: Array<any>;
		"baySize[]"?: Array<any>;
		"chargingCapacity[]"?: Array<any>;
		"cargoType[]"?: Array<any>;
		"tankCleaningOptions[]"?: Array<any>;
	},
	headers?: Record<string, string>
): Promise<AxiosResponse<T.get_v1_locationsResponse200>> {
	const url = "/v1/locations";
	const queryData = {
		page: data.page,
		itemsPerPage: data.itemsPerPage,
		arrivalDate: data.arrivalDate,
		services: data.services,
		paymentMethodId: data.paymentMethodId,
		"id[]": data["id[]"],
		country: data.country,
		geoPoint: data.geoPoint,
		radius: data.radius,
		name: data.name,
		includeBookable: data.includeBookable,
		vehicleCombination: data.vehicleCombination,
		"vehicleType[]": data["vehicleType[]"],
		cleaningType: data.cleaningType,
		"option[]": data["option[]"],
		disinfection: data.disinfection,
		"security[]": data["security[]"],
		"vehicleFacility[]": data["vehicleFacility[]"],
		"driverFacility[]": data["driverFacility[]"],
		"boundingBox[]": data["boundingBox[]"],
		"baySize[]": data["baySize[]"],
		"chargingCapacity[]": data["chargingCapacity[]"],
		"cargoType[]": data["cargoType[]"],
		"tankCleaningOptions[]": data["tankCleaningOptions[]"],
	};
	return getlocationApiInstance().get<T.get_v1_locationsResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get a single location by ID
 * @param params.locationId - ID of the location to get
 * @returns OK
 * @see get_v1_locations_locationId_Response200
 */
export async function get_v1_locations_locationId_(
	data: { locationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.get_v1_locations_locationId_Response200>> {
	const url = `/v1/locations/${data.locationId}`;
	return getlocationApiInstance().get<T.get_v1_locations_locationId_Response200>(url, {
		headers,
	});
}

/**
 * Get parking availability
 * Verify the availability for a specified arrival and departure date & time for specified locations. When a location has no availability a parking booking can not be made at this location for the specified arrival dateTime and departure dateTime.
 * @param query.locationIds[] - Location ID's
 * @param query.page - Page number as used in pagination
 * @param query.arrivalDateTime - Arrival Datetime
 * @param query.departureDateTime - Departure Datetime
 * @returns OK
 * @see get_v1_locations_parking_availabilityResponse200
 */
export async function get_v1_locations_parking_availability(
	data: { "locationIds[]": any; page?: number; arrivalDateTime: string; departureDateTime: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.get_v1_locations_parking_availabilityResponse200>> {
	const url = "/v1/locations/parking/availability";
	const queryData = {
		"locationIds[]": data["locationIds[]"],
		page: data.page,
		arrivalDateTime: data.arrivalDateTime,
		departureDateTime: data.departureDateTime,
	};
	return getlocationApiInstance().get<T.get_v1_locations_parking_availabilityResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
	 * Find points of interest
	 * This endpoint allows you to get all locations available within the Travis system and returns only basic parameters for the locations. This endpoint is used to display dots on the map while still being fast enough. use parameters to filter on specific settings and return only locations meeting your specifications.
	 * @param query.arrivalDate - When given only locations are returned which are open on this date, the format should be Y-m-d (only for tank cleaning)
	 * @param query.services - Service locations offering the specified service.
	 * @param query.paymentMethodId - Service locations who accepts your desired payment method. 
 Valid options are 1 (Travis), 2 (Shell), 4 (Hoyer), 5 (Logpay), 6 (Eurowag), 7 (E100), 8 (The Fuel Company), 9 (Plose), 10 (Diesel 24), 11 (DKV), 12 (UTA), 13 (AS24), 14 (UK Fuels).
	 * @param query.id[] - Specified service locations by id.
	 * @param query.country - Service locations for the specified country using 2 letters according ISO 3166.
	 * @param query.geoPoint - Service locations within a specified radius of a geoPoint. 
 Correct input is latitude and longitude. When this is given the radius parameter is required.
	 * @param query.radius - Service locations within a specified radius of a geoPoint. 
 Radius in kilometers. Only used when geoPoint is given.
	 * @param query.name - Service location with a specific location name.
	 * @param query.includeBookable - Include bookable
	 * @param query.vehicleCombination - Vehicle combination
	 * @param query.vehicleType[] - Service locations suitable for the specified vehicle types. Vehicle type id’s can be retrieved via /v1/vehicle_types. 
 Particularly useful if you are looking for a wash program for a specific type of vehicle (eg. tipper semi trailer).
	 * @param query.cleaningType - Service locations suitable for specified cleaning type.
	 * @param query.option[] - Options
	 * @param query.disinfection - Service locations who offer disinfection cleaning programs.
	 * @param query.security[] - Service locations who offer specified security features.
	 * @param query.vehicleFacility[] - Vehicle facilities
	 * @param query.driverFacility[] - Service locations who offer specified facilities for drivers.
	 * @param query.boundingBox[] - Bounding box
	 * @param query.baySize[] - Bay size
	 * @param query.chargingCapacity[] - Charging capacity. This is a range, give minimum and maximum
	 * @param query.cargoType[] - Filter for tank cleaning, this returns all the locations which support the given cargo type.
	 * @param query.tankCleaningOptions[] - Filter for tank cleaning, narrow your search by selecting cleaning options.
	 * @returns OK
	 * @see get_v1_locations_poiResponse200
	 */
export async function get_v1_locations_poi(
	data: {
		arrivalDate?: string;
		services?: Array<any>;
		paymentMethodId?: number;
		"id[]"?: Array<any>;
		country?: string;
		geoPoint?: string;
		radius?: number;
		name?: string;
		includeBookable?: boolean;
		vehicleCombination?: string;
		"vehicleType[]"?: Array<any>;
		cleaningType?: string;
		"option[]"?: Array<any>;
		disinfection?: boolean;
		"security[]"?: Array<any>;
		"vehicleFacility[]"?: Array<any>;
		"driverFacility[]"?: Array<any>;
		"boundingBox[]"?: Array<any>;
		"baySize[]"?: Array<any>;
		"chargingCapacity[]"?: Array<any>;
		"cargoType[]"?: Array<any>;
		"tankCleaningOptions[]"?: Array<any>;
	},
	headers?: Record<string, string>
): Promise<AxiosResponse<T.get_v1_locations_poiResponse200>> {
	const url = "/v1/locations/poi";
	const queryData = {
		arrivalDate: data.arrivalDate,
		services: data.services,
		paymentMethodId: data.paymentMethodId,
		"id[]": data["id[]"],
		country: data.country,
		geoPoint: data.geoPoint,
		radius: data.radius,
		name: data.name,
		includeBookable: data.includeBookable,
		vehicleCombination: data.vehicleCombination,
		"vehicleType[]": data["vehicleType[]"],
		cleaningType: data.cleaningType,
		"option[]": data["option[]"],
		disinfection: data.disinfection,
		"security[]": data["security[]"],
		"vehicleFacility[]": data["vehicleFacility[]"],
		"driverFacility[]": data["driverFacility[]"],
		"boundingBox[]": data["boundingBox[]"],
		"baySize[]": data["baySize[]"],
		"chargingCapacity[]": data["chargingCapacity[]"],
		"cargoType[]": data["cargoType[]"],
		"tankCleaningOptions[]": data["tankCleaningOptions[]"],
	};
	return getlocationApiInstance().get<T.get_v1_locations_poiResponse200>(url, {
		params: queryData,

		headers,
	});
}
