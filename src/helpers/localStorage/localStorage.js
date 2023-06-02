import CryptoJS from 'crypto-js';
const { VITE_ENCRYPTION_KEY } = import.meta.env;

export const setLocalStorage = (name, key) => {
    key = CryptoJS.AES.encrypt(`${JSON.stringify(key)}`, VITE_ENCRYPTION_KEY).toString();
    localStorage.setItem(name, JSON.stringify(key));
}

export const getLocalStorage = (name) => {

    let data = JSON.parse(localStorage.getItem(name));
    
    if (data) {
        let decrypted = CryptoJS.AES.decrypt(data, VITE_ENCRYPTION_KEY);
        decrypted = decrypted.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted)
    }
    else
        return null
}

export const deleteLocalStorage = (name) => {
    localStorage.removeItem(name)
}