const logic = require('./logic')

if(process.argv.length !== 3) {
    console.log('Usage: node app.js --[count|filter=abc]');
    process.exit(1);
}

try{
    let command = process.argv[2];
    let output = '';
    if(command.startsWith('--filter=')) {
        output = logic.filter(command.substring(9));
    } 
    else if(command.startsWith('--count')) {
        output = logic.count();
    }  
    console.log(JSON.stringify(output, null, 2));  
}catch(e){
    console.log(e.message);
    process.exit(1);
}
