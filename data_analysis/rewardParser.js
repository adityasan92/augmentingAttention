"use strict";

var fs = require('fs');
var graphLength = 100000;


function parseFile(fileName, cb){

    fs.readFile(folderName + fileName, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var linesParser = data.split('dtype=float32)]');;
        //console.log(res);
        //console.log(linesParser);
        var x = [];
        var y = [];
        console.log(linesParser[0].length);
        for(var i =0; i<linesParser.length;i++){
            linesParser[i] = linesParser[i] + 'dtype=float32)]'; 
            //console.log(typeof(linesParser[i]));
            //console.log(linesParser[i]);
            var datapointParser = linesParser[i].split(',[');
            if(!datapointParser[1])
                continue;
            datapointParser[1] = datapointParser[1].replace("array(", '[')
            datapointParser[1] = datapointParser[1].split(' dtype=float32), array(').join('')
            datapointParser[1] = datapointParser[1].split(', dtype=float32)').join('')
            datapointParser[1] = datapointParser[1].split('0.').join('0.0')
            console.log(datapointParser[1]);
            var array = JSON.parse(datapointParser[1]);
            if(Number(datapointParser[0]) > 100000){
                break;
            }
            if(Number(datapointParser[0]) != 0 && Number(datapointParser[1]) !=0){
                 x.push(Number(datapointParser[0]));
                 y.push(array);
            }
           
        }
        cb(x,y);

    });

}

function checker(files){
    if(counter > files.length - 1  ){
        console.log(dataMap); 
        var json = JSON.stringify(dataMap);
        fs.writeFile('concreteDropout_rewards.json', json, 'utf8');
    }
}
var folderName = './translated_rewards/rewards/';
var files = fs.readdirSync(folderName);
console.log(files);
var counter = 0; 
var dataMap = {};
for(let i=0; i<files.length;i++){
    dataMap[i] = {};
    parseFile(files[i], (x, y)=>{
        dataMap[Number(i)]["x"] =  x;
        dataMap[Number(i)]["y"] =  y;
        counter = counter +1
        checker(files);
    })
}
