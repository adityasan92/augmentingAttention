"use strict";

var fs = require('fs');
var graphLength = 500000;


function parseFile(fileName, cb){

    fs.readFile(__dirname + fileName, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var linesParser = data.split('\n');;
        //console.log(res);
        //console.log(linesParser);
        var x = [];
        var y = [];
        for(var i =0; i<linesParser.length;i++){
            //console.log(typeof(linesParser[i]));
            var datapointParser = linesParser[i].split(',');
            //console.log(datapointParser[0]);
            if(Number(datapointParser[0]) > 500000){
                break;
            }
            if(Number(datapointParser[0]) != 0 && Number(datapointParser[1]) !=0){
                 x.push(Number(datapointParser[0]));
                y.push(Number(datapointParser[1]));
            }
           
        }
        cb(x,y);

    });

}

function checker(files){
    if(counter > files.length - 1  ){
        console.log(dataMap); 
        var json = JSON.stringify(dataMap);
        fs.writeFile('concrete_no_reward_500000_acc.json', json, 'utf8');
    }
}

//var folderName = './untranslated_Acc_logs/dropout_0.25_no_reward/';
//var files = ["/untranslated_Acc_logs/concrete_reward/concrete_reward_new_untrans_0-accuracies.log"];
var files = ["/translated_Acc_logs/concrete_no_reward/concrete_noReward_new_0-accuracies.log"];
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
