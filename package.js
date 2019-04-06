Package.describe({
  name: "ajaybhatia:apollo-server-uploads",
  version: "0.0.2",
  // Brief, one-line summary of the package.
  summary:
    "Uploading of files to filesystem of the apollo server (graphql) without using any external package",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/ajaybhatia/apollo-server-uploads",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.8.1");
  api.use("ecmascript");
  api.mainModule("apollo-server-uploads.js");
});
