# ajaybhatia:apollo-server-uploads

# Install

```
meteor add ajaybhatia:apollo-server-uploads
```
# Summary
Uploading of files to filesystem of the apollo server (graphql) without using any external package

# API

The _ajaybhatia:apollo-server-uploads_ package gives you the following functionality:

- [`storeFS(filename)`]() - This method uploads the file to `uploads` directory within `project` directory. It returns a `Promise` *object* `{ filename, mimetype encoding }`.
- [`removeFile(filename)`]() - This method removes uploaded file stored using the above method.
- [`/multimedia?name=FILE_NAME`]() - This is the endpoint for accessing the files from server in client.

Thoughts? Questions? Open an issue in [`ajaybhatia:apollo-server-uploads`](https://github.com/ajaybhatia/apollo-server-uploads), and let's discuss. Or find me on social media. Thanks for your interest!


