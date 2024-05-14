// permissionsEnum.ts

export enum PermissionEnum {
  DASHBOARD_VIEW = "dashboard.access",
  TEAMS_ALL = "teams.all",
  TEAMS_VIEW = "teams.view",
  TEAMS_CREATE = "teams.create",
  TEAMS_UPDATE = "teams.update",
  TEAMS_EDIT = "teams.edit",
  TEAMS_DELETE = "teams.delete",
  ROLES_ALL = "roles.all",
  ROLES_VIEW = "roles.view",
  ROLES_CREATE = "roles.create",
  ROLES_EDIT = "roles.edit",
  ROLES_DELETE = "roles.delete",
  ACTIVITYLOGS_VIEW = "activitylogs.access",
  SERVERS_ALL = "servers.all",
  SERVERS_VIEW = "servers.view",
  SERVERS_CREATE = "servers.create",
  SERVERS_UPDATE = "servers.update",
  SERVERS_DELETE = "servers.delete",
  BOTS_CREATE = "bots.create",
  BOTS_UPDATE = "bots.update",
  BOTS_DELETE = "bots.delete",
  BOTS_VIEW = "bots.view",
  BOTS_START = "bots.start",
  BOTS_STOP = "bots.stop",
  BOTS_RESTART = "bots.restart",
}

export const Permissions = [
  {
    category: "Dashboard",
    description: "Access to the main dashboard",
    actions: [
      {
        key: PermissionEnum.DASHBOARD_VIEW,
        name: "Access Dashboard",
      },
    ],
  },
  {
    category: "Teams",
    description: "Manage team settings",
    actions: [
      {
        key: PermissionEnum.TEAMS_ALL,
        name: "Access All Teams",
      },
      {
        key: PermissionEnum.TEAMS_CREATE,
        name: "Create Teams",
      },
      {
        key: PermissionEnum.TEAMS_UPDATE,
        name: "Update Teams",
      },
      {
        key: PermissionEnum.TEAMS_EDIT,
        name: "Edit Teams",
      },
      {
        key: PermissionEnum.TEAMS_DELETE,
        name: "Delete Teams",
      },
    ],
  },
  {
    category: "Roles",
    description: "Manage roles and permissions",
    actions: [
      {
        key: PermissionEnum.ROLES_ALL,
        name: "Access All Roles",
      },
      {
        key: PermissionEnum.ROLES_VIEW,
        name: "View Roles",
      },
      {
        key: PermissionEnum.ROLES_CREATE,
        name: "Create Roles",
      },
      {
        key: PermissionEnum.ROLES_EDIT,
        name: "Edit Roles",
      },
      {
        key: PermissionEnum.ROLES_DELETE,
        name: "Delete Roles",
      },
    ],
  },
  {
    category: "Activity Logs",
    description: "View activity logs",
    actions: [
      {
        key: PermissionEnum.ACTIVITYLOGS_VIEW,
        name: "Access Activity Logs",
      },
    ],
  },
  {
    category: "Servers",
    description: "Manage server settings",
    actions: [
      {
        key: PermissionEnum.SERVERS_ALL,
        name: "Access All Servers",
      },
      {
        key: PermissionEnum.SERVERS_VIEW,
        name: "View Servers",
      },
      {
        key: PermissionEnum.SERVERS_CREATE,
        name: "Create Servers",
      },
      {
        key: PermissionEnum.SERVERS_UPDATE,
        name: "Update Servers",
      },
      {
        key: PermissionEnum.SERVERS_DELETE,
        name: "Delete Servers",
      },
    ],
  },
  {
    category: "Bots",
    description: "Manage bot settings",
    actions: [
      {
        key: PermissionEnum.BOTS_CREATE,
        name: "Create Bots",
      },
      {
        key: PermissionEnum.BOTS_UPDATE,
        name: "Update Bots",
      },
      {
        key: PermissionEnum.BOTS_DELETE,
        name: "Delete Bots",
      },
      {
        key: PermissionEnum.BOTS_VIEW,
        name: "View Bots",
      },
      {
        key: PermissionEnum.BOTS_START,
        name: "Start Bots",
      },
      {
        key: PermissionEnum.BOTS_STOP,
        name: "Stop Bots",
      },
      {
        key: PermissionEnum.BOTS_RESTART,
        name: "Restart Bots",
      },
    ],
  },
];
