import type { AxiosResponse } from "axios";
import { getApiClient } from "./apiClient";
import type * as T from "./jaarbeurs.schema";

/**
 * Fetch account information: the email address, favorites and tickets.
 * @see AccountMeResponse200
 */
export async function AccountMe(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountMeResponse200>> {
	const apiClient = getApiClient();
	const url = "/account/me";
	return apiClient.get<T.AccountMeResponse200>(url, {
		headers,
	});
}

/**
 * Register an account.
 * @see AccountRegisterResponse200
 */
export async function AccountRegister(
	data: T.AccountRegisterRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountRegisterResponse200>> {
	const apiClient = getApiClient();
	const url = "/account/register";
	const bodyData = {
		email: data.email,
		password: data.password,
	};
	return apiClient.post<T.AccountRegisterResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Remove an account from the database.
    
        Error(s):
        - `account.remove.failed` -> Unable to remove user because of unknown reason.
	 * @see AccountRemoveResponse200
	 */
export async function AccountRemove(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountRemoveResponse200>> {
	const apiClient = getApiClient();
	const url = "/account/remove";
	return apiClient.delete<T.AccountRemoveResponse200>(url, {
		headers,
	});
}

/**
	 * 
      Update the push notifications settings of the logged in user.
      
	 * @see AccountUpdatePushNotificationsResponse200
	 */
export async function AccountUpdatePushNotifications(
	data: T.AccountUpdatePushNotificationsRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AccountUpdatePushNotificationsResponse200>> {
	const apiClient = getApiClient();
	const url = "/account/me/update-push-notifications";
	const bodyData = {
		pushNotificationSettings: data.pushNotificationSettings,
	};
	return apiClient.put<T.AccountUpdatePushNotificationsResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Add ticket to an account.
    
      Errors:
        - `ticket.add.exhibitionNotFound ` -> There is no exhibition found for the provided id
        - `ticket.add.missingCmApiToken` -> There is no CM API token for the provided exhibition
        - `ticket.add.alreadyExists` -> The ticket is already added to the user account
        - `ticket.add.invalid` -> No ticket found for the provided barcode, email and/or exhibition
      
	 * @see TicketAddResponse200
	 */
export async function TicketAdd(
	data: T.TicketAddRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.TicketAddResponse200>> {
	const apiClient = getApiClient();
	const url = "/ticket/add";
	const bodyData = {
		email: data.email,
		barcode: data.barcode,
		exhibitionId: data.exhibitionId,
	};
	return apiClient.post<T.TicketAddResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Remove a ticket from an account.
      
      Errors:
       - `ticket.remove.invalid` -> No ticket found for provided id
      
	 * @param params.id
	 * @see TicketRemoveResponse200
	 */
export async function TicketRemove(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.TicketRemoveResponse200>> {
	const apiClient = getApiClient();
	const url = `/ticket/${data.id}/remove`;
	return apiClient.delete<T.TicketRemoveResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based/forgot-password";
	const bodyData = {
		email: data.email,
	};
	return apiClient.post<T.AuthPasswordBasedForgotPasswordResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based";
	return apiClient.get<T.AuthPasswordBasedListEmailsResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based/login";
	const bodyData = {
		email: data.email,
		password: data.password,
		device: data.device,
	};
	return apiClient.post<T.AuthPasswordBasedLoginResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based/reset-password";
	const bodyData = {
		resetToken: data.resetToken,
		password: data.password,
	};
	return apiClient.post<T.AuthPasswordBasedResetPasswordResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based/update-email";
	const bodyData = {
		email: data.email,
	};
	return apiClient.post<T.AuthPasswordBasedUpdateEmailResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based/update-password";
	const bodyData = {
		password: data.password,
	};
	return apiClient.post<T.AuthPasswordBasedUpdatePasswordResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/password-based/verify-email";
	const bodyData = {
		verifyToken: data.verifyToken,
		device: data.device,
	};
	return apiClient.post<T.AuthPasswordBasedVerifyEmailResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Redirect to the app to reset password. This is, for example, used in the emails that we sent, since most email clients flag unknown protocols used for deep-linking.
	 * @param params.token
	 * @see AppRedirectAccountResetPasswordResponse200
	 */
export async function AppRedirectAccountResetPassword(
	data: { token: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AppRedirectAccountResetPasswordResponse200>> {
	const apiClient = getApiClient();
	const url = `/app-redirect/account/reset-password/${data.token}`;
	return apiClient.get<T.AppRedirectAccountResetPasswordResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Redirect to the app after account is verified. This is, for example, used in the emails that we sent, since most email clients flag unknown protocols used for deep-linking.
	 * @param params.token
	 * @see AppRedirectAccountVerificationResponse200
	 */
export async function AppRedirectAccountVerification(
	data: { token: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AppRedirectAccountVerificationResponse200>> {
	const apiClient = getApiClient();
	const url = `/app-redirect/account/verification/${data.token}`;
	return apiClient.get<T.AppRedirectAccountVerificationResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/user/${data.user}`;
	return apiClient.get<T.AuthGetUserResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/impersonate-stop-session";
	return apiClient.post<T.AuthImpersonateStopSessionResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/logout";
	return apiClient.post<T.AuthLogoutResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/me";
	return apiClient.get<T.AuthMeResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/refresh-tokens";
	const bodyData = {
		refreshToken: data.refreshToken,
	};
	return apiClient.post<T.AuthRefreshTokensResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/user/${data.user}/set-active`;
	const bodyData = {
		active: data.active,
	};
	return apiClient.post<T.AuthSetUserActiveResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/user/${data.user}/update`;
	const bodyData = {
		name: data.name,
	};
	return apiClient.put<T.AuthUpdateUserResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/list-users";
	const bodyData = {
		search: data.search,
		filters: data.filters,
	};
	return apiClient.post<T.AuthUserListResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/permission/role";
	const bodyData = {
		identifier: data.identifier,
	};
	return apiClient.post<T.AuthPermissionCreateRoleResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/permission/permission/list";
	return apiClient.get<T.AuthPermissionPermissionListResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/permission/role/${data.role}`;
	return apiClient.delete<T.AuthPermissionRemoveRoleResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/permission/role/${data.role}/add-permissions`;
	const bodyData = {
		permissions: data.permissions,
	};
	return apiClient.post<T.AuthPermissionRoleAddPermissionsResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/permission/role/list";
	return apiClient.get<T.AuthPermissionRoleListResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/permission/role/${data.role}/remove-permissions`;
	const bodyData = {
		permissions: data.permissions,
	};
	return apiClient.post<T.AuthPermissionRoleRemovePermissionsResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/auth/permission/summary";
	return apiClient.get<T.AuthPermissionSummaryResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/permission/user/${data.user}/assign-role`;
	const bodyData = {
		role: data.role,
	};
	return apiClient.post<T.AuthPermissionUserAssignRoleResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/permission/user/${data.user}/remove-role`;
	const bodyData = {
		role: data.role,
	};
	return apiClient.post<T.AuthPermissionUserRemoveRoleResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = `/auth/permission/user/${data.user}/summary`;
	return apiClient.get<T.AuthPermissionUserSummaryResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/session/list";
	return apiClient.get<T.SessionListResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/session/logout";
	const bodyData = {
		sessionId: data.sessionId,
	};
	return apiClient.post<T.SessionLogoutResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/session/set-notification-token";
	const bodyData = {
		notificationToken: data.notificationToken,
		webPushInformation: data.webPushInformation,
	};
	return apiClient.post<T.SessionSetDeviceNotificationTokenResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Process newly created, updated and deleted exhibitions.
      
      If the event_type is create or update we schedule a job to determine which notifications we need to send. 
      Previously created jobs for this exhibition will be deleted so we send a notification with the updated data.
      
      If event_type is delete, we remove the job: no notifications should be sent.
      
        Errors:
        - `dato.webhookExhibition.forbidden` -> The provided token is not valid. 
      
	 * @see DatoWebhookExhibitionResponse200
	 */
export async function DatoWebhookExhibition(
	data: T.DatoWebhookExhibitionRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DatoWebhookExhibitionResponse200>> {
	const apiClient = getApiClient();
	const url = "/dato/webhook-exhibition";
	const bodyData = {
		environment: data.environment,
		entity_type: data.entity_type,
		event_type: data.event_type,
		entity: data.entity,
	};
	return apiClient.post<T.DatoWebhookExhibitionResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Exhibitions that are manually created in DatoCMS don't have an Ungerboeck ID (external_id) field.
      Therefore we use a Postgres sequence to generate an ID (> 2.000.000) to not interfere with Ungerboeck generated ids.
      We need this ID for the app to work properly, e.g. to bookmark the event as favorite.
      The generated ID will be sent back to DatoCMS to update the related entity.
      
        Errors:
        - `dato.webhookExhibition.forbidden` -> The provided token is not valid. 
      
	 * @see DatoWebhookExhibitionCreateResponse200
	 */
export async function DatoWebhookExhibitionCreate(
	data: T.DatoWebhookExhibitionCreateRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DatoWebhookExhibitionCreateResponse200>> {
	const apiClient = getApiClient();
	const url = "/dato/webhook-exhibition-create";
	const bodyData = {
		environment: data.environment,
		entity_type: data.entity_type,
		event_type: data.event_type,
		entity: data.entity,
	};
	return apiClient.post<T.DatoWebhookExhibitionCreateResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Should set / update the RSS feed URL for an exhibition.
      This field is used in a daily job to fetch the latest items of the feed and create news items in DatoCMS.
      
        Errors:
        - `dato.webhookExhibition.forbidden` -> The provided token is not valid. 
      
	 * @see DatoWebhookExhibitionRssFeedResponse200
	 */
export async function DatoWebhookExhibitionRssFeed(
	data: T.DatoWebhookExhibitionRssFeedRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DatoWebhookExhibitionRssFeedResponse200>> {
	const apiClient = getApiClient();
	const url = "/dato/webhook-exhibition-rss-feed";
	const bodyData = {
		environment: data.environment,
		entity_type: data.entity_type,
		event_type: data.event_type,
		entity: data.entity,
	};
	return apiClient.post<T.DatoWebhookExhibitionRssFeedResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Process newly created, updated and deleted notifications.
      
      If the event_type is create or update we schedule a job to determine which notifications we need to send. 
      Previously created jobs for this exhibition will be deleted so we send a notification with the updated data.
      
      If event_type is delete, we remove the job: no notifications should be sent.
      
        Errors:
        - `dato.webhookNotification.forbidden` -> The provided token is not valid. 
        - `dato.webhookNotification.expired` -> The send date of the notification is more than 20 minutes in the past. 
      
	 * @see DatoWebhookNotificationResponse200
	 */
export async function DatoWebhookNotification(
	data: T.DatoWebhookNotificationRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DatoWebhookNotificationResponse200>> {
	const apiClient = getApiClient();
	const url = "/dato/webhook-notification";
	const bodyData = {
		environment: data.environment,
		entity_type: data.entity_type,
		event_type: data.event_type,
		entity: data.entity,
	};
	return apiClient.post<T.DatoWebhookNotificationResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Create recurring schedule items in DatoCMS based on the provided start- and end-date and timeslots.
      In case of an update, we query the existing related schedule items and update only the content of each item, we do not alter the schedule.
      In case of a delete, we query the existing related schedule items and delete them.
      
      How many schedule items should be created is based on:
      - start date
      - end date
      - recurrence_on
      
      The date fields are used to determine what the first and last schedule item to create should be. 
      The recurrence_on field is used to determine the timeslots to create the schedule items for.
      Before creating a schedule item, we check if the combination of date and timeslot are within the provided start and end date.  
      
      Note: there is no validation if the provided date ranges are within the start date and end date of the exhibition.
      
      For example, for the following data:
      - start date: 2024-07-01T08:00:00+01:00
      - end date: 2024-07-03T18:00:00+01:00
      - recurrence_on: ["09:00", "10:00"]
      
      We create the following schedule items:
      - 2024-07-01T09:00:00+01:00
      - 2024-07-01T10:00:00+01:00
      - 2024-07-02T09:00:00+01:00
      - 2024-07-02T10:00:00+01:00
      - 2024-07-03T09:00:00+01:00
      - 2024-07-03T10:00:00+01:00
      
      Errors:
      - `dato.webhookRecurringScheduleItem.forbidden` -> The provided token is not valid.
      - `schedule.createItemsInBulk.invalidItemType` -> The DatoCMS item type could not be found
      - `schedule.createItemsInBulk.invalid` -> Create of schedule items in DatoCMS failed.
      - `schedule.updateItemsInBulk.invalid` -> Update of schedule items in DatoCMS failed.
      - `schedule.deleteItemsInBulk.invalid` -> Delete of schedule items in DatoCMS failed.
      
	 * @see DatoWebhookRecurringScheduleItemResponse200
	 */
export async function DatoWebhookRecurringScheduleItem(
	data: T.DatoWebhookRecurringScheduleItemRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DatoWebhookRecurringScheduleItemResponse200>> {
	const apiClient = getApiClient();
	const url = "/dato/webhook-recurring-schedule-item";
	const bodyData = {
		environment: data.environment,
		entity_type: data.entity_type,
		event_type: data.event_type,
		entity: data.entity,
	};
	return apiClient.post<T.DatoWebhookRecurringScheduleItemResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * Process newly created, updated and deleted schedule items.
      
      If the event_type is create or update we schedule a job to determine which notifications we need to send. 
      Previously created jobs for this schedule item will be deleted so we send a notifications with the updated data.
      
      If event_type is delete, we remove the job: no notifications should be sent.
      
        Errors:
        - `dato.webhookSchedule.forbidden` -> The provided token is not valid. 
      
	 * @see DatoWebhookScheduleResponse200
	 */
export async function DatoWebhookSchedule(
	data: T.DatoWebhookScheduleRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.DatoWebhookScheduleResponse200>> {
	const apiClient = getApiClient();
	const url = "/dato/webhook-schedule";
	const bodyData = {
		environment: data.environment,
		entity_type: data.entity_type,
		event_type: data.event_type,
		entity: data.entity,
	};
	return apiClient.post<T.DatoWebhookScheduleResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Delete the exhibition and all related exhibitors from DatoCMS and the database.
        
        Errors:
        - `exhibition.sync.forbidden` -> The provided token is not valid.
        - `exhibition.delete.unknown` -> Can't find the exhibition.
	 * @param params.id
	 * @see ExhibitionDeleteResponse200
	 */
export async function ExhibitionDelete(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitionDeleteResponse200>> {
	const apiClient = getApiClient();
	const url = `/exhibition/sync/${data.id}/delete`;
	return apiClient.delete<T.ExhibitionDeleteResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Mark an exhibition as favorite for the logged in user. If it was already favorite it will be removed as favorite.
        
        Error(s):
        - `exhibition.favorite.notFound` -> Exhibition does not exists
        
	 * @param params.id
	 * @see ExhibitionFavoriteResponse200
	 */
export async function ExhibitionFavorite(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitionFavoriteResponse200>> {
	const apiClient = getApiClient();
	const url = `/exhibition/${data.id}/favorite`;
	return apiClient.post<T.ExhibitionFavoriteResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Create and/or update exhibitions.
        
        A valid JAARBEURS_SYNC_TOKEN should be sent in the headers as X-Jaarbeurs-Sync-Token.
        
        Errors:
        - `exhibition.sync.forbidden` -> The provided token is not valid.
        
	 * @see ExhibitionSyncResponse200
	 */
export async function ExhibitionSync(
	data: T.ExhibitionSyncRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitionSyncResponse200>> {
	const apiClient = getApiClient();
	const url = "/exhibition/sync";
	const bodyData = {
		exhibitions: data.exhibitions,
	};
	return apiClient.post<T.ExhibitionSyncResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Sync all exhibitions stored in the database to DatoCMS. Only works in the staging environment.
        
        A valid JAARBEURS_SYNC_TOKEN should be sent in the headers as X-Jaarbeurs-Sync-Token.
        
        Errors:
        - `exhibition.syncAll.forbidden` -> The provided token is not valid.
        
	 * @see ExhibitionSyncAllResponse200
	 */
export async function ExhibitionSyncAll(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitionSyncAllResponse200>> {
	const apiClient = getApiClient();
	const url = "/exhibition/syncAll";
	return apiClient.post<T.ExhibitionSyncAllResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Delete the exhibitor and its logo from DatoCMS and the database.
        
        Errors:
        - `exhibitor.delete.forbidden` -> The provided token is not valid.
        - `exhibitor.delete.unknown` -> Can't find the exhibitor.
	 * @param params.id
	 * @see ExhibitorDeleteResponse200
	 */
export async function ExhibitorDelete(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitorDeleteResponse200>> {
	const apiClient = getApiClient();
	const url = `/exhibitor/sync/${data.id}/delete`;
	return apiClient.delete<T.ExhibitorDeleteResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Mark an exhibitor as favorite for the logged in user. If it was already favorite it will be removed as favorite.
        
        Error(s):
        - `exhibitor.favorite.notFound` -> Exhibitor does not exists
        
	 * @param params.id
	 * @see ExhibitorFavoriteResponse200
	 */
export async function ExhibitorFavorite(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitorFavoriteResponse200>> {
	const apiClient = getApiClient();
	const url = `/exhibitor/${data.id}/favorite`;
	return apiClient.post<T.ExhibitorFavoriteResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Get the logo of an exhibitor in order to upload it to DatoCMS.
        The Jaarbeurs app will show the logos stored in DatoCMS for each exhibitor. 
        
	 * @param params.id
	 * @see ExhibitorLogoResponse200
	 */
export async function ExhibitorLogo(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitorLogoResponse200>> {
	const apiClient = getApiClient();
	const url = `/exhibitor/${data.id}/logo`;
	return apiClient.get<T.ExhibitorLogoResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Sends an e-mail to the exhibitor with a reply-to the e-mail address of the user.
        Additionally, a copy of the message is send to the user.
        
        Errors:
        - `exhibitor.sendMail.notFound` -> Exhibitor does not exists
        - `exhibitor.sendMail.noEmailAddress` -> Exhibitor does not have an e-mail address.
        - `exhibitor.sendMail.failed` -> Something went wrong while sending an e-mail.
        
	 * @param params.id
	 * @see ExhibitorSendMailResponse200
	 */
export async function ExhibitorSendMail(
	data: T.ExhibitorSendMailRequest & { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitorSendMailResponse200>> {
	const apiClient = getApiClient();
	const url = `/exhibitor/${data.id}/send-mail`;
	const bodyData = {
		email: data.email,
		name: data.name,
		message: data.message,
	};
	return apiClient.post<T.ExhibitorSendMailResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Create and/or update exhibitors.
        
          A valid JAARBEURS_SYNC_TOKEN should be sent in the headers as X-Jaarbeurs-Sync-Token.
        
        Errors:
        - `exhibitor.sync.forbidden` -> The provided token is not valid.
        - `exhibition.sync.invalidExhibition` -> The provided exhibition is not valid.
        
	 * @see ExhibitorSyncResponse200
	 */
export async function ExhibitorSync(
	data: T.ExhibitorSyncRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitorSyncResponse200>> {
	const apiClient = getApiClient();
	const url = "/exhibitor/sync";
	const bodyData = {
		exhibitors: data.exhibitors,
	};
	return apiClient.post<T.ExhibitorSyncResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Sync all exhibitors stored in the database to DatoCMS. Only works in the staging environment.
        
        A valid JAARBEURS_SYNC_TOKEN should be sent in the headers as X-Jaarbeurs-Sync-Token.
        
        Errors:
        - `exhibitor.syncAll.forbidden` -> The provided token is not valid.
        
	 * @see ExhibitorSyncAllResponse200
	 */
export async function ExhibitorSyncAll(
	data?: undefined,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ExhibitorSyncAllResponse200>> {
	const apiClient = getApiClient();
	const url = "/exhibitor/syncAll";
	return apiClient.post<T.ExhibitorSyncAllResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/feature-flag/current";
	return apiClient.get<T.FeatureFlagCurrentResponse200>(url, {
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
	const apiClient = getApiClient();
	const url = "/multitenant/current";
	return apiClient.get<T.MultitenantCurrentResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Subscribe to a newsletter. The subscription is done by Nominow, we don't have any insights on who is (already) subscribed.
        The same email address can be subscribed multiple times.
        
          Error(s):
        - `newsletter.subscribe.failed` -> Newsletter subscription failed.
        
	 * @see NewsletterSubscribeResponse200
	 */
export async function NewsletterSubscribe(
	data: T.NewsletterSubscribeRequest,
	headers?: Record<string, string>
): Promise<AxiosResponse<T.NewsletterSubscribeResponse200>> {
	const apiClient = getApiClient();
	const url = "/newsletter/subscribe";
	const bodyData = {
		email: data.email,
		sourceCode: data.sourceCode,
		contactMomentTypeCode: data.contactMomentTypeCode,
	};
	return apiClient.post<T.NewsletterSubscribeResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Mark an schedule item as favorite for the logged in user. If it was already favorite it will be removed as favorite.
        
	 * @param params.id - We use the internal DatoCMS id here, as we don't sync schedule items to the database.
	 * @see ScheduleFavoriteResponse200
	 */
export async function ScheduleFavorite(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ScheduleFavoriteResponse200>> {
	const apiClient = getApiClient();
	const url = `/schedule/${data.id}/favorite`;
	return apiClient.post<T.ScheduleFavoriteResponse200>(url, {
		headers,
	});
}

/**
	 * 
        Mark a workshop item as favorite for the logged in user. 
        The user has to set date and time when he/she wants to visit the workshop.
        The workshop will be shown in the personal programme of the user.
        
	 * @param params.datoId - We use the internal DatoCMS id here, as we don't sync workshop items to the database.
	 * @see WorkshopFavoriteResponse200
	 */
export async function WorkshopFavorite(
	data: T.WorkshopFavoriteRequest & { datoId: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.WorkshopFavoriteResponse200>> {
	const apiClient = getApiClient();
	const url = `/workshop/${data.datoId}/favorite`;
	const bodyData = {
		date: data.date,
	};
	return apiClient.post<T.WorkshopFavoriteResponse200>(url, {
		data: bodyData,
		headers,
	});
}

/**
	 * 
        Delete a favorite workshop item.
        
         Errors:
        - `workshop.removeFavorite.notFound` -> The provided workshop item could not be found.
        
	 * @param params.datoId
	 * @param params.id
	 * @see WorkshopRemoveFavoriteResponse200
	 */
export async function WorkshopRemoveFavorite(
	data: { datoId: string; id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.WorkshopRemoveFavoriteResponse200>> {
	const apiClient = getApiClient();
	const url = `/workshop/${data.datoId}/favorite/${data.id}`;
	return apiClient.delete<T.WorkshopRemoveFavoriteResponse200>(url, {
		headers,
	});
}
