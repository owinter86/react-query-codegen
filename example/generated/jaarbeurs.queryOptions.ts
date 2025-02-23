import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./jaarbeurs.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
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

export const AccountUpdatePushNotificationsQueryOptions = (
	params: Partial<Parameters<typeof apiClient.AccountUpdatePushNotifications>[0]>
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

export const TicketAddQueryOptions = (params: Partial<Parameters<typeof apiClient.TicketAdd>[0]>) => {
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

export const TicketRemoveQueryOptions = (params: Partial<Parameters<typeof apiClient.TicketRemove>[0]>) => {
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

export const AppRedirectAccountResetPasswordQueryOptions = (
	params: Partial<Parameters<typeof apiClient.AppRedirectAccountResetPassword>[0]>
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
	params: Partial<Parameters<typeof apiClient.AppRedirectAccountVerification>[0]>
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

export const DatoWebhookExhibitionQueryOptions = (
	params: Partial<Parameters<typeof apiClient.DatoWebhookExhibition>[0]>
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
	params: Partial<Parameters<typeof apiClient.DatoWebhookExhibitionCreate>[0]>
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
	params: Partial<Parameters<typeof apiClient.DatoWebhookExhibitionRssFeed>[0]>
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
	params: Partial<Parameters<typeof apiClient.DatoWebhookNotification>[0]>
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
	params: Partial<Parameters<typeof apiClient.DatoWebhookRecurringScheduleItem>[0]>
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
	params: Partial<Parameters<typeof apiClient.DatoWebhookSchedule>[0]>
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
	params: Partial<Parameters<typeof apiClient.ExhibitionDelete>[0]>
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
	params: Partial<Parameters<typeof apiClient.ExhibitionFavorite>[0]>
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
	params: Partial<Parameters<typeof apiClient.ExhibitionSync>[0]>
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

export const ExhibitionSyncAllQueryOptions = () => {
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
	params: Partial<Parameters<typeof apiClient.ExhibitorDelete>[0]>
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
	params: Partial<Parameters<typeof apiClient.ExhibitorFavorite>[0]>
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

export const ExhibitorLogoQueryOptions = (params: Partial<Parameters<typeof apiClient.ExhibitorLogo>[0]>) => {
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
	params: Partial<Parameters<typeof apiClient.ExhibitorSendMail>[0]>
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

export const ExhibitorSyncQueryOptions = (params: Partial<Parameters<typeof apiClient.ExhibitorSync>[0]>) => {
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

export const ExhibitorSyncAllQueryOptions = () => {
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

export const NewsletterSubscribeQueryOptions = (
	params: Partial<Parameters<typeof apiClient.NewsletterSubscribe>[0]>
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
	params: Partial<Parameters<typeof apiClient.ScheduleFavorite>[0]>
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
	params: Partial<Parameters<typeof apiClient.WorkshopFavorite>[0]>
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
	params: Partial<Parameters<typeof apiClient.WorkshopRemoveFavorite>[0]>
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
