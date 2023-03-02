/* For building Swagger docs */
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-docs.json";
const endpointsFiles = ["./routes", "./routes/contacts"];

const doc = {
  info: {
    title: "Contacts API",
    description: "API for managing contacts",
    version: "1.0.0",
  },
  host: "localhost:1234",
  basePath: "/",
  schemes: ["http", "https"],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
