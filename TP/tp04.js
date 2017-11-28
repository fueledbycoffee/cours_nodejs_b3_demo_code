// var fs = require('fs');
// var readline = require('readline');
import fs from 'fs';
import readline from 'readline';


var dir = fs.readdirSync(__dirname);

for(var i = 0; i < dir.length; i++)
{
    console.log(`[${i}] - ${dir[i]}`);
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which file would you like to read ?', (answer) => {
    // SI c'est un répertoire
    try
    {
        var element_number = parseInt(answer);
        console.log("Loading element : " + element_number);
        fs.lstat(__dirname + '/' +  dir[element_number], function(err, stats){
            if(err)
                console.log(err);
            if(stats.isDirectory())
            {
                console.log("Found a folder with content : ");
                var inner_dir = fs.readdirSync(__dirname + '/' + dir[element_number]);
        
                for(var i = 0; i < inner_dir.length; i++)
                {
                    console.log(`- ${inner_dir[i]}`);
                }
            }
            else
            {
                fs.readFile(__dirname + '/' + dir[element_number], 'utf8', function(err, data)
                {
                    console.log("Reading data content\n");
                    console.log("------------------\n");
                    console.log(data);
                });
            }
        });
    }
    catch(err)
    {
        console.log("You didn't type a number dumbass ! Aborting !");
    }
    // SINON J'affiche le fichier
    
    rl.close();
  });
// Pour lire l'entrée de l'utilisateur : readline 
// https://nodejs.org/api/readline.html


// console.log(dir);