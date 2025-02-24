import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./diks.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const AccountFavoritesQueryOptions = () => {
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

export const AccountGetAppPreferencesQueryOptions = () => {
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

export const AccountGetCompanyPreferencesQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AccountUpdateCompanyPreferences>[0]>
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

export const AccountGetPersonalPreferencesQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AccountUpdatePersonalPreferences>[0]>
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

export const AccountMeQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AccountRegister>[0]>
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

export const AccountRemoveQueryOptions = () => {
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

export const AccountRemoveDriversLicenseDataQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AccountReservations>[0]>
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
	params: Partial<Parameters<typeof apiClient.CategoryAlternatives>[0]>
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
	params: Partial<Parameters<typeof apiClient.CategoryAvailability>[0]>
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
	params: Partial<Parameters<typeof apiClient.CategoryCompare>[0]>
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
	params: Partial<Parameters<typeof apiClient.CategoryFavorite>[0]>
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

export const CategoryImageQueryOptions = (params: Partial<Parameters<typeof apiClient.CategoryImage>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.CategoryInsuranceProfile>[0]>
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

export const CategoryListQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.CategoryMainImage>[0]>
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
	params: Partial<Parameters<typeof apiClient.CategoryPriceCalculation>[0]>
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
	params: Partial<Parameters<typeof apiClient.CategorySingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.MainCategoryImage>[0]>
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

export const MainCategoryListQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.MainCategoryMainImage>[0]>
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

export const AddonImageQueryOptions = (params: Partial<Parameters<typeof apiClient.AddonImage>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.AddonMainImage>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleAddDamage>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleAdminList>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleAdminSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleAdminUpdate>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleAvailability>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleAvailabilityCalendar>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleCreateBooking>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleDamageImage>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleDamageTemplate>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleFavorite>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleImage>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleListDamages>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehiclePricing>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleStateOfCharge>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedForgotPassword>[0]>
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

export const AuthPasswordBasedListEmailsQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedLogin>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedResetPassword>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedUpdateEmail>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedUpdatePassword>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedVerifyEmail>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPasswordBasedVerifyOtp>[0]>
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
	params: Partial<Parameters<typeof apiClient.ReservationUpdate>[0]>
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
	params: Partial<Parameters<typeof apiClient.ReservationCancel>[0]>
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
	params: Partial<Parameters<typeof apiClient.ReservationDownloadInvoice>[0]>
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
	params: Partial<Parameters<typeof apiClient.ReservationFetchByIds>[0]>
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
	params: Partial<Parameters<typeof apiClient.ReservationRepeat>[0]>
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

export const LocationListQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.LocationReorder>[0]>
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
	params: Partial<Parameters<typeof apiClient.LocationSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.AdminDeleteUser>[0]>
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
	params: Partial<Parameters<typeof apiClient.AdminInviteUser>[0]>
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

export const AdminListUsersQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AppRedirectAccountDriversLicenseVerificationComplete>[0]>
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

export const AuthGetUserQueryOptions = (params: Partial<Parameters<typeof apiClient.AuthGetUser>[0]>) => {
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

export const AuthImpersonateStopSessionQueryOptions = () => {
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

export const AuthLogoutQueryOptions = () => {
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

export const AuthMeQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AuthRefreshTokens>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthSetUserActive>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthUpdateUser>[0]>
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

export const AuthUserListQueryOptions = (params: Partial<Parameters<typeof apiClient.AuthUserList>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionCreateRole>[0]>
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

export const AuthPermissionPermissionListQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionRemoveRole>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionRoleAddPermissions>[0]>
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

export const AuthPermissionRoleListQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionRoleRemovePermissions>[0]>
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

export const AuthPermissionSummaryQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionUserAssignRole>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionUserRemoveRole>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthPermissionUserSummary>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthAnonymousBasedLogin>[0]>
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

export const SessionListQueryOptions = () => {
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

export const SessionLogoutQueryOptions = (params: Partial<Parameters<typeof apiClient.SessionLogout>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.SessionSetDeviceNotificationToken>[0]>
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

export const AuthTotpProviderInfoQueryOptions = () => {
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

export const AuthTotpProviderRemoveQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.AuthTotpProviderRemoveForUser>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthTotpProviderSetup>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthTotpProviderSetupVerify>[0]>
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
	params: Partial<Parameters<typeof apiClient.AuthTotpProviderVerify>[0]>
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
	params: Partial<Parameters<typeof apiClient.BusinessAddressPrefill>[0]>
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
	params: Partial<Parameters<typeof apiClient.ClientAdminList>[0]>
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
	params: Partial<Parameters<typeof apiClient.ClientAdminProplannerAccount>[0]>
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
	params: Partial<Parameters<typeof apiClient.ClientAdminRemove>[0]>
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
	params: Partial<Parameters<typeof apiClient.ClientAdminUpdate>[0]>
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
	params: Partial<Parameters<typeof apiClient.ConfirmedOrderList>[0]>
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
	params: Partial<Parameters<typeof apiClient.ConfirmedStorageOrderSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageContractDownloadContract>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageContractDownloadInvoice>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageContractInvoices>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageContractOverview>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageContractTerminate>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageOrderCheckout>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageOrderOverview>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageOrderConfigure>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageOrderDiscountApply>[0]>
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

export const StorageOrderDiscountRemoveQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.ContinentalCreateSession>[0]>
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
	params: Partial<Parameters<typeof apiClient.ContinentalCreateVirtualKey>[0]>
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
	params: Partial<Parameters<typeof apiClient.ContinentalRevokeVirtualKey>[0]>
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
	params: Partial<Parameters<typeof apiClient.ContinentalUpdateVirtualKey>[0]>
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
	params: Partial<Parameters<typeof apiClient.DivergentOpeningHoursCreate>[0]>
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
	params: Partial<Parameters<typeof apiClient.DivergentOpeningHoursSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.DivergentOpeningHoursUpdate>[0]>
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
	params: Partial<Parameters<typeof apiClient.DivergentOpeningHoursDelete>[0]>
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
	params: Partial<Parameters<typeof apiClient.DivergentOpeningHoursList>[0]>
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

export const FeatureFlagCurrentQueryOptions = () => {
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

export const JobStartProplannerMirrorQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.ManagementRequestMagicLink>[0]>
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
	params: Partial<Parameters<typeof apiClient.ManagementFeatureFlagList>[0]>
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
	params: Partial<Parameters<typeof apiClient.ManagementFeatureFlagSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.ManagementFeatureFlagUpdate>[0]>
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

export const MultitenantCurrentQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.OnfidoStartDriversLicenseVerification>[0]>
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

export const OnfidoWebhookQueryOptions = (params: Partial<Parameters<typeof apiClient.OnfidoWebhook>[0]>) => {
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

export const OrderAddQueryOptions = (params: Partial<Parameters<typeof apiClient.OrderAdd>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.OrderDiscountApply>[0]>
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

export const OrderDiscountRemoveQueryOptions = () => {
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

export const OrderOverviewQueryOptions = (params: Partial<Parameters<typeof apiClient.OrderOverview>[0]>) => {
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

export const OrderOverviewCountQueryOptions = () => {
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

export const OrderSingleQueryOptions = (params: Partial<Parameters<typeof apiClient.OrderSingle>[0]>) => {
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

export const OrderUpdateQueryOptions = (params: Partial<Parameters<typeof apiClient.OrderUpdate>[0]>) => {
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

export const OrderRemoveQueryOptions = (params: Partial<Parameters<typeof apiClient.OrderRemove>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.OrderCheckoutFlowCheckout>[0]>
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
	params: Partial<Parameters<typeof apiClient.OrderCheckoutFlowInfo>[0]>
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
	params: Partial<Parameters<typeof apiClient.OrderCheckoutFlowPreferences>[0]>
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
	params: Partial<Parameters<typeof apiClient.OrderShareApply>[0]>
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

export const OrderShareCreateQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.RabobankWebhookOmnikassa>[0]>
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

export const SharedVehicleReservationActiveQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationAvailabilityExtendBooking>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationUpdate>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationCancel>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationExtendBooking>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationGeneratePaymentUrl>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationGetFuelInstructions>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationList>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationStartRide>[0]>
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
	params: Partial<Parameters<typeof apiClient.SharedVehicleReservationStopRide>[0]>
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

export const StorageAddonsQueryOptions = (params: Partial<Parameters<typeof apiClient.StorageAddons>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.StorageCategories>[0]>
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

export const StorageTerminationTypesQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.StorageUnitTypes>[0]>
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
	params: Partial<Parameters<typeof apiClient.StorageLocationSingle>[0]>
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
	params: Partial<Parameters<typeof apiClient.SupportContact>[0]>
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
	params: Partial<Parameters<typeof apiClient.SupportSubscribeNewsletter>[0]>
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
