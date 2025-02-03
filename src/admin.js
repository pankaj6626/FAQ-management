const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const mongoose = require("mongoose");
const FAQ = require("./models/faq.model");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: [FAQ],
  rootPath: "/admin",
});

const adminRouter = AdminBroExpress.buildRouter(adminBro);
module.exports = adminRouter;
