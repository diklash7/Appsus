import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const STORAGE_KEY = 'mails';
_createMails();

// const loggedinUser = {
//     email: 'user@appsus.com',
//     fullname: 'Mahatma Appsus'
// }

export const mailService = {
    query,
    remove,
    save,
    get,
    getEmptyMail
};

function query() {
    return storageService.query(STORAGE_KEY);
}

function remove(mailId) {
    return storageService.remove(STORAGE_KEY, mailId);
}

function get(mailId) {
    return storageService.get(STORAGE_KEY, mailId)
}

function save(mail) {
    if (mail.id) return storageService.put(STORAGE_KEY, mail);
    else return storageService.post(STORAGE_KEY, mail);
}

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: '',
        sentAt: '',
        to: ''

    };
}

function _createMails() {
    let mails = utilService.loadFromStorage(STORAGE_KEY)
    if (!mails || !mails.length) {
        mails = [{
                fullname: 'Dikla',
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 111111,
                to: 'momo@momo.com'
            },
            {
                fullname: 'Itsar',
                id: 'e102',
                subject: 'Hello friend!',
                body: 'What are you doing?',
                isRead: false,
                sentAt: 2222222,
                to: 'popo@popo.com'
            },
            {
                fullname: 'Inbar',
                id: 'e103',
                subject: 'Good bye!',
                body: 'I am going',
                isRead: false,
                sentAt: 3333333,
                to: 'lolo@lolo.com'
            }

        ]
        utilService.saveToStorage(STORAGE_KEY, mails);
    }
    return mails
}