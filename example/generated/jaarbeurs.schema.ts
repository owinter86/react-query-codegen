/* Generated TypeScript Definitions */

export interface AppError {
	info?: Record<string, any>;
	key?: string;
	status?: number;
	requestId?: string;
}

export interface AccountMeResponse {
	email: BackendEmail;
	favorites: {
		exhibitions: Array<number>;
		exhibitors: Array<number>;
		schedule: Array<string>;
		workshops: Array<{
			id: string;
			datoId: string;
			date: string;
		}>;
	};
	tickets: Array<TicketItem>;
	pushNotificationSettings: AccountPushNotificationSettings;
}

/**
 * Relatively free-form email type. Accepting most valid emails. Emails are case-insensitive.
 */
export type BackendEmail = string;

export interface TicketItem {
	id: string;
	barcode: string;
	exhibition: string;
	exhibitionId: number;
	title: string;
	subtitle?: string;
	type: string;
	ticketHolderName?: string;
}

export interface AccountPushNotificationSettings {
	locationBased: boolean;
	timeBased: boolean;
	favoriteBased: boolean;
}

export interface AccountRegisterBody {
	email: BackendEmail;
	password: AuthPasswordBasedPassword;
}

/**
 * Free form password types. Setting a reasonable limit to 512 characters, allowing password sentences and generated passwords.
 */
export type AuthPasswordBasedPassword = string;

export type AccountRegisterResponse = {};

export type AccountRemoveResponse = {};

export interface AccountUpdatePushNotificationsBody {
	pushNotificationSettings: AccountPushNotificationSettings;
}

export type AccountUpdatePushNotificationsResponse = {};

export interface TicketAddBody {
	email: BackendEmail;
	barcode: string;
	exhibitionId: number;
}

export interface TicketAddResponse {
	ticket: TicketItem;
}

export type TicketRemoveResponse = {};

export interface AuthPasswordBasedForgotPasswordBody {
	email: AuthPasswordBasedEmail;
}

/**
 * Relatively free-form email type. Accepting most valid emails. Emails are case-insensitive.
 */
export type AuthPasswordBasedEmail = string;

export interface AuthPasswordBasedForgotPasswordResponse {
	success: boolean;
}

export interface AuthPasswordBasedListEmailsResponse {
	emails: Array<{
		email: AuthPasswordBasedEmail;
		isVerified: boolean;
		verifiedAt?: string;
		createdAt: string;
	}>;
}

export interface AuthPasswordBasedLoginBody {
	email: AuthPasswordBasedEmail;
	password: AuthPasswordBasedPassword;
	device?: SessionLoginDevice;
}

export interface SessionLoginDevice {
	platform: "apple" | "android" | "desktop" | "other";
	name: string;
	notificationToken?: string;
	webPushInformation?: SessionWebPushInformation;
}

/**
 * Web push information object. This is the result of 'PushSubscription.toJSON()'.
 */
export interface SessionWebPushInformation {
	endpoint: string;
	keys: {
		p256dh: string;
		auth: string;
	};
}

export interface AuthPasswordBasedTokenPair {
	accessToken: string;
	refreshToken: string;
}

export interface AuthPasswordBasedResetPasswordBody {
	resetToken: string;
	password: AuthPasswordBasedPassword;
}

export interface AuthPasswordBasedResetPasswordResponse {
	success: boolean;
}

export interface AuthPasswordBasedUpdateEmailBody {
	email: AuthPasswordBasedEmail;
}

export interface AuthPasswordBasedUpdateEmailResponse {
	success: boolean;
}

export interface AuthPasswordBasedUpdatePasswordBody {
	password: AuthPasswordBasedPassword;
}

export interface AuthPasswordBasedUpdatePasswordResponse {
	success: boolean;
}

export interface AuthPasswordBasedVerifyEmailBody {
	verifyToken: string;
	device?: SessionLoginDevice;
}

export type AppRedirectAccountResetPasswordResponse = string;

export type AppRedirectAccountVerificationResponse = string;

export interface AuthGetUserResponse {
	user: AuthUserSummary;
}

export interface AuthUserSummary {
	id: string;
	name?: string;
	lastLogin: string;
	passwordLogin?: {
		email: BackendEmail;
		createdAt: string;
		verifiedAt?: string;
	};
	roles: Array<{
		id: string;
		identifier: string;
	}>;
	permissions: Array<AuthPermissionIdentifier>;
	createdAt: string;
	deletedAt?: string;
}

export type AuthPermissionIdentifier =
	| "auth:user:list"
	| "auth:user:manage"
	| "auth:permission:manage"
	| "lightbase:internal";

export interface AuthImpersonateStopSessionResponse {
	success: boolean;
}

export interface AuthLogoutResponse {
	success: boolean;
}

export interface AuthMeResponse {
	session: AuthSession;
	user?: AuthUserSummary;
}

export interface AuthSession {
	type: AuthSessionType;
	loginType: AuthLoginType;
	userId: string;
	impersonatorUserId?: string;
}

export type AuthSessionType = "checkTwoStep" | "user" | "passwordBasedUpdatePassword";

export type AuthLoginType = "passwordBased";

export interface AuthRefreshTokensBody {
	refreshToken: string;
}

export interface AuthTokenPair {
	accessToken: string;
	refreshToken: string;
}

export interface AuthSetUserActiveBody {
	active: boolean;
}

export interface AuthSetUserActiveResponse {
	success: boolean;
}

export interface AuthUpdateUserBody {
	name?: string;
}

export interface AuthUpdateUserResponse {
	success: boolean;
}

export interface AuthUserListBody {
	search?: {
		name?: string;
	};
	filters?: {
		passwordLoginExists?: boolean;
		includeSoftDeletedUsers?: boolean;
	};
}

export interface AuthUserListResponse {
	users: Array<AuthUserSummary>;
}

export interface AuthPermissionCreateRoleBody {
	identifier: string;
}

export interface AuthPermissionCreateRoleResponse {
	role: {
		id: string;
		identifier: string;
	};
}

export interface AuthPermissionPermissionListResponse {
	permissions: Array<{
		id: string;
		identifier: AuthPermissionIdentifier;
	}>;
}

export interface AuthPermissionRemoveRoleResponse {
	success: boolean;
}

export interface AuthPermissionRoleAddPermissionsBody {
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthPermissionRoleAddPermissionsResponse {
	success: boolean;
}

export interface AuthPermissionRoleListResponse {
	roles: Array<{
		id: string;
		identifier: string;
		isEditable: boolean;
		permissions: Array<AuthPermissionIdentifier>;
	}>;
}

export interface AuthPermissionRoleRemovePermissionsBody {
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthPermissionRoleRemovePermissionsResponse {
	success: boolean;
}

export interface AuthPermissionSummaryResponse {
	roles: Array<{
		id: string;
		identifier: string;
	}>;
	permissions: Array<AuthPermissionIdentifier>;
}

export interface AuthPermissionUserAssignRoleBody {
	role: string;
}

export interface AuthPermissionUserAssignRoleResponse {
	success: boolean;
}

export interface AuthPermissionUserRemoveRoleBody {
	role: string;
}

export interface AuthPermissionUserRemoveRoleResponse {
	success: boolean;
}

export interface AuthPermissionUserSummaryResponse {
	roles: Array<{
		id: string;
		identifier: string;
	}>;
	permissions: Array<AuthPermissionIdentifier>;
}

export interface SessionListResponse {
	sessions: Array<SessionItem>;
}

export interface SessionItem {
	sessionId: string;
	isCurrentSession: boolean;
	device?: SessionLoginDevice;
}

export interface SessionLogoutBody {
	sessionId: string;
}

export type SessionLogoutResponse = {};

export interface SessionSetDeviceNotificationTokenBody {
	notificationToken?: string;
	webPushInformation?: SessionWebPushInformation;
}

export type SessionSetDeviceNotificationTokenResponse = {};

export interface DatoWebhookExhibitionBody {
	environment: string;
	entity_type: string;
	event_type: string;
	entity: {
		id: string;
		type: string;
		attributes: {
			external_id?: string;
			name: string;
			start_date: string;
			description?: string;
		};
	};
}

export type DatoWebhookExhibitionResponse = {};

export interface DatoWebhookExhibitionCreateBody {
	environment: string;
	entity_type: string;
	event_type: string;
	entity: {
		id: string;
		type: string;
		attributes: {
			name: string;
			external_id?: string;
			start_date: string;
			end_date: string;
			description?: string;
			website_url?: string;
		};
	};
}

export type DatoWebhookExhibitionCreateResponse = {};

export interface DatoWebhookExhibitionRssFeedBody {
	environment: string;
	entity_type: string;
	event_type: string;
	entity: {
		id: string;
		type: string;
		attributes: {
			external_id?: string;
			name: string;
			rss_feed_url?: string;
		};
	};
}

export type DatoWebhookExhibitionRssFeedResponse = {};

export interface DatoWebhookNotificationBody {
	environment: string;
	entity_type: string;
	event_type: string;
	entity: {
		id: string;
		type: string;
		attributes: {
			title: string;
			content: string;
			send_date: string;
			url?: string;
		};
	};
}

export type DatoWebhookNotificationResponse = {};

export interface DatoWebhookRecurringScheduleItemBody {
	environment: string;
	entity_type: string;
	event_type: string;
	entity: {
		id: string;
		type: string;
		attributes: {
			name: string;
			description: string;
			exhibition: string;
			start_date: string;
			end_date: string;
			duration: string;
			location: string;
			speaker?: Array<string>;
			program_item_type?: string;
			category?: string;
			photo?: {
				upload_id: string;
			};
			media: Array<{
				upload_id: string;
			}>;
			highlight: boolean;
			recurrence_on: string;
		};
	};
}

export type DatoWebhookRecurringScheduleItemResponse = {};

export interface DatoWebhookScheduleBody {
	environment: string;
	entity_type: string;
	event_type: string;
	entity: {
		id: string;
		type: string;
		attributes: {
			name: string;
			description?: string;
			exhibition: string;
			start_date: string;
			end_time: string;
			duration?: string;
			location?: string;
		};
	};
}

export type DatoWebhookScheduleResponse = {};

export type ExhibitionDeleteResponse = {};

export interface ExhibitionFavoriteResponse {
	isFavorite: boolean;
}

export interface ExhibitionSyncBody {
	exhibitions: Array<ExhibitionItem>;
}

export interface ExhibitionItem {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
	cmApiToken?: string;
	description?: string;
	website?: string;
	categoryGroup?: ExhibitionCategoryGroup;
}

export type ExhibitionCategoryGroup = Array<{
	id: string;
	name: string;
	category: Array<{
		id: string;
		nameEN: string;
		nameNL: string;
	}>;
}>;

export type ExhibitionSyncResponse = {};

export type ExhibitionSyncAllResponse = {};

export type ExhibitorDeleteResponse = {};

export interface ExhibitorFavoriteResponse {
	isFavorite: boolean;
}

export type ExhibitorLogoResponse = string;

export interface ExhibitorSendMailBody {
	email: BackendEmail;
	name: string;
	message: string;
}

export type ExhibitorSendMailResponse = {};

export interface ExhibitorSyncBody {
	exhibitors: Array<ExhibitorSyncItem>;
}

export interface ExhibitorSyncItem {
	id: number;
	name: string;
	exhibition: number;
	description?: string;
	website?: string;
	boothNumber?: string;
	logo?: string;
	categories?: Array<string>;
	socialMediaUrls?: ExhibitorSocialMediaUrls;
	email?: BackendEmail;
}

export type ExhibitorSocialMediaUrls = Array<{
	name: "tiktok" | "twitter" | "youtube" | "facebook" | "instagram" | "linkedin" | "pinterest";
	url?: string;
}>;

export type ExhibitorSyncResponse = {};

export type ExhibitorSyncAllResponse = {};

export interface FeatureFlagCurrentResponse {
	__FEATURE_LPC_EXAMPLE_FLAG: boolean;
}

export interface MultitenantCurrentResponse {
	tenant: {
		id: string;
		name: string;
		data?: BackendTenantData;
	};
}

export type BackendTenantData = any;

export interface NewsletterSubscribeBody {
	email: BackendEmail;
	sourceCode: string;
	contactMomentTypeCode: string;
}

export type NewsletterSubscribeResponse = {};

export interface ScheduleFavoriteResponse {
	isFavorite: boolean;
}

export interface WorkshopFavoriteBody {
	date: string;
}

export type WorkshopFavoriteResponse = {};

export type WorkshopRemoveFavoriteResponse = {};

export type AccountMeResponse200 = AccountMeResponse;

export type AccountMeResponse400 = AppError;

export type AccountMeResponse401 = AppError;

export type AccountMeResponse404 = AppError;

export type AccountMeResponse405 = AppError;

export type AccountMeResponse500 = AppError;

export type AccountRegisterRequest = AccountRegisterBody;

export type AccountRegisterResponse200 = AccountRegisterResponse;

export type AccountRegisterResponse400 = AppError;

export type AccountRegisterResponse401 = AppError;

export type AccountRegisterResponse404 = AppError;

export type AccountRegisterResponse405 = AppError;

export type AccountRegisterResponse500 = AppError;

export type AccountRemoveResponse200 = AccountRemoveResponse;

export type AccountRemoveResponse400 = AppError;

export type AccountRemoveResponse401 = AppError;

export type AccountRemoveResponse404 = AppError;

export type AccountRemoveResponse405 = AppError;

export type AccountRemoveResponse500 = AppError;

export type AccountUpdatePushNotificationsRequest = AccountUpdatePushNotificationsBody;

export type AccountUpdatePushNotificationsResponse200 = AccountUpdatePushNotificationsResponse;

export type AccountUpdatePushNotificationsResponse400 = AppError;

export type AccountUpdatePushNotificationsResponse401 = AppError;

export type AccountUpdatePushNotificationsResponse404 = AppError;

export type AccountUpdatePushNotificationsResponse405 = AppError;

export type AccountUpdatePushNotificationsResponse500 = AppError;

export type TicketAddRequest = TicketAddBody;

export type TicketAddResponse200 = TicketAddResponse;

export type TicketAddResponse400 = AppError;

export type TicketAddResponse401 = AppError;

export type TicketAddResponse404 = AppError;

export type TicketAddResponse405 = AppError;

export type TicketAddResponse500 = AppError;

export type TicketRemoveResponse200 = TicketRemoveResponse;

export type TicketRemoveResponse400 = AppError;

export type TicketRemoveResponse401 = AppError;

export type TicketRemoveResponse404 = AppError;

export type TicketRemoveResponse405 = AppError;

export type TicketRemoveResponse500 = AppError;

export type AuthPasswordBasedForgotPasswordRequest = AuthPasswordBasedForgotPasswordBody;

export type AuthPasswordBasedForgotPasswordResponse200 = AuthPasswordBasedForgotPasswordResponse;

export type AuthPasswordBasedForgotPasswordResponse400 = AppError;

export type AuthPasswordBasedForgotPasswordResponse401 = AppError;

export type AuthPasswordBasedForgotPasswordResponse404 = AppError;

export type AuthPasswordBasedForgotPasswordResponse405 = AppError;

export type AuthPasswordBasedForgotPasswordResponse500 = AppError;

export type AuthPasswordBasedListEmailsResponse200 = AuthPasswordBasedListEmailsResponse;

export type AuthPasswordBasedListEmailsResponse400 = AppError;

export type AuthPasswordBasedListEmailsResponse401 = AppError;

export type AuthPasswordBasedListEmailsResponse404 = AppError;

export type AuthPasswordBasedListEmailsResponse405 = AppError;

export type AuthPasswordBasedListEmailsResponse500 = AppError;

export type AuthPasswordBasedLoginRequest = AuthPasswordBasedLoginBody;

export type AuthPasswordBasedLoginResponse200 = AuthPasswordBasedTokenPair;

export type AuthPasswordBasedLoginResponse400 = AppError;

export type AuthPasswordBasedLoginResponse401 = AppError;

export type AuthPasswordBasedLoginResponse404 = AppError;

export type AuthPasswordBasedLoginResponse405 = AppError;

export type AuthPasswordBasedLoginResponse500 = AppError;

export type AuthPasswordBasedResetPasswordRequest = AuthPasswordBasedResetPasswordBody;

export type AuthPasswordBasedResetPasswordResponse200 = AuthPasswordBasedResetPasswordResponse;

export type AuthPasswordBasedResetPasswordResponse400 = AppError;

export type AuthPasswordBasedResetPasswordResponse401 = AppError;

export type AuthPasswordBasedResetPasswordResponse404 = AppError;

export type AuthPasswordBasedResetPasswordResponse405 = AppError;

export type AuthPasswordBasedResetPasswordResponse500 = AppError;

export type AuthPasswordBasedUpdateEmailRequest = AuthPasswordBasedUpdateEmailBody;

export type AuthPasswordBasedUpdateEmailResponse200 = AuthPasswordBasedUpdateEmailResponse;

export type AuthPasswordBasedUpdateEmailResponse400 = AppError;

export type AuthPasswordBasedUpdateEmailResponse401 = AppError;

export type AuthPasswordBasedUpdateEmailResponse404 = AppError;

export type AuthPasswordBasedUpdateEmailResponse405 = AppError;

export type AuthPasswordBasedUpdateEmailResponse500 = AppError;

export type AuthPasswordBasedUpdatePasswordRequest = AuthPasswordBasedUpdatePasswordBody;

export type AuthPasswordBasedUpdatePasswordResponse200 = AuthPasswordBasedUpdatePasswordResponse;

export type AuthPasswordBasedUpdatePasswordResponse400 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse401 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse404 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse405 = AppError;

export type AuthPasswordBasedUpdatePasswordResponse500 = AppError;

export type AuthPasswordBasedVerifyEmailRequest = AuthPasswordBasedVerifyEmailBody;

export type AuthPasswordBasedVerifyEmailResponse200 = AuthPasswordBasedTokenPair;

export type AuthPasswordBasedVerifyEmailResponse400 = AppError;

export type AuthPasswordBasedVerifyEmailResponse401 = AppError;

export type AuthPasswordBasedVerifyEmailResponse404 = AppError;

export type AuthPasswordBasedVerifyEmailResponse405 = AppError;

export type AuthPasswordBasedVerifyEmailResponse500 = AppError;

export type AppRedirectAccountResetPasswordResponse200 = AppRedirectAccountResetPasswordResponse;

export type AppRedirectAccountResetPasswordResponse400 = AppError;

export type AppRedirectAccountResetPasswordResponse401 = AppError;

export type AppRedirectAccountResetPasswordResponse404 = AppError;

export type AppRedirectAccountResetPasswordResponse405 = AppError;

export type AppRedirectAccountResetPasswordResponse500 = AppError;

export type AppRedirectAccountVerificationResponse200 = AppRedirectAccountVerificationResponse;

export type AppRedirectAccountVerificationResponse400 = AppError;

export type AppRedirectAccountVerificationResponse401 = AppError;

export type AppRedirectAccountVerificationResponse404 = AppError;

export type AppRedirectAccountVerificationResponse405 = AppError;

export type AppRedirectAccountVerificationResponse500 = AppError;

export type AuthGetUserResponse200 = AuthGetUserResponse;

export type AuthGetUserResponse400 = AppError;

export type AuthGetUserResponse401 = AppError;

export type AuthGetUserResponse404 = AppError;

export type AuthGetUserResponse405 = AppError;

export type AuthGetUserResponse500 = AppError;

export type AuthImpersonateStopSessionResponse200 = AuthImpersonateStopSessionResponse;

export type AuthImpersonateStopSessionResponse400 = AppError;

export type AuthImpersonateStopSessionResponse401 = AppError;

export type AuthImpersonateStopSessionResponse404 = AppError;

export type AuthImpersonateStopSessionResponse405 = AppError;

export type AuthImpersonateStopSessionResponse500 = AppError;

export type AuthLogoutResponse200 = AuthLogoutResponse;

export type AuthLogoutResponse400 = AppError;

export type AuthLogoutResponse401 = AppError;

export type AuthLogoutResponse404 = AppError;

export type AuthLogoutResponse405 = AppError;

export type AuthLogoutResponse500 = AppError;

export type AuthMeResponse200 = AuthMeResponse;

export type AuthMeResponse400 = AppError;

export type AuthMeResponse401 = AppError;

export type AuthMeResponse404 = AppError;

export type AuthMeResponse405 = AppError;

export type AuthMeResponse500 = AppError;

export type AuthRefreshTokensRequest = AuthRefreshTokensBody;

export type AuthRefreshTokensResponse200 = AuthTokenPair;

export type AuthRefreshTokensResponse400 = AppError;

export type AuthRefreshTokensResponse401 = AppError;

export type AuthRefreshTokensResponse404 = AppError;

export type AuthRefreshTokensResponse405 = AppError;

export type AuthRefreshTokensResponse500 = AppError;

export type AuthSetUserActiveRequest = AuthSetUserActiveBody;

export type AuthSetUserActiveResponse200 = AuthSetUserActiveResponse;

export type AuthSetUserActiveResponse400 = AppError;

export type AuthSetUserActiveResponse401 = AppError;

export type AuthSetUserActiveResponse404 = AppError;

export type AuthSetUserActiveResponse405 = AppError;

export type AuthSetUserActiveResponse500 = AppError;

export type AuthUpdateUserRequest = AuthUpdateUserBody;

export type AuthUpdateUserResponse200 = AuthUpdateUserResponse;

export type AuthUpdateUserResponse400 = AppError;

export type AuthUpdateUserResponse401 = AppError;

export type AuthUpdateUserResponse404 = AppError;

export type AuthUpdateUserResponse405 = AppError;

export type AuthUpdateUserResponse500 = AppError;

export type AuthUserListRequest = AuthUserListBody;

export type AuthUserListResponse200 = AuthUserListResponse;

export type AuthUserListResponse400 = AppError;

export type AuthUserListResponse401 = AppError;

export type AuthUserListResponse404 = AppError;

export type AuthUserListResponse405 = AppError;

export type AuthUserListResponse500 = AppError;

export type AuthPermissionCreateRoleRequest = AuthPermissionCreateRoleBody;

export type AuthPermissionCreateRoleResponse200 = AuthPermissionCreateRoleResponse;

export type AuthPermissionCreateRoleResponse400 = AppError;

export type AuthPermissionCreateRoleResponse401 = AppError;

export type AuthPermissionCreateRoleResponse404 = AppError;

export type AuthPermissionCreateRoleResponse405 = AppError;

export type AuthPermissionCreateRoleResponse500 = AppError;

export type AuthPermissionPermissionListResponse200 = AuthPermissionPermissionListResponse;

export type AuthPermissionPermissionListResponse400 = AppError;

export type AuthPermissionPermissionListResponse401 = AppError;

export type AuthPermissionPermissionListResponse404 = AppError;

export type AuthPermissionPermissionListResponse405 = AppError;

export type AuthPermissionPermissionListResponse500 = AppError;

export type AuthPermissionRemoveRoleResponse200 = AuthPermissionRemoveRoleResponse;

export type AuthPermissionRemoveRoleResponse400 = AppError;

export type AuthPermissionRemoveRoleResponse401 = AppError;

export type AuthPermissionRemoveRoleResponse404 = AppError;

export type AuthPermissionRemoveRoleResponse405 = AppError;

export type AuthPermissionRemoveRoleResponse500 = AppError;

export type AuthPermissionRoleAddPermissionsRequest = AuthPermissionRoleAddPermissionsBody;

export type AuthPermissionRoleAddPermissionsResponse200 = AuthPermissionRoleAddPermissionsResponse;

export type AuthPermissionRoleAddPermissionsResponse400 = AppError;

export type AuthPermissionRoleAddPermissionsResponse401 = AppError;

export type AuthPermissionRoleAddPermissionsResponse404 = AppError;

export type AuthPermissionRoleAddPermissionsResponse405 = AppError;

export type AuthPermissionRoleAddPermissionsResponse500 = AppError;

export type AuthPermissionRoleListResponse200 = AuthPermissionRoleListResponse;

export type AuthPermissionRoleListResponse400 = AppError;

export type AuthPermissionRoleListResponse401 = AppError;

export type AuthPermissionRoleListResponse404 = AppError;

export type AuthPermissionRoleListResponse405 = AppError;

export type AuthPermissionRoleListResponse500 = AppError;

export type AuthPermissionRoleRemovePermissionsRequest = AuthPermissionRoleRemovePermissionsBody;

export type AuthPermissionRoleRemovePermissionsResponse200 = AuthPermissionRoleRemovePermissionsResponse;

export type AuthPermissionRoleRemovePermissionsResponse400 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse401 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse404 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse405 = AppError;

export type AuthPermissionRoleRemovePermissionsResponse500 = AppError;

export type AuthPermissionSummaryResponse200 = AuthPermissionSummaryResponse;

export type AuthPermissionSummaryResponse400 = AppError;

export type AuthPermissionSummaryResponse401 = AppError;

export type AuthPermissionSummaryResponse404 = AppError;

export type AuthPermissionSummaryResponse405 = AppError;

export type AuthPermissionSummaryResponse500 = AppError;

export type AuthPermissionUserAssignRoleRequest = AuthPermissionUserAssignRoleBody;

export type AuthPermissionUserAssignRoleResponse200 = AuthPermissionUserAssignRoleResponse;

export type AuthPermissionUserAssignRoleResponse400 = AppError;

export type AuthPermissionUserAssignRoleResponse401 = AppError;

export type AuthPermissionUserAssignRoleResponse404 = AppError;

export type AuthPermissionUserAssignRoleResponse405 = AppError;

export type AuthPermissionUserAssignRoleResponse500 = AppError;

export type AuthPermissionUserRemoveRoleRequest = AuthPermissionUserRemoveRoleBody;

export type AuthPermissionUserRemoveRoleResponse200 = AuthPermissionUserRemoveRoleResponse;

export type AuthPermissionUserRemoveRoleResponse400 = AppError;

export type AuthPermissionUserRemoveRoleResponse401 = AppError;

export type AuthPermissionUserRemoveRoleResponse404 = AppError;

export type AuthPermissionUserRemoveRoleResponse405 = AppError;

export type AuthPermissionUserRemoveRoleResponse500 = AppError;

export type AuthPermissionUserSummaryResponse200 = AuthPermissionUserSummaryResponse;

export type AuthPermissionUserSummaryResponse400 = AppError;

export type AuthPermissionUserSummaryResponse401 = AppError;

export type AuthPermissionUserSummaryResponse404 = AppError;

export type AuthPermissionUserSummaryResponse405 = AppError;

export type AuthPermissionUserSummaryResponse500 = AppError;

export type SessionListResponse200 = SessionListResponse;

export type SessionListResponse400 = AppError;

export type SessionListResponse401 = AppError;

export type SessionListResponse404 = AppError;

export type SessionListResponse405 = AppError;

export type SessionListResponse500 = AppError;

export type SessionLogoutRequest = SessionLogoutBody;

export type SessionLogoutResponse200 = SessionLogoutResponse;

export type SessionLogoutResponse400 = AppError;

export type SessionLogoutResponse401 = AppError;

export type SessionLogoutResponse404 = AppError;

export type SessionLogoutResponse405 = AppError;

export type SessionLogoutResponse500 = AppError;

export type SessionSetDeviceNotificationTokenRequest = SessionSetDeviceNotificationTokenBody;

export type SessionSetDeviceNotificationTokenResponse200 = SessionSetDeviceNotificationTokenResponse;

export type SessionSetDeviceNotificationTokenResponse400 = AppError;

export type SessionSetDeviceNotificationTokenResponse401 = AppError;

export type SessionSetDeviceNotificationTokenResponse404 = AppError;

export type SessionSetDeviceNotificationTokenResponse405 = AppError;

export type SessionSetDeviceNotificationTokenResponse500 = AppError;

export type DatoWebhookExhibitionRequest = DatoWebhookExhibitionBody;

export type DatoWebhookExhibitionResponse200 = DatoWebhookExhibitionResponse;

export type DatoWebhookExhibitionResponse400 = AppError;

export type DatoWebhookExhibitionResponse401 = AppError;

export type DatoWebhookExhibitionResponse404 = AppError;

export type DatoWebhookExhibitionResponse405 = AppError;

export type DatoWebhookExhibitionResponse500 = AppError;

export type DatoWebhookExhibitionCreateRequest = DatoWebhookExhibitionCreateBody;

export type DatoWebhookExhibitionCreateResponse200 = DatoWebhookExhibitionCreateResponse;

export type DatoWebhookExhibitionCreateResponse400 = AppError;

export type DatoWebhookExhibitionCreateResponse401 = AppError;

export type DatoWebhookExhibitionCreateResponse404 = AppError;

export type DatoWebhookExhibitionCreateResponse405 = AppError;

export type DatoWebhookExhibitionCreateResponse500 = AppError;

export type DatoWebhookExhibitionRssFeedRequest = DatoWebhookExhibitionRssFeedBody;

export type DatoWebhookExhibitionRssFeedResponse200 = DatoWebhookExhibitionRssFeedResponse;

export type DatoWebhookExhibitionRssFeedResponse400 = AppError;

export type DatoWebhookExhibitionRssFeedResponse401 = AppError;

export type DatoWebhookExhibitionRssFeedResponse404 = AppError;

export type DatoWebhookExhibitionRssFeedResponse405 = AppError;

export type DatoWebhookExhibitionRssFeedResponse500 = AppError;

export type DatoWebhookNotificationRequest = DatoWebhookNotificationBody;

export type DatoWebhookNotificationResponse200 = DatoWebhookNotificationResponse;

export type DatoWebhookNotificationResponse400 = AppError;

export type DatoWebhookNotificationResponse401 = AppError;

export type DatoWebhookNotificationResponse404 = AppError;

export type DatoWebhookNotificationResponse405 = AppError;

export type DatoWebhookNotificationResponse500 = AppError;

export type DatoWebhookRecurringScheduleItemRequest = DatoWebhookRecurringScheduleItemBody;

export type DatoWebhookRecurringScheduleItemResponse200 = DatoWebhookRecurringScheduleItemResponse;

export type DatoWebhookRecurringScheduleItemResponse400 = AppError;

export type DatoWebhookRecurringScheduleItemResponse401 = AppError;

export type DatoWebhookRecurringScheduleItemResponse404 = AppError;

export type DatoWebhookRecurringScheduleItemResponse405 = AppError;

export type DatoWebhookRecurringScheduleItemResponse500 = AppError;

export type DatoWebhookScheduleRequest = DatoWebhookScheduleBody;

export type DatoWebhookScheduleResponse200 = DatoWebhookScheduleResponse;

export type DatoWebhookScheduleResponse400 = AppError;

export type DatoWebhookScheduleResponse401 = AppError;

export type DatoWebhookScheduleResponse404 = AppError;

export type DatoWebhookScheduleResponse405 = AppError;

export type DatoWebhookScheduleResponse500 = AppError;

export type ExhibitionDeleteResponse200 = ExhibitionDeleteResponse;

export type ExhibitionDeleteResponse400 = AppError;

export type ExhibitionDeleteResponse401 = AppError;

export type ExhibitionDeleteResponse404 = AppError;

export type ExhibitionDeleteResponse405 = AppError;

export type ExhibitionDeleteResponse500 = AppError;

export type ExhibitionFavoriteResponse200 = ExhibitionFavoriteResponse;

export type ExhibitionFavoriteResponse400 = AppError;

export type ExhibitionFavoriteResponse401 = AppError;

export type ExhibitionFavoriteResponse404 = AppError;

export type ExhibitionFavoriteResponse405 = AppError;

export type ExhibitionFavoriteResponse500 = AppError;

export type ExhibitionSyncRequest = ExhibitionSyncBody;

export type ExhibitionSyncResponse200 = ExhibitionSyncResponse;

export type ExhibitionSyncResponse400 = AppError;

export type ExhibitionSyncResponse401 = AppError;

export type ExhibitionSyncResponse404 = AppError;

export type ExhibitionSyncResponse405 = AppError;

export type ExhibitionSyncResponse500 = AppError;

export type ExhibitionSyncAllResponse200 = ExhibitionSyncAllResponse;

export type ExhibitionSyncAllResponse400 = AppError;

export type ExhibitionSyncAllResponse401 = AppError;

export type ExhibitionSyncAllResponse404 = AppError;

export type ExhibitionSyncAllResponse405 = AppError;

export type ExhibitionSyncAllResponse500 = AppError;

export type ExhibitorDeleteResponse200 = ExhibitorDeleteResponse;

export type ExhibitorDeleteResponse400 = AppError;

export type ExhibitorDeleteResponse401 = AppError;

export type ExhibitorDeleteResponse404 = AppError;

export type ExhibitorDeleteResponse405 = AppError;

export type ExhibitorDeleteResponse500 = AppError;

export type ExhibitorFavoriteResponse200 = ExhibitorFavoriteResponse;

export type ExhibitorFavoriteResponse400 = AppError;

export type ExhibitorFavoriteResponse401 = AppError;

export type ExhibitorFavoriteResponse404 = AppError;

export type ExhibitorFavoriteResponse405 = AppError;

export type ExhibitorFavoriteResponse500 = AppError;

export type ExhibitorLogoResponse200 = ExhibitorLogoResponse;

export type ExhibitorLogoResponse400 = AppError;

export type ExhibitorLogoResponse401 = AppError;

export type ExhibitorLogoResponse404 = AppError;

export type ExhibitorLogoResponse405 = AppError;

export type ExhibitorLogoResponse500 = AppError;

export type ExhibitorSendMailRequest = ExhibitorSendMailBody;

export type ExhibitorSendMailResponse200 = ExhibitorSendMailResponse;

export type ExhibitorSendMailResponse400 = AppError;

export type ExhibitorSendMailResponse401 = AppError;

export type ExhibitorSendMailResponse404 = AppError;

export type ExhibitorSendMailResponse405 = AppError;

export type ExhibitorSendMailResponse500 = AppError;

export type ExhibitorSyncRequest = ExhibitorSyncBody;

export type ExhibitorSyncResponse200 = ExhibitorSyncResponse;

export type ExhibitorSyncResponse400 = AppError;

export type ExhibitorSyncResponse401 = AppError;

export type ExhibitorSyncResponse404 = AppError;

export type ExhibitorSyncResponse405 = AppError;

export type ExhibitorSyncResponse500 = AppError;

export type ExhibitorSyncAllResponse200 = ExhibitorSyncAllResponse;

export type ExhibitorSyncAllResponse400 = AppError;

export type ExhibitorSyncAllResponse401 = AppError;

export type ExhibitorSyncAllResponse404 = AppError;

export type ExhibitorSyncAllResponse405 = AppError;

export type ExhibitorSyncAllResponse500 = AppError;

export type FeatureFlagCurrentResponse200 = FeatureFlagCurrentResponse;

export type FeatureFlagCurrentResponse400 = AppError;

export type FeatureFlagCurrentResponse401 = AppError;

export type FeatureFlagCurrentResponse404 = AppError;

export type FeatureFlagCurrentResponse405 = AppError;

export type FeatureFlagCurrentResponse500 = AppError;

export type MultitenantCurrentResponse200 = MultitenantCurrentResponse;

export type MultitenantCurrentResponse400 = AppError;

export type MultitenantCurrentResponse401 = AppError;

export type MultitenantCurrentResponse404 = AppError;

export type MultitenantCurrentResponse405 = AppError;

export type MultitenantCurrentResponse500 = AppError;

export type NewsletterSubscribeRequest = NewsletterSubscribeBody;

export type NewsletterSubscribeResponse200 = NewsletterSubscribeResponse;

export type NewsletterSubscribeResponse400 = AppError;

export type NewsletterSubscribeResponse401 = AppError;

export type NewsletterSubscribeResponse404 = AppError;

export type NewsletterSubscribeResponse405 = AppError;

export type NewsletterSubscribeResponse500 = AppError;

export type ScheduleFavoriteResponse200 = ScheduleFavoriteResponse;

export type ScheduleFavoriteResponse400 = AppError;

export type ScheduleFavoriteResponse401 = AppError;

export type ScheduleFavoriteResponse404 = AppError;

export type ScheduleFavoriteResponse405 = AppError;

export type ScheduleFavoriteResponse500 = AppError;

export type WorkshopFavoriteRequest = WorkshopFavoriteBody;

export type WorkshopFavoriteResponse200 = WorkshopFavoriteResponse;

export type WorkshopFavoriteResponse400 = AppError;

export type WorkshopFavoriteResponse401 = AppError;

export type WorkshopFavoriteResponse404 = AppError;

export type WorkshopFavoriteResponse405 = AppError;

export type WorkshopFavoriteResponse500 = AppError;

export type WorkshopRemoveFavoriteResponse200 = WorkshopRemoveFavoriteResponse;

export type WorkshopRemoveFavoriteResponse400 = AppError;

export type WorkshopRemoveFavoriteResponse401 = AppError;

export type WorkshopRemoveFavoriteResponse404 = AppError;

export type WorkshopRemoveFavoriteResponse405 = AppError;

export type WorkshopRemoveFavoriteResponse500 = AppError;
