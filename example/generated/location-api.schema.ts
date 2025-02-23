/* Generated TypeScript Definitions */

export interface BayTypeAvailability_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability {
	id?: string;
	availableBays?: number;
}

export interface BayTypeAvailability_jsonld_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability {
	"@context"?: any;
	"@id"?: string;
	"@type"?: string;
	id?: string;
	availableBays?: number;
}

export interface FilterOption {
	label?: string;
	value?: string;
	isEnabled?: boolean;
}

export interface FilterOption_jsonld {
	"@context"?: any;
	"@id"?: string;
	"@type"?: string;
	label?: string;
	value?: string;
	isEnabled?: boolean;
}

export interface LocationFilterResource {
	code?: string;
	label?: string;
	type?: string;
	options?: Array<FilterOption>;
	minValue?: string;
	maxValue?: string;
}

export interface LocationFilterResource_jsonld {
	"@id"?: string;
	"@type"?: string;
	code?: string;
	label?: string;
	type?: string;
	options?: Array<FilterOption_jsonld>;
	minValue?: string;
	maxValue?: string;
}

export interface PriceDto {
	amount?: number;
	currency?: string;
}

export interface PriceDto_jsonld {
	"@context"?: any;
	"@id"?: string;
	"@type"?: string;
	amount?: number;
	currency?: string;
}

export interface PriceObject_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability {
	price?: number;
	currency?: string;
}

export interface PriceObject_jsonld_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability {
	"@context"?: any;
	"@id"?: string;
	"@type"?: string;
	price?: number;
	currency?: string;
}

export interface ServiceDescriptionResource {
	locationId?: number;
	description?: string;
	service?: string;
}

export interface ServiceDescriptionResource_jsonld {
	"@context"?: any;
	"@id"?: string;
	"@type"?: string;
	locationId?: number;
	description?: string;
	service?: string;
}

export interface TruckChargingAvailabilityResource_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability {
	locationId?: number;
	available?: boolean;
	bayTypes?: Array<BayTypeAvailability_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability>;
	price?: PriceObject_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability;
}

export interface TruckChargingAvailabilityResource_jsonld_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability {
	"@id"?: string;
	"@type"?: string;
	locationId?: number;
	available?: boolean;
	bayTypes?: Array<BayTypeAvailability_jsonld_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability>;
	price?: PriceObject_jsonld_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability;
}

export interface WashProgram {
	cleaningType?: string;
	withDisinfection?: boolean;
	price?: any;
}

export interface WashProgram_jsonld {
	"@context"?: any;
	"@id"?: string;
	"@type"?: string;
	cleaningType?: string;
	withDisinfection?: boolean;
	price?: any;
}

export interface WashProgramsPricelistResource {
	vehicleTypes?: Array<number>;
	name?: string;
	icon?: string;
	washPrograms?: Array<WashProgram>;
}

export interface WashProgramsPricelistResource_jsonld {
	"@id"?: string;
	"@type"?: string;
	vehicleTypes?: Array<number>;
	name?: string;
	icon?: string;
	washPrograms?: Array<WashProgram_jsonld>;
}

export interface Address {
	address?: string;
	city?: string;
	country?: string;
	state?: string;
	zip?: string;
}

export interface GateClosingHours {
	friday?: Array<OpeningHours>;
	monday?: Array<OpeningHours>;
	saturday?: Array<OpeningHours>;
	sunday?: Array<OpeningHours>;
	thursday?: Array<OpeningHours>;
	tuesday?: Array<OpeningHours>;
	wednesday?: Array<OpeningHours>;
}

export interface GeoJSONFeature {
	geometry?: GeoJSONFeatureGeometry;
	properties?: GeoJSONFeatureProperties;
	type?: string;
}

export interface GeoJSONFeatureGeometry {
	coordinates?: Array<number>;
	type?: string;
}

export interface GeoJSONFeatureProperties {
	id?: number;
	name?: string;
	activeSince?: string;
}

export interface GeoPoint {
	latitude?: number;
	longitude?: number;
}

export interface Location {
	address?: Address;
	createdAt?: string;
	id?: number;
	images?: Array<string>;
	location?: GeoPoint;
	name?: string;
	parking?: ServiceParking;
	repair?: ServiceRepair;
	tankcleaning?: ServiceTankcleaning;
	timezone?: string;
	truckwash?: ServiceTruckwash;
	updatedAt?: string;
	locationUrl?: string;
	services?: Array<string>;
}

export interface LocationsResponse {
	_meta?: Metadata;
	data?: Array<Location>;
}

export interface Metadata {
	page?: number;
	requestId?: string;
}

export interface OpeningHours {
	from?: string;
	to?: string;
}

export interface ParkingAvailabilityLocation {
	available?: boolean;
	availableSpots?: number;
	id?: number;
	price?: ParkingAvailabilityPrice;
	totalItems?: number;
}

export interface ParkingAvailabilityPrice {
	amount?: number;
	currency?: string;
}

export interface ParkingAvailabilityResponse {
	_meta?: Metadata;
	locations?: Array<ParkingAvailabilityLocation>;
}

export interface PaymentMethod {
	logo?: string;
	name?: string;
}

/**
 * This list contains all payment methods that are accepted by the location. Make sure you loop through this list while implementing as this might change in the future. Do not use these keys directly.
 */
export interface PaymentMethods {
	as24?: PaymentMethod;
	diesel24?: PaymentMethod;
	dkv?: PaymentMethod;
	e100?: PaymentMethod;
	eurowag?: PaymentMethod;
	fuelCompany?: PaymentMethod;
	hoyer?: PaymentMethod;
	logpay?: PaymentMethod;
	plose?: PaymentMethod;
	shell?: PaymentMethod;
	travis?: PaymentMethod;
	uta?: PaymentMethod;
}

export interface PoiResponse {
	features?: Array<GeoJSONFeature>;
}

/**
 * Check the CuDa one
 */
export interface ServiceOpeningHours {
	friday?: Array<OpeningHours>;
	monday?: Array<OpeningHours>;
	saturday?: Array<OpeningHours>;
	sunday?: Array<OpeningHours>;
	thursday?: Array<OpeningHours>;
	tuesday?: Array<OpeningHours>;
	wednesday?: Array<OpeningHours>;
}

export interface ServiceParking {
	currency?: string;
	isAcceptingBookings?: boolean;
	isAcceptingFuelCards?: boolean;
	facilities?: ServiceParkingFacilities;
	gate?: string;
	gateClosingHours?: GateClosingHours;
	openingHours?: ServiceParkingOpeningHours;
	options?: ServiceParkingOptions;
	paymentMethods?: PaymentMethods;
	prices?: ServiceParkingPrices;
}

export interface ServiceParkingFacilities {
	cameraSecurity?: boolean;
	fence?: boolean;
	guard?: boolean;
	hotel?: boolean;
	restaurant?: boolean;
	shower?: boolean;
	spreadLighting?: boolean;
	toilet?: boolean;
	wifi?: boolean;
}

export interface ServiceParkingOpen24H {
	open24h?: boolean;
}

export interface ServiceParkingOpeningHours {
	entry?: any;
	exit?: any;
}

export interface ServiceParkingOptions {
	adrPossible?: boolean;
	coolingMotorsAllowed?: boolean;
	decouplingTrailers?: boolean;
	electricCoolingCharging?: boolean;
	longTimeParking?: boolean;
}

export interface ServiceParkingPrices {
	duration?: number;
	price?: number;
}

export interface ServiceRepair {
	openinghours?: ServiceOpeningHours;
	options?: ServiceRepairOptions;
	paymentMethods?: PaymentMethods;
}

export interface ServiceRepairOptions {
	trucks?: {
		cngLng?: boolean;
		daf?: boolean;
		diesel?: boolean;
		ginaf?: boolean;
		iveco?: boolean;
		man?: boolean;
		mercedes?: boolean;
		renault?: boolean;
		scania?: boolean;
		supported?: boolean;
		terberg?: boolean;
		volvo?: boolean;
	};
}

export interface ServiceTankcleaning {
	efctoCleaningCodes?: Array<string>;
	isDisinfectionPossible?: boolean;
	isEcdPossible?: boolean;
	lanes?: {
		chemical?: {
			isAvailable?: boolean;
		};
		dedicatedFood?: {
			isAvailable?: boolean;
		};
		feed?: {
			isAvailable?: boolean;
		};
		other?: {
			isAvailable?: boolean;
		};
	};
	openingHours?: ServiceOpeningHours;
	paymentMethods?: PaymentMethods;
}

export interface ServiceTruckwash {
	airFreshener?: boolean;
	automaticWashPriceCalculation?: boolean;
	certificates?: {
		haccp?: {
			actions?: Array<string>;
			authNumberCleaningProduct?: string;
		};
	};
	certified?: {
		nao?: boolean;
	};
	cleaning?: {
		inside?: boolean;
		outside?: boolean;
	};
	disinfection?: {
		enabled?: boolean;
	};
	lanes?: number;
	msdsProductName?: string;
	openingHours?: ServiceOpeningHours;
	paymentMethods?: PaymentMethods;
	selfServicePrograms?: boolean;
}

export type _api__external_location_filters_get_collectionResponse200 = Array<LocationFilterResource>;

export type _api__external_locations_truckcharging_availability_get_collectionResponse200 =
	Array<TruckChargingAvailabilityResource_api_common_price_api_read_collection_bay_type_availability_api_read_collection_truckcharging_availability>;

export type _api__external_locations__id__wash_programs_get_collectionResponse200 =
	Array<WashProgramsPricelistResource>;

export type _api__external_locations__locationId__service__service__description_getResponse200 =
	ServiceDescriptionResource;

export type get_v1_locationsResponse200 = Record<string, any>;

export type get_v1_locations_locationId_Response200 = Record<string, any>;

export type get_v1_locations_parking_availabilityResponse200 = Record<string, any>;

export type get_v1_locations_poiResponse200 = Record<string, any>;
