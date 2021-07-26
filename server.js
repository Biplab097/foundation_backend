const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');


const app = express();
const port = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());