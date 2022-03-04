import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';


const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    remove


}

function query() {
    return storageService.query(NOTES_KEY);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        const notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Sprint 3! help!!!"
                }
            },
            {
                id: "n103",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n104",
                type: "note-img",
                info: {
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n105",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }

            },
            {
                id: "n106",
                type: "note-video",
                info: {
                    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                    title: "Idan Amedi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
        ];

        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}


function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}