import * as fsp from "fs/promises";

export const listFiles = async (path: string) => {
  console.log("listFiles >>>>>>>", path);
  try {
    return await fsp.readdir(path);
  } catch (err) {
    console.log("listFiles ERROR", err);
  }
};

// write file - write file to the e2e folder
export const writeFile = async (path: string, content: string) => {
  console.log("writeFile >>>>>>>", path);
  try {
    await fsp.writeFile(path, `${content}`);
  } catch (err) {
    console.log("writeFile ERROR", err);
  }
};

export const dropFolder = async (path: string) => {
  console.log("dropFolder >>>>>>>", path);
  try {
    await fsp.rm(path, {
      recursive: true,
    });
  } catch (err) {
    console.log("dropFolder ERROR", err);
  }
};

export const createFolder = async (path: string) => {
  console.log("createFolder >>>>>>>", path);
  try {
    await fsp.mkdir(path, {
      recursive: true,
    });
  } catch (err) {
    console.log("createFolder ERROR", err);
  }
};
