import { queryOptions, skipToken } from "@tanstack/react-query";
import type { ApiClient } from "./jaarbeurs.client";

const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
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
	const enabled = hasDefinedProps(params, "email", "password");
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

export const AccountUpdatePushNotificationsQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AccountUpdatePushNotifications"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "pushNotificationSettings");
	return queryOptions({
		queryKey: ["AccountUpdatePushNotifications", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AccountUpdatePushNotifications(params);
					return response.data;
				}
			: skipToken,
	});
};

export const TicketAddQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["TicketAdd"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "barcode", "exhibitionId");
	return queryOptions({
		queryKey: ["TicketAdd", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.TicketAdd(params);
					return response.data;
				}
			: skipToken,
	});
};

export const TicketRemoveQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["TicketRemove"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["TicketRemove", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.TicketRemove(params);
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

export const AppRedirectAccountResetPasswordQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AppRedirectAccountResetPassword"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "token");
	return queryOptions({
		queryKey: ["AppRedirectAccountResetPassword", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AppRedirectAccountResetPassword(params);
					return response.data;
				}
			: skipToken,
	});
};

export const AppRedirectAccountVerificationQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["AppRedirectAccountVerification"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "token");
	return queryOptions({
		queryKey: ["AppRedirectAccountVerification", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.AppRedirectAccountVerification(params);
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

export const DatoWebhookExhibitionQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DatoWebhookExhibition"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["DatoWebhookExhibition", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DatoWebhookExhibition(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DatoWebhookExhibitionCreateQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DatoWebhookExhibitionCreate"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["DatoWebhookExhibitionCreate", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DatoWebhookExhibitionCreate(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DatoWebhookExhibitionRssFeedQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DatoWebhookExhibitionRssFeed"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["DatoWebhookExhibitionRssFeed", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DatoWebhookExhibitionRssFeed(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DatoWebhookNotificationQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DatoWebhookNotification"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["DatoWebhookNotification", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DatoWebhookNotification(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DatoWebhookRecurringScheduleItemQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DatoWebhookRecurringScheduleItem"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["DatoWebhookRecurringScheduleItem", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DatoWebhookRecurringScheduleItem(params);
					return response.data;
				}
			: skipToken,
	});
};

export const DatoWebhookScheduleQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["DatoWebhookSchedule"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "environment", "entity_type", "event_type", "entity");
	return queryOptions({
		queryKey: ["DatoWebhookSchedule", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.DatoWebhookSchedule(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitionDeleteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitionDelete"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ExhibitionDelete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitionDelete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitionFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitionFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ExhibitionFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitionFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitionSyncQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitionSync"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "exhibitions");
	return queryOptions({
		queryKey: ["ExhibitionSync", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitionSync(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitionSyncAllQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["ExhibitionSyncAll", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitionSyncAll(undefined);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitorDeleteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitorDelete"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ExhibitorDelete", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitorDelete(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitorFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitorFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ExhibitorFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitorFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitorLogoQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitorLogo"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ExhibitorLogo", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitorLogo(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitorSendMailQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitorSendMail"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id", "email", "name", "message");
	return queryOptions({
		queryKey: ["ExhibitorSendMail", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitorSendMail(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitorSyncQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ExhibitorSync"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "exhibitors");
	return queryOptions({
		queryKey: ["ExhibitorSync", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitorSync(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ExhibitorSyncAllQueryOptions = (apiClient: ApiClient) => {
	const enabled = true;
	return queryOptions({
		queryKey: ["ExhibitorSyncAll", undefined],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ExhibitorSyncAll(undefined);
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

export const NewsletterSubscribeQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["NewsletterSubscribe"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "email", "sourceCode", "contactMomentTypeCode");
	return queryOptions({
		queryKey: ["NewsletterSubscribe", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.NewsletterSubscribe(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ScheduleFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["ScheduleFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ScheduleFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ScheduleFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const WorkshopFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["WorkshopFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "datoId", "date");
	return queryOptions({
		queryKey: ["WorkshopFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.WorkshopFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};

export const WorkshopRemoveFavoriteQueryOptions = (
	apiClient: ApiClient,
	params: Partial<Parameters<ApiClient["WorkshopRemoveFavorite"]>[0]>
) => {
	const enabled = hasDefinedProps(params, "datoId", "id");
	return queryOptions({
		queryKey: ["WorkshopRemoveFavorite", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.WorkshopRemoveFavorite(params);
					return response.data;
				}
			: skipToken,
	});
};
