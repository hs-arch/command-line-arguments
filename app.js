// console.log("First file for notesAPP")

const yargs = require("yargs"); 
const notes = require("./notes.js")

yargs.version('17.7.0')

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:"Title of node",
            demandOption: true,
            type: 'string',
        },
        body:{
            describe:'Body of note',
            type:'string',
            demandOption: true,
        },
    },
    handler:function(argv){
            console.log("handle the command functionality");
            notes.addNote(argv.title, argv.body);
        }
})

yargs.command({
    command:'delete',
    describe:'delete a note',
    builder:{
        title:{
            describe:'title of note',
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        notes.deleteNote(argv.title); // deleting note based on title.
    }
})

yargs.command({
    command:'seeAllNotes',
    describe:'see all notes',
    builder:{
        title:{
            // describe:'title of note',
            // type:'string',
            // demandOption:true
        }
    },
    handler:function(){
        notes.seeAllNotes(); // seeing all notes 
    }
})

yargs.command({
    command:'updateNote',
    describe:'update a note',
    builder:{
        title:{
            describe:'title of note',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'updated body of note',
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        notes.updateNote(argv.title, argv.body); // seeing all notes 
    }
})

yargs.parse();