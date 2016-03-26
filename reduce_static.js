require('dotenv').config();
var fs = require('fs');
var tinify = require("tinify");

tinify.key = process.env.TINIFY_KEY;

function reduce(){
  fs.readdir(process.env.FOLDER_FROM_REDUCE, (_, images) => {
    images
      .map((image) => {return {source: process.env.FOLDER_FROM_REDUCE+image, target: process.env.FOLDER_TO_REDUCE+image }})
      .forEach(
        (image) => {
          fs.exists(image.target, (exists) => {
            if (!exists) {
              console.log('This file not exists: ', image.target);
              var source = tinify.fromFile(image.source);
              source.toFile(image.target);
            } else console.log('This file exists: ', image.target);
          });
        }
    );
  });
}

reduce();
setInterval(() => {
  console.log('Reduce now', new Date());
  reduce()
}, 10*60*1000);