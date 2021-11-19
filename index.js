// const multer = require("multer");
// const csv = require("fast-csv");
// const mongodb = require("mongodb");
// const fs = require("fs");
// const express = require("express");
// const app = express();
// const {PrismaClient} = require('@prisma/client');
// const prisma = PrismaClient();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __basedir + "/uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

// const csvFilter = (req, file, cb) => {
//   if (file.mimetype.includes("csv")) {
//     cb(null, true);
//   } else {
//     cb("Please upload only csv files", false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: csvFilter });
