import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./jaarbeurs.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
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
	const enabled = hasDefinedProps(params, "email", "password");
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

export const accountupdatepushnotificationsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.accountupdatepushnotifications>[0]>
) => {
	const enabled = hasDefinedProps(params, "pushNotificationSettings");
	return queryOptions({
		queryKey: ["accountupdatepushnotifications", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.accountupdatepushnotifications(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ticketaddQueryOptions = (params: Partial<Parameters<typeof apiClient.ticketadd>[0]>) => {
	const enabled = hasDefinedProps(params, "email", "barcode", "exhibitionId");
	return queryOptions({
		queryKey: ["ticketadd", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ticketadd(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ticketremoveQueryOptions = (params: Partial<Parameters<typeof apiClient.ticketremove>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ticketremove", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ticketremove(params);
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

export const appredirectaccountresetpasswordQueryOptions = (
	params: Partial<Parameters<typeof apiClient.appredirectaccountresetpassword>[0]>
) => {
	const enabled = hasDefinedProps(params, "token");
	return queryOptions({
		queryKey: ["appredirectaccountresetpassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.appredirectaccountresetpassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const appredirectaccountverificationQueryOptions = (
	params: Partial<Parameters<typeof apiClient.appredirectaccountverification>[0]>
) => {
	const enabled = hasDefinedProps(params, "token");
	return queryOptions({
		queryKey: ["appredirectaccountverification", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.appredirectaccountverification(params);
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

export const datowebhookexhibitionQueryOptions = (
	params: Partial<Parameters<typeof apiClient.datowebhookexhibition>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["datowebhookexhibition", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.datowebhookexhibition(params);
					return response.data;
				}
			: skipToken,
	});
};

export const datowebhookexhibitioncreateQueryOptions = (
	params: Partial<Parameters<typeof apiClient.datowebhookexhibitioncreate>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["datowebhookexhibitioncreate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.datowebhookexhibitioncreate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const datowebhookexhibitionrssfeedQueryOptions = (
	params: Partial<Parameters<typeof apiClient.datowebhookexhibitionrssfeed>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["datowebhookexhibitionrssfeed", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.datowebhookexhibitionrssfeed(params);
					return response.data;
				}
			: skipToken,
	});
};

export const datowebhooknotificationQueryOptions = (
	params: Partial<Parameters<typeof apiClient.datowebhooknotification>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["datowebhooknotification", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.datowebhooknotification(params);
					return response.data;
				}
			: skipToken,
	});
};

export const datowebhookrecurringscheduleitemQueryOptions = (
	params: Partial<Parameters<typeof apiClient.datowebhookrecurringscheduleitem>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["datowebhookrecurringscheduleitem", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.datowebhookrecurringscheduleitem(params);
					return response.data;
				}
			: skipToken,
	});
};

export const datowebhookscheduleQueryOptions = (
	params: Partial<Parameters<typeof apiClient.datowebhookschedule>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["datowebhookschedule", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.datowebhookschedule(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitiondeleteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.exhibitiondelete>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["exhibitiondelete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitiondelete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitionfavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.exhibitionfavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["exhibitionfavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitionfavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitionsyncQueryOptions = (
	params: Partial<Parameters<typeof apiClient.exhibitionsync>[0]>
) => {
	const enabled = hasDefinedProps(params, "exhibitions");
	return queryOptions({
		queryKey: ["exhibitionsync", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitionsync(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitionsyncallQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["exhibitionsyncall", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitionsyncall(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitordeleteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.exhibitordelete>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["exhibitordelete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitordelete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitorfavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.exhibitorfavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["exhibitorfavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitorfavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitorlogoQueryOptions = (params: Partial<Parameters<typeof apiClient.exhibitorlogo>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["exhibitorlogo", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitorlogo(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitorsendmailQueryOptions = (
	params: Partial<Parameters<typeof apiClient.exhibitorsendmail>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "email", "name", "message");
	return queryOptions({
		queryKey: ["exhibitorsendmail", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitorsendmail(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitorsyncQueryOptions = (params: Partial<Parameters<typeof apiClient.exhibitorsync>[0]>) => {
	const enabled = hasDefinedProps(params, "exhibitors");
	return queryOptions({
		queryKey: ["exhibitorsync", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitorsync(params);
					return response.data;
				}
			: skipToken,
	});
};

export const exhibitorsyncallQueryOptions = () => {
	const enabled = true;
	return queryOptions({
		queryKey: ["exhibitorsyncall", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.exhibitorsyncall(undefined);
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

export const newslettersubscribeQueryOptions = (
	params: Partial<Parameters<typeof apiClient.newslettersubscribe>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "sourceCode", "contactMomentTypeCode");
	return queryOptions({
		queryKey: ["newslettersubscribe", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.newslettersubscribe(params);
					return response.data;
				}
			: skipToken,
	});
};

export const schedulefavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.schedulefavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["schedulefavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.schedulefavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const workshopfavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.workshopfavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "datoId", "date");
	return queryOptions({
		queryKey: ["workshopfavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.workshopfavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const workshopremovefavoriteQueryOptions = (
	params: Partial<Parameters<typeof apiClient.workshopremovefavorite>[0]>
) => {
	const enabled = hasDefinedProps(params, "datoId", "id");
	return queryOptions({
		queryKey: ["workshopremovefavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.workshopremovefavorite(params);
					return response.data;
				}
			: skipToken,
	});
};
