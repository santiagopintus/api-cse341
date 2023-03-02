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
  examples: {
    Contact: {
      firstName: "Harry",
      lastName: "Potter",
      email: "harrypotter@email.com",
      favoriteColor: "Red & Yellow",
      birthday: "1980-07-31",
    },
  },
  host: "contacts-api-44sf.onrender.com",
  basePath: "/",
  schemes: ["https"],
  exclude: ["/api-docs"],
  definitions: {
    Contact: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
          default: "Harry",
        },
        lastName: {
          type: "string",
          default: "Potter",
        },
        email: {
          type: "string",
          default: "harrypotter@email.com",
        },
        favoriteColor: {
          type: "string",
          default: "Red & Yellow",
        },
        birthday: {
          type: "string",
          default: "1980-07-31",
          format: "date",
        },
      },
      description:
        "A contact object represents a person and their contact information.",
      required: ["firstName", "lastName", "email", "favoriteColor", "birthday"],
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
