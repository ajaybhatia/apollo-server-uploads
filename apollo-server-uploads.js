import { WebApp } from "meteor/webapp";
import fs from "fs";

export const MULTIMEDIA_DIR = `${process.env.PWD}/uploads`;

// Write Image to FS
export const storeFS = async file => {
  const { filename, mimetype, encoding, createReadStream } = await file;

  if (!fs.existsSync(MULTIMEDIA_DIR)) {
    fs.mkdirSync(MULTIMEDIA_DIR);
  }

  const stream = createReadStream();
  const path = `${MULTIMEDIA_DIR}/${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .on("error", error => {
        if (stream.truncated)
          // Delete the truncated file.
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on("error", error => reject(error))
      .on("finish", () => {
        resolve({
          filename,
          mimetype,
          encoding
        });
      })
  );
};

// Remove File
export const removeFile = filename => {
  fs.unlinkSync(`${MULTIMEDIA_DIR}/${filename}`);
};

if (Meteor.isServer) {
  // Read File from FS
  WebApp.connectHandlers.use("/multimedia", (req, res, next) => {
    const path = `${MULTIMEDIA_DIR}/${req.query.name}`;
    const contentType = /\.(gif|jpg|jpeg|tiff|png)$/i.test(req.query.name)
      ? "image/*"
      : "video/*";
    fs.readFile(path, (error, data) => {
      if (data) {
        res.writeHead(200, {
          "Content-Type": contentType
        });
        res.end(data);
      } else {
        throw error;
      }
    });
  });
}
