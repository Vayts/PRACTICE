import {decodeMorse} from "../ts/decode";

describe('decode', () => {
    test('should return HEY JUDE', () => {
        expect(decodeMorse('.... . -.--  .--- ..- -.. .')).toEqual('HEY JUDE')
    })
    test('should return HEY', () => {
        expect(decodeMorse('.... . -.--')).toEqual('HEY')
    })
    test('should throw new Error', () => {
       expect(() => {
           decodeMorse('.... . -...--  .--- ..- -.. .')
       }).toThrow('Invalid code')
    })
    test('should return HEY JUDE', () => {
        expect(decodeMorse('...___...  .--- ..- -.. .')).toEqual('SOS JUDE')
    })
})

