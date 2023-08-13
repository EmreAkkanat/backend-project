const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
  },
  {
    versionKey: false,
    timesstamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class AuditLogs extends mongoose.Model {}

schema.loadClass(Roles);
module.exports = AuditLogs.model("audit_logs", schema);
