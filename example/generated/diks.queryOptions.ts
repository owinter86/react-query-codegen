import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./diks.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const accountfavoritesQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountfavorites", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountfavorites(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountgetapppreferencesQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountgetapppreferences", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountgetapppreferences(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountgetcompanypreferencesQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountgetcompanypreferences", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountgetcompanypreferences(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountupdatecompanypreferencesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.accountupdatecompanypreferences>[0]>
) => {
	const enabled = hasDefinedProps(params, "companyPreferences");
	return queryOptions({
		queryKey: ["accountupdatecompanypreferences", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountupdatecompanypreferences(params);
					return response.data;
				}
			: skipToken,
	});
};

export const accountgetpersonalpreferencesQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountgetpersonalpreferences", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountgetpersonalpreferences(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountupdatepersonalpreferencesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.accountupdatepersonalpreferences>[0]>
) => {
	const enabled = hasDefinedProps(params, "personalPreferences");
	return queryOptions({
		queryKey: ["accountupdatepersonalpreferences", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountupdatepersonalpreferences(params);
					return response.data;
				}
			: skipToken,
	});
};

export const accountmeQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountme", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountme(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountregisterQueryOptions = (
	params: Partial<Parameters<typeof apiClient.accountregister>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "password", "type", "subscribeNewsletter", "phone");
	return queryOptions({
		queryKey: ["accountregister", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountregister(params);
					return response.data;
				}
			: skipToken,
	});
};

export const accountremoveQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountremove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountremove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountremovedriverslicensedataQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["accountremovedriverslicensedata", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountremovedriverslicensedata(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const accountreservationsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.accountreservations>[0]>
) => {
	const enabled = hasDefinedProps(params, "status", "filters");
	return queryOptions({
		queryKey: ["accountreservations", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountreservations(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categoryalternativesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categoryalternatives>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId");
	return queryOptions({
		queryKey: ["categoryalternatives", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categoryalternatives(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categoryavailabilityQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categoryavailability>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "datePickup", "dateReturn", "mainCategoryId");
	return queryOptions({
		queryKey: ["categoryavailability", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categoryavailability(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categorycompareQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categorycompare>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryIds");
	return queryOptions({
		queryKey: ["categorycompare", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categorycompare(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categoryfavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categoryfavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId");
	return queryOptions({
		queryKey: ["categoryfavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categoryfavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categoryimageQueryOptions = (params: Partial<Parameters<typeof apiClient.categoryimage>[0]>) => {
	const enabled = hasDefinedProps(params, "categoryId", "fileId", "w");
	return queryOptions({
		queryKey: ["categoryimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categoryimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categoryinsuranceprofileQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categoryinsuranceprofile>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "categoryId", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["categoryinsuranceprofile", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categoryinsuranceprofile(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categorylistQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["categorylist", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categorylist(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const categorymainimageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categorymainimage>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId", "w");
	return queryOptions({
		queryKey: ["categorymainimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categorymainimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categorypricecalculationQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categorypricecalculation>[0]>
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
		queryKey: ["categorypricecalculation", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categorypricecalculation(params);
					return response.data;
				}
			: skipToken,
	});
};

export const categorysingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.categorysingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId");
	return queryOptions({
		queryKey: ["categorysingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.categorysingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const maincategoryimageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.maincategoryimage>[0]>
) => {
	const enabled = hasDefinedProps(params, "mainCategoryId", "fileId", "w");
	return queryOptions({
		queryKey: ["maincategoryimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.maincategoryimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const maincategorylistQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["maincategorylist", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.maincategorylist(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const maincategorymainimageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.maincategorymainimage>[0]>
) => {
	const enabled = hasDefinedProps(params, "mainCategoryId", "w");
	return queryOptions({
		queryKey: ["maincategorymainimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.maincategorymainimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const addonimageQueryOptions = (params: Partial<Parameters<typeof apiClient.addonimage>[0]>) => {
	const enabled = hasDefinedProps(params, "addonId", "fileId", "w");
	return queryOptions({
		queryKey: ["addonimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.addonimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const addonmainimageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.addonmainimage>[0]>
) => {
	const enabled = hasDefinedProps(params, "addonId", "w");
	return queryOptions({
		queryKey: ["addonmainimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.addonmainimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleadddamageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleadddamage>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "image", "description", "x", "y");
	return queryOptions({
		queryKey: ["sharedvehicleadddamage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleadddamage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleadminlistQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleadminlist>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["sharedvehicleadminlist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleadminlist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleadminsingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleadminsingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["sharedvehicleadminsingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleadminsingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleadminupdateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleadminupdate>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["sharedvehicleadminupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleadminupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleavailabilityQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleavailability>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "datePickup", "dateReturn", "mainCategoryId");
	return queryOptions({
		queryKey: ["sharedvehicleavailability", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleavailability(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleavailabilitycalendarQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleavailabilitycalendar>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "startDate", "endDate");
	return queryOptions({
		queryKey: ["sharedvehicleavailabilitycalendar", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleavailabilitycalendar(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclecreatebookingQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclecreatebooking>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "locale", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["sharedvehiclecreatebooking", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclecreatebooking(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicledamageimageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicledamageimage>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "fileId", "accessToken", "w");
	return queryOptions({
		queryKey: ["sharedvehicledamageimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicledamageimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicledamagetemplateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicledamagetemplate>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "w");
	return queryOptions({
		queryKey: ["sharedvehicledamagetemplate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicledamagetemplate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclefavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclefavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["sharedvehiclefavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclefavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehicleimageQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehicleimage>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "fileId", "w");
	return queryOptions({
		queryKey: ["sharedvehicleimage", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehicleimage(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclelistdamagesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclelistdamages>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "locale");
	return queryOptions({
		queryKey: ["sharedvehiclelistdamages", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclelistdamages(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclepricingQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclepricing>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "locale", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["sharedvehiclepricing", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclepricing(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclesingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclesingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["sharedvehiclesingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclesingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclestateofchargeQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclestateofcharge>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["sharedvehiclestateofcharge", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclestateofcharge(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedforgotpasswordQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedforgotpassword>[0]>
) => {
	const enabled = hasDefinedProps(params, "email");
	return queryOptions({
		queryKey: ["authpasswordbasedforgotpassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedforgotpassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedlistemailsQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authpasswordbasedlistemails", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedlistemails(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedloginQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedlogin>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "password");
	return queryOptions({
		queryKey: ["authpasswordbasedlogin", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedlogin(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedresetpasswordQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedresetpassword>[0]>
) => {
	const enabled = hasDefinedProps(params, "resetToken", "password");
	return queryOptions({
		queryKey: ["authpasswordbasedresetpassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedresetpassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedupdateemailQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedupdateemail>[0]>
) => {
	const enabled = hasDefinedProps(params, "email");
	return queryOptions({
		queryKey: ["authpasswordbasedupdateemail", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedupdateemail(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedupdatepasswordQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedupdatepassword>[0]>
) => {
	const enabled = hasDefinedProps(params, "password");
	return queryOptions({
		queryKey: ["authpasswordbasedupdatepassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedupdatepassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedverifyemailQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedverifyemail>[0]>
) => {
	const enabled = hasDefinedProps(params, "verifyToken");
	return queryOptions({
		queryKey: ["authpasswordbasedverifyemail", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedverifyemail(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpasswordbasedverifyotpQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpasswordbasedverifyotp>[0]>
) => {
	const enabled = hasDefinedProps(params, "otp");
	return queryOptions({
		queryKey: ["authpasswordbasedverifyotp", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpasswordbasedverifyotp(params);
					return response.data;
				}
			: skipToken,
	});
};

export const reservationupdateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.reservationupdate>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"reservationId",
		"locationPickup",
		"insuranceProfileOptionId",
		"selectedAddons"
	);
	return queryOptions({
		queryKey: ["reservationupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.reservationupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const reservationcancelQueryOptions = (
	params: Partial<Parameters<typeof apiClient.reservationcancel>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["reservationcancel", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.reservationcancel(params);
					return response.data;
				}
			: skipToken,
	});
};

export const reservationdownloadinvoiceQueryOptions = (
	params: Partial<Parameters<typeof apiClient.reservationdownloadinvoice>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "invoiceId");
	return queryOptions({
		queryKey: ["reservationdownloadinvoice", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.reservationdownloadinvoice(params);
					return response.data;
				}
			: skipToken,
	});
};

export const reservationfetchbyidsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.reservationfetchbyids>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationIds");
	return queryOptions({
		queryKey: ["reservationfetchbyids", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.reservationfetchbyids(params);
					return response.data;
				}
			: skipToken,
	});
};

export const reservationrepeatQueryOptions = (
	params: Partial<Parameters<typeof apiClient.reservationrepeat>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["reservationrepeat", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.reservationrepeat(params);
					return response.data;
				}
			: skipToken,
	});
};

export const locationlistQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["locationlist", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationlist(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const locationreorderQueryOptions = (
	params: Partial<Parameters<typeof apiClient.locationreorder>[0]>
) => {
	const enabled = hasDefinedProps(params, "locationIds");
	return queryOptions({
		queryKey: ["locationreorder", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationreorder(params);
					return response.data;
				}
			: skipToken,
	});
};

export const locationsingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.locationsingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["locationsingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationsingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const admindeleteuserQueryOptions = (
	params: Partial<Parameters<typeof apiClient.admindeleteuser>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["admindeleteuser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.admindeleteuser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const admininviteuserQueryOptions = (
	params: Partial<Parameters<typeof apiClient.admininviteuser>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "name", "roles");
	return queryOptions({
		queryKey: ["admininviteuser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.admininviteuser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const adminlistusersQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["adminlistusers", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.adminlistusers(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const appredirectaccountdriverslicenseverificationcompleteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.appredirectaccountdriverslicenseverificationcomplete>[0]>
) => {
	const enabled = hasDefinedProps(params, "dossierId", "processId", "status");
	return queryOptions({
		queryKey: ["appredirectaccountdriverslicenseverificationcomplete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.appredirectaccountdriverslicenseverificationcomplete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authgetuserQueryOptions = (params: Partial<Parameters<typeof apiClient.authgetuser>[0]>) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["authgetuser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authgetuser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authimpersonatestopsessionQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authimpersonatestopsession", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authimpersonatestopsession(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authlogoutQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authlogout", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authlogout(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authmeQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authme", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authme(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authrefreshtokensQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authrefreshtokens>[0]>
) => {
	const enabled = hasDefinedProps(params, "refreshToken");
	return queryOptions({
		queryKey: ["authrefreshtokens", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authrefreshtokens(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authsetuseractiveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authsetuseractive>[0]>
) => {
	const enabled = hasDefinedProps(params, "user", "active");
	return queryOptions({
		queryKey: ["authsetuseractive", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authsetuseractive(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authupdateuserQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authupdateuser>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["authupdateuser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authupdateuser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authuserlistQueryOptions = (params: Partial<Parameters<typeof apiClient.authuserlist>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["authuserlist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authuserlist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissioncreateroleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissioncreaterole>[0]>
) => {
	const enabled = hasDefinedProps(params, "identifier");
	return queryOptions({
		queryKey: ["authpermissioncreaterole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissioncreaterole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionpermissionlistQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authpermissionpermissionlist", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionpermissionlist(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionremoveroleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissionremoverole>[0]>
) => {
	const enabled = hasDefinedProps(params, "role");
	return queryOptions({
		queryKey: ["authpermissionremoverole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionremoverole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionroleaddpermissionsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissionroleaddpermissions>[0]>
) => {
	const enabled = hasDefinedProps(params, "role", "permissions");
	return queryOptions({
		queryKey: ["authpermissionroleaddpermissions", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionroleaddpermissions(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionrolelistQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authpermissionrolelist", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionrolelist(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionroleremovepermissionsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissionroleremovepermissions>[0]>
) => {
	const enabled = hasDefinedProps(params, "role", "permissions");
	return queryOptions({
		queryKey: ["authpermissionroleremovepermissions", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionroleremovepermissions(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionsummaryQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authpermissionsummary", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionsummary(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionuserassignroleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissionuserassignrole>[0]>
) => {
	const enabled = hasDefinedProps(params, "user", "role");
	return queryOptions({
		queryKey: ["authpermissionuserassignrole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionuserassignrole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionuserremoveroleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissionuserremoverole>[0]>
) => {
	const enabled = hasDefinedProps(params, "user", "role");
	return queryOptions({
		queryKey: ["authpermissionuserremoverole", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionuserremoverole(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authpermissionusersummaryQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authpermissionusersummary>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["authpermissionusersummary", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authpermissionusersummary(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authanonymousbasedloginQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authanonymousbasedlogin>[0]>
) => {
	const enabled = hasDefinedProps(params, "token");
	return queryOptions({
		queryKey: ["authanonymousbasedlogin", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authanonymousbasedlogin(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sessionlistQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["sessionlist", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sessionlist(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const sessionlogoutQueryOptions = (params: Partial<Parameters<typeof apiClient.sessionlogout>[0]>) => {
	const enabled = hasDefinedProps(params, "sessionId");
	return queryOptions({
		queryKey: ["sessionlogout", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sessionlogout(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sessionsetdevicenotificationtokenQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sessionsetdevicenotificationtoken>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["sessionsetdevicenotificationtoken", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sessionsetdevicenotificationtoken(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authtotpproviderinfoQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authtotpproviderinfo", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authtotpproviderinfo(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authtotpproviderremoveQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["authtotpproviderremove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authtotpproviderremove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const authtotpproviderremoveforuserQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authtotpproviderremoveforuser>[0]>
) => {
	const enabled = hasDefinedProps(params, "user");
	return queryOptions({
		queryKey: ["authtotpproviderremoveforuser", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authtotpproviderremoveforuser(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authtotpprovidersetupQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authtotpprovidersetup>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["authtotpprovidersetup", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authtotpprovidersetup(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authtotpprovidersetupverifyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authtotpprovidersetupverify>[0]>
) => {
	const enabled = hasDefinedProps(params, "totp");
	return queryOptions({
		queryKey: ["authtotpprovidersetupverify", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authtotpprovidersetupverify(params);
					return response.data;
				}
			: skipToken,
	});
};

export const authtotpproviderverifyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.authtotpproviderverify>[0]>
) => {
	const enabled = hasDefinedProps(params, "totp");
	return queryOptions({
		queryKey: ["authtotpproviderverify", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.authtotpproviderverify(params);
					return response.data;
				}
			: skipToken,
	});
};

export const businessaddressprefillQueryOptions = (
	params: Partial<Parameters<typeof apiClient.businessaddressprefill>[0]>
) => {
	const enabled = hasDefinedProps(params, "postalCode", "houseNumber");
	return queryOptions({
		queryKey: ["businessaddressprefill", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.businessaddressprefill(params);
					return response.data;
				}
			: skipToken,
	});
};

export const clientadminlistQueryOptions = (
	params: Partial<Parameters<typeof apiClient.clientadminlist>[0]>
) => {
	const enabled = hasDefinedProps(params, "q");
	return queryOptions({
		queryKey: ["clientadminlist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.clientadminlist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const clientadminproplanneraccountQueryOptions = (
	params: Partial<Parameters<typeof apiClient.clientadminproplanneraccount>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["clientadminproplanneraccount", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.clientadminproplanneraccount(params);
					return response.data;
				}
			: skipToken,
	});
};

export const clientadminremoveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.clientadminremove>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["clientadminremove", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.clientadminremove(params);
					return response.data;
				}
			: skipToken,
	});
};

export const clientadminupdateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.clientadminupdate>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["clientadminupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.clientadminupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const confirmedorderlistQueryOptions = (
	params: Partial<Parameters<typeof apiClient.confirmedorderlist>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["confirmedorderlist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.confirmedorderlist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const confirmedstorageordersingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.confirmedstorageordersingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["confirmedstorageordersingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.confirmedstorageordersingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagecontractdownloadcontractQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagecontractdownloadcontract>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId", "contractId");
	return queryOptions({
		queryKey: ["storagecontractdownloadcontract", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagecontractdownloadcontract(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagecontractdownloadinvoiceQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagecontractdownloadinvoice>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId", "invoiceNumber");
	return queryOptions({
		queryKey: ["storagecontractdownloadinvoice", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagecontractdownloadinvoice(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagecontractinvoicesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagecontractinvoices>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["storagecontractinvoices", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagecontractinvoices(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagecontractoverviewQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagecontractoverview>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["storagecontractoverview", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagecontractoverview(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagecontractterminateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagecontractterminate>[0]>
) => {
	const enabled = hasDefinedProps(
		params,
		"storageLocationId",
		"contractId",
		"terminationDate",
		"terminationReasonId"
	);
	return queryOptions({
		queryKey: ["storagecontractterminate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagecontractterminate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageordercheckoutQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storageordercheckout>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale");
	return queryOptions({
		queryKey: ["storageordercheckout", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageordercheckout(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageorderoverviewQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storageorderoverview>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["storageorderoverview", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageorderoverview(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageorderconfigureQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storageorderconfigure>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["storageorderconfigure", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageorderconfigure(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageorderdiscountapplyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storageorderdiscountapply>[0]>
) => {
	const enabled = hasDefinedProps(params, "discountCode");
	return queryOptions({
		queryKey: ["storageorderdiscountapply", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageorderdiscountapply(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageorderdiscountremoveQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["storageorderdiscountremove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageorderdiscountremove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const continentalcreatesessionQueryOptions = (
	params: Partial<Parameters<typeof apiClient.continentalcreatesession>[0]>
) => {
	const enabled = hasDefinedProps(params, "token", "deviceName");
	return queryOptions({
		queryKey: ["continentalcreatesession", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.continentalcreatesession(params);
					return response.data;
				}
			: skipToken,
	});
};

export const continentalcreatevirtualkeyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.continentalcreatevirtualkey>[0]>
) => {
	const enabled = hasDefinedProps(params, "bookingId", "clientDeviceId");
	return queryOptions({
		queryKey: ["continentalcreatevirtualkey", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.continentalcreatevirtualkey(params);
					return response.data;
				}
			: skipToken,
	});
};

export const continentalrevokevirtualkeyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.continentalrevokevirtualkey>[0]>
) => {
	const enabled = hasDefinedProps(params, "virtualKeyId");
	return queryOptions({
		queryKey: ["continentalrevokevirtualkey", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.continentalrevokevirtualkey(params);
					return response.data;
				}
			: skipToken,
	});
};

export const continentalupdatevirtualkeyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.continentalupdatevirtualkey>[0]>
) => {
	const enabled = hasDefinedProps(params, "virtualKeyId", "fromDate", "toDate");
	return queryOptions({
		queryKey: ["continentalupdatevirtualkey", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.continentalupdatevirtualkey(params);
					return response.data;
				}
			: skipToken,
	});
};

export const divergentopeninghourscreateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.divergentopeninghourscreate>[0]>
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
		queryKey: ["divergentopeninghourscreate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.divergentopeninghourscreate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const divergentopeninghourssingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.divergentopeninghourssingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["divergentopeninghourssingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.divergentopeninghourssingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const divergentopeninghoursupdateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.divergentopeninghoursupdate>[0]>
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
		queryKey: ["divergentopeninghoursupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.divergentopeninghoursupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const divergentopeninghoursdeleteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.divergentopeninghoursdelete>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["divergentopeninghoursdelete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.divergentopeninghoursdelete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const divergentopeninghourslistQueryOptions = (
	params: Partial<Parameters<typeof apiClient.divergentopeninghourslist>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["divergentopeninghourslist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.divergentopeninghourslist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const featureflagcurrentQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["featureflagcurrent", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.featureflagcurrent(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const jobstartproplannermirrorQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["jobstartproplannermirror", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.jobstartproplannermirror(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const managementrequestmagiclinkQueryOptions = (
	params: Partial<Parameters<typeof apiClient.managementrequestmagiclink>[0]>
) => {
	const enabled = hasDefinedProps(params, "slackUserId");
	return queryOptions({
		queryKey: ["managementrequestmagiclink", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.managementrequestmagiclink(params);
					return response.data;
				}
			: skipToken,
	});
};

export const managementfeatureflaglistQueryOptions = (
	params: Partial<Parameters<typeof apiClient.managementfeatureflaglist>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["managementfeatureflaglist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.managementfeatureflaglist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const managementfeatureflagsingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.managementfeatureflagsingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "featureFlagId");
	return queryOptions({
		queryKey: ["managementfeatureflagsingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.managementfeatureflagsingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const managementfeatureflagupdateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.managementfeatureflagupdate>[0]>
) => {
	const enabled = hasDefinedProps(params, "featureFlagId");
	return queryOptions({
		queryKey: ["managementfeatureflagupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.managementfeatureflagupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const multitenantcurrentQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["multitenantcurrent", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.multitenantcurrent(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const onfidostartdriverslicenseverificationQueryOptions = (
	params: Partial<Parameters<typeof apiClient.onfidostartdriverslicenseverification>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["onfidostartdriverslicenseverification", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.onfidostartdriverslicenseverification(params);
					return response.data;
				}
			: skipToken,
	});
};

export const onfidowebhookQueryOptions = (params: Partial<Parameters<typeof apiClient.onfidowebhook>[0]>) => {
	const enabled = hasDefinedProps(params, "eventData");
	return queryOptions({
		queryKey: ["onfidowebhook", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.onfidowebhook(params);
					return response.data;
				}
			: skipToken,
	});
};

export const orderaddQueryOptions = (params: Partial<Parameters<typeof apiClient.orderadd>[0]>) => {
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
		queryKey: ["orderadd", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderadd(params);
					return response.data;
				}
			: skipToken,
	});
};

export const orderdiscountapplyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.orderdiscountapply>[0]>
) => {
	const enabled = hasDefinedProps(params, "discountCode");
	return queryOptions({
		queryKey: ["orderdiscountapply", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderdiscountapply(params);
					return response.data;
				}
			: skipToken,
	});
};

export const orderdiscountremoveQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["orderdiscountremove", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderdiscountremove(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const orderoverviewQueryOptions = (params: Partial<Parameters<typeof apiClient.orderoverview>[0]>) => {
	const enabled = hasDefinedProps(params, "locale");
	return queryOptions({
		queryKey: ["orderoverview", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderoverview(params);
					return response.data;
				}
			: skipToken,
	});
};

export const orderoverviewcountQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["orderoverviewcount", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderoverviewcount(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const ordersingleQueryOptions = (params: Partial<Parameters<typeof apiClient.ordersingle>[0]>) => {
	const enabled = hasDefinedProps(params, "lineId");
	return queryOptions({
		queryKey: ["ordersingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ordersingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const orderupdateQueryOptions = (params: Partial<Parameters<typeof apiClient.orderupdate>[0]>) => {
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
		queryKey: ["orderupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const orderremoveQueryOptions = (params: Partial<Parameters<typeof apiClient.orderremove>[0]>) => {
	const enabled = hasDefinedProps(params, "lineId");
	return queryOptions({
		queryKey: ["orderremove", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.orderremove(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ordercheckoutflowcheckoutQueryOptions = (
	params: Partial<Parameters<typeof apiClient.ordercheckoutflowcheckout>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale", "paymentMethod");
	return queryOptions({
		queryKey: ["ordercheckoutflowcheckout", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ordercheckoutflowcheckout(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ordercheckoutflowinfoQueryOptions = (
	params: Partial<Parameters<typeof apiClient.ordercheckoutflowinfo>[0]>
) => {
	const enabled = hasDefinedProps(params, "locale");
	return queryOptions({
		queryKey: ["ordercheckoutflowinfo", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ordercheckoutflowinfo(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ordercheckoutflowpreferencesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.ordercheckoutflowpreferences>[0]>
) => {
	const enabled = hasDefinedProps(params, "preferences");
	return queryOptions({
		queryKey: ["ordercheckoutflowpreferences", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ordercheckoutflowpreferences(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ordershareapplyQueryOptions = (
	params: Partial<Parameters<typeof apiClient.ordershareapply>[0]>
) => {
	const enabled = hasDefinedProps(params, "shareId");
	return queryOptions({
		queryKey: ["ordershareapply", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ordershareapply(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ordersharecreateQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["ordersharecreate", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ordersharecreate(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const rabobankwebhookomnikassaQueryOptions = (
	params: Partial<Parameters<typeof apiClient.rabobankwebhookomnikassa>[0]>
) => {
	const enabled = hasDefinedProps(params, "authentication", "expiry", "eventName", "poiId", "signature");
	return queryOptions({
		queryKey: ["rabobankwebhookomnikassa", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.rabobankwebhookomnikassa(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationactiveQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["sharedvehiclereservationactive", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationactive(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationavailabilityextendbookingQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationavailabilityextendbooking>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale", "dateReturn");
	return queryOptions({
		queryKey: ["sharedvehiclereservationavailabilityextendbooking", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationavailabilityextendbooking(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationsingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationsingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["sharedvehiclereservationsingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationsingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationupdateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationupdate>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale", "datePickup", "dateReturn");
	return queryOptions({
		queryKey: ["sharedvehiclereservationupdate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationupdate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationcancelQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationcancel>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["sharedvehiclereservationcancel", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationcancel(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationextendbookingQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationextendbooking>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale", "dateReturn");
	return queryOptions({
		queryKey: ["sharedvehiclereservationextendbooking", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationextendbooking(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationgeneratepaymenturlQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationgeneratepaymenturl>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId", "locale");
	return queryOptions({
		queryKey: ["sharedvehiclereservationgeneratepaymenturl", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationgeneratepaymenturl(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationgetfuelinstructionsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationgetfuelinstructions>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["sharedvehiclereservationgetfuelinstructions", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationgetfuelinstructions(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationlistQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationlist>[0]>
) => {
	const enabled = hasDefinedProps(params, "status", "filters");
	return queryOptions({
		queryKey: ["sharedvehiclereservationlist", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationlist(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationstartrideQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationstartride>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["sharedvehiclereservationstartride", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationstartride(params);
					return response.data;
				}
			: skipToken,
	});
};

export const sharedvehiclereservationstoprideQueryOptions = (
	params: Partial<Parameters<typeof apiClient.sharedvehiclereservationstopride>[0]>
) => {
	const enabled = hasDefinedProps(params, "reservationId");
	return queryOptions({
		queryKey: ["sharedvehiclereservationstopride", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.sharedvehiclereservationstopride(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageaddonsQueryOptions = (params: Partial<Parameters<typeof apiClient.storageaddons>[0]>) => {
	const enabled = hasDefinedProps(params, "storageLocationId");
	return queryOptions({
		queryKey: ["storageaddons", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageaddons(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagecategoriesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagecategories>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId");
	return queryOptions({
		queryKey: ["storagecategories", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagecategories(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storageterminationtypesQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["storageterminationtypes", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageterminationtypes(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const storageunittypesQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storageunittypes>[0]>
) => {
	const enabled = hasDefinedProps(params, "categoryId", "storageLocationId");
	return queryOptions({
		queryKey: ["storageunittypes", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storageunittypes(params);
					return response.data;
				}
			: skipToken,
	});
};

export const storagelocationsingleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.storagelocationsingle>[0]>
) => {
	const enabled = hasDefinedProps(params, "storageLocationId");
	return queryOptions({
		queryKey: ["storagelocationsingle", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.storagelocationsingle(params);
					return response.data;
				}
			: skipToken,
	});
};

export const supportcontactQueryOptions = (
	params: Partial<Parameters<typeof apiClient.supportcontact>[0]>
) => {
	const enabled = hasDefinedProps(params, "name", "phone", "email", "department", "question");
	return queryOptions({
		queryKey: ["supportcontact", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.supportcontact(params);
					return response.data;
				}
			: skipToken,
	});
};

export const supportsubscribenewsletterQueryOptions = (
	params: Partial<Parameters<typeof apiClient.supportsubscribenewsletter>[0]>
) => {
	const enabled = hasDefinedProps(params, "email");
	return queryOptions({
		queryKey: ["supportsubscribenewsletter", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.supportsubscribenewsletter(params);
					return response.data;
				}
			: skipToken,
	});
};
