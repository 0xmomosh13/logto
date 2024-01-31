const quota_item = {
  tenant_limit: {
    name: '租戶',
    limited: '{{count, number}} 租戶',
    limited_other: '{{count, number}} 租戶',
    unlimited: '不限租戶數',
    not_eligible: '移除你的租戶',
  },
  mau_limit: {
    name: '月活用戶',
    limited: '{{count, number}} 月活用戶',
    unlimited: '不限月活用戶數',
    not_eligible: '移除你的所有用戶',
  },
  token_limit: {
    name: '令牌',
    limited: '{{count, number}} 令牌',
    limited_other: '{{count, number}} 令牌',
    unlimited: '不限令牌數',
    not_eligible: '移除你的所有用戶以防止新增令牌',
  },
  applications_limit: {
    name: '應用程式',
    limited: '{{count, number}} 應用程式',
    limited_other: '{{count, number}} 應用程式',
    unlimited: '不限應用程式數',
    not_eligible: '移除你的應用程式',
  },
  machine_to_machine_limit: {
    name: '機器對機器應用程式',
    limited: '{{count, number}} 機器對機器應用程式',
    limited_other: '{{count, number}} 機器對機器應用程式',
    unlimited: '不限機器對機器應用程式數',
    not_eligible: '移除你的機器對機器應用程式',
    add_on: '額外的機器對機器應用程式',
  },
  third_party_applications_limit: {
    /** UNTRANSLATED */
    name: 'Third-party apps',
    /** UNTRANSLATED */
    limited: '{{count, number}} third-party app',
    /** UNTRANSLATED */
    limited_other: '{{count, number}} third-party apps',
    /** UNTRANSLATED */
    unlimited: 'Unlimited third-party apps',
    /** UNTRANSLATED */
    not_eligible: 'Remove your third-party apps',
  },
  resources_limit: {
    name: 'API 資源',
    limited: '{{count, number}} API 資源',
    limited_other: '{{count, number}} API 資源',
    unlimited: '不限 API 資源數',
    not_eligible: '移除你的 API 資源',
  },
  scopes_per_resource_limit: {
    name: '資源權限',
    limited: '{{count, number}} 權限每資源',
    limited_other: '{{count, number}} 權限每資源',
    unlimited: '不限權限每資源數',
    not_eligible: '移除你的資源權限',
  },
  custom_domain_enabled: {
    name: '自訂網域',
    limited: '自訂網域',
    unlimited: '自訂網域',
    not_eligible: '移除你的自訂網域',
  },
  omni_sign_in_enabled: {
    name: '全渠道登入',
    limited: '全渠道登入',
    unlimited: '全渠道登入',
    not_eligible: '停用全渠道登入',
  },
  built_in_email_connector_enabled: {
    name: '內建電子郵件連接程式',
    limited: '內建電子郵件連接程式',
    unlimited: '內建電子郵件連接程式',
    not_eligible: '移除你的內建電子郵件連接程式',
  },
  social_connectors_limit: {
    name: '社交連接程式',
    limited: '{{count, number}} 社交連接程式',
    limited_other: '{{count, number}} 社交連接程式',
    unlimited: '不限社交連接程式數',
    not_eligible: '移除你的社交連接程式',
  },
  standard_connectors_limit: {
    name: '免費標準連接程式',
    limited: '{{count, number}} 免費標準連接程式',
    limited_other: '{{count, number}} 免費標準連接程式',
    unlimited: '不限標準連接程式數',
    not_eligible: '移除你的標準連接程式',
  },
  roles_limit: {
    name: '角色',
    limited: '{{count, number}} 角色',
    limited_other: '{{count, number}} 角色',
    unlimited: '不限角色數',
    not_eligible: '移除你的角色',
  },
  machine_to_machine_roles_limit: {
    name: '機器對機器角色',
    limited: '{{count, number}} 機器對機器角色',
    limited_other: '{{count, number}} 機器對機器角色',
    unlimited: '不限機器對機器角色數',
    not_eligible: '移除你的機器對機器角色',
  },
  scopes_per_role_limit: {
    name: '角色權限',
    limited: '{{count, number}} 權限每角色',
    limited_other: '{{count, number}} 權限每角色',
    unlimited: '不限權限每角色數',
    not_eligible: '移除你的角色權限',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}}個 Webhook',
    limited_other: '{{count, number}}個 Webhooks',
    unlimited: '無限制的 Webhooks',
    not_eligible: '移除你的 Webhooks',
  },
  organizations_enabled: {
    name: '組織',
    limited: '組織',
    unlimited: '組織',
    not_eligible: '移除你的組織',
  },
  audit_logs_retention_days: {
    name: '審計記錄保留天數',
    limited: '審計記錄保留天數：{{count, number}} 天',
    limited_other: '審計記錄保留天數：{{count, number}} 天',
    unlimited: '不限天數',
    not_eligible: '無審計記錄',
  },
  community_support_enabled: {
    name: '社群支援',
    limited: '社群支援',
    unlimited: '社群支援',
    not_eligible: '無社群支援',
  },
  email_ticket_support: {
    name: '電子郵件票務支援',
    limited: '{{count, number}}小時的電子郵件票務支援',
    limited_other: '{{count, number}}小時的電子郵件票務支援',
    unlimited: '電子郵件票務支援',
    not_eligible: '無電子郵件票務支援',
  },
  mfa_enabled: {
    name: '多因素認證',
    limited: '多因素認證',
    unlimited: '多因素認證',
    not_eligible: '移除您的多因素認證',
  },
  sso_enabled: {
    name: '企業單一登錄',
    limited: '企業單一登錄',
    unlimited: '企業單一登錄',
    not_eligible: '移除你的 企業單一登錄',
  },
};

export default Object.freeze(quota_item);
