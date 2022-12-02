const fs = require('fs');

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contact.json jika belum ada
const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// get all contatc.json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

// get contact where nama
const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    return contact;
};

module.exports = { loadContact, findContact };