module.exports = {
  priveGroups: [
    {
      id: "USERS",
      name: "User Permissions",
    },
    {
      id: "ROLES",
      name: "Role Permissions",
    },
    {
      id: "CATEGORIES",
      name: "Category Permissions",
    },
    {
      id: "AUDITLOGS",
      name: "AuditLogs Permissions",
    },
  ],

  privileges: [
    {
      key: "user_view",
      name: "User View",
      group: "USERS",
      descripton: "User view",
    },
    {
      key: "user_add",
      name: "User Add",
      group: "USERS",
      descripton: "User add",
    },
    {
      key: "user_update",
      name: "User Update",
      group: "USERS",
      descripton: "User update",
    },
    {
      key: "user_delete",
      name: "User Delete",
      group: "USERS",
      descripton: "User delete",
    },
    {
      key: "role_view",
      name: "Role View",
      group: "ROLES",
      descripton: "Role view",
    },
    {
      key: "role_add",
      name: "Role Add",
      group: "ROLES",
      descripton: "Role add",
    },
    {
      key: "role_update",
      name: "Role Update",
      group: "ROLES",
      descripton: "Role update",
    },
    {
      key: "role_delete",
      name: "Role Delete",
      group: "ROLES",
      descripton: "Role delete",
    },
    {
      key: "category_view",
      name: "Category View",
      group: "CATEGORIES",
      descripton: "Category view",
    },
    {
      key: "category_add",
      name: "Category Add",
      group: "CATEGORIES",
      descripton: "Category add",
    },
    {
      key: "category_update",
      name: "Category Update",
      group: "CATEGORIES",
      descripton: "Category update",
    },
    {
      key: "category_delete",
      name: "Category Delete",
      group: "CATEGORIES",
      descripton: "Category delete",
    },
    {
      key: "auditlogs_view",
      name: "AuditLogs View",
      group: "AUDITLOGS",
      descripton: "AuditLogs view",
    },
  ],
};
