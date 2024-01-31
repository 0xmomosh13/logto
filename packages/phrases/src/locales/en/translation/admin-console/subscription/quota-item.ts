const quota_item = {
  tenant_limit: {
    name: 'Tenants',
    limited: '{{count, number}} tenant',
    limited_other: '{{count, number}} tenants',
    unlimited: 'Unlimited tenants',
    not_eligible: 'Remove your tenants',
  },
  mau_limit: {
    name: 'Monthly active users',
    limited: '{{count, number}} MAU',
    unlimited: 'Unlimited MAU',
    not_eligible: 'Remove your all users',
  },
  token_limit: {
    name: 'Tokens',
    limited: '{{count, number}} token',
    limited_other: '{{count, number}} tokens',
    unlimited: 'Unlimited tokens',
    not_eligible: 'Remove your all users to prevent new tokens',
  },
  applications_limit: {
    name: 'Applications',
    limited: '{{count, number}} application',
    limited_other: '{{count, number}} applications',
    unlimited: 'Unlimited applications',
    not_eligible: 'Remove your applications',
  },
  machine_to_machine_limit: {
    name: 'Machine to machine',
    limited: '{{count, number}} machine to machine app',
    limited_other: '{{count, number}} machine to machine apps',
    unlimited: 'Unlimited machine to machine apps',
    not_eligible: 'Remove your machine to machine apps',
    add_on: 'Additional machine-to-machine apps',
  },
  third_party_applications_limit: {
    name: 'Third-party apps',
    limited: '{{count, number}} third-party app',
    limited_other: '{{count, number}} third-party apps',
    unlimited: 'Unlimited third-party apps',
    not_eligible: 'Remove your third-party apps',
  },
  resources_limit: {
    name: 'API resources',
    limited: '{{count, number}} API resource',
    limited_other: '{{count, number}} API resources',
    unlimited: 'Unlimited API resources',
    not_eligible: 'Remove your API resources',
  },
  scopes_per_resource_limit: {
    name: 'Resource permissions',
    limited: '{{count, number}} permission per resource',
    limited_other: '{{count, number}} permissions per resource',
    unlimited: 'Unlimited permission per resource',
    not_eligible: 'Remove your resource permissions',
  },
  custom_domain_enabled: {
    name: 'Custom domain',
    limited: 'Custom domain',
    unlimited: 'Custom domain',
    not_eligible: 'Remove your custom domain',
  },
  omni_sign_in_enabled: {
    name: 'Omni sign-in',
    limited: 'Omni sign-in',
    unlimited: 'Omni sign-in',
    not_eligible: 'Disable your omni sign-in',
  },
  built_in_email_connector_enabled: {
    name: 'Built-in email connector',
    limited: 'Built-in email connector',
    unlimited: 'Built-in email connector',
    not_eligible: 'Remove your built-in email connector',
  },
  social_connectors_limit: {
    name: 'Social connectors',
    limited: '{{count, number}} social connector',
    limited_other: '{{count, number}} social connectors',
    unlimited: 'Unlimited Social connectors',
    not_eligible: 'Remove your social connectors',
  },
  standard_connectors_limit: {
    name: 'Free standard connectors',
    limited: '{{count, number}} free standard connector',
    limited_other: '{{count, number}} free standard connectors',
    unlimited: 'Unlimited standard connectors',
    not_eligible: 'Remove your standard connectors',
  },
  roles_limit: {
    name: 'Roles',
    limited: '{{count, number}} role',
    limited_other: '{{count, number}} roles',
    unlimited: 'Unlimited roles',
    not_eligible: 'Remove your roles',
  },
  machine_to_machine_roles_limit: {
    name: 'Machine to machine roles',
    limited: '{{count, number}} machine to machine role',
    limited_other: '{{count, number}} machine to machine roles',
    unlimited: 'Unlimited machine to machine roles',
    not_eligible: 'Remove your machine to machine roles',
  },
  scopes_per_role_limit: {
    name: 'Role permissions',
    limited: '{{count, number}} permission per role',
    limited_other: '{{count, number}} permissions per role',
    unlimited: 'Unlimited permission per role',
    not_eligible: 'Remove your role permissions',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Unlimited webhooks',
    not_eligible: 'Remove your webhooks',
  },
  organizations_enabled: {
    name: 'Organizations',
    limited: 'Organizations',
    unlimited: 'Organizations',
    not_eligible: 'Remove your organizations',
  },
  audit_logs_retention_days: {
    name: 'Audit logs retention',
    limited: 'Audit logs retention: {{count, number}} day',
    limited_other: 'Audit logs retention: {{count, number}} days',
    unlimited: 'Unlimited days',
    not_eligible: 'No audit logs',
  },
  community_support_enabled: {
    name: 'Community support',
    limited: 'Community support',
    unlimited: 'Community support',
    not_eligible: 'No community support',
  },
  email_ticket_support: {
    name: 'Email ticket support',
    limited: '{{count, number}} hour email ticket support',
    limited_other: '{{count, number}} hours email ticket support',
    unlimited: 'Email ticket support',
    not_eligible: 'No email ticket support',
  },
  mfa_enabled: {
    name: 'Multi-factor authentication',
    limited: 'Multi-factor authentication',
    unlimited: 'Multi-factor authentication',
    not_eligible: 'Remove your multi-factor authentication',
  },
  sso_enabled: {
    name: 'Enterprise SSO',
    limited: 'Enterprise SSO',
    unlimited: 'Enterprise SSO',
    not_eligible: 'Remove your Enterprise SSO',
  },
};

export default Object.freeze(quota_item);
