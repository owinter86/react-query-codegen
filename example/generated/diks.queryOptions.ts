import { queryOptions, skipToken } from "@tanstack/react-query";
import type { ApiClient } from "./diks.client";

const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const AccountFavoritesQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountFavorites", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountFavorites(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountGetAppPreferencesQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountGetAppPreferences", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountGetAppPreferences(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountGetCompanyPreferencesQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountGetCompanyPreferences", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountGetCompanyPreferences(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountUpdateCompanyPreferencesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AccountUpdateCompanyPreferences"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "companyPreferences");
	return queryOptions({
		queryKey: ["AccountUpdateCompanyPreferences", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountUpdateCompanyPreferences(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountGetPersonalPreferencesQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountGetPersonalPreferences", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountGetPersonalPreferences(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountUpdatePersonalPreferencesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AccountUpdatePersonalPreferences"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "personalPreferences");
	return queryOptions({
		queryKey: ["AccountUpdatePersonalPreferences", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountUpdatePersonalPreferences(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountMeQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountMe", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountMe(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountRegisterQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AccountRegister"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "password", "type", "subscribeNewsletter", "phone");
	return queryOptions({
		queryKey: ["AccountRegister", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountRegister(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountRemoveQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountRemove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountRemove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountRemoveDriversLicenseDataQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AccountRemoveDriversLicenseData", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountRemoveDriversLicenseData(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AccountReservationsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AccountReservations"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "status", "filters");
	return queryOptions({
		queryKey: ["AccountReservations", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountReservations(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryAlternativesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryAlternatives"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId");
	return queryOptions({
		queryKey: ["CategoryAlternatives", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryAlternatives(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryAvailabilityQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryAvailability"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "datePickup", "dateReturn", "mainCategoryId");
	return queryOptions({
		queryKey: ["CategoryAvailability", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryAvailability(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryCompareQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryCompare"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryIds");
	return queryOptions({
		queryKey: ["CategoryCompare", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryCompare(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId");
	return queryOptions({
		queryKey: ["CategoryFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId", "fileId", "w");
	return queryOptions({
		queryKey: ["CategoryImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryInsuranceProfileQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryInsuranceProfile"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "categoryId", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["CategoryInsuranceProfile", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryInsuranceProfile(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryListQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["CategoryList", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryList(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryMainImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryMainImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId", "w");
	return queryOptions({
		queryKey: ["CategoryMainImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryMainImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategoryPriceCalculationQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategoryPriceCalculation"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"locale",
		"categoryId",
		"datePickup",
		"dateReturn",
		"extraDriverCount",
		"extraYoungDriverCount",
		"addons"
	);
	return queryOptions({
		queryKey: ["CategoryPriceCalculation", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategoryPriceCalculation(params);
					return response.data;
				}
			: skipToken,
	});
};

export const CategorySingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["CategorySingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId");
	return queryOptions({
		queryKey: ["CategorySingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.CategorySingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const MainCategoryImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["MainCategoryImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "mainCategoryId", "fileId", "w");
	return queryOptions({
		queryKey: ["MainCategoryImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.MainCategoryImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const MainCategoryListQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["MainCategoryList", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.MainCategoryList(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const MainCategoryMainImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["MainCategoryMainImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "mainCategoryId", "w");
	return queryOptions({
		queryKey: ["MainCategoryMainImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.MainCategoryMainImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AddonImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AddonImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "addonId", "fileId", "w");
	return queryOptions({
		queryKey: ["AddonImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AddonImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AddonMainImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AddonMainImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "addonId", "w");
	return queryOptions({
		queryKey: ["AddonMainImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AddonMainImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleAddDamageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleAddDamage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "image", "description", "x", "y");
	return queryOptions({
		queryKey: ["SharedVehicleAddDamage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleAddDamage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleAdminListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleAdminList"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["SharedVehicleAdminList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleAdminList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleAdminSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleAdminSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["SharedVehicleAdminSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleAdminSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleAdminUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleAdminUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["SharedVehicleAdminUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleAdminUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleAvailabilityQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleAvailability"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "datePickup", "dateReturn", "mainCategoryId");
	return queryOptions({
		queryKey: ["SharedVehicleAvailability", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleAvailability(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleAvailabilityCalendarQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleAvailabilityCalendar"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "startDate", "endDate");
	return queryOptions({
		queryKey: ["SharedVehicleAvailabilityCalendar", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleAvailabilityCalendar(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleCreateBookingQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleCreateBooking"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "locale", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["SharedVehicleCreateBooking", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleCreateBooking(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleDamageImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleDamageImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "fileId", "accessToken", "w");
	return queryOptions({
		queryKey: ["SharedVehicleDamageImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleDamageImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleDamageTemplateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleDamageTemplate"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "w");
	return queryOptions({
		queryKey: ["SharedVehicleDamageTemplate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleDamageTemplate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["SharedVehicleFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleImageQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleImage"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "fileId", "w");
	return queryOptions({
		queryKey: ["SharedVehicleImage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleImage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleListDamagesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleListDamages"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "locale");
	return queryOptions({
		queryKey: ["SharedVehicleListDamages", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleListDamages(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehiclePricingQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehiclePricing"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "locale", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["SharedVehiclePricing", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehiclePricing(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["SharedVehicleSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleStateOfChargeQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleStateOfCharge"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["SharedVehicleStateOfCharge", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleStateOfCharge(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedForgotPasswordQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedForgotPassword"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email");
	return queryOptions({
		queryKey: ["AuthPasswordBasedForgotPassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedForgotPassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedListEmailsQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthPasswordBasedListEmails", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedListEmails(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedLoginQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedLogin"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "password");
	return queryOptions({
		queryKey: ["AuthPasswordBasedLogin", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedLogin(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedResetPasswordQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedResetPassword"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "resetToken", "password");
	return queryOptions({
		queryKey: ["AuthPasswordBasedResetPassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedResetPassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedUpdateEmailQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedUpdateEmail"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email");
	return queryOptions({
		queryKey: ["AuthPasswordBasedUpdateEmail", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedUpdateEmail(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedUpdatePasswordQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedUpdatePassword"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "password");
	return queryOptions({
		queryKey: ["AuthPasswordBasedUpdatePassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedUpdatePassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedVerifyEmailQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedVerifyEmail"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "verifyToken");
	return queryOptions({
		queryKey: ["AuthPasswordBasedVerifyEmail", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedVerifyEmail(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPasswordBasedVerifyOtpQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPasswordBasedVerifyOtp"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "otp");
	return queryOptions({
		queryKey: ["AuthPasswordBasedVerifyOtp", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPasswordBasedVerifyOtp(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ReservationUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ReservationUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"reservationId",
		"locationPickup",
		"insuranceProfileOptionId",
		"selectedAddons"
	);
	return queryOptions({
		queryKey: ["ReservationUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ReservationUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ReservationCancelQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ReservationCancel"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["ReservationCancel", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ReservationCancel(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ReservationDownloadInvoiceQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ReservationDownloadInvoice"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "invoiceId");
	return queryOptions({
		queryKey: ["ReservationDownloadInvoice", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ReservationDownloadInvoice(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ReservationFetchByIdsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ReservationFetchByIds"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationIds");
	return queryOptions({
		queryKey: ["ReservationFetchByIds", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ReservationFetchByIds(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ReservationRepeatQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ReservationRepeat"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["ReservationRepeat", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ReservationRepeat(params);
					return response.data;
				}
			: skipToken,
	});
};

export const LocationListQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["LocationList", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.LocationList(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const LocationReorderQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["LocationReorder"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationIds");
	return queryOptions({
		queryKey: ["LocationReorder", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.LocationReorder(params);
					return response.data;
				}
			: skipToken,
	});
};

export const LocationSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["LocationSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["LocationSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.LocationSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AdminDeleteUserQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AdminDeleteUser"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["AdminDeleteUser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AdminDeleteUser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AdminInviteUserQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AdminInviteUser"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "name", "roles");
	return queryOptions({
		queryKey: ["AdminInviteUser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AdminInviteUser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AdminListUsersQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AdminListUsers", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AdminListUsers(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AppRedirectAccountDriversLicenseVerificationCompleteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AppRedirectAccountDriversLicenseVerificationComplete"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "dossierId", "processId", "status");
	return queryOptions({
		queryKey: ["AppRedirectAccountDriversLicenseVerificationComplete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AppRedirectAccountDriversLicenseVerificationComplete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthGetUserQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthGetUser"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["AuthGetUser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthGetUser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthImpersonateStopSessionQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthImpersonateStopSession", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthImpersonateStopSession(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthLogoutQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthLogout", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthLogout(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthMeQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthMe", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthMe(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthRefreshTokensQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthRefreshTokens"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "refreshToken");
	return queryOptions({
		queryKey: ["AuthRefreshTokens", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthRefreshTokens(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthSetUserActiveQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthSetUserActive"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user", "active");
	return queryOptions({
		queryKey: ["AuthSetUserActive", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthSetUserActive(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthUpdateUserQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthUpdateUser"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["AuthUpdateUser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthUpdateUser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthUserListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthUserList"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["AuthUserList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthUserList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionCreateRoleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionCreateRole"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "identifier");
	return queryOptions({
		queryKey: ["AuthPermissionCreateRole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionCreateRole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionPermissionListQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthPermissionPermissionList", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionPermissionList(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionRemoveRoleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionRemoveRole"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "role");
	return queryOptions({
		queryKey: ["AuthPermissionRemoveRole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionRemoveRole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionRoleAddPermissionsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionRoleAddPermissions"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "role", "permissions");
	return queryOptions({
		queryKey: ["AuthPermissionRoleAddPermissions", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionRoleAddPermissions(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionRoleListQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthPermissionRoleList", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionRoleList(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionRoleRemovePermissionsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionRoleRemovePermissions"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "role", "permissions");
	return queryOptions({
		queryKey: ["AuthPermissionRoleRemovePermissions", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionRoleRemovePermissions(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionSummaryQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthPermissionSummary", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionSummary(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionUserAssignRoleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionUserAssignRole"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user", "role");
	return queryOptions({
		queryKey: ["AuthPermissionUserAssignRole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionUserAssignRole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionUserRemoveRoleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionUserRemoveRole"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user", "role");
	return queryOptions({
		queryKey: ["AuthPermissionUserRemoveRole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionUserRemoveRole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthPermissionUserSummaryQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthPermissionUserSummary"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["AuthPermissionUserSummary", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthPermissionUserSummary(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthAnonymousBasedLoginQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthAnonymousBasedLogin"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "token");
	return queryOptions({
		queryKey: ["AuthAnonymousBasedLogin", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthAnonymousBasedLogin(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SessionListQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["SessionList", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SessionList(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const SessionLogoutQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SessionLogout"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "sessionId");
	return queryOptions({
		queryKey: ["SessionLogout", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SessionLogout(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SessionSetDeviceNotificationTokenQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SessionSetDeviceNotificationToken"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["SessionSetDeviceNotificationToken", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SessionSetDeviceNotificationToken(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthTotpProviderInfoQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthTotpProviderInfo", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthTotpProviderInfo(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthTotpProviderRemoveQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["AuthTotpProviderRemove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthTotpProviderRemove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthTotpProviderRemoveForUserQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthTotpProviderRemoveForUser"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["AuthTotpProviderRemoveForUser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthTotpProviderRemoveForUser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthTotpProviderSetupQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthTotpProviderSetup"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["AuthTotpProviderSetup", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthTotpProviderSetup(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthTotpProviderSetupVerifyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthTotpProviderSetupVerify"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "totp");
	return queryOptions({
		queryKey: ["AuthTotpProviderSetupVerify", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthTotpProviderSetupVerify(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AuthTotpProviderVerifyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AuthTotpProviderVerify"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "totp");
	return queryOptions({
		queryKey: ["AuthTotpProviderVerify", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AuthTotpProviderVerify(params);
					return response.data;
				}
			: skipToken,
	});
};

export const BusinessAddressPrefillQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["BusinessAddressPrefill"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "postalCode", "houseNumber");
	return queryOptions({
		queryKey: ["BusinessAddressPrefill", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.BusinessAddressPrefill(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ClientAdminListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ClientAdminList"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "q");
	return queryOptions({
		queryKey: ["ClientAdminList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ClientAdminList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ClientAdminProplannerAccountQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ClientAdminProplannerAccount"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ClientAdminProplannerAccount", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ClientAdminProplannerAccount(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ClientAdminRemoveQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ClientAdminRemove"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ClientAdminRemove", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ClientAdminRemove(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ClientAdminUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ClientAdminUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ClientAdminUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ClientAdminUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ConfirmedOrderListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ConfirmedOrderList"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ConfirmedOrderList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ConfirmedOrderList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ConfirmedStorageOrderSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ConfirmedStorageOrderSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ConfirmedStorageOrderSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ConfirmedStorageOrderSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageContractDownloadContractQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageContractDownloadContract"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId", "contractId");
	return queryOptions({
		queryKey: ["StorageContractDownloadContract", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageContractDownloadContract(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageContractDownloadInvoiceQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageContractDownloadInvoice"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId", "invoiceNumber");
	return queryOptions({
		queryKey: ["StorageContractDownloadInvoice", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageContractDownloadInvoice(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageContractInvoicesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageContractInvoices"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["StorageContractInvoices", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageContractInvoices(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageContractOverviewQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageContractOverview"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["StorageContractOverview", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageContractOverview(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageContractTerminateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageContractTerminate"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"storageLocationId",
		"contractId",
		"terminationDate",
		"terminationReasonId"
	);
	return queryOptions({
		queryKey: ["StorageContractTerminate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageContractTerminate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageOrderCheckoutQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageOrderCheckout"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale");
	return queryOptions({
		queryKey: ["StorageOrderCheckout", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageOrderCheckout(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageOrderOverviewQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageOrderOverview"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["StorageOrderOverview", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageOrderOverview(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageOrderConfigureQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageOrderConfigure"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["StorageOrderConfigure", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageOrderConfigure(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageOrderDiscountApplyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageOrderDiscountApply"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "discountCode");
	return queryOptions({
		queryKey: ["StorageOrderDiscountApply", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageOrderDiscountApply(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageOrderDiscountRemoveQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["StorageOrderDiscountRemove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageOrderDiscountRemove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const ContinentalCreateSessionQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ContinentalCreateSession"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "token", "deviceName");
	return queryOptions({
		queryKey: ["ContinentalCreateSession", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ContinentalCreateSession(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ContinentalCreateVirtualKeyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ContinentalCreateVirtualKey"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "bookingId", "clientDeviceId");
	return queryOptions({
		queryKey: ["ContinentalCreateVirtualKey", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ContinentalCreateVirtualKey(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ContinentalRevokeVirtualKeyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ContinentalRevokeVirtualKey"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "virtualKeyId");
	return queryOptions({
		queryKey: ["ContinentalRevokeVirtualKey", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ContinentalRevokeVirtualKey(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ContinentalUpdateVirtualKeyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ContinentalUpdateVirtualKey"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "virtualKeyId", "fromDate", "toDate");
	return queryOptions({
		queryKey: ["ContinentalUpdateVirtualKey", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ContinentalUpdateVirtualKey(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DivergentOpeningHoursCreateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DivergentOpeningHoursCreate"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"description",
		"from",
		"to",
		"date",
		"isClosedForTheWholeDay",
		"locations"
	);
	return queryOptions({
		queryKey: ["DivergentOpeningHoursCreate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DivergentOpeningHoursCreate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DivergentOpeningHoursSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DivergentOpeningHoursSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["DivergentOpeningHoursSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DivergentOpeningHoursSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DivergentOpeningHoursUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DivergentOpeningHoursUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"id",
		"description",
		"from",
		"to",
		"date",
		"isClosedForTheWholeDay",
		"locations"
	);
	return queryOptions({
		queryKey: ["DivergentOpeningHoursUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DivergentOpeningHoursUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DivergentOpeningHoursDeleteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DivergentOpeningHoursDelete"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["DivergentOpeningHoursDelete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DivergentOpeningHoursDelete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DivergentOpeningHoursListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DivergentOpeningHoursList"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["DivergentOpeningHoursList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DivergentOpeningHoursList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const FeatureFlagCurrentQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["FeatureFlagCurrent", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.FeatureFlagCurrent(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const JobStartProplannerMirrorQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["JobStartProplannerMirror", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.JobStartProplannerMirror(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const ManagementRequestMagicLinkQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ManagementRequestMagicLink"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "slackUserId");
	return queryOptions({
		queryKey: ["ManagementRequestMagicLink", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ManagementRequestMagicLink(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ManagementFeatureFlagListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ManagementFeatureFlagList"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["ManagementFeatureFlagList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ManagementFeatureFlagList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ManagementFeatureFlagSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ManagementFeatureFlagSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "featureFlagId");
	return queryOptions({
		queryKey: ["ManagementFeatureFlagSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ManagementFeatureFlagSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ManagementFeatureFlagUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ManagementFeatureFlagUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "featureFlagId");
	return queryOptions({
		queryKey: ["ManagementFeatureFlagUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ManagementFeatureFlagUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const MultitenantCurrentQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["MultitenantCurrent", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.MultitenantCurrent(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const OnfidoStartDriversLicenseVerificationQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OnfidoStartDriversLicenseVerification"]>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["OnfidoStartDriversLicenseVerification", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OnfidoStartDriversLicenseVerification(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OnfidoWebhookQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OnfidoWebhook"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "eventData");
	return queryOptions({
		queryKey: ["OnfidoWebhook", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OnfidoWebhook(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderAddQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderAdd"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"categoryId",
		"datePickup",
		"dateReturn",
		"locationPickup",
		"extraDriverCount",
		"extraYoungDriverCount",
		"insuranceProfileOptionId",
		"selectedAddons",
		"quantity"
	);
	return queryOptions({
		queryKey: ["OrderAdd", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderAdd(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderDiscountApplyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderDiscountApply"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "discountCode");
	return queryOptions({
		queryKey: ["OrderDiscountApply", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderDiscountApply(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderDiscountRemoveQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["OrderDiscountRemove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderDiscountRemove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderOverviewQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderOverview"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale");
	return queryOptions({
		queryKey: ["OrderOverview", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderOverview(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderOverviewCountQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["OrderOverviewCount", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderOverviewCount(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "lineId");
	return queryOptions({
		queryKey: ["OrderSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"lineId",
		"categoryId",
		"datePickup",
		"dateReturn",
		"locationPickup",
		"extraDriverCount",
		"extraYoungDriverCount",
		"insuranceProfileOptionId",
		"selectedAddons",
		"quantity"
	);
	return queryOptions({
		queryKey: ["OrderUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderRemoveQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderRemove"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "lineId");
	return queryOptions({
		queryKey: ["OrderRemove", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderRemove(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderCheckoutFlowCheckoutQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderCheckoutFlowCheckout"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "paymentMethod");
	return queryOptions({
		queryKey: ["OrderCheckoutFlowCheckout", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderCheckoutFlowCheckout(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderCheckoutFlowInfoQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderCheckoutFlowInfo"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale");
	return queryOptions({
		queryKey: ["OrderCheckoutFlowInfo", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderCheckoutFlowInfo(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderCheckoutFlowPreferencesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderCheckoutFlowPreferences"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "preferences");
	return queryOptions({
		queryKey: ["OrderCheckoutFlowPreferences", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderCheckoutFlowPreferences(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderShareApplyQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["OrderShareApply"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "shareId");
	return queryOptions({
		queryKey: ["OrderShareApply", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderShareApply(params);
					return response.data;
				}
			: skipToken,
	});
};

export const OrderShareCreateQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["OrderShareCreate", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.OrderShareCreate(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const RabobankWebhookOmnikassaQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["RabobankWebhookOmnikassa"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "authentication", "expiry", "eventName", "poiId", "signature");
	return queryOptions({
		queryKey: ["RabobankWebhookOmnikassa", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.RabobankWebhookOmnikassa(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationActiveQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["SharedVehicleReservationActive", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationActive(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationAvailabilityExtendBookingQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationAvailabilityExtendBooking"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale", "dateReturn");
	return queryOptions({
		queryKey: ["SharedVehicleReservationAvailabilityExtendBooking", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationAvailabilityExtendBooking(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["SharedVehicleReservationSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationUpdateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationUpdate"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["SharedVehicleReservationUpdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationUpdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationCancelQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationCancel"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["SharedVehicleReservationCancel", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationCancel(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationExtendBookingQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationExtendBooking"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale", "dateReturn");
	return queryOptions({
		queryKey: ["SharedVehicleReservationExtendBooking", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationExtendBooking(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationGeneratePaymentUrlQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationGeneratePaymentUrl"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale");
	return queryOptions({
		queryKey: ["SharedVehicleReservationGeneratePaymentUrl", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationGeneratePaymentUrl(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationGetFuelInstructionsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationGetFuelInstructions"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["SharedVehicleReservationGetFuelInstructions", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationGetFuelInstructions(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationListQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationList"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "status", "filters");
	return queryOptions({
		queryKey: ["SharedVehicleReservationList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationStartRideQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationStartRide"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["SharedVehicleReservationStartRide", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationStartRide(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SharedVehicleReservationStopRideQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SharedVehicleReservationStopRide"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["SharedVehicleReservationStopRide", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SharedVehicleReservationStopRide(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageAddonsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageAddons"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId");
	return queryOptions({
		queryKey: ["StorageAddons", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageAddons(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageCategoriesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageCategories"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId");
	return queryOptions({
		queryKey: ["StorageCategories", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageCategories(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageTerminationTypesQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["StorageTerminationTypes", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageTerminationTypes(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageUnitTypesQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageUnitTypes"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId", "storageLocationId");
	return queryOptions({
		queryKey: ["StorageUnitTypes", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageUnitTypes(params);
					return response.data;
				}
			: skipToken,
	});
};

export const StorageLocationSingleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["StorageLocationSingle"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId");
	return queryOptions({
		queryKey: ["StorageLocationSingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.StorageLocationSingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SupportContactQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SupportContact"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "name", "phone", "email", "department", "question");
	return queryOptions({
		queryKey: ["SupportContact", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SupportContact(params);
					return response.data;
				}
			: skipToken,
	});
};

export const SupportSubscribeNewsletterQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["SupportSubscribeNewsletter"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email");
	return queryOptions({
		queryKey: ["SupportSubscribeNewsletter", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.SupportSubscribeNewsletter(params);
					return response.data;
				}
			: skipToken,
	});
};
