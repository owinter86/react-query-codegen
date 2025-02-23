import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type {
	AccountFavoritesResponse200,
	AccountGetAppPreferencesResponse200,
	AccountGetCompanyPreferencesResponse200,
	AccountGetPersonalPreferencesResponse200,
	AccountMeResponse200,
	AccountRegisterRequest,
	AccountRegisterResponse200,
	AccountRemoveDriversLicenseDataResponse200,
	AccountRemoveResponse200,
	AccountReservationsRequest,
	AccountReservationsResponse200,
	AccountUpdateCompanyPreferencesRequest,
	AccountUpdateCompanyPreferencesResponse200,
	AccountUpdatePersonalPreferencesRequest,
	AccountUpdatePersonalPreferencesResponse200,
	AddonImageResponse200,
	AddonMainImageResponse200,
	AdminDeleteUserResponse200,
	AdminInviteUserRequest,
	AdminInviteUserResponse200,
	AdminListUsersResponse200,
	AppRedirectAccountDriversLicenseVerificationCompleteResponse200,
	AuthAnonymousBasedLoginRequest,
	AuthAnonymousBasedLoginResponse200,
	AuthGetUserResponse200,
	AuthImpersonateStopSessionResponse200,
	AuthLogoutResponse200,
	AuthMeResponse200,
	AuthPasswordBasedForgotPasswordRequest,
	AuthPasswordBasedForgotPasswordResponse200,
	AuthPasswordBasedListEmailsResponse200,
	AuthPasswordBasedLoginRequest,
	AuthPasswordBasedLoginResponse200,
	AuthPasswordBasedResetPasswordRequest,
	AuthPasswordBasedResetPasswordResponse200,
	AuthPasswordBasedUpdateEmailRequest,
	AuthPasswordBasedUpdateEmailResponse200,
	AuthPasswordBasedUpdatePasswordRequest,
	AuthPasswordBasedUpdatePasswordResponse200,
	AuthPasswordBasedVerifyEmailRequest,
	AuthPasswordBasedVerifyEmailResponse200,
	AuthPasswordBasedVerifyOtpRequest,
	AuthPasswordBasedVerifyOtpResponse200,
	AuthPermissionCreateRoleRequest,
	AuthPermissionCreateRoleResponse200,
	AuthPermissionPermissionListResponse200,
	AuthPermissionRemoveRoleResponse200,
	AuthPermissionRoleAddPermissionsRequest,
	AuthPermissionRoleAddPermissionsResponse200,
	AuthPermissionRoleListResponse200,
	AuthPermissionRoleRemovePermissionsRequest,
	AuthPermissionRoleRemovePermissionsResponse200,
	AuthPermissionSummaryResponse200,
	AuthPermissionUserAssignRoleRequest,
	AuthPermissionUserAssignRoleResponse200,
	AuthPermissionUserRemoveRoleRequest,
	AuthPermissionUserRemoveRoleResponse200,
	AuthPermissionUserSummaryResponse200,
	AuthRefreshTokensRequest,
	AuthRefreshTokensResponse200,
	AuthSetUserActiveRequest,
	AuthSetUserActiveResponse200,
	AuthTotpProviderInfoResponse200,
	AuthTotpProviderRemoveForUserResponse200,
	AuthTotpProviderRemoveResponse200,
	AuthTotpProviderSetupRequest,
	AuthTotpProviderSetupResponse200,
	AuthTotpProviderSetupVerifyRequest,
	AuthTotpProviderSetupVerifyResponse200,
	AuthTotpProviderVerifyRequest,
	AuthTotpProviderVerifyResponse200,
	AuthUpdateUserRequest,
	AuthUpdateUserResponse200,
	AuthUserListRequest,
	AuthUserListResponse200,
	BusinessAddressPrefillRequest,
	BusinessAddressPrefillResponse200,
	CategoryAlternativesRequest,
	CategoryAlternativesResponse200,
	CategoryAvailabilityRequest,
	CategoryAvailabilityResponse200,
	CategoryCompareRequest,
	CategoryCompareResponse200,
	CategoryFavoriteResponse200,
	CategoryImageResponse200,
	CategoryInsuranceProfileRequest,
	CategoryInsuranceProfileResponse200,
	CategoryListResponse200,
	CategoryMainImageResponse200,
	CategoryPriceCalculationRequest,
	CategoryPriceCalculationResponse200,
	CategorySingleResponse200,
	ClientAdminListResponse200,
	ClientAdminProplannerAccountResponse200,
	ClientAdminRemoveResponse200,
	ClientAdminUpdateRequest,
	ClientAdminUpdateResponse200,
	ConfirmedOrderListResponse200,
	ConfirmedStorageOrderSingleResponse200,
	ContinentalCreateSessionRequest,
	ContinentalCreateSessionResponse200,
	ContinentalCreateVirtualKeyRequest,
	ContinentalCreateVirtualKeyResponse200,
	ContinentalRevokeVirtualKeyResponse200,
	ContinentalUpdateVirtualKeyRequest,
	ContinentalUpdateVirtualKeyResponse200,
	DivergentOpeningHoursCreateRequest,
	DivergentOpeningHoursCreateResponse200,
	DivergentOpeningHoursDeleteResponse200,
	DivergentOpeningHoursListResponse200,
	DivergentOpeningHoursSingleResponse200,
	DivergentOpeningHoursUpdateRequest,
	DivergentOpeningHoursUpdateResponse200,
	FeatureFlagCurrentResponse200,
	JobStartProplannerMirrorResponse200,
	LocationListResponse200,
	LocationReorderRequest,
	LocationReorderResponse200,
	LocationSingleResponse200,
	MainCategoryImageResponse200,
	MainCategoryListResponse200,
	MainCategoryMainImageResponse200,
	ManagementFeatureFlagListRequest,
	ManagementFeatureFlagListResponse200,
	ManagementFeatureFlagSingleResponse200,
	ManagementFeatureFlagUpdateRequest,
	ManagementFeatureFlagUpdateResponse200,
	ManagementRequestMagicLinkRequest,
	ManagementRequestMagicLinkResponse200,
	MultitenantCurrentResponse200,
	OnfidoStartDriversLicenseVerificationRequest,
	OnfidoStartDriversLicenseVerificationResponse200,
	OnfidoWebhookRequest,
	OnfidoWebhookResponse200,
	OrderAddRequest,
	OrderAddResponse200,
	OrderCheckoutFlowCheckoutRequest,
	OrderCheckoutFlowCheckoutResponse200,
	OrderCheckoutFlowInfoRequest,
	OrderCheckoutFlowInfoResponse200,
	OrderCheckoutFlowPreferencesRequest,
	OrderCheckoutFlowPreferencesResponse200,
	OrderDiscountApplyRequest,
	OrderDiscountApplyResponse200,
	OrderDiscountRemoveResponse200,
	OrderOverviewCountResponse200,
	OrderOverviewRequest,
	OrderOverviewResponse200,
	OrderRemoveResponse200,
	OrderShareApplyRequest,
	OrderShareApplyResponse200,
	OrderShareCreateResponse200,
	OrderSingleResponse200,
	OrderUpdateRequest,
	OrderUpdateResponse200,
	RabobankWebhookOmnikassaRequest,
	RabobankWebhookOmnikassaResponse200,
	ReservationCancelResponse200,
	ReservationDownloadInvoiceResponse200,
	ReservationFetchByIdsRequest,
	ReservationFetchByIdsResponse200,
	ReservationRepeatRequest,
	ReservationRepeatResponse200,
	ReservationUpdateRequest,
	ReservationUpdateResponse200,
	SessionListResponse200,
	SessionLogoutRequest,
	SessionLogoutResponse200,
	SessionSetDeviceNotificationTokenRequest,
	SessionSetDeviceNotificationTokenResponse200,
	SharedVehicleAddDamageRequest,
	SharedVehicleAddDamageResponse200,
	SharedVehicleAdminListResponse200,
	SharedVehicleAdminSingleResponse200,
	SharedVehicleAdminUpdateRequest,
	SharedVehicleAdminUpdateResponse200,
	SharedVehicleAvailabilityCalendarResponse200,
	SharedVehicleAvailabilityRequest,
	SharedVehicleAvailabilityResponse200,
	SharedVehicleCreateBookingRequest,
	SharedVehicleCreateBookingResponse200,
	SharedVehicleDamageImageResponse200,
	SharedVehicleDamageTemplateResponse200,
	SharedVehicleFavoriteResponse200,
	SharedVehicleImageResponse200,
	SharedVehicleListDamagesRequest,
	SharedVehicleListDamagesResponse200,
	SharedVehiclePricingRequest,
	SharedVehiclePricingResponse200,
	SharedVehicleReservationActiveResponse200,
	SharedVehicleReservationAvailabilityExtendBookingRequest,
	SharedVehicleReservationAvailabilityExtendBookingResponse200,
	SharedVehicleReservationCancelResponse200,
	SharedVehicleReservationExtendBookingRequest,
	SharedVehicleReservationExtendBookingResponse200,
	SharedVehicleReservationGeneratePaymentUrlRequest,
	SharedVehicleReservationGeneratePaymentUrlResponse200,
	SharedVehicleReservationGetFuelInstructionsResponse200,
	SharedVehicleReservationListRequest,
	SharedVehicleReservationListResponse200,
	SharedVehicleReservationSingleResponse200,
	SharedVehicleReservationStartRideRequest,
	SharedVehicleReservationStartRideResponse200,
	SharedVehicleReservationStopRideRequest,
	SharedVehicleReservationStopRideResponse200,
	SharedVehicleReservationUpdateRequest,
	SharedVehicleReservationUpdateResponse200,
	SharedVehicleSingleResponse200,
	SharedVehicleStateOfChargeResponse200,
	StorageAddonsResponse200,
	StorageCategoriesResponse200,
	StorageContractDownloadContractResponse200,
	StorageContractDownloadInvoiceResponse200,
	StorageContractInvoicesResponse200,
	StorageContractOverviewResponse200,
	StorageContractTerminateRequest,
	StorageContractTerminateResponse200,
	StorageLocationSingleResponse200,
	StorageOrderCheckoutRequest,
	StorageOrderCheckoutResponse200,
	StorageOrderConfigureRequest,
	StorageOrderConfigureResponse200,
	StorageOrderDiscountApplyRequest,
	StorageOrderDiscountApplyResponse200,
	StorageOrderDiscountRemoveResponse200,
	StorageOrderOverviewResponse200,
	StorageTerminationTypesResponse200,
	StorageUnitTypesResponse200,
	SupportContactRequest,
	SupportContactResponse200,
	SupportSubscribeNewsletterRequest,
	SupportSubscribeNewsletterResponse200,
} from "./diks.schema";

export class ApiClient {
	private axios: AxiosInstance;

	constructor(baseURL: string, headers?: Record<string, string>) {
		this.axios = axios.create({
			baseURL,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
		});
	}

	/**
	 * Fetch all favorites for a given account
	 * @see AccountFavoritesResponse200
	 */
	async AccountFavorites(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountFavoritesResponse200>> {
		const url = `/account/favorites`;
		return this.axios.get<AccountFavoritesResponse200>(url, {
			headers,
		});
	}

	/**
	 * @see AccountGetAppPreferencesResponse200
	 */
	async AccountGetAppPreferences(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountGetAppPreferencesResponse200>> {
		const url = `/account/preferences/app`;
		return this.axios.get<AccountGetAppPreferencesResponse200>(url, {
			headers,
		});
	}

	/**
	 * @see AccountGetCompanyPreferencesResponse200
	 */
	async AccountGetCompanyPreferences(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountGetCompanyPreferencesResponse200>> {
		const url = `/account/preferences/company`;
		return this.axios.get<AccountGetCompanyPreferencesResponse200>(url, {
			headers,
		});
	}

	/**
	 * @see AccountUpdateCompanyPreferencesResponse200
	 */
	async AccountUpdateCompanyPreferences(
		data: AccountUpdateCompanyPreferencesRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountUpdateCompanyPreferencesResponse200>> {
		const url = `/account/preferences/company`;
		const bodyData = {
			companyPreferences: data.companyPreferences,
		};
		return this.axios.put<AccountUpdateCompanyPreferencesResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * @see AccountGetPersonalPreferencesResponse200
	 */
	async AccountGetPersonalPreferences(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountGetPersonalPreferencesResponse200>> {
		const url = `/account/preferences/personal`;
		return this.axios.get<AccountGetPersonalPreferencesResponse200>(url, {
			headers,
		});
	}

	/**
	 * @see AccountUpdatePersonalPreferencesResponse200
	 */
	async AccountUpdatePersonalPreferences(
		data: AccountUpdatePersonalPreferencesRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountUpdatePersonalPreferencesResponse200>> {
		const url = `/account/preferences/personal`;
		const bodyData = {
			personalPreferences: data.personalPreferences,
		};
		return this.axios.put<AccountUpdatePersonalPreferencesResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Fetch account information / profile
	 * @see AccountMeResponse200
	 */
	async AccountMe(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountMeResponse200>> {
		const url = `/account/me`;
		return this.axios.get<AccountMeResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Register personal or business accounts
  
Error(s):
- `authPasswordBased.checkUnique.duplicateEmail` -> There is already an account with this email and client role
- `account.register.fieldMissingForType` -> One or more fields are missing for account type
	 * @see AccountRegisterResponse200
	 */
	async AccountRegister(
		data: AccountRegisterRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountRegisterResponse200>> {
		const url = `/account/register`;
		const bodyData = {
			email: data.email,
			password: data.password,
			type: data.type,
			subscribeNewsletter: data.subscribeNewsletter,
			street: data.street,
			houseNumber: data.houseNumber,
			houseNumberAddition: data.houseNumberAddition,
			postalCode: data.postalCode,
			city: data.city,
			phone: data.phone,
			firstName: data.firstName,
			middleName: data.middleName,
			surname: data.surname,
			companyName: data.companyName,
			btw: data.btw,
			countryCode: data.countryCode,
			kvk: data.kvk,
			birthDate: data.birthDate,
		};
		return this.axios.post<AccountRegisterResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Remove a user from the database and notify diks of removal. Diks will remove the ProPlanner customer associated to the account within a period X and notify the user via their original e-mailadres

Error(s):
- `account.remove.unable` -> Unable to remove user because of unknown reason.
	 * @see AccountRemoveResponse200
	 */
	async AccountRemove(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountRemoveResponse200>> {
		const url = `/account/remove`;
		return this.axios.delete<AccountRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * Clears the drivers license data in ProPlanner.
      Error(s):
        - `account.removeDriversLicenseData.notAllowed` -> The logged in user is a company
        - `account.removeDriversLicenseData.error` -> Failed to clear the drivers license data in ProPlanner.
      
	 * @see AccountRemoveDriversLicenseDataResponse200
	 */
	async AccountRemoveDriversLicenseData(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountRemoveDriversLicenseDataResponse200>> {
		const url = `/account/remove-drivers-license-data`;
		return this.axios.delete<AccountRemoveDriversLicenseDataResponse200>(url, {
			headers,
		});
	}

	/**
	 * Fetch all reservations for a given account
	 * @param query.offset
	 * @param query.limit
	 * @see AccountReservationsResponse200
	 */
	async AccountReservations(
		data: AccountReservationsRequest & { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountReservationsResponse200>> {
		const url = `/account/reservations`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		const bodyData = {
			status: data.status,
			filters: data.filters,
		};
		return this.axios.post<AccountReservationsResponse200>(url, {
			params: queryData,
			data: bodyData,
			headers,
		});
	}

	/**
	 * 
Get all alternatives with availability information for a single category
        
Error(s):
- `category.single.notFound` -> Category does not exists
- `category.alternatives.notFound` -> Category does not have any alternatives
	 * @param params.categoryId
	 * @see CategoryAlternativesResponse200
	 */
	async CategoryAlternatives(
		data: CategoryAlternativesRequest & { categoryId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryAlternativesResponse200>> {
		const url = `/category/${data.categoryId}/alternatives`;
		const bodyData = {
			locationPickup: data.locationPickup,
			locationReturn: data.locationReturn,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			expectedKilometers: data.expectedKilometers,
		};
		return this.axios.post<CategoryAlternativesResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Fetch available categories based on the mainCategory, location and rental period

Error(s):
- `category.availability.dateReturnBeforeOrEqualPickup` -> Return date should be after pickup date
- `category.availability.rentalPeriodLongerThanTwentyNineDaysNeedQuotation` -> Days between pickup and return should not exceed 29 days
- `category.availability.expectedKmRequiredForLongerRentalPeriod` -> ExpectedKilometers should be filled if days difference is bigger than 7
	 * @see CategoryAvailabilityResponse200
	 */
	async CategoryAvailability(
		data: CategoryAvailabilityRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryAvailabilityResponse200>> {
		const url = `/category/availability`;
		const bodyData = {
			locale: data.locale,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			mainCategoryId: data.mainCategoryId,
			locationId: data.locationId,
			filters: data.filters,
			sorting: data.sorting,
		};
		return this.axios.post<CategoryAvailabilityResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Compare multiple categories and return with availability information

Error(s):
- `category.compare.oneOrMoreNotAvailable` -> There is one or more provided categories not available for the given input
	 * @see CategoryCompareResponse200
	 */
	async CategoryCompare(
		data: CategoryCompareRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryCompareResponse200>> {
		const url = `/category/compare`;
		const bodyData = {
			categoryIds: data.categoryIds,
			locationPickup: data.locationPickup,
			locationReturn: data.locationReturn,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			expectedKilometers: data.expectedKilometers,
		};
		return this.axios.post<CategoryCompareResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Mark a single category favorite by providing the categoryId
        
Error(s):
- `category.favorite.categoryNotFound` -> Category does not exists
	 * @param params.categoryId
	 * @see CategoryFavoriteResponse200
	 */
	async CategoryFavorite(
		data: { categoryId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryFavoriteResponse200>> {
		const url = `/category/${data.categoryId}/favorite`;
		return this.axios.post<CategoryFavoriteResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Fetch a single category image file
        
Error(s):
- `category.image.unknown` -> File and or category does not exists
	 * @param params.categoryId
	 * @param params.fileId
	 * @param query.q
	 * @param query.w
	 * @see CategoryImageResponse200
	 */
	async CategoryImage(
		data: { categoryId: number; fileId: string; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryImageResponse200>> {
		const url = `/category/${data.categoryId}/image/${data.fileId}`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<CategoryImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
Provide a list with possible insurance profile options including their exemptions

Error(s):
  - `category.insuranceProfile.dateReturnBeforeOrEqualPickup` -> Return date should be after pickup date
  - `category.insuranceProfile.categoryNotFound` -> Category does not exists (in database)
  - `category.insuranceProfile.categoryUnavailable` -> Unable to fetch price info for provided input
	 * @see CategoryInsuranceProfileResponse200
	 */
	async CategoryInsuranceProfile(
		data: CategoryInsuranceProfileRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryInsuranceProfileResponse200>> {
		const url = `/category/insuranceProfile`;
		const bodyData = {
			locale: data.locale,
			categoryId: data.categoryId,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
		};
		return this.axios.post<CategoryInsuranceProfileResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Returns a list of all categories with their id and name. For XML sitemap purposes.
	 * @see CategoryListResponse200
	 */
	async CategoryList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryListResponse200>> {
		const url = `/category/list`;
		return this.axios.get<CategoryListResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Fetch the main image of a single category
        
Error(s):
- `category.mainImage.unknown` -> File and or category does not exists
	 * @param params.categoryId
	 * @param query.q
	 * @param query.w
	 * @see CategoryMainImageResponse200
	 */
	async CategoryMainImage(
		data: { categoryId: number; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryMainImageResponse200>> {
		const url = `/category/${data.categoryId}/main-image`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<CategoryMainImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
Calculate price for a Category including user context and addons

Error(s):
  - `category.priceCalculation.dateReturnBeforeOrEqualPickup` -> Return date should be after pickup date
  - `category.priceCalculation.rentalPeriodLongerThanTwentyNineDaysNeedQuotation` -> Days between pickup and return should not exceed 29 days
  - `category.priceCalculation.expectedKmRequiredForLongerRentalPeriod` -> ExpectedKilometers should be filled if days difference is bigger than 7
  - `category.priceCalculation.categoryNotFound` -> Category does not exists (in database)
  - `category.priceCalculation.categoryUnavailable` -> Unable to fetch price info for provided input
  - `category.priceCalculation.expectedKmExceedsLimit` -> ExpectedKilometers should not exceed 2147483647
  
YoungDriver input error(s):
  - `category.priceCalculation.youngDriverNotEnabled` -> Unable to book YoungDrivers because of age limit
 
Addon input error(s): 
  - `category.priceCalculation.addonNotFound` -> Addon does not exist
  - `category.priceCalculation.addonNotApplicableForCategory` ->  Addon does not apply for this category
	 * @see CategoryPriceCalculationResponse200
	 */
	async CategoryPriceCalculation(
		data: CategoryPriceCalculationRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategoryPriceCalculationResponse200>> {
		const url = `/category/priceCalculation`;
		const bodyData = {
			locale: data.locale,
			categoryId: data.categoryId,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			locationPickup: data.locationPickup,
			locationReturn: data.locationReturn,
			expectedKilometers: data.expectedKilometers,
			extraDriverCount: data.extraDriverCount,
			extraYoungDriverCount: data.extraYoungDriverCount,
			insuranceProfileOptionId: data.insuranceProfileOptionId,
			abroadOptionId: data.abroadOptionId,
			addons: data.addons,
		};
		return this.axios.post<CategoryPriceCalculationResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Fetch a single category by Id
        
Error(s):
- `category.single.notFound` -> Category does not exists
	 * @param params.categoryId
	 * @see CategorySingleResponse200
	 */
	async CategorySingle(
		data: { categoryId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<CategorySingleResponse200>> {
		const url = `/category/${data.categoryId}`;
		return this.axios.get<CategorySingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * @param params.mainCategoryId
	 * @param params.fileId
	 * @param query.q
	 * @param query.w
	 * @see MainCategoryImageResponse200
	 */
	async MainCategoryImage(
		data: { mainCategoryId: number; fileId: string; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<MainCategoryImageResponse200>> {
		const url = `/main-category/${data.mainCategoryId}/image/${data.fileId}`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<MainCategoryImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * @see MainCategoryListResponse200
	 */
	async MainCategoryList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<MainCategoryListResponse200>> {
		const url = `/main-category`;
		return this.axios.get<MainCategoryListResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Fetch the main image of a single category
                
        Error(s):
        - `category.mainImage.unknown` -> File and or category does not exists
	 * @param params.mainCategoryId
	 * @param query.q
	 * @param query.w
	 * @see MainCategoryMainImageResponse200
	 */
	async MainCategoryMainImage(
		data: { mainCategoryId: number; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<MainCategoryMainImageResponse200>> {
		const url = `/main-category/${data.mainCategoryId}/main-image`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<MainCategoryMainImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * @param params.addonId
	 * @param params.fileId
	 * @param query.q
	 * @param query.w
	 * @see AddonImageResponse200
	 */
	async AddonImage(
		data: { addonId: number; fileId: string; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AddonImageResponse200>> {
		const url = `/addon/${data.addonId}/image/${data.fileId}`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<AddonImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
Fetch the main image of an addon.
        
Error(s):
- `addon.mainImage.unknown` -> File and or addon does not exists
	 * @param params.addonId
	 * @param query.q
	 * @param query.w
	 * @see AddonMainImageResponse200
	 */
	async AddonMainImage(
		data: { addonId: number; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AddonMainImageResponse200>> {
		const url = `/addon/${data.addonId}/main-image`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<AddonMainImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
      Add a new damage to a shared vehicle. User can provide an image and a optional damage description
      
      Error(s):
        - `sharedVehicle.single.notFound` -> Shared vehicle does not exists
        - `sharedVehicle.addDamage.failed` -> Adding new damage to the shared vehicle failed
        - `proplanner.bookingFetch.unknown` -> Booking does not exist. (only if reservationId is provided)
      
	 * @param params.id
	 * @see SharedVehicleAddDamageResponse200
	 */
	async SharedVehicleAddDamage(
		data: SharedVehicleAddDamageRequest & { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleAddDamageResponse200>> {
		const url = `/shared-vehicle/${data.id}/add-damage`;
		const formData = new FormData();
		formData.append("image", data.image);
		formData.append("description", String(data.description));
		if (data.reservationId != null) {
			formData.append("reservationId", String(data.reservationId));
		}
		formData.append("x", String(data.x));
		formData.append("y", String(data.y));
		return this.axios.post<SharedVehicleAddDamageResponse200>(url, {
			data: formData,
			headers: { "Content-Type": "multipart/form-data", ...headers },
		});
	}

	/**
	 * 
        Get a paginated list of all shared vehicles for admin.
        
	 * @param query.offset
	 * @param query.limit
	 * @see SharedVehicleAdminListResponse200
	 */
	async SharedVehicleAdminList(
		data: { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleAdminListResponse200>> {
		const url = `/shared-vehicle/admin/list`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		return this.axios.post<SharedVehicleAdminListResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
      Fetch a single shared vehicle for admin.
      
      Error(s):
      - `sharedVehicle.singleAdmin.notFound` -> Shared vehicle does not exists
      
	 * @param params.id
	 * @see SharedVehicleAdminSingleResponse200
	 */
	async SharedVehicleAdminSingle(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleAdminSingleResponse200>> {
		const url = `/shared-vehicle/admin/${data.id}`;
		return this.axios.get<SharedVehicleAdminSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * Update a shared vehicle in the Diks admin environment.
        
        Error(s):
      - `sharedVehicle.single.notFound` -> Shared vehicle does not exists.
      - `sharedVehicle.update.invalid` -> Shared vehicle could not be updated.
	 * @param params.id
	 * @see SharedVehicleAdminUpdateResponse200
	 */
	async SharedVehicleAdminUpdate(
		data: SharedVehicleAdminUpdateRequest & { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleAdminUpdateResponse200>> {
		const url = `/shared-vehicle/admin/${data.id}/update`;
		const bodyData = {
			parkingInstructions: data.parkingInstructions,
			fuelInstructions: data.fuelInstructions,
			fuelCardDetails: data.fuelCardDetails,
			fuelCardPin: data.fuelCardPin,
			minimumBatteryCharge: data.minimumBatteryCharge,
			parkingLocation: data.parkingLocation,
			parkingLocationRadius: data.parkingLocationRadius,
			address: data.address,
			damageCheckBeforeBooking: data.damageCheckBeforeBooking,
			damageCheckAfterBooking: data.damageCheckAfterBooking,
		};
		return this.axios.put<SharedVehicleAdminUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Fetch available shared vehicles based on rental period.
      
      Error(s):
      - `category.availability.dateReturnBeforeOrEqualPickup` -> Return date should be after pickup date
      - `category.availability.rentalPeriodShorterThanOneHour` -> Return date should be at least one hour after pickup date
      - `category.availability.rentalPeriodLongerThanSevenDays` -> Days between pickup and return should not exceed 7 days
      
	 * @see SharedVehicleAvailabilityResponse200
	 */
	async SharedVehicleAvailability(
		data: SharedVehicleAvailabilityRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleAvailabilityResponse200>> {
		const url = `/shared-vehicle/availability`;
		const bodyData = {
			locale: data.locale,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			mainCategoryId: data.mainCategoryId,
			filters: data.filters,
		};
		return this.axios.post<SharedVehicleAvailabilityResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Get a list of timeslots between startDate and endDate with their availabilityStatus.
      
      Error(s):
      - `sharedVehicle.single.notFound` -> Shared vehicle does not exists or does not have a Proplanner resourceID`
      - `sharedVehicle.calendar.endDateBeforeOrEqualStartDate` -> Shared vehicle does not exists`
      - `sharedVehicle.calendar.periodLongerThanFortyTwoDays` -> Requested period should not exceed one month in a calendar view (6 weeks)
      
	 * @param params.id
	 * @param query.startDate
	 * @param query.endDate
	 * @param query.reservationId - If a valid reservationId is provided, 
          the timeslot of the related reservation is marked as an available timeslot instead of a booked one.
          This can be used to extend / update a booking from the calendar view, whereby the booking itself does not "block" the updated reservation.
	 * @see SharedVehicleAvailabilityCalendarResponse200
	 */
	async SharedVehicleAvailabilityCalendar(
		data: { id: number; startDate: string; endDate: string; reservationId?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleAvailabilityCalendarResponse200>> {
		const url = `/shared-vehicle/${data.id}/calendar`;
		const queryData = {
			startDate: data.startDate,
			endDate: data.endDate,
			reservationId: data.reservationId,
		};
		return this.axios.get<SharedVehicleAvailabilityCalendarResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
        Book a shared vehicle. Returns a payment URL to enable the user to pay the booking with iDEAL.
        
        Error(s):
        - `sharedVehicle.single.notFound` -> Shared vehicle does not exists
        - `sharedVehicle.createBooking.notAvailable` -> Shared vehicle is already booked for the given dates
        - `sharedVehicle.createBooking.failed` -> Shared vehicle could not be booked
        - `sharedVehicle.createBooking.invalidDriversLicense` -> User does not have a valid drivers license in ProPlanner
        - `sharedVehicle.createBooking.invalidDriversLicenseType` -> User does not have the correct type of drivers license for this vehicle
        
	 * @param params.id
	 * @see SharedVehicleCreateBookingResponse200
	 */
	async SharedVehicleCreateBooking(
		data: SharedVehicleCreateBookingRequest & { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleCreateBookingResponse200>> {
		const url = `/shared-vehicle/${data.id}/create-booking`;
		const bodyData = {
			locale: data.locale,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			referenceText: data.referenceText,
			discountCode: data.discountCode,
			expectedKilometers: data.expectedKilometers,
		};
		return this.axios.post<SharedVehicleCreateBookingResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Fetch a single shared vehicle damage image file
      
         Error(s):
          - `sharedVehicle.damageImage.unknown` -> Damage image could not be found
      
	 * @param params.id
	 * @param params.fileId
	 * @param query.accessToken
	 * @param query.q
	 * @param query.w
	 * @see SharedVehicleDamageImageResponse200
	 */
	async SharedVehicleDamageImage(
		data: { id: number; fileId: string; accessToken: string; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleDamageImageResponse200>> {
		const url = `/shared-vehicle/${data.id}/damage-image/${data.fileId}`;
		const queryData = {
			accessToken: data.accessToken,
			q: data.q,
			w: data.w,
		};
		return this.axios.get<SharedVehicleDamageImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * Get the damage template for a shared vehicle
        
        Error(s):
          - `sharedVehicle.damageTemplate.notFound` -> Damage template could not be found        
        
	 * @param params.id
	 * @param query.q
	 * @param query.w
	 * @see SharedVehicleDamageTemplateResponse200
	 */
	async SharedVehicleDamageTemplate(
		data: { id: number; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleDamageTemplateResponse200>> {
		const url = `/shared-vehicle/${data.id}/damage-template`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<SharedVehicleDamageTemplateResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
          Mark a shared vehicle as favorite
          
          Error(s):
          - `sharedVehicle.single.notFound` -> Shared vehicle does not exists
	 * @param params.id
	 * @see SharedVehicleFavoriteResponse200
	 */
	async SharedVehicleFavorite(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleFavoriteResponse200>> {
		const url = `/shared-vehicle/${data.id}/favorite`;
		return this.axios.post<SharedVehicleFavoriteResponse200>(url, {
			headers,
		});
	}

	/**
	 * Fetch a single shared vehicle image file
      
         Error(s):
          - `sharedVehicle.image.unknown` -> Image could not be found
      
	 * @param params.id
	 * @param params.fileId
	 * @param query.q
	 * @param query.w
	 * @see SharedVehicleImageResponse200
	 */
	async SharedVehicleImage(
		data: { id: number; fileId: string; q?: number; w: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleImageResponse200>> {
		const url = `/shared-vehicle/${data.id}/image/${data.fileId}`;
		const queryData = {
			q: data.q,
			w: data.w,
		};
		return this.axios.get<SharedVehicleImageResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
          List all damages for a shared vehicle. 
          
          Image URLs are valid for 15 minutes.
          
           Error(s):
          - `sharedVehicle.single.notFound` -> Shared vehicle does not exists    
          
	 * @param params.id
	 * @see SharedVehicleListDamagesResponse200
	 */
	async SharedVehicleListDamages(
		data: SharedVehicleListDamagesRequest & { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleListDamagesResponse200>> {
		const url = `/shared-vehicle/${data.id}/damages`;
		const bodyData = {
			locale: data.locale,
		};
		return this.axios.post<SharedVehicleListDamagesResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Get price of a shared vehicle for a time slot, optionally with discount applied.

        Error(s):
        - `sharedVehicle.single.notFound` -> Shared vehicle does not exists
        - `sharedVehicle.pricing.dateReturnBeforeOrEqualPickup` -> Return date should be after pickup date
      	- `sharedVehicle.pricing.rentalPeriodShorterThanOneHour` -> Return date should be at least one hour after pickup date
      	- `sharedVehicle.pricing.rentalPeriodLongerThanSevenDays` -> Days between pickup and return should not exceed 7 days
      	- `sharedVehicle.pricing.discountCodeInvalid` -> Discount code does not exist
        
	 * @param params.id
	 * @see SharedVehiclePricingResponse200
	 */
	async SharedVehiclePricing(
		data: SharedVehiclePricingRequest & { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehiclePricingResponse200>> {
		const url = `/shared-vehicle/${data.id}/pricing`;
		const bodyData = {
			locale: data.locale,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			discountCode: data.discountCode,
			expectedKilometers: data.expectedKilometers,
		};
		return this.axios.post<SharedVehiclePricingResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Fetch a single shared vehicle for the app.
      
      Error(s):
      - `sharedVehicle.single.notFound` -> Shared vehicle does not exists
      
	 * @param params.id
	 * @see SharedVehicleSingleResponse200
	 */
	async SharedVehicleSingle(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleSingleResponse200>> {
		const url = `/shared-vehicle/${data.id}`;
		return this.axios.get<SharedVehicleSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * Get the state of charge of a shared vehicle.
          The state of charge is cached for 30 minutes as the used endpoint is quite slow, and the state of charge for parked vehicles will not update frequently.
      
         Error(s):
          - `sharedVehicle.single.notFound` -> Shared vehicle does not exists
          - `sharedVehicle.stateOfCharge.notAnEv` -> Shared vehicle is not an Electric Vehicle
          - `sharedVehicle.stateOfCharge.failed` -> Failed to fetch the state of charge for this vehicle
          
	 * @param params.id
	 * @see SharedVehicleStateOfChargeResponse200
	 */
	async SharedVehicleStateOfCharge(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleStateOfChargeResponse200>> {
		const url = `/shared-vehicle/${data.id}/state-of-charge`;
		return this.axios.get<SharedVehicleStateOfChargeResponse200>(url, {
			headers,
		});
	}

	/**
	 * Generate a reset token for the provided email. Can be called many times. The
tokens expire in 24 hours.

Errors:

	 * @see AuthPasswordBasedForgotPasswordResponse200
	 */
	async AuthPasswordBasedForgotPassword(
		data: AuthPasswordBasedForgotPasswordRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedForgotPasswordResponse200>> {
		const url = `/auth/password-based/forgot-password`;
		const bodyData = {
			email: data.email,
		};
		return this.axios.post<AuthPasswordBasedForgotPasswordResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * @see AuthPasswordBasedListEmailsResponse200
	 */
	async AuthPasswordBasedListEmails(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedListEmailsResponse200>> {
		const url = `/auth/password-based`;
		return this.axios.get<AuthPasswordBasedListEmailsResponse200>(url, {
			headers,
		});
	}

	/**
	 * Do a password based login, requires a verified email.

Errors:
- `authPasswordBased.login.maxAttemptsExceeded` -> more then 10 login attempts done in a rolling 5 minute interval
- `authPasswordBased.login.invalidEmailPasswordCombination` -> combination of
  email and password is invalid
- `authPasswordBased.login.emailNotVerified` -> the password login is not
  verified 
	 * @see AuthPasswordBasedLoginResponse200
	 */
	async AuthPasswordBasedLogin(
		data: AuthPasswordBasedLoginRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedLoginResponse200>> {
		const url = `/auth/password-based/login`;
		const bodyData = {
			email: data.email,
			password: data.password,
			device: data.device,
		};
		return this.axios.post<AuthPasswordBasedLoginResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Set a new password based on the `resetToken` created via
`apiAuthPasswordForgotPassword`. Tokens are removed on usage so this route can't
be called multiple times.

Errors:
- `authPasswordBased.resetPassword.invalidResetToken` -> unknown token or
  expired. Let the user request a new token via `forgotPassword`

	 * @see AuthPasswordBasedResetPasswordResponse200
	 */
	async AuthPasswordBasedResetPassword(
		data: AuthPasswordBasedResetPasswordRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedResetPasswordResponse200>> {
		const url = `/auth/password-based/reset-password`;
		const bodyData = {
			resetToken: data.resetToken,
			password: data.password,
		};
		return this.axios.post<AuthPasswordBasedResetPasswordResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Let a logged-in user change its email to a different one. Destroys all active
sessions afterwards. The user email should be verified again.

Errors:
- `authPasswordBased.updateEmail.userWithoutPasswordLogin` -> user doesn't have
  a password based login, so can't use this functionality
- `authPasswordBased.updateEmail.emailAlreadyUsed` -> email is already in use by
  another user
	 * @see AuthPasswordBasedUpdateEmailResponse200
	 */
	async AuthPasswordBasedUpdateEmail(
		data: AuthPasswordBasedUpdateEmailRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedUpdateEmailResponse200>> {
		const url = `/auth/password-based/update-email`;
		const bodyData = {
			email: data.email,
		};
		return this.axios.post<AuthPasswordBasedUpdateEmailResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Set a new password for the logged-in user. Destroys all active sessions
afterwards.

Errors:
- `authPasswordBased.updateEmail.userWithoutPasswordLogin` -> user doesn't have
  a password based login, so can't use this functionality
	 * @see AuthPasswordBasedUpdatePasswordResponse200
	 */
	async AuthPasswordBasedUpdatePassword(
		data: AuthPasswordBasedUpdatePasswordRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedUpdatePasswordResponse200>> {
		const url = `/auth/password-based/update-password`;
		const bodyData = {
			password: data.password,
		};
		return this.axios.post<AuthPasswordBasedUpdatePasswordResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Verify an email based on the provided 'verifyToken'. The token is not removed
        until expired (after 24 hours). Does not throw on multiple calls with the same
        token. The first verification also updates the `verifiedAt` property on the
        `passwordLogin` entity. This route returns a token pair for a new session, which can be used to directly log the user in.

        Errors:
        - `authPasswordBased.verifyEmail.invalidVerifyToken` -> unknown token or token
            expired. Redirect user to do a 'forgotPassword' flow.
        
	 * @see AuthPasswordBasedVerifyEmailResponse200
	 */
	async AuthPasswordBasedVerifyEmail(
		data: AuthPasswordBasedVerifyEmailRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedVerifyEmailResponse200>> {
		const url = `/auth/password-based/verify-email`;
		const bodyData = {
			verifyToken: data.verifyToken,
			device: data.device,
		};
		return this.axios.post<AuthPasswordBasedVerifyEmailResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Call this when `ctx.session.type === "checkTwoStep"` and `ctx.session.twoStepType === "passwordBasedOtp"`. Advances the session to
`type: user` on successful verification.
	 * @see AuthPasswordBasedVerifyOtpResponse200
	 */
	async AuthPasswordBasedVerifyOtp(
		data: AuthPasswordBasedVerifyOtpRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPasswordBasedVerifyOtpResponse200>> {
		const url = `/auth/password-based/verify-otp`;
		const bodyData = {
			otp: data.otp,
		};
		return this.axios.post<AuthPasswordBasedVerifyOtpResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Change a booking (when possible), any difference in euros is handled at the office.

Error(s):
- `reservation.update.bookingUnknown` -> Booking does not exist or accessible.
- `reservation.update.unable` -> Unable to cancel booking (because booking is in the past).
- `reservation.update.addonOnlyUpgradable` -> Unable to remove/downgrade purchased addons, only increase
	 * @param params.reservationId
	 * @see ReservationUpdateResponse200
	 */
	async ReservationUpdate(
		data: ReservationUpdateRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ReservationUpdateResponse200>> {
		const url = `/reservation/${data.reservationId}`;
		const bodyData = {
			locationPickup: data.locationPickup,
			locationReturn: data.locationReturn,
			expectedKilometers: data.expectedKilometers,
			insuranceProfileOptionId: data.insuranceProfileOptionId,
			abroadOptionId: data.abroadOptionId,
			selectedAddons: data.selectedAddons,
		};
		return this.axios.put<ReservationUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Cancel a booking (when possible), only when no payment is present.

Error(s):
- `reservation.cancel.bookingUnknown` -> Booking does not exist or accessible.
- `reservation.cancel.bookingNotCancelable` => Booking is not cancelable.
- `reservation.cancel.unable` -> Unable to cancel booking (because booking has payments).
	 * @param params.reservationId
	 * @see ReservationCancelResponse200
	 */
	async ReservationCancel(
		data: { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ReservationCancelResponse200>> {
		const url = `/reservation/${data.reservationId}`;
		return this.axios.delete<ReservationCancelResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Download the PDF version of a booking. Provide a invoiceId because a booking can hold multiple invoices.

Error(s):
- `reservation.downloadInvoice.bookingUnknown` -> Booking does not exist or accessible.
- `reservation.downloadInvoice.invoiceUnknown` -> Invoice does not exist or accessible.
	 * @param params.reservationId
	 * @param params.invoiceId
	 * @see ReservationDownloadInvoiceResponse200
	 */
	async ReservationDownloadInvoice(
		data: { reservationId: number; invoiceId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ReservationDownloadInvoiceResponse200>> {
		const url = `/reservation/${data.reservationId}/invoice/${data.invoiceId}`;
		return this.axios.get<ReservationDownloadInvoiceResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Fetch one or more bookings by Ids in one go. Mostly used by Frontend for GA events.

Error(s):
- `reservation.fetchByIds.bookingUnknown` -> One or more bookings do not exist or accessible.
	 * @see ReservationFetchByIdsResponse200
	 */
	async ReservationFetchByIds(
		data: ReservationFetchByIdsRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<ReservationFetchByIdsResponse200>> {
		const url = `/reservation/reservations`;
		const bodyData = {
			reservationIds: data.reservationIds,
		};
		return this.axios.post<ReservationFetchByIdsResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Transform a booking back into a order so this exact configuration can be booked again

Error(s):
- `reservation.repeat.bookingUnknown` -> Booking does not exist or accessible.
- `reservation.repeat.bookingNotRepeatable` => Booking is not repeatable.
	 * @param params.reservationId
	 * @see ReservationRepeatResponse200
	 */
	async ReservationRepeat(
		data: ReservationRepeatRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ReservationRepeatResponse200>> {
		const url = `/reservation/${data.reservationId}/repeat`;
		const bodyData = {
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
		};
		return this.axios.post<ReservationRepeatResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * @see LocationListResponse200
	 */
	async LocationList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<LocationListResponse200>> {
		const url = `/location`;
		return this.axios.get<LocationListResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Reorder all locations
        
        Errors:
        - `location.reorder.unknown` -> An invalid locationId was provided.
        
	 * @see LocationReorderResponse200
	 */
	async LocationReorder(
		data: LocationReorderRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<LocationReorderResponse200>> {
		const url = `/location/reorder`;
		const bodyData = {
			locationIds: data.locationIds,
		};
		return this.axios.post<LocationReorderResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * @param params.id
	 * @see LocationSingleResponse200
	 */
	async LocationSingle(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<LocationSingleResponse200>> {
		const url = `/location/${data.id}`;
		return this.axios.get<LocationSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
      Permanently delete a user.
      
      Errors:
      - `admin.deleteUser.notFound` -> The provided user is not found.
      - `admin.deleteUser.notAllowed` -> The provided user has a client role, deletion is not allowed. Admin role can be removed.
      
	 * @param params.user
	 * @see AdminDeleteUserResponse200
	 */
	async AdminDeleteUser(
		data: { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AdminDeleteUserResponse200>> {
		const url = `/admin/${data.user}/delete`;
		return this.axios.post<AdminDeleteUserResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        In success cases, the newly created user receives an invite email.
        
        Errors:
        - `admin.inviteUser.roleNotFound` -> Role doesn't exist.
	 * @see AdminInviteUserResponse200
	 */
	async AdminInviteUser(
		data: AdminInviteUserRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AdminInviteUserResponse200>> {
		const url = `/admin/invite-user`;
		const bodyData = {
			email: data.email,
			name: data.name,
			roles: data.roles,
		};
		return this.axios.post<AdminInviteUserResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * List all admin users.
	 * @see AdminListUsersResponse200
	 */
	async AdminListUsers(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AdminListUsersResponse200>> {
		const url = `/admin/users`;
		return this.axios.get<AdminListUsersResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Redirect to the app after user completes the drivers license verification process in Onfido.
	 * @param query.dossierId
	 * @param query.processId
	 * @param query.status
	 * @see AppRedirectAccountDriversLicenseVerificationCompleteResponse200
	 */
	async AppRedirectAccountDriversLicenseVerificationComplete(
		data: { dossierId: string; processId: string; status: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AppRedirectAccountDriversLicenseVerificationCompleteResponse200>> {
		const url = `/app-redirect/account/drivers-license-verification-complete`;
		const queryData = {
			dossierId: data.dossierId,
			processId: data.processId,
			status: data.status,
		};
		return this.axios.get<AppRedirectAccountDriversLicenseVerificationCompleteResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * Returns a single user.

Errors:
- Inherits `authRequireUser` errors with the `auth.getUser` eventKey.
	 * @param params.user
	 * @see AuthGetUserResponse200
	 */
	async AuthGetUser(
		data: { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthGetUserResponse200>> {
		const url = `/auth/user/${data.user}`;
		return this.axios.get<AuthGetUserResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
    Stop an impersonating session. Requires that the current session belongs to the impersonator. Impersonate sessions can only be started from the platform backends.
    
    Callers should bust all local caches and redirect the user to the correct location.
    
	 * @see AuthImpersonateStopSessionResponse200
	 */
	async AuthImpersonateStopSession(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthImpersonateStopSessionResponse200>> {
		const url = `/auth/impersonate-stop-session`;
		return this.axios.post<AuthImpersonateStopSessionResponse200>(url, {
			headers,
		});
	}

	/**
	 * Destroy the current session.
	 * @see AuthLogoutResponse200
	 */
	async AuthLogout(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthLogoutResponse200>> {
		const url = `/auth/logout`;
		return this.axios.post<AuthLogoutResponse200>(url, {
			headers,
		});
	}

	/**
	 * Get information about the current logged-in user. Throws a 401 if the user is 
not logged in. Returns both session and user information. When the user needs to
do two-step verification (via 'session.type === checkTwoStep'), the user object is not returned yet.
	 * @see AuthMeResponse200
	 */
	async AuthMe(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthMeResponse200>> {
		const url = `/auth/me`;
		return this.axios.get<AuthMeResponse200>(url, {
			headers,
		});
	}

	/**
	 * Returns a new token pair based on the provided refresh token.

Errors:
- Inherits errors from [`sessionStoreRefreshTokens`](https://compasjs.com/features/session-handling.html#sessionstorerefreshtokens)
	 * @see AuthRefreshTokensResponse200
	 */
	async AuthRefreshTokens(
		data: AuthRefreshTokensRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthRefreshTokensResponse200>> {
		const url = `/auth/refresh-tokens`;
		const bodyData = {
			refreshToken: data.refreshToken,
		};
		return this.axios.post<AuthRefreshTokensResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Soft delete or reactivate a user.

Errors:
- Inherits `authRequireUser` errors with the `auth.setUserActive.requireUser`
  eventKey.
	 * @param params.user
	 * @see AuthSetUserActiveResponse200
	 */
	async AuthSetUserActive(
		data: AuthSetUserActiveRequest & { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthSetUserActiveResponse200>> {
		const url = `/auth/user/${data.user}/set-active`;
		const bodyData = {
			active: data.active,
		};
		return this.axios.post<AuthSetUserActiveResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Update base user properties.

Errors:
- Inherits `authRequireUser` errors with the `auth.updateUser.requireUser` eventKey.
	 * @param params.user
	 * @see AuthUpdateUserResponse200
	 */
	async AuthUpdateUser(
		data: AuthUpdateUserRequest & { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthUpdateUserResponse200>> {
		const url = `/auth/user/${data.user}/update`;
		const bodyData = {
			name: data.name,
		};
		return this.axios.put<AuthUpdateUserResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Return a user list with all settings from this package. Note that the filters
are optional. If one of the filters is true, only the users with that type login
are returned. If a filter is set to 'false', only users without that login type
are returned. The filters are combinable.
	 * @see AuthUserListResponse200
	 */
	async AuthUserList(
		data: AuthUserListRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthUserListResponse200>> {
		const url = `/auth/list-users`;
		const bodyData = {
			search: data.search,
			filters: data.filters,
		};
		return this.axios.post<AuthUserListResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Create a new role. This role is 'tenant' specific.
	 * @see AuthPermissionCreateRoleResponse200
	 */
	async AuthPermissionCreateRole(
		data: AuthPermissionCreateRoleRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionCreateRoleResponse200>> {
		const url = `/auth/permission/role`;
		const bodyData = {
			identifier: data.identifier,
		};
		return this.axios.post<AuthPermissionCreateRoleResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Get the current known backend permissions. Can be used in the Frontend to match
known permissions and disable selection of unknowns.
	 * @see AuthPermissionPermissionListResponse200
	 */
	async AuthPermissionPermissionList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionPermissionListResponse200>> {
		const url = `/auth/permission/permission/list`;
		return this.axios.get<AuthPermissionPermissionListResponse200>(url, {
			headers,
		});
	}

	/**
	 * Remove a role. Only tenant specific roles can be removed.
	 * @param params.role
	 * @see AuthPermissionRemoveRoleResponse200
	 */
	async AuthPermissionRemoveRole(
		data: { role: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionRemoveRoleResponse200>> {
		const url = `/auth/permission/role/${data.role}`;
		return this.axios.delete<AuthPermissionRemoveRoleResponse200>(url, {
			headers,
		});
	}

	/**
	 * Add permissions to a role. Requires that both permissions and role exist.
The implementation checks if a permission is already added to the role, so
providing existing permissions is not a problem

Errors:
- `authPermission.requireRole.unknownRole` -> the provided `role` identifier is
  unknown.
- `authPermission.roleAddPermissions.unknownPermission` -> Empty permission
  array, duplicate permission in the array or an unknown permission provided.
	 * @param params.role
	 * @see AuthPermissionRoleAddPermissionsResponse200
	 */
	async AuthPermissionRoleAddPermissions(
		data: AuthPermissionRoleAddPermissionsRequest & { role: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionRoleAddPermissionsResponse200>> {
		const url = `/auth/permission/role/${data.role}/add-permissions`;
		const bodyData = {
			permissions: data.permissions,
		};
		return this.axios.post<AuthPermissionRoleAddPermissionsResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Get the roles with permissions across the system.
	 * @see AuthPermissionRoleListResponse200
	 */
	async AuthPermissionRoleList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionRoleListResponse200>> {
		const url = `/auth/permission/role/list`;
		return this.axios.get<AuthPermissionRoleListResponse200>(url, {
			headers,
		});
	}

	/**
	 * Remove permissions from a role. Requires that the role exists and all provided
permissions are assigned.

Errors:
- `authPermission.requireRole.unknownRole` -> the provided `role` identifier is
  unknown.
- `authPermission.roleRemovePermissions.permissionNotAssigned` -> The provided
  permission is not assigned to the provided role.
	 * @param params.role
	 * @see AuthPermissionRoleRemovePermissionsResponse200
	 */
	async AuthPermissionRoleRemovePermissions(
		data: AuthPermissionRoleRemovePermissionsRequest & { role: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionRoleRemovePermissionsResponse200>> {
		const url = `/auth/permission/role/${data.role}/remove-permissions`;
		const bodyData = {
			permissions: data.permissions,
		};
		return this.axios.post<AuthPermissionRoleRemovePermissionsResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Get the roles and permissions for the current logged-in user.
	 * @see AuthPermissionSummaryResponse200
	 */
	async AuthPermissionSummary(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionSummaryResponse200>> {
		const url = `/auth/permission/summary`;
		return this.axios.get<AuthPermissionSummaryResponse200>(url, {
			headers,
		});
	}

	/**
	 * Assign the provided role to the provided user.

Errors:
- Inherits `authRequireUser` errors with the `authPermission.requireUser`
  eventKey.
- `authPermission.userAssignRole.userHasRole` -> user already has the provided
  role assigned to them
- `authPermission.userAssignRole.unknownRole` -> Role can not be found by the
  provided identifier.
	 * @param params.user
	 * @see AuthPermissionUserAssignRoleResponse200
	 */
	async AuthPermissionUserAssignRole(
		data: AuthPermissionUserAssignRoleRequest & { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionUserAssignRoleResponse200>> {
		const url = `/auth/permission/user/${data.user}/assign-role`;
		const bodyData = {
			role: data.role,
		};
		return this.axios.post<AuthPermissionUserAssignRoleResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Remove the provided role from the provided user.

Errors:
- Inherits `authRequireUser` errors with the `authPermission.requireUser`
  eventKey.
- `authPermission.userRemoveRole.roleNotAssigned` -> role is not assigned to the
  user at the time of calling.
	 * @param params.user
	 * @see AuthPermissionUserRemoveRoleResponse200
	 */
	async AuthPermissionUserRemoveRole(
		data: AuthPermissionUserRemoveRoleRequest & { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionUserRemoveRoleResponse200>> {
		const url = `/auth/permission/user/${data.user}/remove-role`;
		const bodyData = {
			role: data.role,
		};
		return this.axios.post<AuthPermissionUserRemoveRoleResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Get the `apiAuthPermissionSummary` for the provided user.
	 * @param params.user
	 * @see AuthPermissionUserSummaryResponse200
	 */
	async AuthPermissionUserSummary(
		data: { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthPermissionUserSummaryResponse200>> {
		const url = `/auth/permission/user/${data.user}/summary`;
		return this.axios.get<AuthPermissionUserSummaryResponse200>(url, {
			headers,
		});
	}

	/**
	 * Let an anonymous based user login with the specified token.

Errors:
- `authAnonymousBased.login.unknownToken` -> can't find a user with the provided
  token
- `authAnonymousBased.login.tokenIsNotAllowedToLogin` -> token is not allowed to
  log in.
	 * @see AuthAnonymousBasedLoginResponse200
	 */
	async AuthAnonymousBasedLogin(
		data: AuthAnonymousBasedLoginRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthAnonymousBasedLoginResponse200>> {
		const url = `/auth/anonymous-based/login`;
		const bodyData = {
			token: data.token,
			device: data.device,
		};
		return this.axios.post<AuthAnonymousBasedLoginResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
    List all sessions for the currently logged-in user.
    
	 * @see SessionListResponse200
	 */
	async SessionList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<SessionListResponse200>> {
		const url = `/session/list`;
		return this.axios.get<SessionListResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
      Remove a specific session.
      
	 * @see SessionLogoutResponse200
	 */
	async SessionLogout(
		data: SessionLogoutRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<SessionLogoutResponse200>> {
		const url = `/session/logout`;
		const bodyData = {
			sessionId: data.sessionId,
		};
		return this.axios.post<SessionLogoutResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Set the notification token for the current session.
      
	 * @see SessionSetDeviceNotificationTokenResponse200
	 */
	async SessionSetDeviceNotificationToken(
		data: SessionSetDeviceNotificationTokenRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<SessionSetDeviceNotificationTokenResponse200>> {
		const url = `/session/set-notification-token`;
		const bodyData = {
			notificationToken: data.notificationToken,
			webPushInformation: data.webPushInformation,
		};
		return this.axios.post<SessionSetDeviceNotificationTokenResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Check if TOTP is set up and if the setup is verified.
	 * @see AuthTotpProviderInfoResponse200
	 */
	async AuthTotpProviderInfo(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthTotpProviderInfoResponse200>> {
		const url = `/auth/totp-provider`;
		return this.axios.get<AuthTotpProviderInfoResponse200>(url, {
			headers,
		});
	}

	/**
	 * Remove the totp setup, we expect that users have short-lived sessions. So no
extra verification is required to remove the totp setup.

Errors:
- `authTotpProvider.remove.totpNotConfigured` -> remove is called, while no totp
  is configured for this user.
	 * @see AuthTotpProviderRemoveResponse200
	 */
	async AuthTotpProviderRemove(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthTotpProviderRemoveResponse200>> {
		const url = `/auth/totp-provider/remove`;
		return this.axios.delete<AuthTotpProviderRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * Remove the totp setup for the provided user.

Errors:
- Inherits `authRequireUser` errors with the `authTotpProvider.removeForUser`
  eventKey.
- `authTotpProvider.removeForUser` -> remove is called for a user that doesn't
  have totp configured.
	 * @param params.user
	 * @see AuthTotpProviderRemoveForUserResponse200
	 */
	async AuthTotpProviderRemoveForUser(
		data: { user: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthTotpProviderRemoveForUserResponse200>> {
		const url = `/auth/totp-provider/user/${data.user}/remove`;
		return this.axios.delete<AuthTotpProviderRemoveForUserResponse200>(url, {
			headers,
		});
	}

	/**
	 * Initiate the totp provider setup. The setup needs to be verified via
`apiAuthTotpProviderSetupVerify`. If an existing totp setup is not yet verified,
the original one is removed, and a new setup is initiated.

Errors:
- `authTotpProvider.setup.alreadySetUp` -> an existing totp setup exists, and is
  already verified.
	 * @see AuthTotpProviderSetupResponse200
	 */
	async AuthTotpProviderSetup(
		data: AuthTotpProviderSetupRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthTotpProviderSetupResponse200>> {
		const url = `/auth/totp-provider/setup`;
		const bodyData = {};
		return this.axios.post<AuthTotpProviderSetupResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Verify the initiated setup via `apiAuthTotpProviderSetup`.

Errors:
- `authTotpProvider.setupVerify.totpNotConfigured` -> `setupVerify` is called,
  but `setup` isn't. So nothing to verify.
- `authTotpProvider.setupVerify.totpAlreadyVerified` -> setup is already
  verified.
- `authTotpProvider.setupVerify.invalidTotp` -> invalid `totp` to verify the
  setup.
	 * @see AuthTotpProviderSetupVerifyResponse200
	 */
	async AuthTotpProviderSetupVerify(
		data: AuthTotpProviderSetupVerifyRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthTotpProviderSetupVerifyResponse200>> {
		const url = `/auth/totp-provider/setup/verify`;
		const bodyData = {
			totp: data.totp,
		};
		return this.axios.post<AuthTotpProviderSetupVerifyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Call this when `ctx.session.type === "checkTwoStep"`. Advances the session to
`type: user` on a successful verification.

Errors:
- `authTotpProvider.verify.totpNotConfigured` -> verify is called, while no totp
  is configured for this user.
- `authTotpProvider.verify.totpNotVerified` -> totp is not verified, can only
  happen if multiple two-step providers are configured, and the wrong one is
  selected.
- `authTotpProvider.verify.invalidTotp` -> invalid `totp`, prompt user for a new
  totp.
	 * @see AuthTotpProviderVerifyResponse200
	 */
	async AuthTotpProviderVerify(
		data: AuthTotpProviderVerifyRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AuthTotpProviderVerifyResponse200>> {
		const url = `/auth/totp-provider/verify`;
		const bodyData = {
			totp: data.totp,
		};
		return this.axios.post<AuthTotpProviderVerifyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Validate 'postalCode' and 'houseNumber' (and optionally 'houseNumberAddition') combination and return resolved address (needs active user session). 

Error(s):
- `business.addressPrefill.addressInvalid` -> No address could be found for the postal code and house number combination.
	 * @see BusinessAddressPrefillResponse200
	 */
	async BusinessAddressPrefill(
		data: BusinessAddressPrefillRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<BusinessAddressPrefillResponse200>> {
		const url = `/business/address-prefill`;
		const bodyData = {
			postalCode: data.postalCode,
			houseNumber: data.houseNumber,
			houseNumberAddition: data.houseNumberAddition,
		};
		return this.axios.post<BusinessAddressPrefillResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Get a paginated list - ordered by name - of all clients matching the search query, searching by name, email or proplanner ID.
	 * @param query.q
	 * @param query.offset
	 * @param query.limit
	 * @see ClientAdminListResponse200
	 */
	async ClientAdminList(
		data: { q: string; offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ClientAdminListResponse200>> {
		const url = `/client/admin/list`;
		const queryData = {
			q: data.q,
			offset: data.offset,
			limit: data.limit,
		};
		return this.axios.post<ClientAdminListResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
Given a proplanner ID, get a summary of the proplanner account information.

Error(s):
- `client.adminProplanner.unknown` -> ID does not match any Proplanner account.
- `client.adminProplanner.unable` -> Getting Proplanner account failed because of unknown reason.
      
	 * @param params.id
	 * @see ClientAdminProplannerAccountResponse200
	 */
	async ClientAdminProplannerAccount(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ClientAdminProplannerAccountResponse200>> {
		const url = `/client/admin/proplannerAccount/${data.id}`;
		return this.axios.get<ClientAdminProplannerAccountResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Remove a user from the database and notify diks of removal. Diks will remove the ProPlanner customer associated to the account within a period X and notify the user via their original e-mailadres.

Error(s):
- `client.adminRemove.unknown` -> ID does not match any users with the `client` role
- `client.adminRemove.unable` -> Unable to remove user because of unknown reason.

	 * @param params.id
	 * @see ClientAdminRemoveResponse200
	 */
	async ClientAdminRemove(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ClientAdminRemoveResponse200>> {
		const url = `/client/admin/${data.id}/remove`;
		return this.axios.delete<ClientAdminRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Update the client with the provided proplanner account / email / status.
Error(s):
- `client.adminUpdate.unknownClient` -> ID does not match any users with the `client` role.
- `client.adminUpdate.unknownProplannerAccount` -> Either the Proplanner ID does not match any Proplanner account or the client is required to have a valid Proplanner account and does not.
- `client.adminUpdate.unable` -> Update failed because of unknown reason.
      
	 * @param params.id
	 * @see ClientAdminUpdateResponse200
	 */
	async ClientAdminUpdate(
		data: ClientAdminUpdateRequest & { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ClientAdminUpdateResponse200>> {
		const url = `/client/admin/update/${data.id}`;
		const bodyData = {
			proplannerId: data.proplannerId,
			email: data.email,
			status: data.status,
		};
		return this.axios.patch<ClientAdminUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Get details of ProPlanner bookings created in one order.
        
        Errors:
        - `confirmedOrder.list.unknown` -> Confirmed order does not exist (anymore).
        - `confirmedOrder.list.invalid` -> Could not retrieve booking data from ProPlanner.
        
	 * @param params.id
	 * @see ConfirmedOrderListResponse200
	 */
	async ConfirmedOrderList(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ConfirmedOrderListResponse200>> {
		const url = `/confirmed-order/${data.id}`;
		return this.axios.get<ConfirmedOrderListResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Get details of a confirmed Store It order.
        
        Errors:
        - `confirmedStorageOrder.notFound` -> Confirmed storage order does not exist (anymore).
        
	 * @param params.id
	 * @see ConfirmedStorageOrderSingleResponse200
	 */
	async ConfirmedStorageOrderSingle(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ConfirmedStorageOrderSingleResponse200>> {
		const url = `/confirmed-storage-order/${data.id}`;
		return this.axios.get<ConfirmedStorageOrderSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * @param params.storageLocationId
	 * @param params.contractId
	 * @see StorageContractDownloadContractResponse200
	 */
	async StorageContractDownloadContract(
		data: { storageLocationId: string; contractId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageContractDownloadContractResponse200>> {
		const url = `/storage-contract/contract/${data.storageLocationId}/${data.contractId}`;
		return this.axios.get<StorageContractDownloadContractResponse200>(url, {
			headers,
		});
	}

	/**
	 * @param params.storageLocationId
	 * @param params.invoiceNumber
	 * @see StorageContractDownloadInvoiceResponse200
	 */
	async StorageContractDownloadInvoice(
		data: { storageLocationId: string; invoiceNumber: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageContractDownloadInvoiceResponse200>> {
		const url = `/storage-contract/invoice/${data.storageLocationId}/${data.invoiceNumber}`;
		return this.axios.get<StorageContractDownloadInvoiceResponse200>(url, {
			headers,
		});
	}

	/**
	 * Fetch all storage invoices
	 * @param query.offset - Must be a multiple of {{limit}}
	 * @param query.limit
	 * @see StorageContractInvoicesResponse200
	 */
	async StorageContractInvoices(
		data: { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageContractInvoicesResponse200>> {
		const url = `/storage-contract/invoices`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		return this.axios.get<StorageContractInvoicesResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * Fetch all current storage unit contracts and {{limit}} number of storage invoices for a given account, starting at {{offset}}
	 * @param query.offset - Must be a multiple of {{limit}}
	 * @param query.limit
	 * @see StorageContractOverviewResponse200
	 */
	async StorageContractOverview(
		data: { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageContractOverviewResponse200>> {
		const url = `/storage-contract/overview`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		return this.axios.get<StorageContractOverviewResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * Terminate a contract in StoreIt. Termination date should be today or in the future.
        
        Error(s):
        - `storageContract.terminate.dateInThePast` -> Date should be today or in the future to cancel a contract that did not start yet
        - `storageContract.terminate.invalidDate` -> Date should be at least in 30 days from now if a contract has started
        - `storageContract.terminate.failed` -> Failed to terminate contract
        
	 * @param params.storageLocationId
	 * @param params.contractId
	 * @see StorageContractTerminateResponse200
	 */
	async StorageContractTerminate(
		data: StorageContractTerminateRequest & { storageLocationId: string; contractId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageContractTerminateResponse200>> {
		const url = `/storage-contract/contract/${data.storageLocationId}/${data.contractId}/terminate`;
		const bodyData = {
			terminationDate: data.terminationDate,
			terminationReasonId: data.terminationReasonId,
		};
		return this.axios.post<StorageContractTerminateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Complete checkout and generate payment url for iDeal payment.
This may be called again, as long as the payment has not been completed. In that case, the linked booking will
be reused, and only the payment will be retried.

Error(s):
- `storageOrderCheckout.orderNotFound` -> Order not found or accessible
- `storageOrderCheckout.incorrectOrderFound` -> Order is incorrect (call apiStorageOrderOverview first)
- `storageOrderCheckout.multipleOrdersFound` -> Please call orderFlowInfo first to merge the orders
- `storageOrderCheckout.addressFieldsRequired` -> Postal code and house number field required
- `storageOrderCheckout.emailFieldInvalidPattern` -> Provided email is invalid
- `storageOrderCheckout.ibanFieldInvalidPattern` -> Provided iban is invalid
- `storageOrderCheckout.orderIsFinal` -> Order has already been booked, and payment cannot be retried
	 * @see StorageOrderCheckoutResponse200
	 */
	async StorageOrderCheckout(
		data: StorageOrderCheckoutRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageOrderCheckoutResponse200>> {
		const url = `/storage-order/checkout`;
		const bodyData = {
			locale: data.locale,
			password: data.password,
			iban: data.iban,
			allowDirectDebit: data.allowDirectDebit,
			paymentMethod: data.paymentMethod,
		};
		return this.axios.post<StorageOrderCheckoutResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
List the current order with prices and all unit details. And checks real-time availability for each line. If more than one cart (order) is found a merged of carts is done. Multiple carts can occur when:
  1. a user is combined,
  2. a shared shopping is applied (but there was already an order present)
   
Error(s):
  - `storageOrder.overview.availabilityUnavailable` -> Unable the fetch realtime data at Store It
	 * @param query.locale
	 * @see StorageOrderOverviewResponse200
	 */
	async StorageOrderOverview(
		data: { locale?: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageOrderOverviewResponse200>> {
		const url = `/storage-order`;
		const queryData = {
			locale: data.locale,
		};
		return this.axios.get<StorageOrderOverviewResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
Create or (incrementally) update an order, when client is not an user, create a session and provide (auth) token.
It throws an error if the unit is unavailable, but indicates unavailable addons with their status,
since addon availability cannot be locked anyway. Availability should be enforced during the order call.

Error(s):
  - `storageOrder.startDateInvalid` -> The startDate is in the past
  - `storageOrder.unitTypeUnavailable` -> The chosen unit type is not available

	 * @param query.locale
	 * @see StorageOrderConfigureResponse200
	 */
	async StorageOrderConfigure(
		data: StorageOrderConfigureRequest & { locale?: any },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageOrderConfigureResponse200>> {
		const url = `/storage-order`;
		const queryData = {
			locale: data.locale,
		};
		const bodyData = {
			storageLocationId: data.storageLocationId,
			categoryId: data.categoryId,
			unitTypeId: data.unitTypeId,
			startDate: data.startDate,
			addons: data.addons,
			expectedRentalPeriod: data.expectedRentalPeriod,
			details: data.details,
			dimensionType: data.dimensionType,
		};
		return this.axios.post<StorageOrderConfigureResponse200>(url, {
			params: queryData,
			data: bodyData,
			headers,
		});
	}

	/**
	 * 
        Apply a discount code to an order
        
        Error(s):
        -`storageOrder.discountApply.noAccessToOrder` -> Order and or line does not exist or not accessible
        -`storageOrder.discountApply.orderAlreadyHasDiscountCode` -> Order has already a discount code applied
        -`storageOrder.discountApply.discountCodeInvalid` -> Discount code does not exist
      
	 * @see StorageOrderDiscountApplyResponse200
	 */
	async StorageOrderDiscountApply(
		data: StorageOrderDiscountApplyRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageOrderDiscountApplyResponse200>> {
		const url = `/storage-order/discount`;
		const bodyData = {
			discountCode: data.discountCode,
		};
		return this.axios.post<StorageOrderDiscountApplyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Remove already applied discount code from an order
                
        Error(s):
          - `storageOrder.discountRemove.noAccessToOrder` -> Order and or line does not exist or not accessible
          - `storageOrder.discountRemove.orderHasNoDiscountCodeApplied` -> Order has no discount code applied
	 * @see StorageOrderDiscountRemoveResponse200
	 */
	async StorageOrderDiscountRemove(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageOrderDiscountRemoveResponse200>> {
		const url = `/storage-order/discount`;
		return this.axios.delete<StorageOrderDiscountRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * @see ContinentalCreateSessionResponse200
	 */
	async ContinentalCreateSession(
		data: ContinentalCreateSessionRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<ContinentalCreateSessionResponse200>> {
		const url = `/continental/create-session`;
		const bodyData = {
			token: data.token,
			deviceName: data.deviceName,
		};
		return this.axios.post<ContinentalCreateSessionResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Create a virtual key for a booking in ProPlanner.
      
       Errors:
        - `proplanner.bookingFetch.unknown` -> There is no booking found.
        - `continental.createVirtualKey.bookingNotPaid` -> There is no payment found for the booking.
        - `continental.createVirtualKey.failed` -> Creation of virtual key failed.
	 * @see ContinentalCreateVirtualKeyResponse200
	 */
	async ContinentalCreateVirtualKey(
		data: ContinentalCreateVirtualKeyRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<ContinentalCreateVirtualKeyResponse200>> {
		const url = `/continental/create-virtual-key`;
		const bodyData = {
			bookingId: data.bookingId,
			clientDeviceId: data.clientDeviceId,
		};
		return this.axios.post<ContinentalCreateVirtualKeyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * @param params.virtualKeyId
	 * @see ContinentalRevokeVirtualKeyResponse200
	 */
	async ContinentalRevokeVirtualKey(
		data: { virtualKeyId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ContinentalRevokeVirtualKeyResponse200>> {
		const url = `/continental/${data.virtualKeyId}/revoke`;
		return this.axios.delete<ContinentalRevokeVirtualKeyResponse200>(url, {
			headers,
		});
	}

	/**
	 * @param params.virtualKeyId
	 * @see ContinentalUpdateVirtualKeyResponse200
	 */
	async ContinentalUpdateVirtualKey(
		data: ContinentalUpdateVirtualKeyRequest & { virtualKeyId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ContinentalUpdateVirtualKeyResponse200>> {
		const url = `/continental/${data.virtualKeyId}/update`;
		const bodyData = {
			fromDate: data.fromDate,
			toDate: data.toDate,
		};
		return this.axios.put<ContinentalUpdateVirtualKeyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Creates an item
	 * @see DivergentOpeningHoursCreateResponse200
	 */
	async DivergentOpeningHoursCreate(
		data: DivergentOpeningHoursCreateRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DivergentOpeningHoursCreateResponse200>> {
		const url = `/divergent-opening-hours`;
		const bodyData = {
			description: data.description,
			from: data.from,
			to: data.to,
			date: data.date,
			isClosedForTheWholeDay: data.isClosedForTheWholeDay,
			locations: data.locations,
		};
		return this.axios.post<DivergentOpeningHoursCreateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Get a single divergent opening hours item by id.
      
      Errors:
        - `divergentOpeningHours.single.unknown` -> Can't find the item.
	 * @param params.id
	 * @see DivergentOpeningHoursSingleResponse200
	 */
	async DivergentOpeningHoursSingle(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<DivergentOpeningHoursSingleResponse200>> {
		const url = `/divergent-opening-hours/${data.id}`;
		return this.axios.get<DivergentOpeningHoursSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
      Update a divergent opening hours item.
      
      Errors:
       - `divergentOpeningHours.single.unknown` -> Can't find the item.
      
	 * @param params.id
	 * @see DivergentOpeningHoursUpdateResponse200
	 */
	async DivergentOpeningHoursUpdate(
		data: DivergentOpeningHoursUpdateRequest & { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<DivergentOpeningHoursUpdateResponse200>> {
		const url = `/divergent-opening-hours/${data.id}`;
		const bodyData = {
			description: data.description,
			from: data.from,
			to: data.to,
			date: data.date,
			isClosedForTheWholeDay: data.isClosedForTheWholeDay,
			locations: data.locations,
		};
		return this.axios.put<DivergentOpeningHoursUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Remove a divergent opening hours item.
      
      Errors:
       - `divergentOpeningHours.single.unknown` -> Can't find the item.
	 * @param params.id
	 * @see DivergentOpeningHoursDeleteResponse200
	 */
	async DivergentOpeningHoursDelete(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<DivergentOpeningHoursDeleteResponse200>> {
		const url = `/divergent-opening-hours/${data.id}`;
		return this.axios.delete<DivergentOpeningHoursDeleteResponse200>(url, {
			headers,
		});
	}

	/**
	 * Get all divergent opening hours.
	 * @param query.offset
	 * @param query.limit
	 * @see DivergentOpeningHoursListResponse200
	 */
	async DivergentOpeningHoursList(
		data: { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<DivergentOpeningHoursListResponse200>> {
		const url = `/divergent-opening-hours/list`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		return this.axios.get<DivergentOpeningHoursListResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * Get the current available feature flags. This may use the current tenant and user to calculate the values.
	 * @see FeatureFlagCurrentResponse200
	 */
	async FeatureFlagCurrent(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<FeatureFlagCurrentResponse200>> {
		const url = `/feature-flag/current`;
		return this.axios.get<FeatureFlagCurrentResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Start a job to synchronise data with proplanner. For now only the categories job - including category media, add-ons, and add-on media - is supported.

Error(s):
- `job.proplannerMirror.running` -> The job, or a dependent job, is already in progress.
      
	 * @see JobStartProplannerMirrorResponse200
	 */
	async JobStartProplannerMirror(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<JobStartProplannerMirrorResponse200>> {
		const url = `/job/admin/start/proplannerMirrorCategory`;
		return this.axios.post<JobStartProplannerMirrorResponse200>(url, {
			headers,
		});
	}

	/**
	 * Sends a magic link via Slack. Locally it directly returns the url.
	 * @see ManagementRequestMagicLinkResponse200
	 */
	async ManagementRequestMagicLink(
		data: ManagementRequestMagicLinkRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<ManagementRequestMagicLinkResponse200>> {
		const url = `/_lightbase/management/request-magic-link`;
		const bodyData = {
			slackUserId: data.slackUserId,
		};
		return this.axios.post<ManagementRequestMagicLinkResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Generated list route for 'featureFlag'.
	 * @param query.offset
	 * @param query.limit
	 * @see ManagementFeatureFlagListResponse200
	 */
	async ManagementFeatureFlagList(
		data: ManagementFeatureFlagListRequest & { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ManagementFeatureFlagListResponse200>> {
		const url = `/_lightbase/management/feature-flag/list`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		const bodyData = {
			where: data.where,
			orderBy: data.orderBy,
			orderBySpec: data.orderBySpec,
		};
		return this.axios.post<ManagementFeatureFlagListResponse200>(url, {
			params: queryData,
			data: bodyData,
			headers,
		});
	}

	/**
	 * Generated single route for 'featureFlag'.
	 * @param params.featureFlagId - The primary key of the 'featureFlag' model.
	 * @see ManagementFeatureFlagSingleResponse200
	 */
	async ManagementFeatureFlagSingle(
		data: { featureFlagId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ManagementFeatureFlagSingleResponse200>> {
		const url = `/_lightbase/management/feature-flag/${data.featureFlagId}/single`;
		return this.axios.get<ManagementFeatureFlagSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * Generated update route for 'featureFlag'.
	 * @param params.featureFlagId - The primary key of the 'featureFlag' model.
	 * @see ManagementFeatureFlagUpdateResponse200
	 */
	async ManagementFeatureFlagUpdate(
		data: ManagementFeatureFlagUpdateRequest & { featureFlagId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ManagementFeatureFlagUpdateResponse200>> {
		const url = `/_lightbase/management/feature-flag/${data.featureFlagId}/update`;
		const bodyData = {
			globalValue: data.globalValue,
			description: data.description,
			tenantValues: data.tenantValues,
			userValues: data.userValues,
		};
		return this.axios.put<ManagementFeatureFlagUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Get information about the current tenant.
	 * @see MultitenantCurrentResponse200
	 */
	async MultitenantCurrent(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<MultitenantCurrentResponse200>> {
		const url = `/multitenant/current`;
		return this.axios.get<MultitenantCurrentResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
      Start a process to verify a drivers license. Returns a redirect URL to the Onfido website.
      
      Errors:
        - `onfido.startDriversLicenseVerification.notAllowed` -> Drivers license verification is only for personal accounts. 
        - `onfido.startDriversLicenseVerification.unableToCreateDossier` -> Could not create a Onfido dossier. 
        - `onfido.startDriversLicenseVerification.unableToCreateProcess` -> Could not create a Onfido process. 
      
	 * @see OnfidoStartDriversLicenseVerificationResponse200
	 */
	async OnfidoStartDriversLicenseVerification(
		data: OnfidoStartDriversLicenseVerificationRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OnfidoStartDriversLicenseVerificationResponse200>> {
		const url = `/onfido/start-drivers-license-verification`;
		const bodyData = {};
		return this.axios.post<OnfidoStartDriversLicenseVerificationResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Incoming notification calls from Onfido.
      
      Errors:
      - `onfido.updateDriversLicenseData.forbidden` -> The provided token is not valid
      - `onfido.updateDriversLicenseData.userNotFound` -> No user found based on dossierId
      - `onfido.updateDriversLicenseData.unableToGetProcess` -> Unable to get process for dossierId and processId 
      - `onfido.updateDriversLicenseData.unableToUpdate` -> Unable to update data in ProPlanner 
      
	 * @see OnfidoWebhookResponse200
	 */
	async OnfidoWebhook(
		data: OnfidoWebhookRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OnfidoWebhookResponse200>> {
		const url = `/onfido/webhook`;
		const bodyData = {
			id: data.id,
			timestamp: data.timestamp,
			eventName: data.eventName,
			sender: data.sender,
			eventData: data.eventData,
			accountId: data.accountId,
			expiresAt: data.expiresAt,
			isMockEvent: data.isMockEvent,
			tags: data.tags,
		};
		return this.axios.post<OnfidoWebhookResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Add category (orderLine) to order, when client is not an user, create a session and provide (auth) token
        
Error(s):
  - `order.add.categoryUnknown` -> Category ID is not known by backend
  - `order.add.periodInvalid` -> The rental period is invalid (within 1 hour)
  - `order.add.selectedAddonInvalid` -> Addon is not applicable for given category
  - `order.add.youngDriverNotEnabled` -> Unable to book YoungDrivers because of age limit
  - `order.add.studentDiscountCombinedWithAAClass` -> Unable to combine student discount with AA (action category)
  - `order.add.locationIsClosed` -> The pickup date is outside of the opening hours of the location
  - `order.add.returnLocationInvalid` -> Amsterdam Zuid is not allowed as different returnLocation
	 * @see OrderAddResponse200
	 */
	async OrderAdd(
		data: OrderAddRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderAddResponse200>> {
		const url = `/order/line`;
		const bodyData = {
			categoryId: data.categoryId,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			locationPickup: data.locationPickup,
			locationReturn: data.locationReturn,
			expectedKilometers: data.expectedKilometers,
			extraDriverCount: data.extraDriverCount,
			extraYoungDriverCount: data.extraYoungDriverCount,
			insuranceProfileOptionId: data.insuranceProfileOptionId,
			abroadOptionId: data.abroadOptionId,
			selectedAddons: data.selectedAddons,
			referenceText: data.referenceText,
			quantity: data.quantity,
			remarks: data.remarks,
		};
		return this.axios.post<OrderAddResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Apply discount/coupon code to (current) order
        
Error(s):
  - `order.discountApply.noAccessToOrder` -> Order and or line does not exist or accessible
  - `order.discountApply.orderAlreadyHasDiscountCode` -> Order has already a discount code applied
  - `order.discountApply.studentDiscountCombinedWithAAClass` -> Unable to combine student discount with AA (action category)
	 * @see OrderDiscountApplyResponse200
	 */
	async OrderDiscountApply(
		data: OrderDiscountApplyRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderDiscountApplyResponse200>> {
		const url = `/order/discount`;
		const bodyData = {
			discountCode: data.discountCode,
		};
		return this.axios.post<OrderDiscountApplyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Remove already applied discount/coupon code from an order
        
Error(s):
  - `order.discountRemove.noAccessToOrder` -> Order and or line does not exist or accessible
  - `order.discountRemove.orderHasNoDiscountCodeApplied` -> Order has no discount code applied
	 * @see OrderDiscountRemoveResponse200
	 */
	async OrderDiscountRemove(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderDiscountRemoveResponse200>> {
		const url = `/order/discount`;
		return this.axios.delete<OrderDiscountRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
List all orderLines within the current order. And checks real-time availability for each line. If more than one cart (order) is found a merged of carts is done. Multiple carts can occur when:
  1. a user is combined,
  2. a shared shopping is applied (but there was already an order present)
   
Error(s):
  - `order.overview.availabilityUnavailable` -> Unable the fetch realtime data at Proplanner
	 * @see OrderOverviewResponse200
	 */
	async OrderOverview(
		data: OrderOverviewRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderOverviewResponse200>> {
		const url = `/order`;
		const bodyData = {
			locale: data.locale,
		};
		return this.axios.post<OrderOverviewResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Very cheap call to get order item count (amount of lines)
	 * @see OrderOverviewCountResponse200
	 */
	async OrderOverviewCount(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderOverviewCountResponse200>> {
		const url = `/order/overview/count`;
		return this.axios.get<OrderOverviewCountResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Get a single line by Id, without price overviews or order context. Can be used on mutate/update page
        
Error(s):
  - `order.single.availabilityUnavailable` -> Unable the fetch realtime data at Proplanner
  - `order.single.noAccessToOrderOrLine` -> Order and or line does not exist or accessible
	 * @param params.lineId
	 * @see OrderSingleResponse200
	 */
	async OrderSingle(
		data: { lineId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderSingleResponse200>> {
		const url = `/order/line/${data.lineId}`;
		return this.axios.get<OrderSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Update a single line and invalidates group
        
Error(s):
  - `order.update.noAccessToOrderOrLine` -> Order and or line does not exist or accessible
  - `order.update.periodInvalid` -> The rental period is invalid (within 1 hour)
  - `order.update.categoryUnknown` -> Category ID is not known by backend
  - `order.update.selectedAddonInvalid` -> Addon is not applicable for given category
  - `order.update.youngDriverNotEnabled` -> Unable to book YoungDrivers because of age limit
  - `order.update.studentDiscountCombinedWithAAClass` -> Unable to combine student discount with AA (action category)
  - `order.update.returnLocationInvalid` -> Amsterdam Zuid is not allowed as different returnLocation
  - `order.update.locationIsClosed` -> The pickup date is outside of the opening hours of the location
  - `order.update.locationNotAvailable` -> There is no availability at the given location
	 * @param params.lineId
	 * @see OrderUpdateResponse200
	 */
	async OrderUpdate(
		data: OrderUpdateRequest & { lineId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderUpdateResponse200>> {
		const url = `/order/line/${data.lineId}`;
		const bodyData = {
			categoryId: data.categoryId,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
			locationPickup: data.locationPickup,
			locationReturn: data.locationReturn,
			expectedKilometers: data.expectedKilometers,
			extraDriverCount: data.extraDriverCount,
			extraYoungDriverCount: data.extraYoungDriverCount,
			insuranceProfileOptionId: data.insuranceProfileOptionId,
			abroadOptionId: data.abroadOptionId,
			selectedAddons: data.selectedAddons,
			referenceText: data.referenceText,
			quantity: data.quantity,
			remarks: data.remarks,
		};
		return this.axios.put<OrderUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Remove a single line and invalidates group
        
Error(s):
  - `order.remove.noAccessToOrderOrLine` -> Order and or line does not exist or accessible
	 * @param params.lineId
	 * @see OrderRemoveResponse200
	 */
	async OrderRemove(
		data: { lineId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderRemoveResponse200>> {
		const url = `/order/line/${data.lineId}`;
		return this.axios.delete<OrderRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
Complete flow (checkout) and generate payment url when iDeal payment
        
Error(s):
- `orderCheckout.flowCheckout.orderNotFound` -> Order not found or accessible
- `orderCheckout.flowCheckout.incorrectOrderFound` -> Order is incorrect (call apiOrderCheckoutFlowInfo first)
- `orderCheckout.flowCheckout.multipleOrdersFound` -> Please call orderFlowInfo first to merge the orders
- `orderCheckout.flowCheckout.passwordFieldNotAcceptedForNonGuestFlow` -> Password field given for non guest flow, remove field
- `orderCheckout.flowCheckout.addressFieldsRequiredWhenPasswordFieldProvided` -> Postal code and house number field required when account creation
- `orderCheckout.flowCheckout.dutchAddressFieldsRequiredOnAccountCreation` -> Postal code and house number field required for dutch address on account creation
- `orderCheckout.flowCheckout.emailFieldInvalidPattern` -> Provided email is invalids
- `orderCheckout.flowCheckout.hasNonAvailableLines` -> Order contains un-bookable orderLine (configuration)
- `orderCheckout.flowInfo.proplannerAccountInactive` -> Account is marked as inactive or blocked in ProPlanner
- `orderCheckout.flowCheckout.paymentTypeInvalid` -> Provided payment type is invalid for order or overall
	 * @param data - Also used in {@link apiStorageOrderFlowCheckout}
	 * @see OrderCheckoutFlowCheckoutResponse200
	 */
	async OrderCheckoutFlowCheckout(
		data: OrderCheckoutFlowCheckoutRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderCheckoutFlowCheckoutResponse200>> {
		const url = `/order-checkout/checkout/flow/checkout`;
		const bodyData = {
			locale: data.locale,
			paymentMethod: data.paymentMethod,
			password: data.password,
		};
		return this.axios.post<OrderCheckoutFlowCheckoutResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Fetch orderList, (copied) account info and validates business rules (via exceptions)
        
Error(s):
- `orderCheckout.flowInfo.orderNotFound` -> Order not found or accessible
- `orderCheckout.flowInfo.proplannerAccountInactive` -> Account is marked as inactive or blocked in ProPlanner
- `orderCheckout.flowInfo.availabilityUnavailable` -> Unable the fetch realtime data at Proplanner
	 * @see OrderCheckoutFlowInfoResponse200
	 */
	async OrderCheckoutFlowInfo(
		data: OrderCheckoutFlowInfoRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderCheckoutFlowInfoResponse200>> {
		const url = `/order-checkout/checkout/flow/info`;
		const bodyData = {
			locale: data.locale,
		};
		return this.axios.post<OrderCheckoutFlowInfoResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Update (copied) account info in checkout session, recalculate business rules and prices
        
Error(s):
- `orderCheckout.flowPreferences.orderNotFound` -> Order not found or accessible
- `orderCheckout.flowPreferences.incorrectOrderFound` -> Order is incorrect (call apiOrderCheckoutFlowInfo first)
- `orderCheckout.flowPreferences.emailFieldRequired` Because of askEmailField is true (guest flow)
- `orderCheckout.flowPreferences.emailAssociatedWithAccount` A account with this email address is already known
- `orderCheckout.flowPreferences.birthDateFieldRequired` Because of askBirthDateField is true (guest flow)
- `orderCheckout.flowPreferences.accountTypeFieldRequired` Because of askAccountType is true (guest flow)
- `orderCheckout.flowPreferences.fieldMissingForType` One or more fields are missing for account type
- `orderCheckout.flowPreferences.driverAgeRequirementNotMet` Minimum driver age not met
- `orderCheckout.flowPreferences.mercedesVRequiresDutchPostalCode` Mercedes V is only rentable within the Netherlands
- `orderCheckout.flowPreferences.mercedesVRequiresBusinessCustomer` Mercedes V is only rentable by a BusinessCustomer
	 * @param data - The fields of {@link StorageOrderCheckoutValidatedFlowPreferencesBody} but with different validation
	 * @see OrderCheckoutFlowPreferencesResponse200
	 */
	async OrderCheckoutFlowPreferences(
		data: OrderCheckoutFlowPreferencesRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderCheckoutFlowPreferencesResponse200>> {
		const url = `/order-checkout/checkout/flow/preferences`;
		const bodyData = {
			preferences: data.preferences,
			accountType: data.accountType,
			email: data.email,
			birthDate: data.birthDate,
		};
		return this.axios.put<OrderCheckoutFlowPreferencesResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Use shareId to apply copied order state of other user, when client is not an user, create a session and provide (auth) token

Error(s):
- `orderShare.apply.incorrectShareId` -> Share identifier is incorrect or associated with outdated share
	 * @see OrderShareApplyResponse200
	 */
	async OrderShareApply(
		data: OrderShareApplyRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderShareApplyResponse200>> {
		const url = `/order-share/apply`;
		const bodyData = {
			shareId: data.shareId,
		};
		return this.axios.post<OrderShareApplyResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
Share an exact copy of the current order with an external user
        
Error(s):
- `orderShare.create.noShareableOrderFound` -> Unable the share current state
	 * @see OrderShareCreateResponse200
	 */
	async OrderShareCreate(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<OrderShareCreateResponse200>> {
		const url = `/order-share/create`;
		return this.axios.post<OrderShareCreateResponse200>(url, {
			headers,
		});
	}

	/**
	 * Smart Pay incoming notification calls by Rabobank
	 * @see RabobankWebhookOmnikassaResponse200
	 */
	async RabobankWebhookOmnikassa(
		data: RabobankWebhookOmnikassaRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<RabobankWebhookOmnikassaResponse200>> {
		const url = `/rabobank/webhook/omnikassa`;
		const bodyData = {
			authentication: data.authentication,
			expiry: data.expiry,
			eventName: data.eventName,
			poiId: data.poiId,
			signature: data.signature,
		};
		return this.axios.post<RabobankWebhookOmnikassaResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
            Get a current shared vehicle that is checked out (i.e. ride has started).
            If there is no active ride the response item will be empty.
            
            For now, we assume there is only one active shared vehicle reservation per user. 
            However, this is currently not enforced, and may be changed in the future.
        
	 * @see SharedVehicleReservationActiveResponse200
	 */
	async SharedVehicleReservationActive(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationActiveResponse200>> {
		const url = `/shared-vehicle-reservation/active`;
		return this.axios.get<SharedVehicleReservationActiveResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Endpoint to check if a shared vehicle reservation can be extended until the new dateReturn. The reservation should be active.
        
        Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.availabilityExtendBooking.notStarted` -> The booking is not started yet.
        - `sharedVehicleReservation.availabilityExtendBooking.alreadyEnded` -> The booking is already ended.
        - `sharedVehicleReservation.availabilityExtendBooking.dateNotAllowed` -> The new returnDate is before the current returnDate.
        
	 * @param params.reservationId
	 * @see SharedVehicleReservationAvailabilityExtendBookingResponse200
	 */
	async SharedVehicleReservationAvailabilityExtendBooking(
		data: SharedVehicleReservationAvailabilityExtendBookingRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationAvailabilityExtendBookingResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}/availability-extend-booking`;
		const bodyData = {
			locale: data.locale,
			dateReturn: data.dateReturn,
		};
		return this.axios.post<SharedVehicleReservationAvailabilityExtendBookingResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Get a single shared vehicle booking.
        
        Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.single.notFound` -> Booking does not exist.
        
	 * @param params.reservationId
	 * @see SharedVehicleReservationSingleResponse200
	 */
	async SharedVehicleReservationSingle(
		data: { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationSingleResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}`;
		return this.axios.get<SharedVehicleReservationSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Endpoint to update datePickup and dateReturn for a shared vehicle reservation.
        
        Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.update.failed` -> The booking could not be updated.
        
	 * @param params.reservationId
	 * @see SharedVehicleReservationUpdateResponse200
	 */
	async SharedVehicleReservationUpdate(
		data: SharedVehicleReservationUpdateRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationUpdateResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}`;
		const bodyData = {
			locale: data.locale,
			datePickup: data.datePickup,
			dateReturn: data.dateReturn,
		};
		return this.axios.put<SharedVehicleReservationUpdateResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Cancel a shared vehicle booking.
      
      Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.cancel.failed` -> Booking could not be canceled
      
	 * @param params.reservationId
	 * @see SharedVehicleReservationCancelResponse200
	 */
	async SharedVehicleReservationCancel(
		data: { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationCancelResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}`;
		return this.axios.delete<SharedVehicleReservationCancelResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Endpoint to extend a shared vehicle reservation.
        
        Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.extendBooking.failed` -> The booking could not be extended.
        
	 * @param params.reservationId
	 * @see SharedVehicleReservationExtendBookingResponse200
	 */
	async SharedVehicleReservationExtendBooking(
		data: SharedVehicleReservationExtendBookingRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationExtendBookingResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}/extend-booking`;
		const bodyData = {
			locale: data.locale,
			dateReturn: data.dateReturn,
		};
		return this.axios.post<SharedVehicleReservationExtendBookingResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Generate a payment URL for a shared vehicle reservation.
        This endpoint can be used if the client did not pay the shared vehicle reservation yet (indicated by error continental.createVirtualKey.bookingNotPaid).

        Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.generatePaymentUrl.failed` -> Unable to generate payment URL.
        - `sharedVehicleReservation.generatePaymentUrl.alreadyPaid` -> There is already a payment done.
	 * @param params.reservationId
	 * @see SharedVehicleReservationGeneratePaymentUrlResponse200
	 */
	async SharedVehicleReservationGeneratePaymentUrl(
		data: SharedVehicleReservationGeneratePaymentUrlRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationGeneratePaymentUrlResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}/generate-payment-url`;
		const bodyData = {
			locale: data.locale,
		};
		return this.axios.post<SharedVehicleReservationGeneratePaymentUrlResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Get fuel instructions and pin for a shared vehicle. Client should have a reservation for the shared vehicle.
        Both fuel instructions and pin are optional, as the information may not be available (yet).
        
        Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        
	 * @param params.reservationId
	 * @see SharedVehicleReservationGetFuelInstructionsResponse200
	 */
	async SharedVehicleReservationGetFuelInstructions(
		data: { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationGetFuelInstructionsResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}/get-fuel-instructions`;
		return this.axios.get<SharedVehicleReservationGetFuelInstructionsResponse200>(url, {
			headers,
		});
	}

	/**
	 * Fetch all shared vehicle reservations for a given account
	 * @param query.offset
	 * @param query.limit
	 * @see SharedVehicleReservationListResponse200
	 */
	async SharedVehicleReservationList(
		data: SharedVehicleReservationListRequest & { offset?: number; limit?: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationListResponse200>> {
		const url = `/shared-vehicle-reservation/list`;
		const queryData = {
			offset: data.offset,
			limit: data.limit,
		};
		const bodyData = {
			status: data.status,
			filters: data.filters,
		};
		return this.axios.post<SharedVehicleReservationListResponse200>(url, {
			params: queryData,
			data: bodyData,
			headers,
		});
	}

	/**
	 * Start a shared vehicle reservation
      
          Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.startRide.failed` -> Ride could not be started.
        - `sharedVehicleReservation.startRide.getLatestVehicleStateFailed` -> Unable to fetch latest vehicle state.
      
	 * @param params.reservationId
	 * @see SharedVehicleReservationStartRideResponse200
	 */
	async SharedVehicleReservationStartRide(
		data: SharedVehicleReservationStartRideRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationStartRideResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}/start-ride`;
		const bodyData = {
			internalTidiness: data.internalTidiness,
			externalTidiness: data.externalTidiness,
		};
		return this.axios.post<SharedVehicleReservationStartRideResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * Stop a shared vehicle reservation
      
          Error(s):
        - `proplanner.bookingFetch.unknown` -> Booking does not exist.
        - `sharedVehicleReservation.stopRide.failed` -> Ride could not be stopped.
        - `sharedVehicleReservation.stopRide.getLatestVehicleStateFailed` -> Unable to fetch latest vehicle state.
        - `sharedVehicleReservation.stopRide.vehicleUnknownLocation` -> ProPlanner does not provide a location for this vehicle. User should try again later.
        - `sharedVehicleReservation.stopRide.vehicleNotParkedWithinRadius` -> The vehicle is not parked within the specified radius.
        - `sharedVehicleReservation.stopRide.invoicingFailed` -> The invoicing of the booking failed in ProPlanner
      
	 * @param params.reservationId
	 * @see SharedVehicleReservationStopRideResponse200
	 */
	async SharedVehicleReservationStopRide(
		data: SharedVehicleReservationStopRideRequest & { reservationId: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<SharedVehicleReservationStopRideResponse200>> {
		const url = `/shared-vehicle-reservation/${data.reservationId}/stop-ride`;
		const bodyData = {
			internalTidiness: data.internalTidiness,
			externalTidiness: data.externalTidiness,
		};
		return this.axios.post<SharedVehicleReservationStopRideResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
      Get a list of addons for the provided location. Unavailable addons can be excluded by using the optional query parameter.
      
	 * @param params.storageLocationId
	 * @param query.excludeUnavailable
	 * @see StorageAddonsResponse200
	 */
	async StorageAddons(
		data: { storageLocationId: string; excludeUnavailable?: boolean },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageAddonsResponse200>> {
		const url = `/storage/${data.storageLocationId}/addons`;
		const queryData = {
			excludeUnavailable: data.excludeUnavailable,
		};
		return this.axios.get<StorageAddonsResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * 
      Get a list of categories for the provided location, with their availability.

      Error(s):
      - `storageLocation.single.notFound` -> Unknown location.
      
	 * @param params.storageLocationId
	 * @see StorageCategoriesResponse200
	 */
	async StorageCategories(
		data: { storageLocationId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageCategoriesResponse200>> {
		const url = `/storage/${data.storageLocationId}/categories`;
		return this.axios.get<StorageCategoriesResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Get a list of termination types.
        
	 * @see StorageTerminationTypesResponse200
	 */
	async StorageTerminationTypes(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageTerminationTypesResponse200>> {
		const url = `/storage/terminationTypes`;
		return this.axios.get<StorageTerminationTypesResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
      Get a list of unit types for the provided location and category. Unavailable unit types can be excluded by using the optional query parameter.
      
	 * @param params.categoryId
	 * @param params.storageLocationId
	 * @param query.excludeFull
	 * @see StorageUnitTypesResponse200
	 */
	async StorageUnitTypes(
		data: { categoryId: string; storageLocationId: string; excludeFull?: boolean },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageUnitTypesResponse200>> {
		const url = `/storage/${data.storageLocationId}/category/${data.categoryId}/unitTypes`;
		const queryData = {
			excludeFull: data.excludeFull,
		};
		return this.axios.get<StorageUnitTypesResponse200>(url, {
			params: queryData,

			headers,
		});
	}

	/**
	 * @param params.storageLocationId
	 * @see StorageLocationSingleResponse200
	 */
	async StorageLocationSingle(
		data: { storageLocationId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<StorageLocationSingleResponse200>> {
		const url = `/storage-location/${data.storageLocationId}`;
		return this.axios.get<StorageLocationSingleResponse200>(url, {
			headers,
		});
	}

	/**
	 * @see SupportContactResponse200
	 */
	async SupportContact(
		data: SupportContactRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<SupportContactResponse200>> {
		const url = `/support/contact`;
		const bodyData = {
			name: data.name,
			phone: data.phone,
			email: data.email,
			department: data.department,
			question: data.question,
		};
		return this.axios.post<SupportContactResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * @see SupportSubscribeNewsletterResponse200
	 */
	async SupportSubscribeNewsletter(
		data: SupportSubscribeNewsletterRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<SupportSubscribeNewsletterResponse200>> {
		const url = `/support/mailing-list/newsletter/subscribe`;
		const bodyData = {
			email: data.email,
		};
		return this.axios.post<SupportSubscribeNewsletterResponse200>(url, {
			data: data,
			headers,
		});
	}
}
