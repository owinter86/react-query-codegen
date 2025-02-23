import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type {
	AccountMeResponse200,
	AccountRegisterRequest,
	AccountRegisterResponse200,
	AccountRemoveResponse200,
	AccountUpdatePushNotificationsRequest,
	AccountUpdatePushNotificationsResponse200,
	AppRedirectAccountResetPasswordResponse200,
	AppRedirectAccountVerificationResponse200,
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
	AuthUpdateUserRequest,
	AuthUpdateUserResponse200,
	AuthUserListRequest,
	AuthUserListResponse200,
	DatoWebhookExhibitionCreateRequest,
	DatoWebhookExhibitionCreateResponse200,
	DatoWebhookExhibitionRequest,
	DatoWebhookExhibitionResponse200,
	DatoWebhookExhibitionRssFeedRequest,
	DatoWebhookExhibitionRssFeedResponse200,
	DatoWebhookNotificationRequest,
	DatoWebhookNotificationResponse200,
	DatoWebhookRecurringScheduleItemRequest,
	DatoWebhookRecurringScheduleItemResponse200,
	DatoWebhookScheduleRequest,
	DatoWebhookScheduleResponse200,
	ExhibitionDeleteResponse200,
	ExhibitionFavoriteResponse200,
	ExhibitionSyncAllResponse200,
	ExhibitionSyncRequest,
	ExhibitionSyncResponse200,
	ExhibitorDeleteResponse200,
	ExhibitorFavoriteResponse200,
	ExhibitorLogoResponse200,
	ExhibitorSendMailRequest,
	ExhibitorSendMailResponse200,
	ExhibitorSyncAllResponse200,
	ExhibitorSyncRequest,
	ExhibitorSyncResponse200,
	FeatureFlagCurrentResponse200,
	MultitenantCurrentResponse200,
	NewsletterSubscribeRequest,
	NewsletterSubscribeResponse200,
	ScheduleFavoriteResponse200,
	SessionListResponse200,
	SessionLogoutRequest,
	SessionLogoutResponse200,
	SessionSetDeviceNotificationTokenRequest,
	SessionSetDeviceNotificationTokenResponse200,
	TicketAddRequest,
	TicketAddResponse200,
	TicketRemoveResponse200,
	WorkshopFavoriteRequest,
	WorkshopFavoriteResponse200,
	WorkshopRemoveFavoriteResponse200,
} from "./jaarbeurs.schema";

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
	 * Fetch account information: the email address, favorites and tickets.
	 * @see AccountMeResponse200
	 */
	async AccountMe(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountMeResponse200>> {
		const url = "/account/me";
		return this.axios.get<AccountMeResponse200>(url, {
			headers,
		});
	}

	/**
	 * Register an account.
	 * @see AccountRegisterResponse200
	 */
	async AccountRegister(
		data: AccountRegisterRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountRegisterResponse200>> {
		const url = "/account/register";
		const bodyData = {
			email: data.email,
			password: data.password,
		};
		return this.axios.post<AccountRegisterResponse200>(url, {
			data: data,
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
	async AccountRemove(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountRemoveResponse200>> {
		const url = "/account/remove";
		return this.axios.delete<AccountRemoveResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
      Update the push notifications settings of the logged in user.
      
	 * @see AccountUpdatePushNotificationsResponse200
	 */
	async AccountUpdatePushNotifications(
		data: AccountUpdatePushNotificationsRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<AccountUpdatePushNotificationsResponse200>> {
		const url = "/account/me/update-push-notifications";
		const bodyData = {
			pushNotificationSettings: data.pushNotificationSettings,
		};
		return this.axios.put<AccountUpdatePushNotificationsResponse200>(url, {
			data: data,
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
	async TicketAdd(
		data: TicketAddRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<TicketAddResponse200>> {
		const url = "/ticket/add";
		const bodyData = {
			email: data.email,
			barcode: data.barcode,
			exhibitionId: data.exhibitionId,
		};
		return this.axios.post<TicketAddResponse200>(url, {
			data: data,
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
	async TicketRemove(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<TicketRemoveResponse200>> {
		const url = `/ticket/${data.id}/remove`;
		return this.axios.delete<TicketRemoveResponse200>(url, {
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
		const url = "/auth/password-based/forgot-password";
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
		const url = "/auth/password-based";
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
		const url = "/auth/password-based/login";
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
		const url = "/auth/password-based/reset-password";
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
		const url = "/auth/password-based/update-email";
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
		const url = "/auth/password-based/update-password";
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
		const url = "/auth/password-based/verify-email";
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
	 * 
        Redirect to the app to reset password. This is, for example, used in the emails that we sent, since most email clients flag unknown protocols used for deep-linking.
	 * @param params.token
	 * @see AppRedirectAccountResetPasswordResponse200
	 */
	async AppRedirectAccountResetPassword(
		data: { token: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AppRedirectAccountResetPasswordResponse200>> {
		const url = `/app-redirect/account/reset-password/${data.token}`;
		return this.axios.get<AppRedirectAccountResetPasswordResponse200>(url, {
			headers,
		});
	}

	/**
	 * 
        Redirect to the app after account is verified. This is, for example, used in the emails that we sent, since most email clients flag unknown protocols used for deep-linking.
	 * @param params.token
	 * @see AppRedirectAccountVerificationResponse200
	 */
	async AppRedirectAccountVerification(
		data: { token: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<AppRedirectAccountVerificationResponse200>> {
		const url = `/app-redirect/account/verification/${data.token}`;
		return this.axios.get<AppRedirectAccountVerificationResponse200>(url, {
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
		const url = "/auth/impersonate-stop-session";
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
		const url = "/auth/logout";
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
		const url = "/auth/me";
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
		const url = "/auth/refresh-tokens";
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
		const url = "/auth/list-users";
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
		const url = "/auth/permission/role";
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
		const url = "/auth/permission/permission/list";
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
		const url = "/auth/permission/role/list";
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
		const url = "/auth/permission/summary";
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
	 * 
    List all sessions for the currently logged-in user.
    
	 * @see SessionListResponse200
	 */
	async SessionList(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<SessionListResponse200>> {
		const url = "/session/list";
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
		const url = "/session/logout";
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
		const url = "/session/set-notification-token";
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
	 * Process newly created, updated and deleted exhibitions.
      
      If the event_type is create or update we schedule a job to determine which notifications we need to send. 
      Previously created jobs for this exhibition will be deleted so we send a notification with the updated data.
      
      If event_type is delete, we remove the job: no notifications should be sent.
      
        Errors:
        - `dato.webhookExhibition.forbidden` -> The provided token is not valid. 
      
	 * @see DatoWebhookExhibitionResponse200
	 */
	async DatoWebhookExhibition(
		data: DatoWebhookExhibitionRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DatoWebhookExhibitionResponse200>> {
		const url = "/dato/webhook-exhibition";
		const bodyData = {
			environment: data.environment,
			entity_type: data.entity_type,
			event_type: data.event_type,
			entity: data.entity,
		};
		return this.axios.post<DatoWebhookExhibitionResponse200>(url, {
			data: data,
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
	async DatoWebhookExhibitionCreate(
		data: DatoWebhookExhibitionCreateRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DatoWebhookExhibitionCreateResponse200>> {
		const url = "/dato/webhook-exhibition-create";
		const bodyData = {
			environment: data.environment,
			entity_type: data.entity_type,
			event_type: data.event_type,
			entity: data.entity,
		};
		return this.axios.post<DatoWebhookExhibitionCreateResponse200>(url, {
			data: data,
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
	async DatoWebhookExhibitionRssFeed(
		data: DatoWebhookExhibitionRssFeedRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DatoWebhookExhibitionRssFeedResponse200>> {
		const url = "/dato/webhook-exhibition-rss-feed";
		const bodyData = {
			environment: data.environment,
			entity_type: data.entity_type,
			event_type: data.event_type,
			entity: data.entity,
		};
		return this.axios.post<DatoWebhookExhibitionRssFeedResponse200>(url, {
			data: data,
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
	async DatoWebhookNotification(
		data: DatoWebhookNotificationRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DatoWebhookNotificationResponse200>> {
		const url = "/dato/webhook-notification";
		const bodyData = {
			environment: data.environment,
			entity_type: data.entity_type,
			event_type: data.event_type,
			entity: data.entity,
		};
		return this.axios.post<DatoWebhookNotificationResponse200>(url, {
			data: data,
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
	async DatoWebhookRecurringScheduleItem(
		data: DatoWebhookRecurringScheduleItemRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DatoWebhookRecurringScheduleItemResponse200>> {
		const url = "/dato/webhook-recurring-schedule-item";
		const bodyData = {
			environment: data.environment,
			entity_type: data.entity_type,
			event_type: data.event_type,
			entity: data.entity,
		};
		return this.axios.post<DatoWebhookRecurringScheduleItemResponse200>(url, {
			data: data,
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
	async DatoWebhookSchedule(
		data: DatoWebhookScheduleRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<DatoWebhookScheduleResponse200>> {
		const url = "/dato/webhook-schedule";
		const bodyData = {
			environment: data.environment,
			entity_type: data.entity_type,
			event_type: data.event_type,
			entity: data.entity,
		};
		return this.axios.post<DatoWebhookScheduleResponse200>(url, {
			data: data,
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
	async ExhibitionDelete(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitionDeleteResponse200>> {
		const url = `/exhibition/sync/${data.id}/delete`;
		return this.axios.delete<ExhibitionDeleteResponse200>(url, {
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
	async ExhibitionFavorite(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitionFavoriteResponse200>> {
		const url = `/exhibition/${data.id}/favorite`;
		return this.axios.post<ExhibitionFavoriteResponse200>(url, {
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
	async ExhibitionSync(
		data: ExhibitionSyncRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitionSyncResponse200>> {
		const url = "/exhibition/sync";
		const bodyData = {
			exhibitions: data.exhibitions,
		};
		return this.axios.post<ExhibitionSyncResponse200>(url, {
			data: data,
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
	async ExhibitionSyncAll(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitionSyncAllResponse200>> {
		const url = "/exhibition/syncAll";
		return this.axios.post<ExhibitionSyncAllResponse200>(url, {
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
	async ExhibitorDelete(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitorDeleteResponse200>> {
		const url = `/exhibitor/sync/${data.id}/delete`;
		return this.axios.delete<ExhibitorDeleteResponse200>(url, {
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
	async ExhibitorFavorite(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitorFavoriteResponse200>> {
		const url = `/exhibitor/${data.id}/favorite`;
		return this.axios.post<ExhibitorFavoriteResponse200>(url, {
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
	async ExhibitorLogo(
		data: { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitorLogoResponse200>> {
		const url = `/exhibitor/${data.id}/logo`;
		return this.axios.get<ExhibitorLogoResponse200>(url, {
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
	async ExhibitorSendMail(
		data: ExhibitorSendMailRequest & { id: number },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitorSendMailResponse200>> {
		const url = `/exhibitor/${data.id}/send-mail`;
		const bodyData = {
			email: data.email,
			name: data.name,
			message: data.message,
		};
		return this.axios.post<ExhibitorSendMailResponse200>(url, {
			data: data,
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
	async ExhibitorSync(
		data: ExhibitorSyncRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitorSyncResponse200>> {
		const url = "/exhibitor/sync";
		const bodyData = {
			exhibitors: data.exhibitors,
		};
		return this.axios.post<ExhibitorSyncResponse200>(url, {
			data: data,
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
	async ExhibitorSyncAll(
		data?: undefined,
		headers?: Record<string, string>
	): Promise<AxiosResponse<ExhibitorSyncAllResponse200>> {
		const url = "/exhibitor/syncAll";
		return this.axios.post<ExhibitorSyncAllResponse200>(url, {
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
		const url = "/feature-flag/current";
		return this.axios.get<FeatureFlagCurrentResponse200>(url, {
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
		const url = "/multitenant/current";
		return this.axios.get<MultitenantCurrentResponse200>(url, {
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
	async NewsletterSubscribe(
		data: NewsletterSubscribeRequest & {},
		headers?: Record<string, string>
	): Promise<AxiosResponse<NewsletterSubscribeResponse200>> {
		const url = "/newsletter/subscribe";
		const bodyData = {
			email: data.email,
			sourceCode: data.sourceCode,
			contactMomentTypeCode: data.contactMomentTypeCode,
		};
		return this.axios.post<NewsletterSubscribeResponse200>(url, {
			data: data,
			headers,
		});
	}

	/**
	 * 
        Mark an schedule item as favorite for the logged in user. If it was already favorite it will be removed as favorite.
        
	 * @param params.id - We use the internal DatoCMS id here, as we don't sync schedule items to the database.
	 * @see ScheduleFavoriteResponse200
	 */
	async ScheduleFavorite(
		data: { id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<ScheduleFavoriteResponse200>> {
		const url = `/schedule/${data.id}/favorite`;
		return this.axios.post<ScheduleFavoriteResponse200>(url, {
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
	async WorkshopFavorite(
		data: WorkshopFavoriteRequest & { datoId: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<WorkshopFavoriteResponse200>> {
		const url = `/workshop/${data.datoId}/favorite`;
		const bodyData = {
			date: data.date,
		};
		return this.axios.post<WorkshopFavoriteResponse200>(url, {
			data: data,
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
	async WorkshopRemoveFavorite(
		data: { datoId: string; id: string },
		headers?: Record<string, string>
	): Promise<AxiosResponse<WorkshopRemoveFavoriteResponse200>> {
		const url = `/workshop/${data.datoId}/favorite/${data.id}`;
		return this.axios.delete<WorkshopRemoveFavoriteResponse200>(url, {
			headers,
		});
	}
}
