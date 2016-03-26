require('dotenv').config();
var fs = require('fs');
var tinify = require("tinify");

tinify.key = process.env.TINIFY_KEY;
var images = [
  {source: './static/img/shhh.png', target: './static/img/reduce/shhh.png'},
  {source: './static/img/ambos/VictoriFlex.jpeg', target: './static/img/reduce/VictoriFlex.jpeg'},
  {source: './static/img/ambos/VictoryFlex2.jpeg', target: './static/img/reduce/VictoryFlex2.jpeg'},
  {source: './static/img/ambos/VictoryFlex3.jpeg', target: './static/img/reduce/VictoryFlex3.jpeg'},
  {source: './static/img/ambos/VictoryFlex4.jpeg', target: './static/img/reduce/VictoryFlex4.jpeg'},
  {source: './static/img/ambos/VictoryFlex5.jpeg', target: './static/img/reduce/VictoryFlex5.jpeg'},
  {source: './static/img/ambos/VictoryFlex.jpeg', target: './static/img/reduce/VictoryFlex.jpeg'},
  {source: './static/img/ambos/VictoryPrint1.jpeg', target: './static/img/reduce/VictoryPrint1.jpeg'},
  {source: './static/img/ambos/VictoryPrint2.jpeg', target: './static/img/reduce/VictoryPrint2.jpeg'},
  {source: './static/img/ambos/VictoryPrint3.jpeg', target: './static/img/reduce/VictoryPrint3.jpeg'},
  {source: './static/img/ambos/VictoryPrint4.jpeg', target: './static/img/reduce/VictoryPrint4.jpeg'},
  {source: './static/img/ambos/VictoryPrint5.jpeg', target: './static/img/reduce/VictoryPrint5.jpeg'},
  {source: './static/img/ambos/VictoryPrint.jpeg', target: './static/img/reduce/VictoryPrint.jpeg'},
  {source: './static/img/ambos/VictorySea1.jpeg', target: './static/img/reduce/VictorySea1.jpeg'},
  {source: './static/img/ambos/VictorySea2.jpeg', target: './static/img/reduce/VictorySea2.jpeg'},
  {source: './static/img/ambos/VictorySea3.jpeg', target: './static/img/reduce/VictorySea3.jpeg'},
  {source: './static/img/ambos/VictorySea4.jpeg', target: './static/img/reduce/VictorySea4.jpeg'},
  {source: './static/img/ambos/VictorySea5.jpeg', target: './static/img/reduce/VictorySea5.jpeg'},
  {source: './static/img/ambos/VictorySea.jpeg', target: './static/img/reduce/VictorySea.jpeg'},
  {source: './static/img/ambos/VictorySpring1.jpeg', target: './static/img/reduce/VictorySpring1.jpeg'},
  {source: './static/img/ambos/VictorySpring2.jpeg', target: './static/img/reduce/VictorySpring2.jpeg'},
  {source: './static/img/ambos/VictorySpring.jpeg', target: './static/img/reduce/VictorySpring.jpeg'},
  {source: './static/img/ambos/VictorySprint3.jpeg', target: './static/img/reduce/VictorySprint3.jpeg'},
  {source: './static/img/ambos/VictorySprint4.jpeg', target: './static/img/reduce/VictorySprint4.jpeg'},
  {source: './static/img/ambos/VictorySprint5.jpeg', target: './static/img/reduce/VictorySprint5.jpeg'},
  {source: './static/img/ambos/VictorySweet2.jpeg', target: './static/img/reduce/VictorySweet2.jpeg'},
  {source: './static/img/ambos/VictorySweet3.jpeg', target: './static/img/reduce/VictorySweet3.jpeg'},
  {source: './static/img/ambos/VictorySweet4.jpeg', target: './static/img/reduce/VictorySweet4.jpeg'},
  {source: './static/img/ambos/VictorySweet5.jpeg', target: './static/img/reduce/VictorySweet5.jpeg'},
  {source: './static/img/ambos/Victory sweet.jpeg', target: './static/img/reduce/Victory sweet.jpeg'},
  {source: './static/img/ambos/VictorySweet.jpeg', target: './static/img/reduce/VictorySweet.jpeg'}
];

function reduce(){
  images.forEach(
    (image) => {
      fs.exists(image.target, (exists) => {
        if (!exists) {
          var source = tinify.fromFile(image.source);
          source.toFile(image.target);
        } else console.log('This file exists: ', image.target);
      });
    }
  );
}

reduce();
setInterval(() => {
  console.log('Reduce now', new Date());
  reduce()
}, 15*60*1000);