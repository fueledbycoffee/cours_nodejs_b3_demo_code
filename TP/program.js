var fs = require('fs');

// fs.readFile('monfichier.txt', 'utf8' , function(err, data){
//     if(err)
//         console.log(err);
    
//         console.log(data);
// });

// fs.writeFile('myNewFile.txt',
//     'I\'m writing in my file',
//     'utf8', function(err, data){
//         if(err){ console.log(err) }
//         console.log(data);
//     });

// Pour lire l'entrée de l'utilisateur : readline 
// https://nodejs.org/api/readline.html

// fs.lstat(path, callback) (err, stats) -> stats.isDirectory() / stats.isFile()

var myRead = fs.readFileSync(__dirname + '/monfichier.txt', 'utf8');
    console.log(myRead);

var myWrite = fs.writeFileSync('myNewFile.txt', "Du texte bla bla", 'utf8');
    console.log(myWrite);

var dir = fs.readdirSync(__dirname);

console.log(dir);

// console.log(__dirname);