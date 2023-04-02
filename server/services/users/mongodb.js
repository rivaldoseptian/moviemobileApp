db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "email", "password"],
      properties: {
        username: {
          bsonType: "string",
          description: "Username is required and must be a string",
        },
        email: {
          bsonType: "string",
          pattern: "^\\S+@\\S+\\.\\S+$",
          description: "Email is required and must be a valid email address",
        },
        password: {
          bsonType: "string",
          description: "Password is required and must be a string",
        },
        role: {
          bsonType: "string",
          enum: ["admin", "user"],
          description: "Role must be either 'admin' or 'user'",
        },
        phoneNumber: {
          bsonType: "string",
          pattern: "^[0-9]{10,}$",
          description: "Phone number must be a string of at least 10 digits",
        },
        address: {
          bsonType: "string",
          description: "Address must be a string",
        },
      },
    },
  },
});
