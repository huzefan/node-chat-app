const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'test@example.com';
        const text = 'Test message';
        const message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'test@example.com';
        const latitude = 1;
        const longitude = 2;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});