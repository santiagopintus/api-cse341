/* For building Swagger docs */
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

const doc = {
  info: {
    title: "Contacts API",
    description: "API for managing contacts",
    version: "1.0.0",
  },
  host: "contacts-api-44sf.onrender.com",
  basePath: "/",
  schemes: ["http", "https"],
  exclude: ["/api-docs"],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
