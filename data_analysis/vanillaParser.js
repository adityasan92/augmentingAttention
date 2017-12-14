"use strict";

var fs = require('fs');
var graphLength = 100000;


function parseFile(fileName, cb){

    fs.readFile(folderName + fileName, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        //var linesParser = data.split('\n');;
        var linesParser = data.split("\n")
        //console.log(res);
        //console.log(linesParser);
        var x = [];
        var y = [];
        var counter = 0;
        for(var i =0; i<linesParser.length;i++){
            //console.log(linesParser[i]);
            if(linesParser[i].search(/ACCURACY:/) >= 0){
                counter = counter + 500
                var datapointParser = linesParser[i].split('ACCURACY:');
                if(counter > 100000){
                    break;
                }
                if(Number(datapointParser[1]) !=0){
                    x.push(Number(counter));
                    y.push(Number(datapointParser[1]));
                }
            }
        }
        cb(x,y);

    });

}

function checker(files){
    if(counter > files.length - 1  ){
        console.log(dataMap); 
        var json = JSON.stringify(dataMap);
        fs.writeFile('vanilla_acc.json', json, 'utf8');
    }
}

var folderName = './vanilla_untranslated/';
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
