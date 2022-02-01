import {encodeMorse} from "../ts/encode";

describe('decode', () => {
    test('should return .... . -.--  .--- ..- -.. .', () => {
        expect(encodeMorse('HEY JUDE')).toEqual('.... . -.--  .--- ..- -.. .')
    })
    test('should return .... . -.--', () => {
        expect(encodeMorse('HEY')).toEqual('.... . -.--')
    })
    test('should throw new Error', () => {
        expect(() => {
            encodeMorse('HE! JUDE')
        }).toThrow('Invalid code')
    })
    test('should return SOS JUDE', () => {
        expect(encodeMorse('SOS JUDE')).toEqual('...___...  .--- ..- -.. .')
    })
})

