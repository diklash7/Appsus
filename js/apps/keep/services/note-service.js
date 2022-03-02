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
                type: "fff",
                isPinned: true,
                info: {
                    txt: "take Me home!"
                }
            },
            {
                id: "n103",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "let Me go!"
                }
            }
        ];

        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}


function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}