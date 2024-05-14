export const permissions = {
  superadmin: ["dashboard.access", "roles.access", "teams.access"],
  admin: ["dashboard.access", "roles.access", "teams.access"],
  monitor: ["dashboard.access"],
};

// create enum for permissions for each type of role
export enum RoleEnum {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  MONITOR = "monitor",
}

// create enum for permissions
export enum PermissionEnum {
  DASHBOARD_ACCESS = "dashboard.access",
  ROLES_ACCESS = "roles.all",
  ROLES_VIEW = "roles.view",
  ROLES_CREATE = "roles.create",
  ROLES_UPDATE = "roles.update",
  ROLES_DELETE = "roles.delete",
  TEAMS_ACCESS = "teams.access",
  TEAMS_VIEW = "teams.view",
  TEAMS_CREATE = "teams.create",
  TEAMS_UPDATE = "teams.update",
  TEAMS_DELETE = "teams.delete",
  ACTIVITYLOG_ACCESS = "activitylogs.access",
  SERVERS_ACCESS = "servers.access",
  SERVERS_VIEW = "servers.view",
  SERVERS_CREATE = "servers.create",
  SERVERS_UPDATE = "servers.update",
  SERVERS_DELETE = "servers.delete",
}

export enum LogEnum {
  LOGIN = "User logged in successfully",
  LOGOUT = "User logged out successfully",
  VIEW_ROLES = "Viewed listing of all roles",
  CREATE_ROLES = "Created a new role",
  UPDATE_ROLES = "Updated an existing role",
  DELETE_ROLES = "Deleted an existing role",
  VIEW_TEAMS = "Viewed listing of all teams members",
  CREATE_TEAMS = "Created a new team member",
  UPDATE_TEAMS = "Updated an existing team member",
  DELETE_TEAMS = "Deleted an existing team member",
  VIEW_SERVERS = "Viewed listing of all servers",
  CREATE_SERVERS = "Created a new server",
  UPDATE_SERVERS = "Updated an existing server",
  DELETE_SERVERS = "Deleted an existing server",
  BOTS_ACCESS = "Accessed the bots page",
  BOTS_CREATE = "Created a new bot",
  BOTS_UPDATE = "Updated an existing bot",
  BOTS_DELETE = "Deleted an existing bot",
  BOTS_VIEW = "Viewed listing of all bots",
  BOTS_START = "Started a bot",
  BOTS_STOP = "Stopped a bot",
  BOTS_RESTART = "Restarted a bot",
}

export const LOG_ACTIONS = {
  "POST /api/auth/login": LogEnum.LOGIN,
  "GET /api/auth/logout": LogEnum.LOGOUT,
  "GET /api/roles": LogEnum.VIEW_ROLES,
  "POST /api/roles": LogEnum.CREATE_ROLES,
  "PUT /api/roles": LogEnum.UPDATE_ROLES,
  "DELETE /api/roles": LogEnum.DELETE_ROLES,
  "GET /api/teams": LogEnum.VIEW_TEAMS,
  "POST /api/teams/invite": LogEnum.CREATE_TEAMS,
  "PUT /api/teams": LogEnum.UPDATE_TEAMS,
  "DELETE /api/teams": LogEnum.DELETE_TEAMS,
  "GET /api/servers": LogEnum.VIEW_SERVERS,
  "POST /api/servers": LogEnum.CREATE_SERVERS,
  "PUT /api/servers": LogEnum.UPDATE_SERVERS,
  "DELETE /api/servers": LogEnum.DELETE_SERVERS,
  "GET /api/bots": LogEnum.BOTS_VIEW,
  "POST /api/bots": LogEnum.BOTS_CREATE,
  "PUT /api/bots": LogEnum.BOTS_UPDATE,
  "DELETE /api/bots": LogEnum.BOTS_DELETE,
  "POST /api/bots/start": LogEnum.BOTS_START,
  "POST /api/bots/stop": LogEnum.BOTS_STOP,
  "POST /api/bots/restart": LogEnum.BOTS_RESTART,
};
