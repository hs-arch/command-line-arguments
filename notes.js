const fs = require('fs');
// const chalk = require('chalk');
// import chalk from 'chalk';
const { exit } = require('process');

const getNotes = () => {
    return "notes object"
}

const updateNote = (title, body)=>{
    // console.log("From updated note");
    const allNotes = loadNotes();

    let isUpdated = false;

    for(let i in allNotes){
        if(allNotes[i].title === title){
            allNotes[i].body = body;
            fs.writeFileSync("notes-list.json", JSON.stringify(allNotes))
            isUpdated = true;
            break;
        }
    }

    if(isUpdated){
        console.log("Note Updated")
    }else{
        console.log("No Such title found")
    }
}

const seeAllNotes = () => {
    // console.log("seeing all notes")
    const allNotes  = loadNotes();
    console.log(allNotes);

}

const deleteNote = (title)=>{
    console.log("note to delete : ", title);
    const notesList = loadNotes();

    let indexToDelete = -1;
    for(let note in notesList){
        if(notesList[note].title === title){
            indexToDelete = note;
            break;
        }
    }

    // const indexToRemove = notesList.findIndex((note)=>{
    //     note.title === title
    // })

    console.log("index to remove : ", indexToDelete);

    if(indexToDelete === -1){
        console.log("No title found");
    }else{
        notesList.splice(indexToDelete, 1);
        fs.writeFileSync("notes-list.json", JSON.stringify(notesList));
        console.log("Note Deleted")
    }

    console.log("index to remove : ", indexToDelete)
}

const addNote = (title, body) => {
    // console.log("Notes data received here : ", title, body);
    // read a file here and add that value to that file using FS
    // console.log("add a note in the object")

    const notesList = loadNotes();
    console.log("OLD Notes List : ", typeof(notesList))

    const newNote = {
        title: title,
        body: body,
    }

    let noteExists = false;

    for(let note in notesList){
        if(notesList[note].title === newNote.title){

            // console.log("for NOTE : ", note)
            // console.log("note titel : ", notesList[note].title)
            // console.log("newNote title : ", newNote.title);
            console.log("Note with this title already exists, Please use a new title");
            noteExists = true;
            break;
        }
    }

    if(!noteExists){
        notesList.push(newNote)
        fs.writeFileSync("notes-list.json", JSON.stringify(notesList)) 
        console.log("Note Added Successfully !")
    }

    // fs.writeFileSync("notes-list.json", JSON.stringify(notesList))

}

const loadNotes = ()=>{
    try{
        const notesListBuffer  = fs.readFileSync('./notes-list.json');
        const notesJSON = notesListBuffer.toString();
        return JSON.parse(notesJSON);
    }catch(e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    seeAllNotes: seeAllNotes,
    updateNote: updateNote
};