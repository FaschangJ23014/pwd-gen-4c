'use strict';

const generatePassword = (length = 8, useSpecialCharacters = false) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const specialCharacters = '!?#$%&*+-_';

    if (length <= 0 || !Number.isInteger(length)) {
        throw new Error('Die Länge muss eine positive ganze Zahl sein.');
    }

    let password = '';

    const availableCharacters = useSpecialCharacters
        ? characters + specialCharacters
        : characters;

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[random];
    }

    return password;
};

module.exports = generatePassword;