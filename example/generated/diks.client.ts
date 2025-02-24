import type { AxiosResponse } from "axios";
import { getdiksInstance } from "./diks.axios";
import type * as T from "./diks.schema";

/**
 * Fetch all favorites for a given account
 * @see AccountFavoritesResponse200
 */
export async function AccountFavorites(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountFavoritesResponse200>> {
	const url = "/account/favorites";
	return getdiksInstance().get<T.AccountFavoritesResponse200>(url, {
		headers,
	});
}

/**
 * @see AccountGetAppPreferencesResponse200
 */
export async function AccountGetAppPreferences(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountGetAppPreferencesResponse200>> {
	const url = "/account/preferences/app";
	return getdiksInstance().get<T.AccountGetAppPreferencesResponse200>(url, {
		headers,
	});
}

/**
 * @see AccountGetCompanyPreferencesResponse200
 */
export async function AccountGetCompanyPreferences(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountGetCompanyPreferencesResponse200>> {
	const url = "/account/preferences/company";
	return getdiksInstance().get<T.AccountGetCompanyPreferencesResponse200>(url, {
		headers,
	});
}

/**
 * @see AccountUpdateCompanyPreferencesResponse200
 */
export async function AccountUpdateCompanyPreferences(
	data: T.AccountUpdateCompanyPreferencesRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountUpdateCompanyPreferencesResponse200>> {
	const url = "/account/preferences/company";
	const bodyData = {
		companyPreferences: data.companyPreferences,
	};
	return getdiksInstance().put<T.AccountUpdateCompanyPreferencesResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * @see AccountGetPersonalPreferencesResponse200
 */
export async function AccountGetPersonalPreferences(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountGetPersonalPreferencesResponse200>> {
	const url = "/account/preferences/personal";
	return getdiksInstance().get<T.AccountGetPersonalPreferencesResponse200>(url, {
		headers,
	});
}

/**
 * @see AccountUpdatePersonalPreferencesResponse200
 */
export async function AccountUpdatePersonalPreferences(
	data: T.AccountUpdatePersonalPreferencesRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountUpdatePersonalPreferencesResponse200>> {
	const url = "/account/preferences/personal";
	const bodyData = {
		personalPreferences: data.personalPreferences,
	};
	return getdiksInstance().put<T.AccountUpdatePersonalPreferencesResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Fetch account information / profile
 * @see AccountMeResponse200
 */
export async function AccountMe(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountMeResponse200>> {
	const url = "/account/me";
	return getdiksInstance().get<T.AccountMeResponse200>(url, {
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
export async function AccountRegister(
	data: T.AccountRegisterRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountRegisterResponse200>> {
	const url = "/account/register";
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
	return getdiksInstance().post<T.AccountRegisterResponse200>(url, {
		data: bodyData,
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
export async function AccountRemove(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountRemoveResponse200>> {
	const url = "/account/remove";
	return getdiksInstance().delete<T.AccountRemoveResponse200>(url, {
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
export async function AccountRemoveDriversLicenseData(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountRemoveDriversLicenseDataResponse200>> {
	const url = "/account/remove-drivers-license-data";
	return getdiksInstance().delete<T.AccountRemoveDriversLicenseDataResponse200>(url, {
		headers,
	});
}

/**
 * Fetch all reservations for a given account
 * @param query.offset
 * @param query.limit
 * @see AccountReservationsResponse200
 */
export async function AccountReservations(
	data: T.AccountReservationsRequest & { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountReservationsResponse200>> {
	const url = "/account/reservations";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	const bodyData = {
		status: data.status,
		filters: data.filters,
	};
	return getdiksInstance().post<T.AccountReservationsResponse200>(url, {
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
export async function CategoryAlternatives(
	data: T.CategoryAlternativesRequest & { categoryId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryAlternativesResponse200>> {
	const url = `/category/${data.categoryId}/alternatives`;
	const bodyData = {
		locationPickup: data.locationPickup,
		locationReturn: data.locationReturn,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
		expectedKilometers: data.expectedKilometers,
	};
	return getdiksInstance().post<T.CategoryAlternativesResponse200>(url, {
		data: bodyData,
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
export async function CategoryAvailability(
	data: T.CategoryAvailabilityRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryAvailabilityResponse200>> {
	const url = "/category/availability";
	const bodyData = {
		locale: data.locale,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
		mainCategoryId: data.mainCategoryId,
		locationId: data.locationId,
		filters: data.filters,
		sorting: data.sorting,
	};
	return getdiksInstance().post<T.CategoryAvailabilityResponse200>(url, {
		data: bodyData,
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
export async function CategoryCompare(
	data: T.CategoryCompareRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryCompareResponse200>> {
	const url = "/category/compare";
	const bodyData = {
		categoryIds: data.categoryIds,
		locationPickup: data.locationPickup,
		locationReturn: data.locationReturn,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
		expectedKilometers: data.expectedKilometers,
	};
	return getdiksInstance().post<T.CategoryCompareResponse200>(url, {
		data: bodyData,
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
export async function CategoryFavorite(
	data: { categoryId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryFavoriteResponse200>> {
	const url = `/category/${data.categoryId}/favorite`;
	return getdiksInstance().post<T.CategoryFavoriteResponse200>(url, {
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
export async function CategoryImage(
	data: { categoryId: number; fileId: string; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryImageResponse200>> {
	const url = `/category/${data.categoryId}/image/${data.fileId}`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.CategoryImageResponse200>(url, {
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
export async function CategoryInsuranceProfile(
	data: T.CategoryInsuranceProfileRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryInsuranceProfileResponse200>> {
	const url = "/category/insuranceProfile";
	const bodyData = {
		locale: data.locale,
		categoryId: data.categoryId,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
	};
	return getdiksInstance().post<T.CategoryInsuranceProfileResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Returns a list of all categories with their id and name. For XML sitemap purposes.
 * @see CategoryListResponse200
 */
export async function CategoryList(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryListResponse200>> {
	const url = "/category/list";
	return getdiksInstance().get<T.CategoryListResponse200>(url, {
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
export async function CategoryMainImage(
	data: { categoryId: number; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryMainImageResponse200>> {
	const url = `/category/${data.categoryId}/main-image`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.CategoryMainImageResponse200>(url, {
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
export async function CategoryPriceCalculation(
	data: T.CategoryPriceCalculationRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategoryPriceCalculationResponse200>> {
	const url = "/category/priceCalculation";
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
	return getdiksInstance().post<T.CategoryPriceCalculationResponse200>(url, {
		data: bodyData,
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
export async function CategorySingle(
	data: { categoryId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CategorySingleResponse200>> {
	const url = `/category/${data.categoryId}`;
	return getdiksInstance().get<T.CategorySingleResponse200>(url, {
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
export async function MainCategoryImage(
	data: { mainCategoryId: number; fileId: string; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MainCategoryImageResponse200>> {
	const url = `/main-category/${data.mainCategoryId}/image/${data.fileId}`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.MainCategoryImageResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * @see MainCategoryListResponse200
 */
export async function MainCategoryList(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MainCategoryListResponse200>> {
	const url = "/main-category";
	return getdiksInstance().get<T.MainCategoryListResponse200>(url, {
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
export async function MainCategoryMainImage(
	data: { mainCategoryId: number; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MainCategoryMainImageResponse200>> {
	const url = `/main-category/${data.mainCategoryId}/main-image`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.MainCategoryMainImageResponse200>(url, {
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
export async function AddonImage(
	data: { addonId: number; fileId: string; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AddonImageResponse200>> {
	const url = `/addon/${data.addonId}/image/${data.fileId}`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.AddonImageResponse200>(url, {
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
export async function AddonMainImage(
	data: { addonId: number; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AddonMainImageResponse200>> {
	const url = `/addon/${data.addonId}/main-image`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.AddonMainImageResponse200>(url, {
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
export async function SharedVehicleAddDamage(
	data: T.SharedVehicleAddDamageRequest & { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleAddDamageResponse200>> {
	const url = `/shared-vehicle/${data.id}/add-damage`;
	const formData = new FormData();
	formData.append("image", data.image);
	formData.append("description", String(data.description));
	if (data.reservationId != null) {
		formData.append("reservationId", String(data.reservationId));
	}
	formData.append("x", String(data.x));
	formData.append("y", String(data.y));
	return getdiksInstance().post<T.SharedVehicleAddDamageResponse200>(url, {
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
export async function SharedVehicleAdminList(
	data: { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleAdminListResponse200>> {
	const url = "/shared-vehicle/admin/list";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	return getdiksInstance().post<T.SharedVehicleAdminListResponse200>(url, {
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
export async function SharedVehicleAdminSingle(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleAdminSingleResponse200>> {
	const url = `/shared-vehicle/admin/${data.id}`;
	return getdiksInstance().get<T.SharedVehicleAdminSingleResponse200>(url, {
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
export async function SharedVehicleAdminUpdate(
	data: T.SharedVehicleAdminUpdateRequest & { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleAdminUpdateResponse200>> {
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
	return getdiksInstance().put<T.SharedVehicleAdminUpdateResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleAvailability(
	data: T.SharedVehicleAvailabilityRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleAvailabilityResponse200>> {
	const url = "/shared-vehicle/availability";
	const bodyData = {
		locale: data.locale,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
		mainCategoryId: data.mainCategoryId,
		filters: data.filters,
	};
	return getdiksInstance().post<T.SharedVehicleAvailabilityResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleAvailabilityCalendar(
	data: { id: number; startDate: string; endDate: string; reservationId?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleAvailabilityCalendarResponse200>> {
	const url = `/shared-vehicle/${data.id}/calendar`;
	const queryData = {
		startDate: data.startDate,
		endDate: data.endDate,
		reservationId: data.reservationId,
	};
	return getdiksInstance().get<T.SharedVehicleAvailabilityCalendarResponse200>(url, {
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
export async function SharedVehicleCreateBooking(
	data: T.SharedVehicleCreateBookingRequest & { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleCreateBookingResponse200>> {
	const url = `/shared-vehicle/${data.id}/create-booking`;
	const bodyData = {
		locale: data.locale,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
		referenceText: data.referenceText,
		discountCode: data.discountCode,
		expectedKilometers: data.expectedKilometers,
	};
	return getdiksInstance().post<T.SharedVehicleCreateBookingResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleDamageImage(
	data: { id: number; fileId: string; accessToken: string; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleDamageImageResponse200>> {
	const url = `/shared-vehicle/${data.id}/damage-image/${data.fileId}`;
	const queryData = {
		accessToken: data.accessToken,
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.SharedVehicleDamageImageResponse200>(url, {
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
export async function SharedVehicleDamageTemplate(
	data: { id: number; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleDamageTemplateResponse200>> {
	const url = `/shared-vehicle/${data.id}/damage-template`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.SharedVehicleDamageTemplateResponse200>(url, {
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
export async function SharedVehicleFavorite(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleFavoriteResponse200>> {
	const url = `/shared-vehicle/${data.id}/favorite`;
	return getdiksInstance().post<T.SharedVehicleFavoriteResponse200>(url, {
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
export async function SharedVehicleImage(
	data: { id: number; fileId: string; q?: number; w: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleImageResponse200>> {
	const url = `/shared-vehicle/${data.id}/image/${data.fileId}`;
	const queryData = {
		q: data.q,
		w: data.w,
	};
	return getdiksInstance().get<T.SharedVehicleImageResponse200>(url, {
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
export async function SharedVehicleListDamages(
	data: T.SharedVehicleListDamagesRequest & { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleListDamagesResponse200>> {
	const url = `/shared-vehicle/${data.id}/damages`;
	const bodyData = {
		locale: data.locale,
	};
	return getdiksInstance().post<T.SharedVehicleListDamagesResponse200>(url, {
		data: bodyData,
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
export async function SharedVehiclePricing(
	data: T.SharedVehiclePricingRequest & { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehiclePricingResponse200>> {
	const url = `/shared-vehicle/${data.id}/pricing`;
	const bodyData = {
		locale: data.locale,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
		discountCode: data.discountCode,
		expectedKilometers: data.expectedKilometers,
	};
	return getdiksInstance().post<T.SharedVehiclePricingResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleSingle(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleSingleResponse200>> {
	const url = `/shared-vehicle/${data.id}`;
	return getdiksInstance().get<T.SharedVehicleSingleResponse200>(url, {
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
export async function SharedVehicleStateOfCharge(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleStateOfChargeResponse200>> {
	const url = `/shared-vehicle/${data.id}/state-of-charge`;
	return getdiksInstance().get<T.SharedVehicleStateOfChargeResponse200>(url, {
		headers,
	});
}

/**
	 * Generate a reset token for the provided email. Can be called many times. The
tokens expire in 24 hours.

Errors:

	 * @see AuthPasswordBasedForgotPasswordResponse200
	 */
export async function AuthPasswordBasedForgotPassword(
	data: T.AuthPasswordBasedForgotPasswordRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedForgotPasswordResponse200>> {
	const url = "/auth/password-based/forgot-password";
	const bodyData = {
		email: data.email,
	};
	return getdiksInstance().post<T.AuthPasswordBasedForgotPasswordResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * @see AuthPasswordBasedListEmailsResponse200
 */
export async function AuthPasswordBasedListEmails(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedListEmailsResponse200>> {
	const url = "/auth/password-based";
	return getdiksInstance().get<T.AuthPasswordBasedListEmailsResponse200>(url, {
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
export async function AuthPasswordBasedLogin(
	data: T.AuthPasswordBasedLoginRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedLoginResponse200>> {
	const url = "/auth/password-based/login";
	const bodyData = {
		email: data.email,
		password: data.password,
		device: data.device,
	};
	return getdiksInstance().post<T.AuthPasswordBasedLoginResponse200>(url, {
		data: bodyData,
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
export async function AuthPasswordBasedResetPassword(
	data: T.AuthPasswordBasedResetPasswordRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedResetPasswordResponse200>> {
	const url = "/auth/password-based/reset-password";
	const bodyData = {
		resetToken: data.resetToken,
		password: data.password,
	};
	return getdiksInstance().post<T.AuthPasswordBasedResetPasswordResponse200>(url, {
		data: bodyData,
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
export async function AuthPasswordBasedUpdateEmail(
	data: T.AuthPasswordBasedUpdateEmailRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedUpdateEmailResponse200>> {
	const url = "/auth/password-based/update-email";
	const bodyData = {
		email: data.email,
	};
	return getdiksInstance().post<T.AuthPasswordBasedUpdateEmailResponse200>(url, {
		data: bodyData,
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
export async function AuthPasswordBasedUpdatePassword(
	data: T.AuthPasswordBasedUpdatePasswordRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedUpdatePasswordResponse200>> {
	const url = "/auth/password-based/update-password";
	const bodyData = {
		password: data.password,
	};
	return getdiksInstance().post<T.AuthPasswordBasedUpdatePasswordResponse200>(url, {
		data: bodyData,
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
export async function AuthPasswordBasedVerifyEmail(
	data: T.AuthPasswordBasedVerifyEmailRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedVerifyEmailResponse200>> {
	const url = "/auth/password-based/verify-email";
	const bodyData = {
		verifyToken: data.verifyToken,
		device: data.device,
	};
	return getdiksInstance().post<T.AuthPasswordBasedVerifyEmailResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Call this when `ctx.session.type === "checkTwoStep"` and `ctx.session.twoStepType === "passwordBasedOtp"`. Advances the session to
`type: user` on successful verification.
	 * @see AuthPasswordBasedVerifyOtpResponse200
	 */
export async function AuthPasswordBasedVerifyOtp(
	data: T.AuthPasswordBasedVerifyOtpRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPasswordBasedVerifyOtpResponse200>> {
	const url = "/auth/password-based/verify-otp";
	const bodyData = {
		otp: data.otp,
	};
	return getdiksInstance().post<T.AuthPasswordBasedVerifyOtpResponse200>(url, {
		data: bodyData,
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
export async function ReservationUpdate(
	data: T.ReservationUpdateRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ReservationUpdateResponse200>> {
	const url = `/reservation/${data.reservationId}`;
	const bodyData = {
		locationPickup: data.locationPickup,
		locationReturn: data.locationReturn,
		expectedKilometers: data.expectedKilometers,
		insuranceProfileOptionId: data.insuranceProfileOptionId,
		abroadOptionId: data.abroadOptionId,
		selectedAddons: data.selectedAddons,
	};
	return getdiksInstance().put<T.ReservationUpdateResponse200>(url, {
		data: bodyData,
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
export async function ReservationCancel(
	data: { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ReservationCancelResponse200>> {
	const url = `/reservation/${data.reservationId}`;
	return getdiksInstance().delete<T.ReservationCancelResponse200>(url, {
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
export async function ReservationDownloadInvoice(
	data: { reservationId: number; invoiceId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ReservationDownloadInvoiceResponse200>> {
	const url = `/reservation/${data.reservationId}/invoice/${data.invoiceId}`;
	return getdiksInstance().get<T.ReservationDownloadInvoiceResponse200>(url, {
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
export async function ReservationFetchByIds(
	data: T.ReservationFetchByIdsRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ReservationFetchByIdsResponse200>> {
	const url = "/reservation/reservations";
	const bodyData = {
		reservationIds: data.reservationIds,
	};
	return getdiksInstance().post<T.ReservationFetchByIdsResponse200>(url, {
		data: bodyData,
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
export async function ReservationRepeat(
	data: T.ReservationRepeatRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ReservationRepeatResponse200>> {
	const url = `/reservation/${data.reservationId}/repeat`;
	const bodyData = {
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
	};
	return getdiksInstance().post<T.ReservationRepeatResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * @see LocationListResponse200
 */
export async function LocationList(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationListResponse200>> {
	const url = "/location";
	return getdiksInstance().get<T.LocationListResponse200>(url, {
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
export async function LocationReorder(
	data: T.LocationReorderRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationReorderResponse200>> {
	const url = "/location/reorder";
	const bodyData = {
		locationIds: data.locationIds,
	};
	return getdiksInstance().post<T.LocationReorderResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * @param params.id
 * @see LocationSingleResponse200
 */
export async function LocationSingle(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationSingleResponse200>> {
	const url = `/location/${data.id}`;
	return getdiksInstance().get<T.LocationSingleResponse200>(url, {
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
export async function AdminDeleteUser(
	data: { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AdminDeleteUserResponse200>> {
	const url = `/admin/${data.user}/delete`;
	return getdiksInstance().post<T.AdminDeleteUserResponse200>(url, {
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
export async function AdminInviteUser(
	data: T.AdminInviteUserRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AdminInviteUserResponse200>> {
	const url = "/admin/invite-user";
	const bodyData = {
		email: data.email,
		name: data.name,
		roles: data.roles,
	};
	return getdiksInstance().post<T.AdminInviteUserResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * List all admin users.
 * @see AdminListUsersResponse200
 */
export async function AdminListUsers(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AdminListUsersResponse200>> {
	const url = "/admin/users";
	return getdiksInstance().get<T.AdminListUsersResponse200>(url, {
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
export async function AppRedirectAccountDriversLicenseVerificationComplete(
	data: { dossierId: string; processId: string; status: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AppRedirectAccountDriversLicenseVerificationCompleteResponse200>> {
	const url = "/app-redirect/account/drivers-license-verification-complete";
	const queryData = {
		dossierId: data.dossierId,
		processId: data.processId,
		status: data.status,
	};
	return getdiksInstance().get<T.AppRedirectAccountDriversLicenseVerificationCompleteResponse200>(url, {
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
export async function AuthGetUser(
	data: { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthGetUserResponse200>> {
	const url = `/auth/user/${data.user}`;
	return getdiksInstance().get<T.AuthGetUserResponse200>(url, {
		headers,
	});
}

/**
	 * 
    Stop an impersonating session. Requires that the current session belongs to the impersonator. Impersonate sessions can only be started from the platform backends.
    
    Callers should bust all local caches and redirect the user to the correct location.
    
	 * @see AuthImpersonateStopSessionResponse200
	 */
export async function AuthImpersonateStopSession(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthImpersonateStopSessionResponse200>> {
	const url = "/auth/impersonate-stop-session";
	return getdiksInstance().post<T.AuthImpersonateStopSessionResponse200>(url, {
		headers,
	});
}

/**
 * Destroy the current session.
 * @see AuthLogoutResponse200
 */
export async function AuthLogout(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthLogoutResponse200>> {
	const url = "/auth/logout";
	return getdiksInstance().post<T.AuthLogoutResponse200>(url, {
		headers,
	});
}

/**
	 * Get information about the current logged-in user. Throws a 401 if the user is 
not logged in. Returns both session and user information. When the user needs to
do two-step verification (via 'session.type === checkTwoStep'), the user object is not returned yet.
	 * @see AuthMeResponse200
	 */
export async function AuthMe(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthMeResponse200>> {
	const url = "/auth/me";
	return getdiksInstance().get<T.AuthMeResponse200>(url, {
		headers,
	});
}

/**
	 * Returns a new token pair based on the provided refresh token.

Errors:
- Inherits errors from [`sessionStoreRefreshTokens`](https://compasjs.com/features/session-handling.html#sessionstorerefreshtokens)
	 * @see AuthRefreshTokensResponse200
	 */
export async function AuthRefreshTokens(
	data: T.AuthRefreshTokensRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthRefreshTokensResponse200>> {
	const url = "/auth/refresh-tokens";
	const bodyData = {
		refreshToken: data.refreshToken,
	};
	return getdiksInstance().post<T.AuthRefreshTokensResponse200>(url, {
		data: bodyData,
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
export async function AuthSetUserActive(
	data: T.AuthSetUserActiveRequest & { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthSetUserActiveResponse200>> {
	const url = `/auth/user/${data.user}/set-active`;
	const bodyData = {
		active: data.active,
	};
	return getdiksInstance().post<T.AuthSetUserActiveResponse200>(url, {
		data: bodyData,
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
export async function AuthUpdateUser(
	data: T.AuthUpdateUserRequest & { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthUpdateUserResponse200>> {
	const url = `/auth/user/${data.user}/update`;
	const bodyData = {
		name: data.name,
	};
	return getdiksInstance().put<T.AuthUpdateUserResponse200>(url, {
		data: bodyData,
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
export async function AuthUserList(
	data: T.AuthUserListRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthUserListResponse200>> {
	const url = "/auth/list-users";
	const bodyData = {
		search: data.search,
		filters: data.filters,
	};
	return getdiksInstance().post<T.AuthUserListResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Create a new role. This role is 'tenant' specific.
 * @see AuthPermissionCreateRoleResponse200
 */
export async function AuthPermissionCreateRole(
	data: T.AuthPermissionCreateRoleRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionCreateRoleResponse200>> {
	const url = "/auth/permission/role";
	const bodyData = {
		identifier: data.identifier,
	};
	return getdiksInstance().post<T.AuthPermissionCreateRoleResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Get the current known backend permissions. Can be used in the Frontend to match
known permissions and disable selection of unknowns.
	 * @see AuthPermissionPermissionListResponse200
	 */
export async function AuthPermissionPermissionList(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionPermissionListResponse200>> {
	const url = "/auth/permission/permission/list";
	return getdiksInstance().get<T.AuthPermissionPermissionListResponse200>(url, {
		headers,
	});
}

/**
 * Remove a role. Only tenant specific roles can be removed.
 * @param params.role
 * @see AuthPermissionRemoveRoleResponse200
 */
export async function AuthPermissionRemoveRole(
	data: { role: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionRemoveRoleResponse200>> {
	const url = `/auth/permission/role/${data.role}`;
	return getdiksInstance().delete<T.AuthPermissionRemoveRoleResponse200>(url, {
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
export async function AuthPermissionRoleAddPermissions(
	data: T.AuthPermissionRoleAddPermissionsRequest & { role: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionRoleAddPermissionsResponse200>> {
	const url = `/auth/permission/role/${data.role}/add-permissions`;
	const bodyData = {
		permissions: data.permissions,
	};
	return getdiksInstance().post<T.AuthPermissionRoleAddPermissionsResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Get the roles with permissions across the system.
 * @see AuthPermissionRoleListResponse200
 */
export async function AuthPermissionRoleList(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionRoleListResponse200>> {
	const url = "/auth/permission/role/list";
	return getdiksInstance().get<T.AuthPermissionRoleListResponse200>(url, {
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
export async function AuthPermissionRoleRemovePermissions(
	data: T.AuthPermissionRoleRemovePermissionsRequest & { role: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionRoleRemovePermissionsResponse200>> {
	const url = `/auth/permission/role/${data.role}/remove-permissions`;
	const bodyData = {
		permissions: data.permissions,
	};
	return getdiksInstance().post<T.AuthPermissionRoleRemovePermissionsResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Get the roles and permissions for the current logged-in user.
 * @see AuthPermissionSummaryResponse200
 */
export async function AuthPermissionSummary(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionSummaryResponse200>> {
	const url = "/auth/permission/summary";
	return getdiksInstance().get<T.AuthPermissionSummaryResponse200>(url, {
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
export async function AuthPermissionUserAssignRole(
	data: T.AuthPermissionUserAssignRoleRequest & { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionUserAssignRoleResponse200>> {
	const url = `/auth/permission/user/${data.user}/assign-role`;
	const bodyData = {
		role: data.role,
	};
	return getdiksInstance().post<T.AuthPermissionUserAssignRoleResponse200>(url, {
		data: bodyData,
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
export async function AuthPermissionUserRemoveRole(
	data: T.AuthPermissionUserRemoveRoleRequest & { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionUserRemoveRoleResponse200>> {
	const url = `/auth/permission/user/${data.user}/remove-role`;
	const bodyData = {
		role: data.role,
	};
	return getdiksInstance().post<T.AuthPermissionUserRemoveRoleResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Get the `apiAuthPermissionSummary` for the provided user.
 * @param params.user
 * @see AuthPermissionUserSummaryResponse200
 */
export async function AuthPermissionUserSummary(
	data: { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthPermissionUserSummaryResponse200>> {
	const url = `/auth/permission/user/${data.user}/summary`;
	return getdiksInstance().get<T.AuthPermissionUserSummaryResponse200>(url, {
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
export async function AuthAnonymousBasedLogin(
	data: T.AuthAnonymousBasedLoginRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthAnonymousBasedLoginResponse200>> {
	const url = "/auth/anonymous-based/login";
	const bodyData = {
		token: data.token,
		device: data.device,
	};
	return getdiksInstance().post<T.AuthAnonymousBasedLoginResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
    List all sessions for the currently logged-in user.
    
	 * @see SessionListResponse200
	 */
export async function SessionList(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SessionListResponse200>> {
	const url = "/session/list";
	return getdiksInstance().get<T.SessionListResponse200>(url, {
		headers,
	});
}

/**
	 * 
      Remove a specific session.
      
	 * @see SessionLogoutResponse200
	 */
export async function SessionLogout(
	data: T.SessionLogoutRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SessionLogoutResponse200>> {
	const url = "/session/logout";
	const bodyData = {
		sessionId: data.sessionId,
	};
	return getdiksInstance().post<T.SessionLogoutResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
      Set the notification token for the current session.
      
	 * @see SessionSetDeviceNotificationTokenResponse200
	 */
export async function SessionSetDeviceNotificationToken(
	data: T.SessionSetDeviceNotificationTokenRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SessionSetDeviceNotificationTokenResponse200>> {
	const url = "/session/set-notification-token";
	const bodyData = {
		notificationToken: data.notificationToken,
		webPushInformation: data.webPushInformation,
	};
	return getdiksInstance().post<T.SessionSetDeviceNotificationTokenResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Check if TOTP is set up and if the setup is verified.
 * @see AuthTotpProviderInfoResponse200
 */
export async function AuthTotpProviderInfo(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthTotpProviderInfoResponse200>> {
	const url = "/auth/totp-provider";
	return getdiksInstance().get<T.AuthTotpProviderInfoResponse200>(url, {
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
export async function AuthTotpProviderRemove(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthTotpProviderRemoveResponse200>> {
	const url = "/auth/totp-provider/remove";
	return getdiksInstance().delete<T.AuthTotpProviderRemoveResponse200>(url, {
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
export async function AuthTotpProviderRemoveForUser(
	data: { user: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthTotpProviderRemoveForUserResponse200>> {
	const url = `/auth/totp-provider/user/${data.user}/remove`;
	return getdiksInstance().delete<T.AuthTotpProviderRemoveForUserResponse200>(url, {
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
export async function AuthTotpProviderSetup(
	data: T.AuthTotpProviderSetupRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthTotpProviderSetupResponse200>> {
	const url = "/auth/totp-provider/setup";
	const bodyData = {};
	return getdiksInstance().post<T.AuthTotpProviderSetupResponse200>(url, {
		data: bodyData,
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
export async function AuthTotpProviderSetupVerify(
	data: T.AuthTotpProviderSetupVerifyRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthTotpProviderSetupVerifyResponse200>> {
	const url = "/auth/totp-provider/setup/verify";
	const bodyData = {
		totp: data.totp,
	};
	return getdiksInstance().post<T.AuthTotpProviderSetupVerifyResponse200>(url, {
		data: bodyData,
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
export async function AuthTotpProviderVerify(
	data: T.AuthTotpProviderVerifyRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AuthTotpProviderVerifyResponse200>> {
	const url = "/auth/totp-provider/verify";
	const bodyData = {
		totp: data.totp,
	};
	return getdiksInstance().post<T.AuthTotpProviderVerifyResponse200>(url, {
		data: bodyData,
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
export async function BusinessAddressPrefill(
	data: T.BusinessAddressPrefillRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BusinessAddressPrefillResponse200>> {
	const url = "/business/address-prefill";
	const bodyData = {
		postalCode: data.postalCode,
		houseNumber: data.houseNumber,
		houseNumberAddition: data.houseNumberAddition,
	};
	return getdiksInstance().post<T.BusinessAddressPrefillResponse200>(url, {
		data: bodyData,
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
export async function ClientAdminList(
	data: { q: string; offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ClientAdminListResponse200>> {
	const url = "/client/admin/list";
	const queryData = {
		q: data.q,
		offset: data.offset,
		limit: data.limit,
	};
	return getdiksInstance().post<T.ClientAdminListResponse200>(url, {
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
export async function ClientAdminProplannerAccount(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ClientAdminProplannerAccountResponse200>> {
	const url = `/client/admin/proplannerAccount/${data.id}`;
	return getdiksInstance().get<T.ClientAdminProplannerAccountResponse200>(url, {
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
export async function ClientAdminRemove(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ClientAdminRemoveResponse200>> {
	const url = `/client/admin/${data.id}/remove`;
	return getdiksInstance().delete<T.ClientAdminRemoveResponse200>(url, {
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
export async function ClientAdminUpdate(
	data: T.ClientAdminUpdateRequest & { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ClientAdminUpdateResponse200>> {
	const url = `/client/admin/update/${data.id}`;
	const bodyData = {
		proplannerId: data.proplannerId,
		email: data.email,
		status: data.status,
	};
	return getdiksInstance().patch<T.ClientAdminUpdateResponse200>(url, {
		data: bodyData,
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
export async function ConfirmedOrderList(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ConfirmedOrderListResponse200>> {
	const url = `/confirmed-order/${data.id}`;
	return getdiksInstance().get<T.ConfirmedOrderListResponse200>(url, {
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
export async function ConfirmedStorageOrderSingle(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ConfirmedStorageOrderSingleResponse200>> {
	const url = `/confirmed-storage-order/${data.id}`;
	return getdiksInstance().get<T.ConfirmedStorageOrderSingleResponse200>(url, {
		headers,
	});
}

/**
 * @param params.storageLocationId
 * @param params.contractId
 * @see StorageContractDownloadContractResponse200
 */
export async function StorageContractDownloadContract(
	data: { storageLocationId: string; contractId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageContractDownloadContractResponse200>> {
	const url = `/storage-contract/contract/${data.storageLocationId}/${data.contractId}`;
	return getdiksInstance().get<T.StorageContractDownloadContractResponse200>(url, {
		headers,
	});
}

/**
 * @param params.storageLocationId
 * @param params.invoiceNumber
 * @see StorageContractDownloadInvoiceResponse200
 */
export async function StorageContractDownloadInvoice(
	data: { storageLocationId: string; invoiceNumber: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageContractDownloadInvoiceResponse200>> {
	const url = `/storage-contract/invoice/${data.storageLocationId}/${data.invoiceNumber}`;
	return getdiksInstance().get<T.StorageContractDownloadInvoiceResponse200>(url, {
		headers,
	});
}

/**
 * Fetch all storage invoices
 * @param query.offset - Must be a multiple of {{limit}}
 * @param query.limit
 * @see StorageContractInvoicesResponse200
 */
export async function StorageContractInvoices(
	data: { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageContractInvoicesResponse200>> {
	const url = "/storage-contract/invoices";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	return getdiksInstance().get<T.StorageContractInvoicesResponse200>(url, {
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
export async function StorageContractOverview(
	data: { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageContractOverviewResponse200>> {
	const url = "/storage-contract/overview";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	return getdiksInstance().get<T.StorageContractOverviewResponse200>(url, {
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
export async function StorageContractTerminate(
	data: T.StorageContractTerminateRequest & { storageLocationId: string; contractId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageContractTerminateResponse200>> {
	const url = `/storage-contract/contract/${data.storageLocationId}/${data.contractId}/terminate`;
	const bodyData = {
		terminationDate: data.terminationDate,
		terminationReasonId: data.terminationReasonId,
	};
	return getdiksInstance().post<T.StorageContractTerminateResponse200>(url, {
		data: bodyData,
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
export async function StorageOrderCheckout(
	data: T.StorageOrderCheckoutRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageOrderCheckoutResponse200>> {
	const url = "/storage-order/checkout";
	const bodyData = {
		locale: data.locale,
		password: data.password,
		iban: data.iban,
		allowDirectDebit: data.allowDirectDebit,
		paymentMethod: data.paymentMethod,
	};
	return getdiksInstance().post<T.StorageOrderCheckoutResponse200>(url, {
		data: bodyData,
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
export async function StorageOrderOverview(
	data: { locale?: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageOrderOverviewResponse200>> {
	const url = "/storage-order";
	const queryData = {
		locale: data.locale,
	};
	return getdiksInstance().get<T.StorageOrderOverviewResponse200>(url, {
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
export async function StorageOrderConfigure(
	data: T.StorageOrderConfigureRequest & { locale?: any },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageOrderConfigureResponse200>> {
	const url = "/storage-order";
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
	return getdiksInstance().post<T.StorageOrderConfigureResponse200>(url, {
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
export async function StorageOrderDiscountApply(
	data: T.StorageOrderDiscountApplyRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageOrderDiscountApplyResponse200>> {
	const url = "/storage-order/discount";
	const bodyData = {
		discountCode: data.discountCode,
	};
	return getdiksInstance().post<T.StorageOrderDiscountApplyResponse200>(url, {
		data: bodyData,
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
export async function StorageOrderDiscountRemove(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageOrderDiscountRemoveResponse200>> {
	const url = "/storage-order/discount";
	return getdiksInstance().delete<T.StorageOrderDiscountRemoveResponse200>(url, {
		headers,
	});
}

/**
 * @see ContinentalCreateSessionResponse200
 */
export async function ContinentalCreateSession(
	data: T.ContinentalCreateSessionRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContinentalCreateSessionResponse200>> {
	const url = "/continental/create-session";
	const bodyData = {
		token: data.token,
		deviceName: data.deviceName,
	};
	return getdiksInstance().post<T.ContinentalCreateSessionResponse200>(url, {
		data: bodyData,
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
export async function ContinentalCreateVirtualKey(
	data: T.ContinentalCreateVirtualKeyRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContinentalCreateVirtualKeyResponse200>> {
	const url = "/continental/create-virtual-key";
	const bodyData = {
		bookingId: data.bookingId,
		clientDeviceId: data.clientDeviceId,
	};
	return getdiksInstance().post<T.ContinentalCreateVirtualKeyResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * @param params.virtualKeyId
 * @see ContinentalRevokeVirtualKeyResponse200
 */
export async function ContinentalRevokeVirtualKey(
	data: { virtualKeyId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContinentalRevokeVirtualKeyResponse200>> {
	const url = `/continental/${data.virtualKeyId}/revoke`;
	return getdiksInstance().delete<T.ContinentalRevokeVirtualKeyResponse200>(url, {
		headers,
	});
}

/**
 * @param params.virtualKeyId
 * @see ContinentalUpdateVirtualKeyResponse200
 */
export async function ContinentalUpdateVirtualKey(
	data: T.ContinentalUpdateVirtualKeyRequest & { virtualKeyId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContinentalUpdateVirtualKeyResponse200>> {
	const url = `/continental/${data.virtualKeyId}/update`;
	const bodyData = {
		fromDate: data.fromDate,
		toDate: data.toDate,
	};
	return getdiksInstance().put<T.ContinentalUpdateVirtualKeyResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Creates an item
 * @see DivergentOpeningHoursCreateResponse200
 */
export async function DivergentOpeningHoursCreate(
	data: T.DivergentOpeningHoursCreateRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DivergentOpeningHoursCreateResponse200>> {
	const url = "/divergent-opening-hours";
	const bodyData = {
		description: data.description,
		from: data.from,
		to: data.to,
		date: data.date,
		isClosedForTheWholeDay: data.isClosedForTheWholeDay,
		locations: data.locations,
	};
	return getdiksInstance().post<T.DivergentOpeningHoursCreateResponse200>(url, {
		data: bodyData,
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
export async function DivergentOpeningHoursSingle(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DivergentOpeningHoursSingleResponse200>> {
	const url = `/divergent-opening-hours/${data.id}`;
	return getdiksInstance().get<T.DivergentOpeningHoursSingleResponse200>(url, {
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
export async function DivergentOpeningHoursUpdate(
	data: T.DivergentOpeningHoursUpdateRequest & { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DivergentOpeningHoursUpdateResponse200>> {
	const url = `/divergent-opening-hours/${data.id}`;
	const bodyData = {
		description: data.description,
		from: data.from,
		to: data.to,
		date: data.date,
		isClosedForTheWholeDay: data.isClosedForTheWholeDay,
		locations: data.locations,
	};
	return getdiksInstance().put<T.DivergentOpeningHoursUpdateResponse200>(url, {
		data: bodyData,
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
export async function DivergentOpeningHoursDelete(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DivergentOpeningHoursDeleteResponse200>> {
	const url = `/divergent-opening-hours/${data.id}`;
	return getdiksInstance().delete<T.DivergentOpeningHoursDeleteResponse200>(url, {
		headers,
	});
}

/**
 * Get all divergent opening hours.
 * @param query.offset
 * @param query.limit
 * @see DivergentOpeningHoursListResponse200
 */
export async function DivergentOpeningHoursList(
	data: { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DivergentOpeningHoursListResponse200>> {
	const url = "/divergent-opening-hours/list";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	return getdiksInstance().get<T.DivergentOpeningHoursListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get the current available feature flags. This may use the current tenant and user to calculate the values.
 * @see FeatureFlagCurrentResponse200
 */
export async function FeatureFlagCurrent(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.FeatureFlagCurrentResponse200>> {
	const url = "/feature-flag/current";
	return getdiksInstance().get<T.FeatureFlagCurrentResponse200>(url, {
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
export async function JobStartProplannerMirror(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.JobStartProplannerMirrorResponse200>> {
	const url = "/job/admin/start/proplannerMirrorCategory";
	return getdiksInstance().post<T.JobStartProplannerMirrorResponse200>(url, {
		headers,
	});
}

/**
 * Sends a magic link via Slack. Locally it directly returns the url.
 * @see ManagementRequestMagicLinkResponse200
 */
export async function ManagementRequestMagicLink(
	data: T.ManagementRequestMagicLinkRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ManagementRequestMagicLinkResponse200>> {
	const url = "/_lightbase/management/request-magic-link";
	const bodyData = {
		slackUserId: data.slackUserId,
	};
	return getdiksInstance().post<T.ManagementRequestMagicLinkResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Generated list route for 'featureFlag'.
 * @param query.offset
 * @param query.limit
 * @see ManagementFeatureFlagListResponse200
 */
export async function ManagementFeatureFlagList(
	data: T.ManagementFeatureFlagListRequest & { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ManagementFeatureFlagListResponse200>> {
	const url = "/_lightbase/management/feature-flag/list";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	const bodyData = {
		where: data.where,
		orderBy: data.orderBy,
		orderBySpec: data.orderBySpec,
	};
	return getdiksInstance().post<T.ManagementFeatureFlagListResponse200>(url, {
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
export async function ManagementFeatureFlagSingle(
	data: { featureFlagId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ManagementFeatureFlagSingleResponse200>> {
	const url = `/_lightbase/management/feature-flag/${data.featureFlagId}/single`;
	return getdiksInstance().get<T.ManagementFeatureFlagSingleResponse200>(url, {
		headers,
	});
}

/**
 * Generated update route for 'featureFlag'.
 * @param params.featureFlagId - The primary key of the 'featureFlag' model.
 * @see ManagementFeatureFlagUpdateResponse200
 */
export async function ManagementFeatureFlagUpdate(
	data: T.ManagementFeatureFlagUpdateRequest & { featureFlagId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ManagementFeatureFlagUpdateResponse200>> {
	const url = `/_lightbase/management/feature-flag/${data.featureFlagId}/update`;
	const bodyData = {
		globalValue: data.globalValue,
		description: data.description,
		tenantValues: data.tenantValues,
		userValues: data.userValues,
	};
	return getdiksInstance().put<T.ManagementFeatureFlagUpdateResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Get information about the current tenant.
 * @see MultitenantCurrentResponse200
 */
export async function MultitenantCurrent(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MultitenantCurrentResponse200>> {
	const url = "/multitenant/current";
	return getdiksInstance().get<T.MultitenantCurrentResponse200>(url, {
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
export async function OnfidoStartDriversLicenseVerification(
	data: T.OnfidoStartDriversLicenseVerificationRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OnfidoStartDriversLicenseVerificationResponse200>> {
	const url = "/onfido/start-drivers-license-verification";
	const bodyData = {};
	return getdiksInstance().post<T.OnfidoStartDriversLicenseVerificationResponse200>(url, {
		data: bodyData,
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
export async function OnfidoWebhook(
	data: T.OnfidoWebhookRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OnfidoWebhookResponse200>> {
	const url = "/onfido/webhook";
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
	return getdiksInstance().post<T.OnfidoWebhookResponse200>(url, {
		data: bodyData,
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
export async function OrderAdd(
	data: T.OrderAddRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderAddResponse200>> {
	const url = "/order/line";
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
	return getdiksInstance().post<T.OrderAddResponse200>(url, {
		data: bodyData,
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
export async function OrderDiscountApply(
	data: T.OrderDiscountApplyRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderDiscountApplyResponse200>> {
	const url = "/order/discount";
	const bodyData = {
		discountCode: data.discountCode,
	};
	return getdiksInstance().post<T.OrderDiscountApplyResponse200>(url, {
		data: bodyData,
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
export async function OrderDiscountRemove(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderDiscountRemoveResponse200>> {
	const url = "/order/discount";
	return getdiksInstance().delete<T.OrderDiscountRemoveResponse200>(url, {
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
export async function OrderOverview(
	data: T.OrderOverviewRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderOverviewResponse200>> {
	const url = "/order";
	const bodyData = {
		locale: data.locale,
	};
	return getdiksInstance().post<T.OrderOverviewResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * Very cheap call to get order item count (amount of lines)
 * @see OrderOverviewCountResponse200
 */
export async function OrderOverviewCount(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderOverviewCountResponse200>> {
	const url = "/order/overview/count";
	return getdiksInstance().get<T.OrderOverviewCountResponse200>(url, {
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
export async function OrderSingle(
	data: { lineId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderSingleResponse200>> {
	const url = `/order/line/${data.lineId}`;
	return getdiksInstance().get<T.OrderSingleResponse200>(url, {
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
export async function OrderUpdate(
	data: T.OrderUpdateRequest & { lineId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderUpdateResponse200>> {
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
	return getdiksInstance().put<T.OrderUpdateResponse200>(url, {
		data: bodyData,
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
export async function OrderRemove(
	data: { lineId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderRemoveResponse200>> {
	const url = `/order/line/${data.lineId}`;
	return getdiksInstance().delete<T.OrderRemoveResponse200>(url, {
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
export async function OrderCheckoutFlowCheckout(
	data: T.OrderCheckoutFlowCheckoutRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderCheckoutFlowCheckoutResponse200>> {
	const url = "/order-checkout/checkout/flow/checkout";
	const bodyData = {
		locale: data.locale,
		paymentMethod: data.paymentMethod,
		password: data.password,
	};
	return getdiksInstance().post<T.OrderCheckoutFlowCheckoutResponse200>(url, {
		data: bodyData,
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
export async function OrderCheckoutFlowInfo(
	data: T.OrderCheckoutFlowInfoRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderCheckoutFlowInfoResponse200>> {
	const url = "/order-checkout/checkout/flow/info";
	const bodyData = {
		locale: data.locale,
	};
	return getdiksInstance().post<T.OrderCheckoutFlowInfoResponse200>(url, {
		data: bodyData,
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
export async function OrderCheckoutFlowPreferences(
	data: T.OrderCheckoutFlowPreferencesRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderCheckoutFlowPreferencesResponse200>> {
	const url = "/order-checkout/checkout/flow/preferences";
	const bodyData = {
		preferences: data.preferences,
		accountType: data.accountType,
		email: data.email,
		birthDate: data.birthDate,
	};
	return getdiksInstance().put<T.OrderCheckoutFlowPreferencesResponse200>(url, {
		data: bodyData,
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
export async function OrderShareApply(
	data: T.OrderShareApplyRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderShareApplyResponse200>> {
	const url = "/order-share/apply";
	const bodyData = {
		shareId: data.shareId,
	};
	return getdiksInstance().post<T.OrderShareApplyResponse200>(url, {
		data: bodyData,
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
export async function OrderShareCreate(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.OrderShareCreateResponse200>> {
	const url = "/order-share/create";
	return getdiksInstance().post<T.OrderShareCreateResponse200>(url, {
		headers,
	});
}

/**
 * Smart Pay incoming notification calls by Rabobank
 * @see RabobankWebhookOmnikassaResponse200
 */
export async function RabobankWebhookOmnikassa(
	data: T.RabobankWebhookOmnikassaRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.RabobankWebhookOmnikassaResponse200>> {
	const url = "/rabobank/webhook/omnikassa";
	const bodyData = {
		authentication: data.authentication,
		expiry: data.expiry,
		eventName: data.eventName,
		poiId: data.poiId,
		signature: data.signature,
	};
	return getdiksInstance().post<T.RabobankWebhookOmnikassaResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleReservationActive(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationActiveResponse200>> {
	const url = "/shared-vehicle-reservation/active";
	return getdiksInstance().get<T.SharedVehicleReservationActiveResponse200>(url, {
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
export async function SharedVehicleReservationAvailabilityExtendBooking(
	data: T.SharedVehicleReservationAvailabilityExtendBookingRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationAvailabilityExtendBookingResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}/availability-extend-booking`;
	const bodyData = {
		locale: data.locale,
		dateReturn: data.dateReturn,
	};
	return getdiksInstance().post<T.SharedVehicleReservationAvailabilityExtendBookingResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleReservationSingle(
	data: { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationSingleResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}`;
	return getdiksInstance().get<T.SharedVehicleReservationSingleResponse200>(url, {
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
export async function SharedVehicleReservationUpdate(
	data: T.SharedVehicleReservationUpdateRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationUpdateResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}`;
	const bodyData = {
		locale: data.locale,
		datePickup: data.datePickup,
		dateReturn: data.dateReturn,
	};
	return getdiksInstance().put<T.SharedVehicleReservationUpdateResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleReservationCancel(
	data: { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationCancelResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}`;
	return getdiksInstance().delete<T.SharedVehicleReservationCancelResponse200>(url, {
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
export async function SharedVehicleReservationExtendBooking(
	data: T.SharedVehicleReservationExtendBookingRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationExtendBookingResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}/extend-booking`;
	const bodyData = {
		locale: data.locale,
		dateReturn: data.dateReturn,
	};
	return getdiksInstance().post<T.SharedVehicleReservationExtendBookingResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleReservationGeneratePaymentUrl(
	data: T.SharedVehicleReservationGeneratePaymentUrlRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationGeneratePaymentUrlResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}/generate-payment-url`;
	const bodyData = {
		locale: data.locale,
	};
	return getdiksInstance().post<T.SharedVehicleReservationGeneratePaymentUrlResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleReservationGetFuelInstructions(
	data: { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationGetFuelInstructionsResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}/get-fuel-instructions`;
	return getdiksInstance().get<T.SharedVehicleReservationGetFuelInstructionsResponse200>(url, {
		headers,
	});
}

/**
 * Fetch all shared vehicle reservations for a given account
 * @param query.offset
 * @param query.limit
 * @see SharedVehicleReservationListResponse200
 */
export async function SharedVehicleReservationList(
	data: T.SharedVehicleReservationListRequest & { offset?: number; limit?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationListResponse200>> {
	const url = "/shared-vehicle-reservation/list";
	const queryData = {
		offset: data.offset,
		limit: data.limit,
	};
	const bodyData = {
		status: data.status,
		filters: data.filters,
	};
	return getdiksInstance().post<T.SharedVehicleReservationListResponse200>(url, {
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
export async function SharedVehicleReservationStartRide(
	data: T.SharedVehicleReservationStartRideRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationStartRideResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}/start-ride`;
	const bodyData = {
		internalTidiness: data.internalTidiness,
		externalTidiness: data.externalTidiness,
	};
	return getdiksInstance().post<T.SharedVehicleReservationStartRideResponse200>(url, {
		data: bodyData,
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
export async function SharedVehicleReservationStopRide(
	data: T.SharedVehicleReservationStopRideRequest & { reservationId: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SharedVehicleReservationStopRideResponse200>> {
	const url = `/shared-vehicle-reservation/${data.reservationId}/stop-ride`;
	const bodyData = {
		internalTidiness: data.internalTidiness,
		externalTidiness: data.externalTidiness,
	};
	return getdiksInstance().post<T.SharedVehicleReservationStopRideResponse200>(url, {
		data: bodyData,
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
export async function StorageAddons(
	data: { storageLocationId: string; excludeUnavailable?: boolean },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageAddonsResponse200>> {
	const url = `/storage/${data.storageLocationId}/addons`;
	const queryData = {
		excludeUnavailable: data.excludeUnavailable,
	};
	return getdiksInstance().get<T.StorageAddonsResponse200>(url, {
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
export async function StorageCategories(
	data: { storageLocationId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageCategoriesResponse200>> {
	const url = `/storage/${data.storageLocationId}/categories`;
	return getdiksInstance().get<T.StorageCategoriesResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Get a list of termination types.
        
	 * @see StorageTerminationTypesResponse200
	 */
export async function StorageTerminationTypes(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageTerminationTypesResponse200>> {
	const url = "/storage/terminationTypes";
	return getdiksInstance().get<T.StorageTerminationTypesResponse200>(url, {
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
export async function StorageUnitTypes(
	data: { categoryId: string; storageLocationId: string; excludeFull?: boolean },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageUnitTypesResponse200>> {
	const url = `/storage/${data.storageLocationId}/category/${data.categoryId}/unitTypes`;
	const queryData = {
		excludeFull: data.excludeFull,
	};
	return getdiksInstance().get<T.StorageUnitTypesResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * @param params.storageLocationId
 * @see StorageLocationSingleResponse200
 */
export async function StorageLocationSingle(
	data: { storageLocationId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StorageLocationSingleResponse200>> {
	const url = `/storage-location/${data.storageLocationId}`;
	return getdiksInstance().get<T.StorageLocationSingleResponse200>(url, {
		headers,
	});
}

/**
 * @see SupportContactResponse200
 */
export async function SupportContact(
	data: T.SupportContactRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SupportContactResponse200>> {
	const url = "/support/contact";
	const bodyData = {
		name: data.name,
		phone: data.phone,
		email: data.email,
		department: data.department,
		question: data.question,
	};
	return getdiksInstance().post<T.SupportContactResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
 * @see SupportSubscribeNewsletterResponse200
 */
export async function SupportSubscribeNewsletter(
	data: T.SupportSubscribeNewsletterRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SupportSubscribeNewsletterResponse200>> {
	const url = "/support/mailing-list/newsletter/subscribe";
	const bodyData = {
		email: data.email,
	};
	return getdiksInstance().post<T.SupportSubscribeNewsletterResponse200>(url, {
		data: bodyData,
		headers,
	});
}
