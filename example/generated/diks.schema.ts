/* Generated TypeScript Definitions */

export interface AppError {
	info?: Record<string, any>;
	key?: string;
	status?: number;
	requestId?: string;
}

export interface AccountFavoritesResponse {
	categories: Array<CategoryItem>;
	sharedVehicles: Array<SharedVehicleItem>;
}

export interface CategoryItem {
	id: number;
	isViewable: boolean;
	favorite: boolean;
	mainCategory: MainCategoryItem;
	shortName: string;
	title: TypeLocalizedString;
	description: TypeLocalizedString;
	price: TypeMoneyFormat;
	pricePerKilometer: TypeMoneyFormat;
	pricePerKilometerIncTax: TypeMoneyFormat;
	freeKilometers: number;
	addons: Array<AddonItem>;
	range?: string;
	chargingTime?: string;
	seats: number;
	doors: number;
	volume: number;
	cargoSpaceCubic: number;
	payloadMax: number;
	license?: string;
	fuel: TypeLocalizedString;
	transmission: TypeLocalizedString;
	vehicleType?: TypeLocalizedString;
	sizeExterior?: string;
	sizeInterior?: string;
	imageUrls: Array<string>;
	minDriverAge: number;
	minDriverLicenseYears: number;
	priceExtraDriver: TypeMoneyFormat;
	priceExtraDriverIncTax: TypeMoneyFormat;
	includedDrivers: number;
	youngDriverEnabled: boolean;
	priceExtraYoungDriver: TypeMoneyFormat;
	priceExtraYoungDriverIncTax: TypeMoneyFormat;
	youngDriverAgeThreshold: number;
	isGreenChoice: boolean;
	labels: Array<{
		hexColor: string;
		label: TypeLocalizedString;
	}>;
	tags: Array<CategoryTag>;
	hasAlternatives: boolean;
	alternatives?: Array<number>;
}

export interface MainCategoryItem {
	id: number;
	shortName: string;
	title: TypeLocalizedString;
	description?: TypeLocalizedString;
	extraInfo?: TypeLocalizedString;
	imageUrl?: string;
}

export type TypeLocalizedString = Record<string, any>;

/**
 * number (or string) with 4 decimals, 00.0000
 */
export type TypeMoneyFormat = number;

export interface AddonItem {
	id: number;
	name: string;
	type: AddonType;
	title: TypeLocalizedString;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	minQuantity: number;
	maxQuantity: number;
	imageUrl?: string;
}

export type AddonType = "abroadAllowance" | "rental" | "purchase";

export interface CategoryTag {
	code: string;
	description: TypeLocalizedString;
	sortOrder: number;
}

export interface SharedVehicleItem {
	id: number;
	mainCategory: MainCategoryItem;
	favorite: boolean;
	title: TypeLocalizedString;
	description: TypeLocalizedString;
	range?: string;
	chargingTime?: string;
	payloadMax: number;
	seats: number;
	doors: number;
	volume: number;
	license: string;
	fuel: TypeLocalizedString;
	transmission: TypeLocalizedString;
	sizeExterior: string;
	sizeInterior: string;
	cargoSpaceCubic: number;
	vehicleType?: TypeLocalizedString;
	parkingInstructions?: TypeLocalizedString;
	fuelInstructions?: TypeLocalizedString;
	minimumBatteryCharge?: number;
	parkingLocation?: {
		latitude: number;
		longitude: number;
	};
	parkingLocationRadius?: number;
	imageUrls: Array<string>;
	address?: {
		street: string;
		postalCode: string;
		houseNumber: string;
		houseNumberAddition?: string;
		city: string;
	};
	damageCheckBeforeBooking: SharedVehicleDamageCheckSetting;
	damageCheckAfterBooking: SharedVehicleDamageCheckSetting;
	equipment?: Array<ProplannerSharedVehicleEquipment>;
	pricePerHour?: TypeMoneyFormat;
	pricePerDay?: TypeMoneyFormat;
	pricePerExtraKm?: TypeMoneyFormat;
}

export type SharedVehicleDamageCheckSetting = "voluntary" | "mandatory";

export interface ProplannerSharedVehicleEquipment {
	id: number;
	title: TypeLocalizedString;
}

export type AccountGetAppPreferencesResponse = Record<string, any>;

export interface AccountCompanyPreferences {
	companyName?: string;
	kvk?: string;
	btw?: string;
	iban?: string;
	paymentPreferenceDeposit?: string;
	postalCode?: string;
	houseNumber?: string;
	houseNumberAddition?: string;
	street?: string;
	city?: string;
	phone?: string;
	countryCode?: string;
	firstName?: string;
	middleName?: string;
	surname?: string;
}

export interface AccountPersonalPreferences {
	salutation?: ProplannerGender;
	firstName?: string;
	middleName?: string;
	surname?: string;
	birthDate?: string;
	paymentPreferenceDeposit?: string;
	postalCode?: string;
	houseNumber?: string;
	houseNumberAddition?: string;
	street?: string;
	city?: string;
	phone?: string;
	countryCode?: string;
}

export type ProplannerGender = "NONE" | "SIR" | "MADAM";

export interface AccountGetCompanyPreferencesResponse {
	companyPreferences: AccountCompanyPreferences;
}

export interface AccountGetPersonalPreferencesResponse {
	personalPreferences: AccountPersonalPreferences;
}

export interface AccountMeResponse {
	name: string;
	relationNumber: number;
	customerGroup: ProplannerCustomerGroup;
	hasReleasePromotion: boolean;
	email: TypeEmail;
	type: TypeAccount;
	driversLicenseVerificationStatus?: TypeDriversLicenseVerificationStatus;
}

export type ProplannerCustomerGroup = "DEFAULT" | "SPECIAL" | "BAS" | "ED_DE_PIJP" | "FILM" | "KEY_ACCOUNTS";

/**
 * Regex borrowed from ProPlanner customer email input field.
 */
export type TypeEmail = string;

export type TypeAccount = "personal" | "company";

export type TypeDriversLicenseVerificationStatus = "pending" | "success" | "failure";

export interface AccountRegisterBody {
	email: TypeEmail;
	password: AuthPasswordBasedPassword;
	type: TypeAccount;
	subscribeNewsletter: boolean;
	street?: string;
	houseNumber?: string;
	houseNumberAddition?: string;
	postalCode?: string;
	city?: string;
	phone: string;
	firstName?: string;
	middleName?: string;
	surname?: string;
	companyName?: string;
	btw?: TypeBtwNumber;
	countryCode?: string;
	kvk?: TypeKvk;
	birthDate?: string;
}

/**
 * Free form password types. Setting a reasonable limit to 512 characters, allowing password sentences and generated passwords.
 */
export type AuthPasswordBasedPassword = string;

/**
 * Btw number regex for various different VAT formats.
 */
export type TypeBtwNumber = string;

export type TypeKvk = string;

export type AccountRegisterResponse = {};

export type AccountRemoveResponse = {};

export type AccountRemoveDriversLicenseDataResponse = {};

export interface ReservationListForUserBody {
	status: ReservationStatus;
	filters: ProplannerBookingFilters;
}

export type ReservationStatus = "current" | "upcoming" | "invoice" | "canceled";

export interface ProplannerBookingFilters {
	dateRange?: {
		begin: string;
		end: string;
	};
}

export interface ReservationListForUserResponse {
	reservations: Array<ReservationItem>;
	total: number;
}

export interface ReservationItem {
	reservationId: number;
	status: ReservationStatus;
	category: CategoryItem;
	datePickup: string;
	dateReturn: string;
	locationPickup: LocationItem;
	locationReturn?: LocationItem;
	selectedAddons: Array<{
		addonId: number;
		quantity: number;
	}>;
	quantity: number;
	expectedKilometers?: number;
	abroadOptionId?: number;
	insuranceProfileOptionId: number;
	priceIncTax: TypeMoneyFormat;
	createAt: string;
	updatedAt: string;
	isCancelable: boolean;
	isRepeatable: boolean;
	isEditable: boolean;
	invoices: Array<{
		invoiceId: number;
		invoiceDescription: string;
		invoiceNumber: string;
		invoiceDate: string;
	}>;
	orderType: "booking" | "quotation";
}

export interface LocationItem {
	id: number;
	storageLocationId?: string;
	name: TypeLocalizedString;
	addressLine: string;
	address: {
		street: string;
		postcode: string;
		houseNumber: string;
		city: string;
	};
	coordinates: {
		lat: string;
		lng: string;
	};
	phone: string;
	email: TypeLocalizedString;
	openingHours: LocationOpeningHours;
	divergentOpeningHours: Array<LocationDivergentOpeningHours>;
	order?: number;
}

export type LocationOpeningHours = Record<string, any>;

export interface LocationDivergentOpeningHours {
	id: string;
	description: string;
	from: string;
	to: string;
	date: string;
	isClosedForTheWholeDay: boolean;
}

export interface AccountUpdateCompanyPreferencesBody {
	companyPreferences: AccountCompanyPreferences;
}

export interface AccountUpdateCompanyPreferencesResponse {
	companyPreferences: AccountCompanyPreferences;
}

export interface AccountUpdatePersonalPreferencesBody {
	personalPreferences: AccountPersonalPreferences;
}

export interface AccountUpdatePersonalPreferencesResponse {
	personalPreferences: AccountPersonalPreferences;
}

export interface CategoryAlternativesBody {
	locationPickup?: number;
	locationReturn?: number;
	datePickup?: string;
	dateReturn?: string;
	expectedKilometers?: number;
}

export interface CategoryAlternativesResponse {
	alternatives: Array<CategoryItemWithAvailability>;
}

export interface CategoryItemWithAvailability {
	category: CategoryItem;
	availableStatus: CategoryAvailabilityStatus;
	availabilityOtherLocations: Array<LocationItem>;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	pricePerKilometer: TypeMoneyFormat;
	priceIncTaxPerKilometer: TypeMoneyFormat;
	freeKilometers: number;
	hidePricesAndAvailability: boolean;
	expectedKilometers?: number;
}

export type CategoryAvailabilityStatus = "available" | "full" | "almostFull" | "availableAtLocation";

export interface CategoryAvailabilityBody {
	locale: TypeLocale;
	datePickup: string;
	dateReturn: string;
	mainCategoryId: number;
	locationId?: number;
	filters?: CategoryAvailabilityFilterInput;
	sorting?: CategorySortKeys;
}

export type TypeLocale = "nl_NL" | "en_US";

export interface CategoryAvailabilityFilterInput {
	expectedKilometers?: number;
	fuels?: Array<string>;
	transmissions?: Array<string>;
	addons?: Array<number>;
	seats?: Array<number>;
	vehicleTypes?: Array<string>;
}

export type CategorySortKeys = "PRICE_ASC" | "PRICE_DESC" | "AVAILABILITY_ASC" | "AVAILABILITY_DESC";

export interface CategoryAvailabilityResponse {
	total: number;
	categories: Array<CategoryItemWithAvailability>;
	availableFilters: CategoryAvailableFilters;
	availableFiltersWithCounts?: CategoryAvailableFiltersWithCounts;
}

export interface CategoryAvailableFilters {
	fuels: Array<string>;
	transmissions: Array<string>;
	seats: Array<number>;
	addons: Array<{
		id: number;
		title: TypeLocalizedString;
	}>;
}

/**
 * Same filters as availableFilters, but with counts per filter which indicate what the result of activating the filter will be.
            The filters are translated in the backend based on the language selected by the user.
            
 */
export interface CategoryAvailableFiltersWithCounts {
	fuels: Array<{
		title: string;
		count: number;
	}>;
	transmissions: Array<{
		title: string;
		count: number;
	}>;
	seats: Array<{
		title: number;
		count: number;
	}>;
	addons: Array<{
		id: number;
		title: string;
		count: number;
	}>;
	vehicleTypes?: Array<{
		title: string;
		count: number;
	}>;
}

export interface CategoryCompareBody {
	categoryIds: Array<number>;
	locationPickup?: number;
	locationReturn?: number;
	datePickup?: string;
	dateReturn?: string;
	expectedKilometers?: number;
}

export interface CategoryCompareResponse {
	categories: Array<CategoryItemWithAvailability>;
}

export interface CategoryFavoriteResponse {
	isFavorite: boolean;
}

export type CategoryImageResponse = string;

export interface CategoryInsuranceProfileBody {
	locale: TypeLocale;
	categoryId: number;
	datePickup: string;
	dateReturn: string;
}

export interface CategoryInsuranceProfileResponse {
	options: Array<CategoryInsuranceProfileOption>;
}

export interface CategoryInsuranceProfileOption {
	id: number;
	code: string;
	name: string;
	isDefault: boolean;
	isRecommended: boolean;
	isDisabled: boolean;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	ownRisk: number;
}

export interface CategoryListResponse {
	categories: Array<{
		id: number;
		title: {
			nl_NL: string;
			en_US: string;
		};
		mainCategory: {
			id: number;
			title: {
				nl_NL: string;
				en_US: string;
			};
		};
	}>;
}

export type CategoryMainImageResponse = string;

export interface CategoryPriceCalculationBody {
	locale: TypeLocale;
	categoryId: number;
	datePickup: string;
	dateReturn: string;
	locationPickup?: number;
	locationReturn?: number;
	expectedKilometers?: number;
	extraDriverCount: number;
	extraYoungDriverCount: number;
	insuranceProfileOptionId?: number;
	abroadOptionId?: number;
	addons: Array<{
		addonId: number;
		quantity: number;
	}>;
}

export interface CategoryPriceCalculationResponse {
	priceLines: Array<{
		type: string;
		line: string;
		quantity: number;
		price: TypeMoneyFormat;
		priceIncTax: TypeMoneyFormat;
		periods?: number;
	}>;
	availableStatus: CategoryAvailabilityStatus;
	availabilityOtherLocations: Array<LocationItem>;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	taxAmount: TypeMoneyFormat;
	warrantyAmount: TypeMoneyFormat;
	freeKilometers: number;
	hidePricesAndAvailability: boolean;
	expectedKilometers?: number;
}

export interface CategorySingleResponse {
	category: CategoryItem;
}

export type MainCategoryImageResponse = string;

export interface MainCategoryListResponse {
	mainCategories: Array<MainCategoryItem>;
}

export type MainCategoryMainImageResponse = string;

export type AddonImageResponse = string;

export type AddonMainImageResponse = string;

export interface SharedVehicleAddDamageBody {
	image: string;
	description: string;
	reservationId?: number;
	x: number;
	y: number;
}

export type SharedVehicleAddDamageResponse = {};

export interface SharedVehicleAdminListResponse {
	total: number;
	sharedVehicles: Array<{
		id: number;
		title: string;
	}>;
}

export interface SharedVehicleAdminSingleResponse {
	sharedVehicle: DatabaseSharedVehicle;
}

/**
 * Shared vehicles are cars that can be rented via the Diks App.
        
        Shared vehicles have additional properties which are not stored in ProPlanner and can be updated in the Diks Admin environment.
 */
export interface DatabaseSharedVehicle {
	id: number;
	isActive: boolean;
	cargoSpaceCubic: number;
	doors: number;
	mainCategory: number;
	payloadMax: number;
	price: TypeMoneyFormat;
	priceClassId: number;
	seats: number;
	volume: number;
	damageCheckAfterBooking: SharedVehicleDamageCheckSetting;
	damageCheckBeforeBooking: SharedVehicleDamageCheckSetting;
	license: string;
	sizeExterior: string;
	sizeInterior: string;
	description: TypeLocalizedString;
	fuel: TypeLocalizedString;
	title: TypeLocalizedString;
	transmission: TypeLocalizedString;
	minimumBatteryCharge?: number;
	parkingLocationRadius?: number;
	pricePerDay?: TypeMoneyFormat;
	pricePerExtraKm?: TypeMoneyFormat;
	pricePerHour?: TypeMoneyFormat;
	resourceId?: number;
	damageTemplate?: string;
	chargingTime?: string;
	fuelCardPin?: string;
	range?: string;
	address?: {
		street: string;
		postalCode: string;
		houseNumber: string;
		houseNumberAddition?: string;
		city: string;
	};
	equipment?: Array<ProplannerSharedVehicleEquipment>;
	fuelCardDetails?: TypeLocalizedString;
	fuelInstructions?: TypeLocalizedString;
	parkingInstructions?: TypeLocalizedString;
	parkingLocation?: any;
	vehicleType?: TypeLocalizedString;
}

export interface SharedVehicleAdminUpdateBody {
	parkingInstructions?: TypeLocalizedString;
	fuelInstructions?: TypeLocalizedString;
	fuelCardDetails?: TypeLocalizedString;
	fuelCardPin?: string;
	minimumBatteryCharge?: number;
	parkingLocation?: {
		latitude: number;
		longitude: number;
	};
	parkingLocationRadius?: number;
	address?: {
		street: string;
		postalCode: string;
		houseNumber: string;
		houseNumberAddition?: string;
		city: string;
	};
	damageCheckBeforeBooking?: SharedVehicleDamageCheckSetting;
	damageCheckAfterBooking?: SharedVehicleDamageCheckSetting;
}

export type SharedVehicleAdminUpdateResponse = {};

export interface SharedVehicleAvailabilityBody {
	locale: TypeLocale;
	datePickup: string;
	dateReturn: string;
	mainCategoryId: number;
	filters?: SharedVehicleAvailabilityFilterInput;
}

export interface SharedVehicleAvailabilityFilterInput {
	expectedKilometers?: number;
	fuels?: Array<string>;
	transmissions?: Array<string>;
	addons?: Array<number>;
	seats?: Array<number>;
	vehicleTypes?: Array<string>;
}

export interface SharedVehicleAvailabilityResponse {
	total: number;
	sharedVehicles: Array<SharedVehicleItemWithAvailability>;
	availableFilters: SharedVehicleAvailableFilters;
}

export interface SharedVehicleItemWithAvailability {
	sharedVehicle: SharedVehicleItem;
	availabilityStatus: SharedVehicleAvailabilityStatus;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
}

export type SharedVehicleAvailabilityStatus = "available" | "full";

export interface SharedVehicleAvailableFilters {
	fuels: Array<{
		title: string;
		count: number;
	}>;
	transmissions: Array<{
		title: string;
		count: number;
	}>;
	seats: Array<{
		title: number;
		count: number;
	}>;
	vehicleTypes?: Array<{
		title: string;
		count: number;
	}>;
}

export interface ProplannerSharedVehicleAvailabilityCalendar {
	startDate: string;
	endDate: string;
	timeslots: Array<ProplannerSharedVehicleTimeslot>;
}

export interface ProplannerSharedVehicleTimeslot {
	from: string;
	to: string;
	availabilityStatus: ProplannerSharedVehicleAvailabilityStatus;
}

export type ProplannerSharedVehicleAvailabilityStatus = "available" | "full";

export interface SharedVehicleCreateBookingBody {
	locale: TypeLocale;
	datePickup: string;
	dateReturn: string;
	referenceText?: string;
	discountCode?: string;
	expectedKilometers?: number;
}

export interface SharedVehicleCreateBookingResponse {
	paymentUrl: string;
	reservationId: number;
}

export type SharedVehicleDamageImageResponse = string;

export type SharedVehicleDamageTemplateResponse = string;

export interface SharedVehicleFavoriteResponse {
	isFavorite: boolean;
}

export type SharedVehicleImageResponse = string;

export interface SharedVehicleListDamagesBody {
	locale: TypeLocale;
}

export interface SharedVehicleListDamagesResponse {
	total: number;
	damages: Array<{
		id: number;
		coordinates: {
			x: number;
			y: number;
		};
		damageCategory: string;
		damageType: string;
		imageUrl?: string;
	}>;
}

export interface SharedVehiclePricingBody {
	locale: TypeLocale;
	datePickup: string;
	dateReturn: string;
	discountCode?: string;
	expectedKilometers?: number;
}

export interface SharedVehiclePricingResponse {
	priceLines: Array<{
		type: string;
		line: string;
		quantity: number;
		price: TypeMoneyFormat;
		priceIncTax: TypeMoneyFormat;
		periods?: number;
	}>;
	availableStatus: SharedVehicleAvailabilityStatus;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	taxAmount: TypeMoneyFormat;
	warranty: TypeMoneyFormat;
}

export interface SharedVehicleSingleResponse {
	sharedVehicle: SharedVehicleItem;
}

export interface SharedVehicleStateOfChargeResponse {
	stateOfCharge?: number;
}

export interface AuthPasswordBasedForgotPasswordBody {
	email: AuthPasswordBasedEmail;
}

/**
 * Relatively free-form email type. Accepting most valid emails. Emails are case-insensitive.
 */
export type AuthPasswordBasedEmail = string;

export interface AuthPasswordBasedForgotPasswordResponse {
	success: boolean;
}

export interface AuthPasswordBasedListEmailsResponse {
	emails: Array<{
		email: AuthPasswordBasedEmail;
		isVerified: boolean;
		verifiedAt?: string;
		createdAt: string;
	}>;
}

export interface AuthPasswordBasedLoginBody {
	email: AuthPasswordBasedEmail;
	password: AuthPasswordBasedPassword;
	device?: SessionLoginDevice;
}

export interface SessionLoginDevice {
	platform: "apple" | "android" | "desktop" | "other";
	name: string;
	notificationToken?: string;
	webPushInformation?: SessionWebPushInformation;
}

/**
 * Web push information object. This is the result of 'PushSubscription.toJSON()'.
 */
export interface SessionWebPushInformation {
	endpoint: string;
	keys: {
		p256dh: string;
		auth: string;
	};
}

export interface AuthPasswordBasedTokenPair {
	accessToken: string;
	refreshToken: string;
}

export interface AuthPasswordBasedResetPasswordBody {
	resetToken: string;
	password: AuthPasswordBasedPassword;
}

export interface AuthPasswordBasedResetPasswordResponse {
	success: boolean;
}

export interface AuthPasswordBasedUpdateEmailBody {
	email: AuthPasswordBasedEmail;
}

export interface AuthPasswordBasedUpdateEmailResponse {
	success: boolean;
}

export interface AuthPasswordBasedUpdatePasswordBody {
	password: AuthPasswordBasedPassword;
}

export interface AuthPasswordBasedUpdatePasswordResponse {
	success: boolean;
}

export interface AuthPasswordBasedVerifyEmailBody {
	verifyToken: string;
	device?: SessionLoginDevice;
}

export interface AuthPasswordBasedVerifyOtpBody {
	otp: string;
}

export interface AuthPasswordBasedVerifyOtpResponse {
	success: boolean;
}

export type ReservationCancelResponse = {};

export type ReservationDownloadInvoiceResponse = string;

export interface ReservationFetchByIdsBody {
	reservationIds: Array<number>;
}

export interface ReservationFetchByIdsResponse {
	reservations: Array<ReservationItem>;
}

export interface ReservationRepeatBody {
	datePickup: string;
	dateReturn: string;
}

export type ReservationRepeatResponse = {};

export interface ReservationUpdateBody {
	locationPickup: number;
	locationReturn?: number;
	expectedKilometers?: number;
	insuranceProfileOptionId: number;
	abroadOptionId?: number;
	selectedAddons: Array<{
		addonId: number;
		quantity: number;
	}>;
}

export type ReservationUpdateResponse = {};

export interface LocationListResponse {
	locations: Array<LocationItem>;
}

export interface LocationReorderBody {
	locationIds: Array<number>;
}

export type LocationReorderResponse = {};

export interface LocationSingleResponse {
	location: LocationItem;
}

export type AdminDeleteUserResponse = {};

export interface AdminInviteUserBody {
	email: BackendEmail;
	name: string;
	roles: Array<string>;
}

/**
 * Relatively free-form email type. Accepting most valid emails. Emails are case-insensitive.
 */
export type BackendEmail = string;

export type AdminInviteUserResponse = {};

export interface AdminListUsersResponse {
	users: Array<{
		id: string;
		email?: BackendEmail;
		name?: string;
		roles: Array<string>;
	}>;
}

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse = string;

export interface AuthGetUserResponse {
	user: AuthUserSummary;
}

export interface AuthUserSummary {
	id: string;
	name?: string;
	lastLogin: string;
	anonymousLogin?: {
		isAllowedToLogin: boolean;
		createdAt: string;
	};
	passwordLogin?: {
		email: BackendEmail;
		createdAt: string;
		verifiedAt?: string;
		otpEnabledAt?: string;
	};
	totpProvider?: {
		enabledAt: string;
	};
	roles: Array<{
		id: string;
		identifier: string;
	}>;
	permissions: Array<AuthPermissionIdentifier>;
	createdAt: string;
	deletedAt?: string;
}

export type AuthPermissionIdentifier =
	| "auth:user:list"
	| "auth:user:manage"
	| "auth:permission:manage"
	| "auth:totp:manage"
	| "diks:admin"
	| "diks:client"
	| "diks:visitor"
	| "lightbase:internal";

export interface AuthImpersonateStopSessionResponse {
	success: boolean;
}

export interface AuthLogoutResponse {
	success: boolean;
}

export interface AuthMeResponse {
	session: AuthSession;
	user?: AuthUserSummary;
}

export interface AuthSession {
	type: AuthSessionType;
	loginType: AuthLoginType;
	twoStepType?: AuthTwoStepType;
	userId: string;
	impersonatorUserId?: string;
}

export type AuthSessionType = "checkTwoStep" | "user" | "passwordBasedUpdatePassword";

export type AuthLoginType = "anonymousBased" | "passwordBased";

export type AuthTwoStepType = "totpProvider" | "passwordBasedOtp";

export interface AuthRefreshTokensBody {
	refreshToken: string;
}

export interface AuthTokenPair {
	accessToken: string;
	refreshToken: string;
}

export interface AuthSetUserActiveBody {
	active: boolean;
}

export interface AuthSetUserActiveResponse {
	success: boolean;
}

export interface AuthUpdateUserBody {
	name?: string;
}

export interface AuthUpdateUserResponse {
	success: boolean;
}

export interface AuthUserListBody {
	search?: {
		name?: string;
	};
	filters?: {
		anonymousLoginExists?: boolean;
		passwordLoginExists?: boolean;
		includeAnonymousTemporarySessions?: boolean;
		includeSoftDeletedUsers?: boolean;
	};
}

export interface AuthUserListResponse {
	users: Array<AuthUserSummary>;
}

export interface AuthPermissionCreateRoleBody {
	identifier: string;
}

export interface AuthPermissionCreateRoleResponse {
	role: {
		id: string;
		identifier: string;
	};
}

export interface AuthPermissionPermissionListResponse {
	permissions: Array<{
		id: string;
		identifier: AuthPermissionIdentifier;
	}>;
}

export interface AuthPermissionRemoveRoleResponse {
	success: boolean;
}

export interface AuthPermissionRoleAddPermissionsBody {
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthPermissionRoleAddPermissionsResponse {
	success: boolean;
}

export interface AuthPermissionRoleListResponse {
	roles: Array<{
		id: string;
		identifier: string;
		isEditable: boolean;
		permissions: Array<AuthPermissionIdentifier>;
	}>;
}

export interface AuthPermissionRoleRemovePermissionsBody {
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthPermissionRoleRemovePermissionsResponse {
	success: boolean;
}

export interface AuthPermissionSummaryResponse {
	roles: Array<{
		id: string;
		identifier: string;
	}>;
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthPermissionUserAssignRoleBody {
	role: string;
}

export interface AuthPermissionUserAssignRoleResponse {
	success: boolean;
}

export interface AuthPermissionUserRemoveRoleBody {
	role: string;
}

export interface AuthPermissionUserRemoveRoleResponse {
	success: boolean;
}

export interface AuthPermissionUserSummaryResponse {
	roles: Array<{
		id: string;
		identifier: string;
	}>;
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthAnonymousBasedLoginBody {
	token: string;
	device?: SessionLoginDevice;
}

export interface AuthAnonymousBasedTokenPair {
	accessToken: string;
	refreshToken: string;
}

export interface SessionListResponse {
	sessions: Array<SessionItem>;
}

export interface SessionItem {
	sessionId: string;
	isCurrentSession: boolean;
	device?: SessionLoginDevice;
}

export interface SessionLogoutBody {
	sessionId: string;
}

export type SessionLogoutResponse = {};

export interface SessionSetDeviceNotificationTokenBody {
	notificationToken?: string;
	webPushInformation?: SessionWebPushInformation;
}

export type SessionSetDeviceNotificationTokenResponse = {};

export interface AuthTotpProviderInfoResponse {
	isConfigured: boolean;
	isVerified: boolean;
}

export interface AuthTotpProviderRemoveResponse {
	success: boolean;
}

export interface AuthTotpProviderRemoveForUserResponse {
	success: boolean;
}

export type AuthTotpProviderSetupBody = {};

export interface AuthTotpProviderSetupResponse {
	otpAuthUrl: string;
	secret: string;
	algorithm: "sha512";
}

export interface AuthTotpProviderSetupVerifyBody {
	totp: string;
}

export interface AuthTotpProviderSetupVerifyResponse {
	success: boolean;
}

export interface AuthTotpProviderVerifyBody {
	totp: string;
}

export interface AuthTotpProviderVerifyResponse {
	success: boolean;
}

export interface BusinessAddressPrefillBody {
	postalCode: string;
	houseNumber: string;
	houseNumberAddition?: string;
}

export interface BusinessAddressPrefillResponse {
	postalCode: string;
	houseNumber: string;
	houseNumberAddition?: string;
	street: string;
	city: string;
}

export interface ClientAdminListResponse {
	total: number;
	clients: Array<ClientSearchResult>;
}

export interface ClientSearchResult {
	userId: string;
	proplannerId?: number;
	email: TypeEmail;
	name?: string;
	status: ClientStatus;
}

export type ClientStatus = Record<string, any>;

export type ProplannerCustomerStatus = "Active" | "Inactive" | "Blocked" | "Warning";

export interface ClientProplannerResult {
	proplannerId: number;
	email: TypeEmail;
	name?: string;
	status: ProplannerCustomerStatus;
}

export type ClientAdminRemoveResponse = {};

export interface ClientAdminUpdateBody {
	proplannerId?: number;
	email?: TypeEmail;
	status?: ClientStatusInput;
}

export type ClientStatusInput = Record<string, any>;

export interface ConfirmedOrderListResponse {
	orders: Array<ConfirmedOrderItem>;
}

export interface ConfirmedOrderItem {
	bookingId: number;
	category: CategoryItem;
	datePickup: string;
	dateReturn: string;
	locationPickup: LocationItem;
	locationReturn?: LocationItem;
	isQuotation: boolean;
}

export interface ConfirmedStorageOrderItem {
	invoiceNumber: string;
	invoiceAmount: TypeMoneyFormat;
	contractId: number;
	contractStartDate: string;
	storageLocationId: string;
	unit: StorageContractStorageUnit;
}

export interface StorageContractStorageUnit {
	unitId: string;
	storageLocationId?: string;
	unitType?: TypeLocalizedString;
	measurements?: StorageOrderUnitMeasurements;
}

export interface StorageOrderUnitMeasurements {
	length: number;
	width: number;
	height: number;
	surface: number;
	volume: number;
}

export type StorageContractDownloadContractResponse = string;

export type StorageContractDownloadInvoiceResponse = string;

export interface StorageContractInvoicesResponse {
	total: number;
	invoices: Array<StorageContractStorageInvoiceItem>;
}

export interface StorageContractStorageInvoiceItem {
	storageLocationId: string;
	invoiceNumber: string;
	openAmount: TypeMoneyFormat;
	totalAmount: TypeMoneyFormat;
	paymentStatus: "Paid" | "Unpaid" | "Overdue";
	invoiceDate: string;
	dueDate: string;
	units: Array<StorageContractStorageUnit>;
}

export interface StorageContractOverviewResponse {
	contracts: Array<StorageContractStorageContractItem>;
	invoices: {
		total: number;
		invoices: Array<StorageContractStorageInvoiceItem>;
	};
}

export interface StorageContractStorageContractItem {
	storageLocationId: string;
	contractId: number;
	startDate: string;
	terminationDate?: string;
	vacateDate?: string;
	invoicedUntilDate?: string;
	contractStatus: StorageContractStorageContractStatus;
	unit: StorageContractStorageUnit;
}

export type StorageContractStorageContractStatus = "Active" | "TerminationRequested" | "Vacated";

export interface StorageContractTerminateBody {
	terminationDate: string;
	terminationReasonId: number;
}

export type StorageContractTerminateResponse = {};

export interface StorageOrderCheckoutBody {
	locale: TypeLocale;
	password?: AuthPasswordBasedPassword;
	iban?: string;
	allowDirectDebit?: boolean;
	paymentMethod?: TypePayment;
}

export type TypePayment = "iDeal" | "office";

export interface StorageOrderCheckoutResponse {
	status: "SUCCESS" | "FAILED";
	createAccountStatus: "SUCCESS" | "FAILED" | "NOT_REQUESTED";
	bookingIds: Array<number>;
	paymentUrl?: string;
	confirmedOrder?: string;
}

export interface StorageOrderConfigureBody {
	storageLocationId?: string;
	categoryId?: string;
	unitTypeId?: string;
	startDate?: string;
	addons?: Array<{
		addonId: number;
		quantity: number;
		availability?: "available" | "full";
	}>;
	expectedRentalPeriod?: "oneMonth" | "moreThanOneMonth" | "moreThanThreeMonths" | "moreThanTwelveMonths";
	details?: StorageOrderClientDetails;
	dimensionType?: StorageOrderDimensionType;
}

export interface StorageOrderClientDetails {
	phone?: string;
	salutation?: ProplannerGender;
	firstName?: string;
	middleName?: string;
	surname?: string;
	street?: string;
	houseNumber?: string;
	houseNumberAddition?: string;
	postalCode?: string;
	city?: string;
	countryCode?: string;
	email?: string;
	birthDate?: string;
	accountType?: TypeAccount;
	companyName?: string;
	btw?: string;
	kvk?: string;
}

export type StorageOrderDimensionType = "squareMeters" | "cubicMeters";

export interface StorageOrderConfigureResponse {
	tokens?: AuthTokenPair;
}

export interface StorageOrderDiscountApplyBody {
	discountCode: string;
}

export type StorageOrderDiscountApplyResponse = {};

export type StorageOrderDiscountRemoveResponse = {};

export interface StorageOrderOverviewResponse {
	isBookable: boolean;
	appliedDiscountCode?: string;
	appliedDiscountDescription?: string;
	appliedDiscountScheme?: Array<StorageOrderDiscountScheme>;
	configuration?: {
		storageLocationId?: string;
		categoryId?: string;
		unitTypeId?: string;
		startDate?: string;
		addons?: Array<{
			addonId: number;
			quantity: number;
			availability?: "available" | "full";
		}>;
		expectedRentalPeriod?: "oneMonth" | "moreThanOneMonth" | "moreThanThreeMonths" | "moreThanTwelveMonths";
	};
	pricing?: StorageOrderPricing;
	storageLocation?: LocationItem;
	details?: StorageOrderClientDetails;
	dimensionType?: StorageOrderDimensionType;
	unitType?: {
		unitTypeId?: string;
		unitId?: string;
		lockEndDate?: string;
		title?: TypeLocalizedString;
		measurements?: StorageOrderUnitMeasurements;
	};
	errors?: Array<{
		key: string;
		message: string;
	}>;
}

/**
 * startPeriod and endPeriod define the rental duration. endPeriod is inclusive: e.g., startPeriod: 10 and endPeriod: 12 apply a discount in the 10th, 11th, and 12th months.
 */
export interface StorageOrderDiscountScheme {
	startPeriod: number;
	endPeriod: number;
	discountValue: number;
	ruleType: string;
}

export interface StorageOrderPricing {
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	depositAmount: TypeMoneyFormat;
	depositAmountIncTax: TypeMoneyFormat;
	reservationFee: TypeMoneyFormat;
	reservationFeeIncTax: TypeMoneyFormat;
	taxAmount: TypeMoneyFormat;
	discountAmount: TypeMoneyFormat;
	discountAmountIncTax: TypeMoneyFormat;
	periodicPrice: StorageOrderPeriodicPrice;
	priceLines: Array<StorageOrderPriceLine>;
}

export interface StorageOrderPeriodicPrice {
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	discount: TypeMoneyFormat;
	discountIncTax: TypeMoneyFormat;
	taxAmount: TypeMoneyFormat;
}

export interface StorageOrderPriceLine {
	type: "price" | "deposit" | "reservationFee" | "addon" | "insurance" | "discount" | "other";
	title: TypeLocalizedString;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	discountAmount: TypeMoneyFormat;
	discountAmountIncTax: TypeMoneyFormat;
}

export interface ContinentalCreateSessionBody {
	token: string;
	deviceName: string;
}

export interface ContinentalCreateSessionResponse {
	sessionToken: string;
	clientDeviceId: string;
}

export interface ContinentalCreateVirtualKeyBody {
	bookingId: number;
	clientDeviceId: string;
}

export interface ContinentalCreateVirtualKeyResponse {
	virtualKeyId: string;
}

export type ContinentalRevokeVirtualKeyResponse = {};

export interface ContinentalUpdateVirtualKeyBody {
	fromDate: string;
	toDate: string;
}

export type ContinentalUpdateVirtualKeyResponse = {};

export interface DivergentOpeningHoursItem {
	description: string;
	from: string;
	to: string;
	date: string;
	isClosedForTheWholeDay: boolean;
	locations: Array<number>;
}

export type DivergentOpeningHoursCreateResponse = {};

export type DivergentOpeningHoursDeleteResponse = {};

export interface DivergentOpeningHoursListResponse {
	total: number;
	divergentOpeningHours: Array<DatabaseDivergentOpeningHours>;
}

/**
 * Entity to store divergent opening hours for all locations, or a specific location. 
        If overlapping divergent opening hours are created (based on date), the one with a location specified will be used.
        
 */
export interface DatabaseDivergentOpeningHours {
	id: string;
	isClosedForTheWholeDay: boolean;
	description: string;
	date: string;
	from: string;
	to: string;
	locations: Array<number>;
}

export interface DivergentOpeningHoursSingleResponse {
	divergentOpeningHours: DatabaseDivergentOpeningHours;
}

export type DivergentOpeningHoursUpdateResponse = {};

export interface FeatureFlagCurrentResponse {
	__FEATURE_NEW_VEHICLE_DETAILS_PAGE_DIKS_777: boolean;
	__FEATURE_AB_TEST_DIKS_777: boolean;
	__FEATURE_SERVERSIDE_GTM: boolean;
	__FEATURE_TEMPORARY_DISABLE_ALTERNATIVES_DIKS_1232: boolean;
	__FEATURE_PREVENT_DUPLICATE_ACCOUNTS_DIKS_1532: boolean;
	__FEATURE_RABOBANK_STORAGE_1471: boolean;
	__FEATURE_SUPPLEMENT_ABROAD_DIKS_943: boolean;
	__FEATURE_SHARED_VEHICLE_REDUCED_DEDUCTIBLE_DIKSAPP_76: boolean;
	__FEATURE_STORAGE_ADD_MANDATE_DIKS_1406: boolean;
	__FEATURE_SEND_MAIL_VIA_BIRD_DIKS_1578: boolean;
	__FEATURE_PAY_STORAGE_ORDER_AT_OFFICE_DIKS_1582: boolean;
	__FEATURE_VALIDATE_ONFIDO_WEBHOOK_DIKSAPP_315: boolean;
	__FEATURE_CANCEL_STORAGE_ORDER_DIKS_1591: boolean;
	__FEATURE_LOCATION_AND_VEHICLE_ALTERNATIVES_DIKS_1211: boolean;
}

export type JobStartProplannerMirrorResponse = {};

export interface ManagementRequestMagicLinkBody {
	slackUserId: string;
}

export interface ManagementRequestMagicLinkResponse {
	magicLink?: string;
}

export interface ManagementFeatureFlagListBody {
	where?: {
		id?: string;
		idNotEqual?: string;
		idIn?: Array<string>;
		idNotIn?: Array<string>;
		name?: string;
		nameNotEqual?: string;
		nameIn?: Array<string>;
		nameNotIn?: Array<string>;
		nameLike?: string;
		nameILike?: string;
		nameNotLike?: string;
		createdAt?: string;
		createdAtNotEqual?: string;
		createdAtIn?: Array<string>;
		createdAtNotIn?: Array<string>;
		createdAtGreaterThan?: string;
		createdAtLowerThan?: string;
		updatedAt?: string;
		updatedAtNotEqual?: string;
		updatedAtIn?: Array<string>;
		updatedAtNotIn?: Array<string>;
		updatedAtGreaterThan?: string;
		updatedAtLowerThan?: string;
	};
	orderBy?: Array<"id" | "name" | "createdAt" | "updatedAt">;
	orderBySpec?: {
		id?: "ASC" | "DESC";
		name?: "ASC" | "DESC";
		createdAt?: "ASC" | "DESC";
		updatedAt?: "ASC" | "DESC";
	};
}

export interface ManagementFeatureFlagListResponse {
	list: Array<ManagementFeatureFlagItem>;
	total: number;
}

export interface ManagementFeatureFlagItem {
	id: string;
	globalValue?: boolean;
	description?: string;
	name: string;
	tenantValues?: Record<string, any>;
	userValues?: Record<string, any>;
	createdAt: string;
	updatedAt: string;
}

export interface ManagementFeatureFlagSingleResponse {
	item: ManagementFeatureFlagItem;
}

export interface ManagementFeatureFlagItemWrite {
	globalValue?: boolean;
	description?: string;
	tenantValues?: Record<string, any>;
	userValues?: Record<string, any>;
}

export interface ManagementFeatureFlagUpdateResponse {
	success: boolean;
}

export interface MultitenantCurrentResponse {
	tenant: {
		id: string;
		name: string;
		data?: BackendTenantData;
	};
}

export type BackendTenantData = any;

export type OnfidoStartDriversLicenseVerificationBody = {};

export interface OnfidoStartDriversLicenseVerificationResponse {
	redirectUrl: string;
}

export interface OnfidoWebhookBody {
	id?: string;
	timestamp?: string;
	eventName?: string;
	sender?: string;
	eventData: {
		status: string;
		dossierId: string;
		processId: string;
		externalReference?: string;
	};
	accountId?: string;
	expiresAt?: string;
	isMockEvent?: boolean;
	tags?: Array<string>;
}

export type OnfidoWebhookResponse = {};

export interface OrderAddBody {
	categoryId: number;
	datePickup: string;
	dateReturn: string;
	locationPickup: number;
	locationReturn?: number;
	expectedKilometers?: number;
	extraDriverCount: number;
	extraYoungDriverCount: number;
	insuranceProfileOptionId: number;
	abroadOptionId?: number;
	selectedAddons: Array<{
		addonId: number;
		quantity: number;
	}>;
	referenceText?: string;
	quantity: number;
	remarks?: string;
}

export interface OrderAddResponse {
	tokens?: AuthTokenPair;
}

export interface OrderDiscountApplyBody {
	discountCode: string;
}

export type OrderDiscountApplyResponse = {};

export type OrderDiscountRemoveResponse = {};

export interface OrderOverviewBody {
	locale: TypeLocale;
}

export interface OrderOverviewResponse {
	isBookable: boolean;
	isQuotation: boolean;
	appliedDiscountCode?: string;
	pricing: {
		total: TypeMoneyFormat;
		totalIncTax: TypeMoneyFormat;
		taxAmount: TypeMoneyFormat;
		discountAmount: TypeMoneyFormat;
		discountPercentage: number;
		depositAmount: TypeMoneyFormat;
	};
	lines: Array<OrderLine>;
}

export interface OrderLine {
	id: string;
	category: CategoryItem;
	datePickup: string;
	dateReturn: string;
	locationPickup: LocationItem;
	locationReturn?: LocationItem;
	selectedAddons: Array<{
		addonId: number;
		quantity: number;
	}>;
	quantity: number;
	availability: OrderAvailabilityStatus;
	expectedKilometers?: number;
	extraDriverCount: number;
	extraYoungDriverCount: number;
	abroadOptionId?: number;
	insuranceProfileOptionId: number;
	insuranceProfileOptionDescription?: string;
	price: TypeMoneyFormat;
	priceIncTax: TypeMoneyFormat;
	taxAmount: TypeMoneyFormat;
	depositAmount: TypeMoneyFormat;
	freeKilometers: number;
	referenceText: string;
	priceLines: Array<{
		type: string;
		line: string;
		quantity: number;
		price: TypeMoneyFormat;
		priceIncTax: TypeMoneyFormat;
		periods?: number;
	}>;
	orderType: "booking" | "quotation";
	remarks?: string;
}

export type OrderAvailabilityStatus =
	| "unavailable"
	| "available"
	| "full"
	| "almostFull"
	| "availableAtLocation";

export interface OrderOverviewCountResponse {
	lines: number;
}

export type OrderRemoveResponse = {};

export interface OrderSingleResponse {
	line: OrderLine;
}

export interface OrderUpdateBody {
	categoryId: number;
	datePickup: string;
	dateReturn: string;
	locationPickup: number;
	locationReturn?: number;
	expectedKilometers?: number;
	extraDriverCount: number;
	extraYoungDriverCount: number;
	insuranceProfileOptionId: number;
	abroadOptionId?: number;
	selectedAddons: Array<{
		addonId: number;
		quantity: number;
	}>;
	referenceText?: string;
	quantity: number;
	remarks?: string;
}

export type OrderUpdateResponse = {};

/**
 * Also used in {@link apiStorageOrderFlowCheckout}
 */
export interface OrderCheckoutFlowCheckoutBody {
	locale: TypeLocale;
	paymentMethod: TypePayment;
	password?: AuthPasswordBasedPassword;
}

export interface OrderCheckoutFlowCheckoutResponse {
	status: "SUCCESS" | "FAILED";
	bookingIds: Array<number>;
	paymentUrl?: string;
	confirmedOrder?: string;
}

export interface OrderCheckoutFlowInfoBody {
	locale: TypeLocale;
}

export interface OrderCheckoutFlowInfoResponse {
	askAccountType: boolean;
	askEmailField: boolean;
	askBirthDateField: boolean;
	paymentMethods: Array<OrderCheckoutPaymentMethod>;
	preferences: OrderCheckoutPreferences;
	accountType?: TypeAccount;
	email?: string;
	birthDate?: string;
	order: OrderOverviewResponse;
}

export interface OrderCheckoutPaymentMethod {
	type: TypePayment;
	disabled: boolean;
	disabledReason?: "iDealMultipleItems" | "iDealCategoryAlmostFull" | "iDealItemIsQuotation";
}

/**
 * 
    These fields are also used in {@link apiStorageOrderCheckoutFlowInfo}.
    They also match {@link StorageOrderCheckoutValidatedPreferences} but with different validation.
    
 */
export interface OrderCheckoutPreferences {
	phone: string;
	salutation?: ProplannerGender;
	firstName?: string;
	middleName?: string;
	surname?: string;
	companyName?: string;
	btw?: string;
	kvk?: string;
	street?: string;
	houseNumber?: string;
	houseNumberAddition?: string;
	postalCode?: string;
	city?: string;
	countryCode?: string;
}

/**
 * The fields of {@link StorageOrderCheckoutValidatedFlowPreferencesBody} but with different validation
 */
export interface OrderCheckoutFlowPreferencesBody {
	preferences: OrderCheckoutPreferences;
	accountType?: TypeAccount;
	email?: TypeEmail;
	birthDate?: string;
}

export type OrderCheckoutFlowPreferencesResponse = {};

export interface OrderShareApplyBody {
	shareId: string;
}

export interface OrderShareApplyResponse {
	tokens?: AuthTokenPair;
}

export interface OrderShareCreateResponse {
	shareId: string;
}

export interface RabobankWebhookOmnikassaBody {
	authentication: string;
	expiry: string;
	eventName: "merchant.order.status.changed";
	poiId: number;
	signature: string;
}

export type RabobankWebhookOmnikassaResponse = {};

export interface SharedVehicleReservationActiveResponse {
	item?: SharedVehicleReservationItem;
}

export interface SharedVehicleReservationItem {
	reservationId: number;
	status: ReservationStatus;
	sharedVehicle: SharedVehicleItem;
	datePickup: string;
	dateReturn: string;
	priceIncTax: TypeMoneyFormat;
	createAt: string;
	updatedAt: string;
	invoices: Array<{
		invoiceId: number;
		invoiceDescription: string;
		invoiceNumber: string;
		invoiceDate: string;
	}>;
	currentVehicleLocation?: {
		latitude: number;
		longitude: number;
	};
}

export interface SharedVehicleReservationAvailabilityExtendBookingBody {
	locale: TypeLocale;
	dateReturn: string;
}

export interface SharedVehicleReservationAvailabilityExtendBookingResponse {
	canBeExtended: boolean;
}

export type SharedVehicleReservationCancelResponse = {};

export interface SharedVehicleReservationExtendBookingBody {
	locale: TypeLocale;
	dateReturn: string;
}

export interface SharedVehicleReservationExtendBookingResponse {
	paymentUrl?: string;
}

export interface SharedVehicleReservationGeneratePaymentUrlBody {
	locale: TypeLocale;
}

export interface SharedVehicleReservationGeneratePaymentUrlResponse {
	paymentUrl: string;
}

export interface SharedVehicleReservationGetFuelInstructionsResponse {
	fuelCardPin?: string;
	fuelInstructions?: TypeLocalizedString;
}

export interface SharedVehicleReservationListForUserResponse {
	reservations: Array<SharedVehicleReservationItem>;
	total: number;
}

export interface SharedVehicleReservationStartRideBody {
	internalTidiness?: SharedVehicleReservationCarTidiness;
	externalTidiness?: SharedVehicleReservationCarTidiness;
}

export type SharedVehicleReservationCarTidiness = "dirty" | "veryDirty" | "extremelyDirty";

export type SharedVehicleReservationStartRideResponse = {};

export interface SharedVehicleReservationStopRideBody {
	internalTidiness?: SharedVehicleReservationCarTidiness;
	externalTidiness?: SharedVehicleReservationCarTidiness;
}

export type SharedVehicleReservationStopRideResponse = {};

export interface SharedVehicleReservationUpdateBody {
	locale: TypeLocale;
	datePickup: string;
	dateReturn: string;
}

export interface SharedVehicleReservationUpdateResponse {
	paymentUrl?: string;
}

export interface StorageAddonsResponse {
	addons: Array<StorageAddon>;
}

export interface StorageAddon {
	id: number;
	title: TypeLocalizedString;
	pricing: {
		price: TypeMoneyFormat;
		priceIncTax: TypeMoneyFormat;
	};
	minQuantity: number;
	maxQuantity?: number;
}

export interface StorageCategoriesResponse {
	categories: Array<StorageCategory>;
}

export interface StorageCategory {
	id: string;
	title: TypeLocalizedString;
	availabilityStatus: StorageAvailabilityStatus;
}

export type StorageAvailabilityStatus = "available" | "full";

export interface StorageTerminationTypesResponse {
	terminationTypes: Array<StorageTerminationType>;
}

export interface StorageTerminationType {
	id: number;
	title: TypeLocalizedString;
}

export interface StorageUnitTypesResponse {
	unitTypes: Array<StorageUnitType>;
}

export interface StorageUnitType {
	id: string;
	title: TypeLocalizedString;
	availabilityStatus: StorageAvailabilityStatus;
	measurements: StorageOrderUnitMeasurements;
	pricing: {
		price: TypeMoneyFormat;
		priceIncTax: TypeMoneyFormat;
		reservationFee: TypeMoneyFormat;
		reservationFeeIncTax: TypeMoneyFormat;
		depositAmount: TypeMoneyFormat;
		depositAmountIncTax: TypeMoneyFormat;
	};
	categoryId: string;
}

export interface StorageLocationSingleResponse {
	storageLocation: LocationItem;
}

export interface SupportContactBody {
	name: TypeInputString;
	phone: TypePhoneNumber;
	email: TypeEmail;
	department: SupportDepartment;
	question: string;
}

export type TypeInputString = string;

export type TypePhoneNumber = string;

export type SupportDepartment = "fines" | "marketing" | "administration" | "sales" | "customerService";

export interface SupportContactResponse {
	success: boolean;
}

export interface SupportSubscribeNewsletterBody {
	email: TypeEmail;
}

export interface SupportSubscribeNewsletterResponse {
	success: boolean;
}

export type AccountFavoritesResponse200 = AccountFavoritesResponse;

export type AccountFavoritesResponse400 = AppError;

export type AccountFavoritesResponse401 = AppError;

export type AccountFavoritesResponse404 = AppError;

export type AccountFavoritesResponse405 = AppError;

export type AccountFavoritesResponse500 = AppError;

export type AccountGetAppPreferencesResponse200 = AccountGetAppPreferencesResponse;

export type AccountGetAppPreferencesResponse400 = AppError;

export type AccountGetAppPreferencesResponse401 = AppError;

export type AccountGetAppPreferencesResponse404 = AppError;

export type AccountGetAppPreferencesResponse405 = AppError;

export type AccountGetAppPreferencesResponse500 = AppError;

export type AccountGetCompanyPreferencesResponse200 = AccountGetCompanyPreferencesResponse;

export type AccountGetCompanyPreferencesResponse400 = AppError;

export type AccountGetCompanyPreferencesResponse401 = AppError;

export type AccountGetCompanyPreferencesResponse404 = AppError;

export type AccountGetCompanyPreferencesResponse405 = AppError;

export type AccountGetCompanyPreferencesResponse500 = AppError;

export type AccountUpdateCompanyPreferencesRequest = AccountUpdateCompanyPreferencesBody;

export type AccountUpdateCompanyPreferencesResponse200 = AccountUpdateCompanyPreferencesResponse;

export type AccountUpdateCompanyPreferencesResponse400 = AppError;

export type AccountUpdateCompanyPreferencesResponse401 = AppError;

export type AccountUpdateCompanyPreferencesResponse404 = AppError;

export type AccountUpdateCompanyPreferencesResponse405 = AppError;

export type AccountUpdateCompanyPreferencesResponse500 = AppError;

export type AccountGetPersonalPreferencesResponse200 = AccountGetPersonalPreferencesResponse;

export type AccountGetPersonalPreferencesResponse400 = AppError;

export type AccountGetPersonalPreferencesResponse401 = AppError;

export type AccountGetPersonalPreferencesResponse404 = AppError;

export type AccountGetPersonalPreferencesResponse405 = AppError;

export type AccountGetPersonalPreferencesResponse500 = AppError;

export type AccountUpdatePersonalPreferencesRequest = AccountUpdatePersonalPreferencesBody;

export type AccountUpdatePersonalPreferencesResponse200 = AccountUpdatePersonalPreferencesResponse;

export type AccountUpdatePersonalPreferencesResponse400 = AppError;

export type AccountUpdatePersonalPreferencesResponse401 = AppError;

export type AccountUpdatePersonalPreferencesResponse404 = AppError;

export type AccountUpdatePersonalPreferencesResponse405 = AppError;

export type AccountUpdatePersonalPreferencesResponse500 = AppError;

export type AccountMeResponse200 = AccountMeResponse;

export type AccountMeResponse400 = AppError;

export type AccountMeResponse401 = AppError;

export type AccountMeResponse404 = AppError;

export type AccountMeResponse405 = AppError;

export type AccountMeResponse500 = AppError;

export type AccountRegisterRequest = AccountRegisterBody;

export type AccountRegisterResponse200 = AccountRegisterResponse;

export type AccountRegisterResponse400 = AppError;

export type AccountRegisterResponse401 = AppError;

export type AccountRegisterResponse404 = AppError;

export type AccountRegisterResponse405 = AppError;

export type AccountRegisterResponse500 = AppError;

export type AccountRemoveResponse200 = AccountRemoveResponse;

export type AccountRemoveResponse400 = AppError;

export type AccountRemoveResponse401 = AppError;

export type AccountRemoveResponse404 = AppError;

export type AccountRemoveResponse405 = AppError;

export type AccountRemoveResponse500 = AppError;

export type AccountRemoveDriversLicenseDataResponse200 = AccountRemoveDriversLicenseDataResponse;

export type AccountRemoveDriversLicenseDataResponse400 = AppError;

export type AccountRemoveDriversLicenseDataResponse401 = AppError;

export type AccountRemoveDriversLicenseDataResponse404 = AppError;

export type AccountRemoveDriversLicenseDataResponse405 = AppError;

export type AccountRemoveDriversLicenseDataResponse500 = AppError;

export type AccountReservationsRequest = ReservationListForUserBody;

export type AccountReservationsResponse200 = ReservationListForUserResponse;

export type AccountReservationsResponse400 = AppError;

export type AccountReservationsResponse401 = AppError;

export type AccountReservationsResponse404 = AppError;

export type AccountReservationsResponse405 = AppError;

export type AccountReservationsResponse500 = AppError;

export type CategoryAlternativesRequest = CategoryAlternativesBody;

export type CategoryAlternativesResponse200 = CategoryAlternativesResponse;

export type CategoryAlternativesResponse400 = AppError;

export type CategoryAlternativesResponse401 = AppError;

export type CategoryAlternativesResponse404 = AppError;

export type CategoryAlternativesResponse405 = AppError;

export type CategoryAlternativesResponse500 = AppError;

export type CategoryAvailabilityRequest = CategoryAvailabilityBody;

export type CategoryAvailabilityResponse200 = CategoryAvailabilityResponse;

export type CategoryAvailabilityResponse400 = AppError;

export type CategoryAvailabilityResponse401 = AppError;

export type CategoryAvailabilityResponse404 = AppError;

export type CategoryAvailabilityResponse405 = AppError;

export type CategoryAvailabilityResponse500 = AppError;

export type CategoryCompareRequest = CategoryCompareBody;

export type CategoryCompareResponse200 = CategoryCompareResponse;

export type CategoryCompareResponse400 = AppError;

export type CategoryCompareResponse401 = AppError;

export type CategoryCompareResponse404 = AppError;

export type CategoryCompareResponse405 = AppError;

export type CategoryCompareResponse500 = AppError;

export type CategoryFavoriteResponse200 = CategoryFavoriteResponse;

export type CategoryFavoriteResponse400 = AppError;

export type CategoryFavoriteResponse401 = AppError;

export type CategoryFavoriteResponse404 = AppError;

export type CategoryFavoriteResponse405 = AppError;

export type CategoryFavoriteResponse500 = AppError;

export type CategoryImageResponse200 = CategoryImageResponse;

export type CategoryImageResponse400 = AppError;

export type CategoryImageResponse401 = AppError;

export type CategoryImageResponse404 = AppError;

export type CategoryImageResponse405 = AppError;

export type CategoryImageResponse500 = AppError;

export type CategoryInsuranceProfileRequest = CategoryInsuranceProfileBody;

export type CategoryInsuranceProfileResponse200 = CategoryInsuranceProfileResponse;

export type CategoryInsuranceProfileResponse400 = AppError;

export type CategoryInsuranceProfileResponse401 = AppError;

export type CategoryInsuranceProfileResponse404 = AppError;

export type CategoryInsuranceProfileResponse405 = AppError;

export type CategoryInsuranceProfileResponse500 = AppError;

export type CategoryListResponse200 = CategoryListResponse;

export type CategoryListResponse400 = AppError;

export type CategoryListResponse401 = AppError;

export type CategoryListResponse404 = AppError;

export type CategoryListResponse405 = AppError;

export type CategoryListResponse500 = AppError;

export type CategoryMainImageResponse200 = CategoryMainImageResponse;

export type CategoryMainImageResponse400 = AppError;

export type CategoryMainImageResponse401 = AppError;

export type CategoryMainImageResponse404 = AppError;

export type CategoryMainImageResponse405 = AppError;

export type CategoryMainImageResponse500 = AppError;

export type CategoryPriceCalculationRequest = CategoryPriceCalculationBody;

export type CategoryPriceCalculationResponse200 = CategoryPriceCalculationResponse;

export type CategoryPriceCalculationResponse400 = AppError;

export type CategoryPriceCalculationResponse401 = AppError;

export type CategoryPriceCalculationResponse404 = AppError;

export type CategoryPriceCalculationResponse405 = AppError;

export type CategoryPriceCalculationResponse500 = AppError;

export type CategorySingleResponse200 = CategorySingleResponse;

export type CategorySingleResponse400 = AppError;

export type CategorySingleResponse401 = AppError;

export type CategorySingleResponse404 = AppError;

export type CategorySingleResponse405 = AppError;

export type CategorySingleResponse500 = AppError;

export type MainCategoryImageResponse200 = MainCategoryImageResponse;

export type MainCategoryImageResponse400 = AppError;

export type MainCategoryImageResponse401 = AppError;

export type MainCategoryImageResponse404 = AppError;

export type MainCategoryImageResponse405 = AppError;

export type MainCategoryImageResponse500 = AppError;

export type MainCategoryListResponse200 = MainCategoryListResponse;

export type MainCategoryListResponse400 = AppError;

export type MainCategoryListResponse401 = AppError;

export type MainCategoryListResponse404 = AppError;

export type MainCategoryListResponse405 = AppError;

export type MainCategoryListResponse500 = AppError;

export type MainCategoryMainImageResponse200 = MainCategoryMainImageResponse;

export type MainCategoryMainImageResponse400 = AppError;

export type MainCategoryMainImageResponse401 = AppError;

export type MainCategoryMainImageResponse404 = AppError;

export type MainCategoryMainImageResponse405 = AppError;

export type MainCategoryMainImageResponse500 = AppError;

export type AddonImageResponse200 = AddonImageResponse;

export type AddonImageResponse400 = AppError;

export type AddonImageResponse401 = AppError;

export type AddonImageResponse404 = AppError;

export type AddonImageResponse405 = AppError;

export type AddonImageResponse500 = AppError;

export type AddonMainImageResponse200 = AddonMainImageResponse;

export type AddonMainImageResponse400 = AppError;

export type AddonMainImageResponse401 = AppError;

export type AddonMainImageResponse404 = AppError;

export type AddonMainImageResponse405 = AppError;

export type AddonMainImageResponse500 = AppError;

export type SharedVehicleAddDamageRequest = SharedVehicleAddDamageBody;

export type SharedVehicleAddDamageResponse200 = SharedVehicleAddDamageResponse;

export type SharedVehicleAddDamageResponse400 = AppError;

export type SharedVehicleAddDamageResponse401 = AppError;

export type SharedVehicleAddDamageResponse404 = AppError;

export type SharedVehicleAddDamageResponse405 = AppError;

export type SharedVehicleAddDamageResponse500 = AppError;

export type SharedVehicleAdminListResponse200 = SharedVehicleAdminListResponse;

export type SharedVehicleAdminListResponse400 = AppError;

export type SharedVehicleAdminListResponse401 = AppError;

export type SharedVehicleAdminListResponse404 = AppError;

export type SharedVehicleAdminListResponse405 = AppError;

export type SharedVehicleAdminListResponse500 = AppError;

export type SharedVehicleAdminSingleResponse200 = SharedVehicleAdminSingleResponse;

export type SharedVehicleAdminSingleResponse400 = AppError;

export type SharedVehicleAdminSingleResponse401 = AppError;

export type SharedVehicleAdminSingleResponse404 = AppError;

export type SharedVehicleAdminSingleResponse405 = AppError;

export type SharedVehicleAdminSingleResponse500 = AppError;

export type SharedVehicleAdminUpdateRequest = SharedVehicleAdminUpdateBody;

export type SharedVehicleAdminUpdateResponse200 = SharedVehicleAdminUpdateResponse;

export type SharedVehicleAdminUpdateResponse400 = AppError;

export type SharedVehicleAdminUpdateResponse401 = AppError;

export type SharedVehicleAdminUpdateResponse404 = AppError;

export type SharedVehicleAdminUpdateResponse405 = AppError;

export type SharedVehicleAdminUpdateResponse500 = AppError;

export type SharedVehicleAvailabilityRequest = SharedVehicleAvailabilityBody;

export type SharedVehicleAvailabilityResponse200 = SharedVehicleAvailabilityResponse;

export type SharedVehicleAvailabilityResponse400 = AppError;

export type SharedVehicleAvailabilityResponse401 = AppError;

export type SharedVehicleAvailabilityResponse404 = AppError;

export type SharedVehicleAvailabilityResponse405 = AppError;

export type SharedVehicleAvailabilityResponse500 = AppError;

export type SharedVehicleAvailabilityCalendarResponse200 = ProplannerSharedVehicleAvailabilityCalendar;

export type SharedVehicleAvailabilityCalendarResponse400 = AppError;

export type SharedVehicleAvailabilityCalendarResponse401 = AppError;

export type SharedVehicleAvailabilityCalendarResponse404 = AppError;

export type SharedVehicleAvailabilityCalendarResponse405 = AppError;

export type SharedVehicleAvailabilityCalendarResponse500 = AppError;

export type SharedVehicleCreateBookingRequest = SharedVehicleCreateBookingBody;

export type SharedVehicleCreateBookingResponse200 = SharedVehicleCreateBookingResponse;

export type SharedVehicleCreateBookingResponse400 = AppError;

export type SharedVehicleCreateBookingResponse401 = AppError;

export type SharedVehicleCreateBookingResponse404 = AppError;

export type SharedVehicleCreateBookingResponse405 = AppError;

export type SharedVehicleCreateBookingResponse500 = AppError;

export type SharedVehicleDamageImageResponse200 = SharedVehicleDamageImageResponse;

export type SharedVehicleDamageImageResponse400 = AppError;

export type SharedVehicleDamageImageResponse401 = AppError;

export type SharedVehicleDamageImageResponse404 = AppError;

export type SharedVehicleDamageImageResponse405 = AppError;

export type SharedVehicleDamageImageResponse500 = AppError;

export type SharedVehicleDamageTemplateResponse200 = SharedVehicleDamageTemplateResponse;

export type SharedVehicleDamageTemplateResponse400 = AppError;

export type SharedVehicleDamageTemplateResponse401 = AppError;

export type SharedVehicleDamageTemplateResponse404 = AppError;

export type SharedVehicleDamageTemplateResponse405 = AppError;

export type SharedVehicleDamageTemplateResponse500 = AppError;

export type SharedVehicleFavoriteResponse200 = SharedVehicleFavoriteResponse;

export type SharedVehicleFavoriteResponse400 = AppError;

export type SharedVehicleFavoriteResponse401 = AppError;

export type SharedVehicleFavoriteResponse404 = AppError;

export type SharedVehicleFavoriteResponse405 = AppError;

export type SharedVehicleFavoriteResponse500 = AppError;

export type SharedVehicleImageResponse200 = SharedVehicleImageResponse;

export type SharedVehicleImageResponse400 = AppError;

export type SharedVehicleImageResponse401 = AppError;

export type SharedVehicleImageResponse404 = AppError;

export type SharedVehicleImageResponse405 = AppError;

export type SharedVehicleImageResponse500 = AppError;

export type SharedVehicleListDamagesRequest = SharedVehicleListDamagesBody;

export type SharedVehicleListDamagesResponse200 = SharedVehicleListDamagesResponse;

export type SharedVehicleListDamagesResponse400 = AppError;

export type SharedVehicleListDamagesResponse401 = AppError;

export type SharedVehicleListDamagesResponse404 = AppError;

export type SharedVehicleListDamagesResponse405 = AppError;

export type SharedVehicleListDamagesResponse500 = AppError;

export type SharedVehiclePricingRequest = SharedVehiclePricingBody;

export type SharedVehiclePricingResponse200 = SharedVehiclePricingResponse;

export type SharedVehiclePricingResponse400 = AppError;

export type SharedVehiclePricingResponse401 = AppError;

export type SharedVehiclePricingResponse404 = AppError;

export type SharedVehiclePricingResponse405 = AppError;

export type SharedVehiclePricingResponse500 = AppError;

export type SharedVehicleSingleResponse200 = SharedVehicleSingleResponse;

export type SharedVehicleSingleResponse400 = AppError;

export type SharedVehicleSingleResponse401 = AppError;

export type SharedVehicleSingleResponse404 = AppError;

export type SharedVehicleSingleResponse405 = AppError;

export type SharedVehicleSingleResponse500 = AppError;

export type SharedVehicleStateOfChargeResponse200 = SharedVehicleStateOfChargeResponse;

export type SharedVehicleStateOfChargeResponse400 = AppError;

export type SharedVehicleStateOfChargeResponse401 = AppError;

export type SharedVehicleStateOfChargeResponse404 = AppError;

export type SharedVehicleStateOfChargeResponse405 = AppError;

export type SharedVehicleStateOfChargeResponse500 = AppError;

export type AuthPasswordBasedForgotPasswordRequest = AuthPasswordBasedForgotPasswordBody;

export type AuthPasswordBasedForgotPasswordResponse200 = AuthPasswordBasedForgotPasswordResponse;

export type AuthPasswordBasedForgotPasswordResponse400 = AppError;

export type AuthPasswordBasedForgotPasswordResponse401 = AppError;

export type AuthPasswordBasedForgotPasswordResponse404 = AppError;

export type AuthPasswordBasedForgotPasswordResponse405 = AppError;

export type AuthPasswordBasedForgotPasswordResponse500 = AppError;

export type AuthPasswordBasedListEmailsResponse200 = AuthPasswordBasedListEmailsResponse;

export type AuthPasswordBasedListEmailsResponse400 = AppError;

export type AuthPasswordBasedListEmailsResponse401 = AppError;

export type AuthPasswordBasedListEmailsResponse404 = AppError;

export type AuthPasswordBasedListEmailsResponse405 = AppError;

export type AuthPasswordBasedListEmailsResponse500 = AppError;

export type AuthPasswordBasedLoginRequest = AuthPasswordBasedLoginBody;

export type AuthPasswordBasedLoginResponse200 = AuthPasswordBasedTokenPair;

export type AuthPasswordBasedLoginResponse400 = AppError;

export type AuthPasswordBasedLoginResponse401 = AppError;

export type AuthPasswordBasedLoginResponse404 = AppError;

export type AuthPasswordBasedLoginResponse405 = AppError;

export type AuthPasswordBasedLoginResponse500 = AppError;

export type AuthPasswordBasedResetPasswordRequest = AuthPasswordBasedResetPasswordBody;

export type AuthPasswordBasedResetPasswordResponse200 = AuthPasswordBasedResetPasswordResponse;

export type AuthPasswordBasedResetPasswordResponse400 = AppError;

export type AuthPasswordBasedResetPasswordResponse401 = AppError;

export type AuthPasswordBasedResetPasswordResponse404 = AppError;

export type AuthPasswordBasedResetPasswordResponse405 = AppError;

export type AuthPasswordBasedResetPasswordResponse500 = AppError;

export type AuthPasswordBasedUpdateEmailRequest = AuthPasswordBasedUpdateEmailBody;

export type AuthPasswordBasedUpdateEmailResponse200 = AuthPasswordBasedUpdateEmailResponse;

export type AuthPasswordBasedUpdateEmailResponse400 = AppError;

export type AuthPasswordBasedUpdateEmailResponse401 = AppError;

export type AuthPasswordBasedUpdateEmailResponse404 = AppError;

export type AuthPasswordBasedUpdateEmailResponse405 = AppError;

export type AuthPasswordBasedUpdateEmailResponse500 = AppError;

export type AuthPasswordBasedUpdatePasswordRequest = AuthPasswordBasedUpdatePasswordBody;

export type AuthPasswordBasedUpdatePasswordResponse200 = AuthPasswordBasedUpdatePasswordResponse;

export type AuthPasswordBasedUpdatePasswordResponse400 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse401 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse404 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse405 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse500 = AppError;

export type AuthPasswordBasedVerifyEmailRequest = AuthPasswordBasedVerifyEmailBody;

export type AuthPasswordBasedVerifyEmailResponse200 = AuthPasswordBasedTokenPair;

export type AuthPasswordBasedVerifyEmailResponse400 = AppError;

export type AuthPasswordBasedVerifyEmailResponse401 = AppError;

export type AuthPasswordBasedVerifyEmailResponse404 = AppError;

export type AuthPasswordBasedVerifyEmailResponse405 = AppError;

export type AuthPasswordBasedVerifyEmailResponse500 = AppError;

export type AuthPasswordBasedVerifyOtpRequest = AuthPasswordBasedVerifyOtpBody;

export type AuthPasswordBasedVerifyOtpResponse200 = AuthPasswordBasedVerifyOtpResponse;

export type AuthPasswordBasedVerifyOtpResponse400 = AppError;

export type AuthPasswordBasedVerifyOtpResponse401 = AppError;

export type AuthPasswordBasedVerifyOtpResponse404 = AppError;

export type AuthPasswordBasedVerifyOtpResponse405 = AppError;

export type AuthPasswordBasedVerifyOtpResponse500 = AppError;

export type ReservationCancelResponse200 = ReservationCancelResponse;

export type ReservationCancelResponse400 = AppError;

export type ReservationCancelResponse401 = AppError;

export type ReservationCancelResponse404 = AppError;

export type ReservationCancelResponse405 = AppError;

export type ReservationCancelResponse500 = AppError;

export type ReservationUpdateRequest = ReservationUpdateBody;

export type ReservationUpdateResponse200 = ReservationUpdateResponse;

export type ReservationUpdateResponse400 = AppError;

export type ReservationUpdateResponse401 = AppError;

export type ReservationUpdateResponse404 = AppError;

export type ReservationUpdateResponse405 = AppError;

export type ReservationUpdateResponse500 = AppError;

export type ReservationDownloadInvoiceResponse200 = ReservationDownloadInvoiceResponse;

export type ReservationDownloadInvoiceResponse400 = AppError;

export type ReservationDownloadInvoiceResponse401 = AppError;

export type ReservationDownloadInvoiceResponse404 = AppError;

export type ReservationDownloadInvoiceResponse405 = AppError;

export type ReservationDownloadInvoiceResponse500 = AppError;

export type ReservationFetchByIdsRequest = ReservationFetchByIdsBody;

export type ReservationFetchByIdsResponse200 = ReservationFetchByIdsResponse;

export type ReservationFetchByIdsResponse400 = AppError;

export type ReservationFetchByIdsResponse401 = AppError;

export type ReservationFetchByIdsResponse404 = AppError;

export type ReservationFetchByIdsResponse405 = AppError;

export type ReservationFetchByIdsResponse500 = AppError;

export type ReservationRepeatRequest = ReservationRepeatBody;

export type ReservationRepeatResponse200 = ReservationRepeatResponse;

export type ReservationRepeatResponse400 = AppError;

export type ReservationRepeatResponse401 = AppError;

export type ReservationRepeatResponse404 = AppError;

export type ReservationRepeatResponse405 = AppError;

export type ReservationRepeatResponse500 = AppError;

export type LocationListResponse200 = LocationListResponse;

export type LocationListResponse400 = AppError;

export type LocationListResponse401 = AppError;

export type LocationListResponse404 = AppError;

export type LocationListResponse405 = AppError;

export type LocationListResponse500 = AppError;

export type LocationReorderRequest = LocationReorderBody;

export type LocationReorderResponse200 = LocationReorderResponse;

export type LocationReorderResponse400 = AppError;

export type LocationReorderResponse401 = AppError;

export type LocationReorderResponse404 = AppError;

export type LocationReorderResponse405 = AppError;

export type LocationReorderResponse500 = AppError;

export type LocationSingleResponse200 = LocationSingleResponse;

export type LocationSingleResponse400 = AppError;

export type LocationSingleResponse401 = AppError;

export type LocationSingleResponse404 = AppError;

export type LocationSingleResponse405 = AppError;

export type LocationSingleResponse500 = AppError;

export type AdminDeleteUserResponse200 = AdminDeleteUserResponse;

export type AdminDeleteUserResponse400 = AppError;

export type AdminDeleteUserResponse401 = AppError;

export type AdminDeleteUserResponse404 = AppError;

export type AdminDeleteUserResponse405 = AppError;

export type AdminDeleteUserResponse500 = AppError;

export type AdminInviteUserRequest = AdminInviteUserBody;

export type AdminInviteUserResponse200 = AdminInviteUserResponse;

export type AdminInviteUserResponse400 = AppError;

export type AdminInviteUserResponse401 = AppError;

export type AdminInviteUserResponse404 = AppError;

export type AdminInviteUserResponse405 = AppError;

export type AdminInviteUserResponse500 = AppError;

export type AdminListUsersResponse200 = AdminListUsersResponse;

export type AdminListUsersResponse400 = AppError;

export type AdminListUsersResponse401 = AppError;

export type AdminListUsersResponse404 = AppError;

export type AdminListUsersResponse405 = AppError;

export type AdminListUsersResponse500 = AppError;

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse200 =
	AppRedirectAccountDriversLicenseVerificationCompleteResponse;

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse400 = AppError;

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse401 = AppError;

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse404 = AppError;

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse405 = AppError;

export type AppRedirectAccountDriversLicenseVerificationCompleteResponse500 = AppError;

export type AuthGetUserResponse200 = AuthGetUserResponse;

export type AuthGetUserResponse400 = AppError;

export type AuthGetUserResponse401 = AppError;

export type AuthGetUserResponse404 = AppError;

export type AuthGetUserResponse405 = AppError;

export type AuthGetUserResponse500 = AppError;

export type AuthImpersonateStopSessionResponse200 = AuthImpersonateStopSessionResponse;

export type AuthImpersonateStopSessionResponse400 = AppError;

export type AuthImpersonateStopSessionResponse401 = AppError;

export type AuthImpersonateStopSessionResponse404 = AppError;

export type AuthImpersonateStopSessionResponse405 = AppError;

export type AuthImpersonateStopSessionResponse500 = AppError;

export type AuthLogoutResponse200 = AuthLogoutResponse;

export type AuthLogoutResponse400 = AppError;

export type AuthLogoutResponse401 = AppError;

export type AuthLogoutResponse404 = AppError;

export type AuthLogoutResponse405 = AppError;

export type AuthLogoutResponse500 = AppError;

export type AuthMeResponse200 = AuthMeResponse;

export type AuthMeResponse400 = AppError;

export type AuthMeResponse401 = AppError;

export type AuthMeResponse404 = AppError;

export type AuthMeResponse405 = AppError;

export type AuthMeResponse500 = AppError;

export type AuthRefreshTokensRequest = AuthRefreshTokensBody;

export type AuthRefreshTokensResponse200 = AuthTokenPair;

export type AuthRefreshTokensResponse400 = AppError;

export type AuthRefreshTokensResponse401 = AppError;

export type AuthRefreshTokensResponse404 = AppError;

export type AuthRefreshTokensResponse405 = AppError;

export type AuthRefreshTokensResponse500 = AppError;

export type AuthSetUserActiveRequest = AuthSetUserActiveBody;

export type AuthSetUserActiveResponse200 = AuthSetUserActiveResponse;

export type AuthSetUserActiveResponse400 = AppError;

export type AuthSetUserActiveResponse401 = AppError;

export type AuthSetUserActiveResponse404 = AppError;

export type AuthSetUserActiveResponse405 = AppError;

export type AuthSetUserActiveResponse500 = AppError;

export type AuthUpdateUserRequest = AuthUpdateUserBody;

export type AuthUpdateUserResponse200 = AuthUpdateUserResponse;

export type AuthUpdateUserResponse400 = AppError;

export type AuthUpdateUserResponse401 = AppError;

export type AuthUpdateUserResponse404 = AppError;

export type AuthUpdateUserResponse405 = AppError;

export type AuthUpdateUserResponse500 = AppError;

export type AuthUserListRequest = AuthUserListBody;

export type AuthUserListResponse200 = AuthUserListResponse;

export type AuthUserListResponse400 = AppError;

export type AuthUserListResponse401 = AppError;

export type AuthUserListResponse404 = AppError;

export type AuthUserListResponse405 = AppError;

export type AuthUserListResponse500 = AppError;

export type AuthPermissionCreateRoleRequest = AuthPermissionCreateRoleBody;

export type AuthPermissionCreateRoleResponse200 = AuthPermissionCreateRoleResponse;

export type AuthPermissionCreateRoleResponse400 = AppError;

export type AuthPermissionCreateRoleResponse401 = AppError;

export type AuthPermissionCreateRoleResponse404 = AppError;

export type AuthPermissionCreateRoleResponse405 = AppError;

export type AuthPermissionCreateRoleResponse500 = AppError;

export type AuthPermissionPermissionListResponse200 = AuthPermissionPermissionListResponse;

export type AuthPermissionPermissionListResponse400 = AppError;

export type AuthPermissionPermissionListResponse401 = AppError;

export type AuthPermissionPermissionListResponse404 = AppError;

export type AuthPermissionPermissionListResponse405 = AppError;

export type AuthPermissionPermissionListResponse500 = AppError;

export type AuthPermissionRemoveRoleResponse200 = AuthPermissionRemoveRoleResponse;

export type AuthPermissionRemoveRoleResponse400 = AppError;

export type AuthPermissionRemoveRoleResponse401 = AppError;

export type AuthPermissionRemoveRoleResponse404 = AppError;

export type AuthPermissionRemoveRoleResponse405 = AppError;

export type AuthPermissionRemoveRoleResponse500 = AppError;

export type AuthPermissionRoleAddPermissionsRequest = AuthPermissionRoleAddPermissionsBody;

export type AuthPermissionRoleAddPermissionsResponse200 = AuthPermissionRoleAddPermissionsResponse;

export type AuthPermissionRoleAddPermissionsResponse400 = AppError;

export type AuthPermissionRoleAddPermissionsResponse401 = AppError;

export type AuthPermissionRoleAddPermissionsResponse404 = AppError;

export type AuthPermissionRoleAddPermissionsResponse405 = AppError;

export type AuthPermissionRoleAddPermissionsResponse500 = AppError;

export type AuthPermissionRoleListResponse200 = AuthPermissionRoleListResponse;

export type AuthPermissionRoleListResponse400 = AppError;

export type AuthPermissionRoleListResponse401 = AppError;

export type AuthPermissionRoleListResponse404 = AppError;

export type AuthPermissionRoleListResponse405 = AppError;

export type AuthPermissionRoleListResponse500 = AppError;

export type AuthPermissionRoleRemovePermissionsRequest = AuthPermissionRoleRemovePermissionsBody;

export type AuthPermissionRoleRemovePermissionsResponse200 = AuthPermissionRoleRemovePermissionsResponse;

export type AuthPermissionRoleRemovePermissionsResponse400 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse401 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse404 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse405 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse500 = AppError;

export type AuthPermissionSummaryResponse200 = AuthPermissionSummaryResponse;

export type AuthPermissionSummaryResponse400 = AppError;

export type AuthPermissionSummaryResponse401 = AppError;

export type AuthPermissionSummaryResponse404 = AppError;

export type AuthPermissionSummaryResponse405 = AppError;

export type AuthPermissionSummaryResponse500 = AppError;

export type AuthPermissionUserAssignRoleRequest = AuthPermissionUserAssignRoleBody;

export type AuthPermissionUserAssignRoleResponse200 = AuthPermissionUserAssignRoleResponse;

export type AuthPermissionUserAssignRoleResponse400 = AppError;

export type AuthPermissionUserAssignRoleResponse401 = AppError;

export type AuthPermissionUserAssignRoleResponse404 = AppError;

export type AuthPermissionUserAssignRoleResponse405 = AppError;

export type AuthPermissionUserAssignRoleResponse500 = AppError;

export type AuthPermissionUserRemoveRoleRequest = AuthPermissionUserRemoveRoleBody;

export type AuthPermissionUserRemoveRoleResponse200 = AuthPermissionUserRemoveRoleResponse;

export type AuthPermissionUserRemoveRoleResponse400 = AppError;

export type AuthPermissionUserRemoveRoleResponse401 = AppError;

export type AuthPermissionUserRemoveRoleResponse404 = AppError;

export type AuthPermissionUserRemoveRoleResponse405 = AppError;

export type AuthPermissionUserRemoveRoleResponse500 = AppError;

export type AuthPermissionUserSummaryResponse200 = AuthPermissionUserSummaryResponse;

export type AuthPermissionUserSummaryResponse400 = AppError;

export type AuthPermissionUserSummaryResponse401 = AppError;

export type AuthPermissionUserSummaryResponse404 = AppError;

export type AuthPermissionUserSummaryResponse405 = AppError;

export type AuthPermissionUserSummaryResponse500 = AppError;

export type AuthAnonymousBasedLoginRequest = AuthAnonymousBasedLoginBody;

export type AuthAnonymousBasedLoginResponse200 = AuthAnonymousBasedTokenPair;

export type AuthAnonymousBasedLoginResponse400 = AppError;

export type AuthAnonymousBasedLoginResponse401 = AppError;

export type AuthAnonymousBasedLoginResponse404 = AppError;

export type AuthAnonymousBasedLoginResponse405 = AppError;

export type AuthAnonymousBasedLoginResponse500 = AppError;

export type SessionListResponse200 = SessionListResponse;

export type SessionListResponse400 = AppError;

export type SessionListResponse401 = AppError;

export type SessionListResponse404 = AppError;

export type SessionListResponse405 = AppError;

export type SessionListResponse500 = AppError;

export type SessionLogoutRequest = SessionLogoutBody;

export type SessionLogoutResponse200 = SessionLogoutResponse;

export type SessionLogoutResponse400 = AppError;

export type SessionLogoutResponse401 = AppError;

export type SessionLogoutResponse404 = AppError;

export type SessionLogoutResponse405 = AppError;

export type SessionLogoutResponse500 = AppError;

export type SessionSetDeviceNotificationTokenRequest = SessionSetDeviceNotificationTokenBody;

export type SessionSetDeviceNotificationTokenResponse200 = SessionSetDeviceNotificationTokenResponse;

export type SessionSetDeviceNotificationTokenResponse400 = AppError;

export type SessionSetDeviceNotificationTokenResponse401 = AppError;

export type SessionSetDeviceNotificationTokenResponse404 = AppError;

export type SessionSetDeviceNotificationTokenResponse405 = AppError;

export type SessionSetDeviceNotificationTokenResponse500 = AppError;

export type AuthTotpProviderInfoResponse200 = AuthTotpProviderInfoResponse;

export type AuthTotpProviderInfoResponse400 = AppError;

export type AuthTotpProviderInfoResponse401 = AppError;

export type AuthTotpProviderInfoResponse404 = AppError;

export type AuthTotpProviderInfoResponse405 = AppError;

export type AuthTotpProviderInfoResponse500 = AppError;

export type AuthTotpProviderRemoveResponse200 = AuthTotpProviderRemoveResponse;

export type AuthTotpProviderRemoveResponse400 = AppError;

export type AuthTotpProviderRemoveResponse401 = AppError;

export type AuthTotpProviderRemoveResponse404 = AppError;

export type AuthTotpProviderRemoveResponse405 = AppError;

export type AuthTotpProviderRemoveResponse500 = AppError;

export type AuthTotpProviderRemoveForUserResponse200 = AuthTotpProviderRemoveForUserResponse;

export type AuthTotpProviderRemoveForUserResponse400 = AppError;

export type AuthTotpProviderRemoveForUserResponse401 = AppError;

export type AuthTotpProviderRemoveForUserResponse404 = AppError;

export type AuthTotpProviderRemoveForUserResponse405 = AppError;

export type AuthTotpProviderRemoveForUserResponse500 = AppError;

export type AuthTotpProviderSetupRequest = AuthTotpProviderSetupBody;

export type AuthTotpProviderSetupResponse200 = AuthTotpProviderSetupResponse;

export type AuthTotpProviderSetupResponse400 = AppError;

export type AuthTotpProviderSetupResponse401 = AppError;

export type AuthTotpProviderSetupResponse404 = AppError;

export type AuthTotpProviderSetupResponse405 = AppError;

export type AuthTotpProviderSetupResponse500 = AppError;

export type AuthTotpProviderSetupVerifyRequest = AuthTotpProviderSetupVerifyBody;

export type AuthTotpProviderSetupVerifyResponse200 = AuthTotpProviderSetupVerifyResponse;

export type AuthTotpProviderSetupVerifyResponse400 = AppError;

export type AuthTotpProviderSetupVerifyResponse401 = AppError;

export type AuthTotpProviderSetupVerifyResponse404 = AppError;

export type AuthTotpProviderSetupVerifyResponse405 = AppError;

export type AuthTotpProviderSetupVerifyResponse500 = AppError;

export type AuthTotpProviderVerifyRequest = AuthTotpProviderVerifyBody;

export type AuthTotpProviderVerifyResponse200 = AuthTotpProviderVerifyResponse;

export type AuthTotpProviderVerifyResponse400 = AppError;

export type AuthTotpProviderVerifyResponse401 = AppError;

export type AuthTotpProviderVerifyResponse404 = AppError;

export type AuthTotpProviderVerifyResponse405 = AppError;

export type AuthTotpProviderVerifyResponse500 = AppError;

export type BusinessAddressPrefillRequest = BusinessAddressPrefillBody;

export type BusinessAddressPrefillResponse200 = BusinessAddressPrefillResponse;

export type BusinessAddressPrefillResponse400 = AppError;

export type BusinessAddressPrefillResponse401 = AppError;

export type BusinessAddressPrefillResponse404 = AppError;

export type BusinessAddressPrefillResponse405 = AppError;

export type BusinessAddressPrefillResponse500 = AppError;

export type ClientAdminListResponse200 = ClientAdminListResponse;

export type ClientAdminListResponse400 = AppError;

export type ClientAdminListResponse401 = AppError;

export type ClientAdminListResponse404 = AppError;

export type ClientAdminListResponse405 = AppError;

export type ClientAdminListResponse500 = AppError;

export type ClientAdminProplannerAccountResponse200 = ClientProplannerResult;

export type ClientAdminProplannerAccountResponse400 = AppError;

export type ClientAdminProplannerAccountResponse401 = AppError;

export type ClientAdminProplannerAccountResponse404 = AppError;

export type ClientAdminProplannerAccountResponse405 = AppError;

export type ClientAdminProplannerAccountResponse500 = AppError;

export type ClientAdminRemoveResponse200 = ClientAdminRemoveResponse;

export type ClientAdminRemoveResponse400 = AppError;

export type ClientAdminRemoveResponse401 = AppError;

export type ClientAdminRemoveResponse404 = AppError;

export type ClientAdminRemoveResponse405 = AppError;

export type ClientAdminRemoveResponse500 = AppError;

export type ClientAdminUpdateRequest = ClientAdminUpdateBody;

export type ClientAdminUpdateResponse200 = any;

export type ClientAdminUpdateResponse400 = AppError;

export type ClientAdminUpdateResponse401 = AppError;

export type ClientAdminUpdateResponse404 = AppError;

export type ClientAdminUpdateResponse405 = AppError;

export type ClientAdminUpdateResponse500 = AppError;

export type ConfirmedOrderListResponse200 = ConfirmedOrderListResponse;

export type ConfirmedOrderListResponse400 = AppError;

export type ConfirmedOrderListResponse401 = AppError;

export type ConfirmedOrderListResponse404 = AppError;

export type ConfirmedOrderListResponse405 = AppError;

export type ConfirmedOrderListResponse500 = AppError;

export type ConfirmedStorageOrderSingleResponse200 = ConfirmedStorageOrderItem;

export type ConfirmedStorageOrderSingleResponse400 = AppError;

export type ConfirmedStorageOrderSingleResponse401 = AppError;

export type ConfirmedStorageOrderSingleResponse404 = AppError;

export type ConfirmedStorageOrderSingleResponse405 = AppError;

export type ConfirmedStorageOrderSingleResponse500 = AppError;

export type StorageContractDownloadContractResponse200 = StorageContractDownloadContractResponse;

export type StorageContractDownloadContractResponse400 = AppError;

export type StorageContractDownloadContractResponse401 = AppError;

export type StorageContractDownloadContractResponse404 = AppError;

export type StorageContractDownloadContractResponse405 = AppError;

export type StorageContractDownloadContractResponse500 = AppError;

export type StorageContractDownloadInvoiceResponse200 = StorageContractDownloadInvoiceResponse;

export type StorageContractDownloadInvoiceResponse400 = AppError;

export type StorageContractDownloadInvoiceResponse401 = AppError;

export type StorageContractDownloadInvoiceResponse404 = AppError;

export type StorageContractDownloadInvoiceResponse405 = AppError;

export type StorageContractDownloadInvoiceResponse500 = AppError;

export type StorageContractInvoicesResponse200 = StorageContractInvoicesResponse;

export type StorageContractInvoicesResponse400 = AppError;

export type StorageContractInvoicesResponse401 = AppError;

export type StorageContractInvoicesResponse404 = AppError;

export type StorageContractInvoicesResponse405 = AppError;

export type StorageContractInvoicesResponse500 = AppError;

export type StorageContractOverviewResponse200 = StorageContractOverviewResponse;

export type StorageContractOverviewResponse400 = AppError;

export type StorageContractOverviewResponse401 = AppError;

export type StorageContractOverviewResponse404 = AppError;

export type StorageContractOverviewResponse405 = AppError;

export type StorageContractOverviewResponse500 = AppError;

export type StorageContractTerminateRequest = StorageContractTerminateBody;

export type StorageContractTerminateResponse200 = StorageContractTerminateResponse;

export type StorageContractTerminateResponse400 = AppError;

export type StorageContractTerminateResponse401 = AppError;

export type StorageContractTerminateResponse404 = AppError;

export type StorageContractTerminateResponse405 = AppError;

export type StorageContractTerminateResponse500 = AppError;

export type StorageOrderCheckoutRequest = StorageOrderCheckoutBody;

export type StorageOrderCheckoutResponse200 = StorageOrderCheckoutResponse;

export type StorageOrderCheckoutResponse400 = AppError;

export type StorageOrderCheckoutResponse401 = AppError;

export type StorageOrderCheckoutResponse404 = AppError;

export type StorageOrderCheckoutResponse405 = AppError;

export type StorageOrderCheckoutResponse500 = AppError;

export type StorageOrderConfigureRequest = StorageOrderConfigureBody;

export type StorageOrderConfigureResponse200 = StorageOrderConfigureResponse;

export type StorageOrderConfigureResponse400 = AppError;

export type StorageOrderConfigureResponse401 = AppError;

export type StorageOrderConfigureResponse404 = AppError;

export type StorageOrderConfigureResponse405 = AppError;

export type StorageOrderConfigureResponse500 = AppError;

export type StorageOrderOverviewResponse200 = StorageOrderOverviewResponse;

export type StorageOrderOverviewResponse400 = AppError;

export type StorageOrderOverviewResponse401 = AppError;

export type StorageOrderOverviewResponse404 = AppError;

export type StorageOrderOverviewResponse405 = AppError;

export type StorageOrderOverviewResponse500 = AppError;

export type StorageOrderDiscountApplyRequest = StorageOrderDiscountApplyBody;

export type StorageOrderDiscountApplyResponse200 = StorageOrderDiscountApplyResponse;

export type StorageOrderDiscountApplyResponse400 = AppError;

export type StorageOrderDiscountApplyResponse401 = AppError;

export type StorageOrderDiscountApplyResponse404 = AppError;

export type StorageOrderDiscountApplyResponse405 = AppError;

export type StorageOrderDiscountApplyResponse500 = AppError;

export type StorageOrderDiscountRemoveResponse200 = StorageOrderDiscountRemoveResponse;

export type StorageOrderDiscountRemoveResponse400 = AppError;

export type StorageOrderDiscountRemoveResponse401 = AppError;

export type StorageOrderDiscountRemoveResponse404 = AppError;

export type StorageOrderDiscountRemoveResponse405 = AppError;

export type StorageOrderDiscountRemoveResponse500 = AppError;

export type ContinentalCreateSessionRequest = ContinentalCreateSessionBody;

export type ContinentalCreateSessionResponse200 = ContinentalCreateSessionResponse;

export type ContinentalCreateSessionResponse400 = AppError;

export type ContinentalCreateSessionResponse401 = AppError;

export type ContinentalCreateSessionResponse404 = AppError;

export type ContinentalCreateSessionResponse405 = AppError;

export type ContinentalCreateSessionResponse500 = AppError;

export type ContinentalCreateVirtualKeyRequest = ContinentalCreateVirtualKeyBody;

export type ContinentalCreateVirtualKeyResponse200 = ContinentalCreateVirtualKeyResponse;

export type ContinentalCreateVirtualKeyResponse400 = AppError;

export type ContinentalCreateVirtualKeyResponse401 = AppError;

export type ContinentalCreateVirtualKeyResponse404 = AppError;

export type ContinentalCreateVirtualKeyResponse405 = AppError;

export type ContinentalCreateVirtualKeyResponse500 = AppError;

export type ContinentalRevokeVirtualKeyResponse200 = ContinentalRevokeVirtualKeyResponse;

export type ContinentalRevokeVirtualKeyResponse400 = AppError;

export type ContinentalRevokeVirtualKeyResponse401 = AppError;

export type ContinentalRevokeVirtualKeyResponse404 = AppError;

export type ContinentalRevokeVirtualKeyResponse405 = AppError;

export type ContinentalRevokeVirtualKeyResponse500 = AppError;

export type ContinentalUpdateVirtualKeyRequest = ContinentalUpdateVirtualKeyBody;

export type ContinentalUpdateVirtualKeyResponse200 = ContinentalUpdateVirtualKeyResponse;

export type ContinentalUpdateVirtualKeyResponse400 = AppError;

export type ContinentalUpdateVirtualKeyResponse401 = AppError;

export type ContinentalUpdateVirtualKeyResponse404 = AppError;

export type ContinentalUpdateVirtualKeyResponse405 = AppError;

export type ContinentalUpdateVirtualKeyResponse500 = AppError;

export type DivergentOpeningHoursCreateRequest = DivergentOpeningHoursItem;

export type DivergentOpeningHoursCreateResponse200 = DivergentOpeningHoursCreateResponse;

export type DivergentOpeningHoursCreateResponse400 = AppError;

export type DivergentOpeningHoursCreateResponse401 = AppError;

export type DivergentOpeningHoursCreateResponse404 = AppError;

export type DivergentOpeningHoursCreateResponse405 = AppError;

export type DivergentOpeningHoursCreateResponse500 = AppError;

export type DivergentOpeningHoursDeleteResponse200 = DivergentOpeningHoursDeleteResponse;

export type DivergentOpeningHoursDeleteResponse400 = AppError;

export type DivergentOpeningHoursDeleteResponse401 = AppError;

export type DivergentOpeningHoursDeleteResponse404 = AppError;

export type DivergentOpeningHoursDeleteResponse405 = AppError;

export type DivergentOpeningHoursDeleteResponse500 = AppError;

export type DivergentOpeningHoursSingleResponse200 = DivergentOpeningHoursSingleResponse;

export type DivergentOpeningHoursSingleResponse400 = AppError;

export type DivergentOpeningHoursSingleResponse401 = AppError;

export type DivergentOpeningHoursSingleResponse404 = AppError;

export type DivergentOpeningHoursSingleResponse405 = AppError;

export type DivergentOpeningHoursSingleResponse500 = AppError;

export type DivergentOpeningHoursUpdateRequest = DivergentOpeningHoursItem;

export type DivergentOpeningHoursUpdateResponse200 = DivergentOpeningHoursUpdateResponse;

export type DivergentOpeningHoursUpdateResponse400 = AppError;

export type DivergentOpeningHoursUpdateResponse401 = AppError;

export type DivergentOpeningHoursUpdateResponse404 = AppError;

export type DivergentOpeningHoursUpdateResponse405 = AppError;

export type DivergentOpeningHoursUpdateResponse500 = AppError;

export type DivergentOpeningHoursListResponse200 = DivergentOpeningHoursListResponse;

export type DivergentOpeningHoursListResponse400 = AppError;

export type DivergentOpeningHoursListResponse401 = AppError;

export type DivergentOpeningHoursListResponse404 = AppError;

export type DivergentOpeningHoursListResponse405 = AppError;

export type DivergentOpeningHoursListResponse500 = AppError;

export type FeatureFlagCurrentResponse200 = FeatureFlagCurrentResponse;

export type FeatureFlagCurrentResponse400 = AppError;

export type FeatureFlagCurrentResponse401 = AppError;

export type FeatureFlagCurrentResponse404 = AppError;

export type FeatureFlagCurrentResponse405 = AppError;

export type FeatureFlagCurrentResponse500 = AppError;

export type JobStartProplannerMirrorResponse200 = JobStartProplannerMirrorResponse;

export type JobStartProplannerMirrorResponse400 = AppError;

export type JobStartProplannerMirrorResponse401 = AppError;

export type JobStartProplannerMirrorResponse404 = AppError;

export type JobStartProplannerMirrorResponse405 = AppError;

export type JobStartProplannerMirrorResponse500 = AppError;

export type ManagementRequestMagicLinkRequest = ManagementRequestMagicLinkBody;

export type ManagementRequestMagicLinkResponse200 = ManagementRequestMagicLinkResponse;

export type ManagementRequestMagicLinkResponse400 = AppError;

export type ManagementRequestMagicLinkResponse401 = AppError;

export type ManagementRequestMagicLinkResponse404 = AppError;

export type ManagementRequestMagicLinkResponse405 = AppError;

export type ManagementRequestMagicLinkResponse500 = AppError;

export type ManagementFeatureFlagListRequest = ManagementFeatureFlagListBody;

export type ManagementFeatureFlagListResponse200 = ManagementFeatureFlagListResponse;

export type ManagementFeatureFlagListResponse400 = AppError;

export type ManagementFeatureFlagListResponse401 = AppError;

export type ManagementFeatureFlagListResponse404 = AppError;

export type ManagementFeatureFlagListResponse405 = AppError;

export type ManagementFeatureFlagListResponse500 = AppError;

export type ManagementFeatureFlagSingleResponse200 = ManagementFeatureFlagSingleResponse;

export type ManagementFeatureFlagSingleResponse400 = AppError;

export type ManagementFeatureFlagSingleResponse401 = AppError;

export type ManagementFeatureFlagSingleResponse404 = AppError;

export type ManagementFeatureFlagSingleResponse405 = AppError;

export type ManagementFeatureFlagSingleResponse500 = AppError;

export type ManagementFeatureFlagUpdateRequest = ManagementFeatureFlagItemWrite;

export type ManagementFeatureFlagUpdateResponse200 = ManagementFeatureFlagUpdateResponse;

export type ManagementFeatureFlagUpdateResponse400 = AppError;

export type ManagementFeatureFlagUpdateResponse401 = AppError;

export type ManagementFeatureFlagUpdateResponse404 = AppError;

export type ManagementFeatureFlagUpdateResponse405 = AppError;

export type ManagementFeatureFlagUpdateResponse500 = AppError;

export type MultitenantCurrentResponse200 = MultitenantCurrentResponse;

export type MultitenantCurrentResponse400 = AppError;

export type MultitenantCurrentResponse401 = AppError;

export type MultitenantCurrentResponse404 = AppError;

export type MultitenantCurrentResponse405 = AppError;

export type MultitenantCurrentResponse500 = AppError;

export type OnfidoStartDriversLicenseVerificationRequest = OnfidoStartDriversLicenseVerificationBody;

export type OnfidoStartDriversLicenseVerificationResponse200 = OnfidoStartDriversLicenseVerificationResponse;

export type OnfidoStartDriversLicenseVerificationResponse400 = AppError;

export type OnfidoStartDriversLicenseVerificationResponse401 = AppError;

export type OnfidoStartDriversLicenseVerificationResponse404 = AppError;

export type OnfidoStartDriversLicenseVerificationResponse405 = AppError;

export type OnfidoStartDriversLicenseVerificationResponse500 = AppError;

export type OnfidoWebhookRequest = OnfidoWebhookBody;

export type OnfidoWebhookResponse200 = OnfidoWebhookResponse;

export type OnfidoWebhookResponse400 = AppError;

export type OnfidoWebhookResponse401 = AppError;

export type OnfidoWebhookResponse404 = AppError;

export type OnfidoWebhookResponse405 = AppError;

export type OnfidoWebhookResponse500 = AppError;

export type OrderAddRequest = OrderAddBody;

export type OrderAddResponse200 = OrderAddResponse;

export type OrderAddResponse400 = AppError;

export type OrderAddResponse401 = AppError;

export type OrderAddResponse404 = AppError;

export type OrderAddResponse405 = AppError;

export type OrderAddResponse500 = AppError;

export type OrderDiscountApplyRequest = OrderDiscountApplyBody;

export type OrderDiscountApplyResponse200 = OrderDiscountApplyResponse;

export type OrderDiscountApplyResponse400 = AppError;

export type OrderDiscountApplyResponse401 = AppError;

export type OrderDiscountApplyResponse404 = AppError;

export type OrderDiscountApplyResponse405 = AppError;

export type OrderDiscountApplyResponse500 = AppError;

export type OrderDiscountRemoveResponse200 = OrderDiscountRemoveResponse;

export type OrderDiscountRemoveResponse400 = AppError;

export type OrderDiscountRemoveResponse401 = AppError;

export type OrderDiscountRemoveResponse404 = AppError;

export type OrderDiscountRemoveResponse405 = AppError;

export type OrderDiscountRemoveResponse500 = AppError;

export type OrderOverviewRequest = OrderOverviewBody;

export type OrderOverviewResponse200 = OrderOverviewResponse;

export type OrderOverviewResponse400 = AppError;

export type OrderOverviewResponse401 = AppError;

export type OrderOverviewResponse404 = AppError;

export type OrderOverviewResponse405 = AppError;

export type OrderOverviewResponse500 = AppError;

export type OrderOverviewCountResponse200 = OrderOverviewCountResponse;

export type OrderOverviewCountResponse400 = AppError;

export type OrderOverviewCountResponse401 = AppError;

export type OrderOverviewCountResponse404 = AppError;

export type OrderOverviewCountResponse405 = AppError;

export type OrderOverviewCountResponse500 = AppError;

export type OrderRemoveResponse200 = OrderRemoveResponse;

export type OrderRemoveResponse400 = AppError;

export type OrderRemoveResponse401 = AppError;

export type OrderRemoveResponse404 = AppError;

export type OrderRemoveResponse405 = AppError;

export type OrderRemoveResponse500 = AppError;

export type OrderSingleResponse200 = OrderSingleResponse;

export type OrderSingleResponse400 = AppError;

export type OrderSingleResponse401 = AppError;

export type OrderSingleResponse404 = AppError;

export type OrderSingleResponse405 = AppError;

export type OrderSingleResponse500 = AppError;

export type OrderUpdateRequest = OrderUpdateBody;

export type OrderUpdateResponse200 = OrderUpdateResponse;

export type OrderUpdateResponse400 = AppError;

export type OrderUpdateResponse401 = AppError;

export type OrderUpdateResponse404 = AppError;

export type OrderUpdateResponse405 = AppError;

export type OrderUpdateResponse500 = AppError;

export type OrderCheckoutFlowCheckoutRequest = OrderCheckoutFlowCheckoutBody;

export type OrderCheckoutFlowCheckoutResponse200 = OrderCheckoutFlowCheckoutResponse;

export type OrderCheckoutFlowCheckoutResponse400 = AppError;

export type OrderCheckoutFlowCheckoutResponse401 = AppError;

export type OrderCheckoutFlowCheckoutResponse404 = AppError;

export type OrderCheckoutFlowCheckoutResponse405 = AppError;

export type OrderCheckoutFlowCheckoutResponse500 = AppError;

export type OrderCheckoutFlowInfoRequest = OrderCheckoutFlowInfoBody;

export type OrderCheckoutFlowInfoResponse200 = OrderCheckoutFlowInfoResponse;

export type OrderCheckoutFlowInfoResponse400 = AppError;

export type OrderCheckoutFlowInfoResponse401 = AppError;

export type OrderCheckoutFlowInfoResponse404 = AppError;

export type OrderCheckoutFlowInfoResponse405 = AppError;

export type OrderCheckoutFlowInfoResponse500 = AppError;

export type OrderCheckoutFlowPreferencesRequest = OrderCheckoutFlowPreferencesBody;

export type OrderCheckoutFlowPreferencesResponse200 = OrderCheckoutFlowPreferencesResponse;

export type OrderCheckoutFlowPreferencesResponse400 = AppError;

export type OrderCheckoutFlowPreferencesResponse401 = AppError;

export type OrderCheckoutFlowPreferencesResponse404 = AppError;

export type OrderCheckoutFlowPreferencesResponse405 = AppError;

export type OrderCheckoutFlowPreferencesResponse500 = AppError;

export type OrderShareApplyRequest = OrderShareApplyBody;

export type OrderShareApplyResponse200 = OrderShareApplyResponse;

export type OrderShareApplyResponse400 = AppError;

export type OrderShareApplyResponse401 = AppError;

export type OrderShareApplyResponse404 = AppError;

export type OrderShareApplyResponse405 = AppError;

export type OrderShareApplyResponse500 = AppError;

export type OrderShareCreateResponse200 = OrderShareCreateResponse;

export type OrderShareCreateResponse400 = AppError;

export type OrderShareCreateResponse401 = AppError;

export type OrderShareCreateResponse404 = AppError;

export type OrderShareCreateResponse405 = AppError;

export type OrderShareCreateResponse500 = AppError;

export type RabobankWebhookOmnikassaRequest = RabobankWebhookOmnikassaBody;

export type RabobankWebhookOmnikassaResponse200 = RabobankWebhookOmnikassaResponse;

export type RabobankWebhookOmnikassaResponse400 = AppError;

export type RabobankWebhookOmnikassaResponse401 = AppError;

export type RabobankWebhookOmnikassaResponse404 = AppError;

export type RabobankWebhookOmnikassaResponse405 = AppError;

export type RabobankWebhookOmnikassaResponse500 = AppError;

export type SharedVehicleReservationActiveResponse200 = SharedVehicleReservationActiveResponse;

export type SharedVehicleReservationActiveResponse400 = AppError;

export type SharedVehicleReservationActiveResponse401 = AppError;

export type SharedVehicleReservationActiveResponse404 = AppError;

export type SharedVehicleReservationActiveResponse405 = AppError;

export type SharedVehicleReservationActiveResponse500 = AppError;

export type SharedVehicleReservationAvailabilityExtendBookingRequest =
	SharedVehicleReservationAvailabilityExtendBookingBody;

export type SharedVehicleReservationAvailabilityExtendBookingResponse200 =
	SharedVehicleReservationAvailabilityExtendBookingResponse;

export type SharedVehicleReservationAvailabilityExtendBookingResponse400 = AppError;

export type SharedVehicleReservationAvailabilityExtendBookingResponse401 = AppError;

export type SharedVehicleReservationAvailabilityExtendBookingResponse404 = AppError;

export type SharedVehicleReservationAvailabilityExtendBookingResponse405 = AppError;

export type SharedVehicleReservationAvailabilityExtendBookingResponse500 = AppError;

export type SharedVehicleReservationCancelResponse200 = SharedVehicleReservationCancelResponse;

export type SharedVehicleReservationCancelResponse400 = AppError;

export type SharedVehicleReservationCancelResponse401 = AppError;

export type SharedVehicleReservationCancelResponse404 = AppError;

export type SharedVehicleReservationCancelResponse405 = AppError;

export type SharedVehicleReservationCancelResponse500 = AppError;

export type SharedVehicleReservationSingleResponse200 = SharedVehicleReservationItem;

export type SharedVehicleReservationSingleResponse400 = AppError;

export type SharedVehicleReservationSingleResponse401 = AppError;

export type SharedVehicleReservationSingleResponse404 = AppError;

export type SharedVehicleReservationSingleResponse405 = AppError;

export type SharedVehicleReservationSingleResponse500 = AppError;

export type SharedVehicleReservationUpdateRequest = SharedVehicleReservationUpdateBody;

export type SharedVehicleReservationUpdateResponse200 = SharedVehicleReservationUpdateResponse;

export type SharedVehicleReservationUpdateResponse400 = AppError;

export type SharedVehicleReservationUpdateResponse401 = AppError;

export type SharedVehicleReservationUpdateResponse404 = AppError;

export type SharedVehicleReservationUpdateResponse405 = AppError;

export type SharedVehicleReservationUpdateResponse500 = AppError;

export type SharedVehicleReservationExtendBookingRequest = SharedVehicleReservationExtendBookingBody;

export type SharedVehicleReservationExtendBookingResponse200 = SharedVehicleReservationExtendBookingResponse;

export type SharedVehicleReservationExtendBookingResponse400 = AppError;

export type SharedVehicleReservationExtendBookingResponse401 = AppError;

export type SharedVehicleReservationExtendBookingResponse404 = AppError;

export type SharedVehicleReservationExtendBookingResponse405 = AppError;

export type SharedVehicleReservationExtendBookingResponse500 = AppError;

export type SharedVehicleReservationGeneratePaymentUrlRequest =
	SharedVehicleReservationGeneratePaymentUrlBody;

export type SharedVehicleReservationGeneratePaymentUrlResponse200 =
	SharedVehicleReservationGeneratePaymentUrlResponse;

export type SharedVehicleReservationGeneratePaymentUrlResponse400 = AppError;

export type SharedVehicleReservationGeneratePaymentUrlResponse401 = AppError;

export type SharedVehicleReservationGeneratePaymentUrlResponse404 = AppError;

export type SharedVehicleReservationGeneratePaymentUrlResponse405 = AppError;

export type SharedVehicleReservationGeneratePaymentUrlResponse500 = AppError;

export type SharedVehicleReservationGetFuelInstructionsResponse200 =
	SharedVehicleReservationGetFuelInstructionsResponse;

export type SharedVehicleReservationGetFuelInstructionsResponse400 = AppError;

export type SharedVehicleReservationGetFuelInstructionsResponse401 = AppError;

export type SharedVehicleReservationGetFuelInstructionsResponse404 = AppError;

export type SharedVehicleReservationGetFuelInstructionsResponse405 = AppError;

export type SharedVehicleReservationGetFuelInstructionsResponse500 = AppError;

export type SharedVehicleReservationListRequest = ReservationListForUserBody;

export type SharedVehicleReservationListResponse200 = SharedVehicleReservationListForUserResponse;

export type SharedVehicleReservationListResponse400 = AppError;

export type SharedVehicleReservationListResponse401 = AppError;

export type SharedVehicleReservationListResponse404 = AppError;

export type SharedVehicleReservationListResponse405 = AppError;

export type SharedVehicleReservationListResponse500 = AppError;

export type SharedVehicleReservationStartRideRequest = SharedVehicleReservationStartRideBody;

export type SharedVehicleReservationStartRideResponse200 = SharedVehicleReservationStartRideResponse;

export type SharedVehicleReservationStartRideResponse400 = AppError;

export type SharedVehicleReservationStartRideResponse401 = AppError;

export type SharedVehicleReservationStartRideResponse404 = AppError;

export type SharedVehicleReservationStartRideResponse405 = AppError;

export type SharedVehicleReservationStartRideResponse500 = AppError;

export type SharedVehicleReservationStopRideRequest = SharedVehicleReservationStopRideBody;

export type SharedVehicleReservationStopRideResponse200 = SharedVehicleReservationStopRideResponse;

export type SharedVehicleReservationStopRideResponse400 = AppError;

export type SharedVehicleReservationStopRideResponse401 = AppError;

export type SharedVehicleReservationStopRideResponse404 = AppError;

export type SharedVehicleReservationStopRideResponse405 = AppError;

export type SharedVehicleReservationStopRideResponse500 = AppError;

export type StorageAddonsResponse200 = StorageAddonsResponse;

export type StorageAddonsResponse400 = AppError;

export type StorageAddonsResponse401 = AppError;

export type StorageAddonsResponse404 = AppError;

export type StorageAddonsResponse405 = AppError;

export type StorageAddonsResponse500 = AppError;

export type StorageCategoriesResponse200 = StorageCategoriesResponse;

export type StorageCategoriesResponse400 = AppError;

export type StorageCategoriesResponse401 = AppError;

export type StorageCategoriesResponse404 = AppError;

export type StorageCategoriesResponse405 = AppError;

export type StorageCategoriesResponse500 = AppError;

export type StorageTerminationTypesResponse200 = StorageTerminationTypesResponse;

export type StorageTerminationTypesResponse400 = AppError;

export type StorageTerminationTypesResponse401 = AppError;

export type StorageTerminationTypesResponse404 = AppError;

export type StorageTerminationTypesResponse405 = AppError;

export type StorageTerminationTypesResponse500 = AppError;

export type StorageUnitTypesResponse200 = StorageUnitTypesResponse;

export type StorageUnitTypesResponse400 = AppError;

export type StorageUnitTypesResponse401 = AppError;

export type StorageUnitTypesResponse404 = AppError;

export type StorageUnitTypesResponse405 = AppError;

export type StorageUnitTypesResponse500 = AppError;

export type StorageLocationSingleResponse200 = StorageLocationSingleResponse;

export type StorageLocationSingleResponse400 = AppError;

export type StorageLocationSingleResponse401 = AppError;

export type StorageLocationSingleResponse404 = AppError;

export type StorageLocationSingleResponse405 = AppError;

export type StorageLocationSingleResponse500 = AppError;

export type SupportContactRequest = SupportContactBody;

export type SupportContactResponse200 = SupportContactResponse;

export type SupportContactResponse400 = AppError;

export type SupportContactResponse401 = AppError;

export type SupportContactResponse404 = AppError;

export type SupportContactResponse405 = AppError;

export type SupportContactResponse500 = AppError;

export type SupportSubscribeNewsletterRequest = SupportSubscribeNewsletterBody;

export type SupportSubscribeNewsletterResponse200 = SupportSubscribeNewsletterResponse;

export type SupportSubscribeNewsletterResponse400 = AppError;

export type SupportSubscribeNewsletterResponse401 = AppError;

export type SupportSubscribeNewsletterResponse404 = AppError;

export type SupportSubscribeNewsletterResponse405 = AppError;

export type SupportSubscribeNewsletterResponse500 = AppError;
