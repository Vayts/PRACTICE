import {encodeMorse} from "../ts/encode";

describe('decode', () => {
    test('should return HEY JUDE', () => {
        expect(encodeMorse('HEY JUDE')).toEqual('.... . -.--  .--- ..- -.. .')
    })
    test('should return HEY', () => {
        expect(encodeMorse('HEY')).toEqual('.... . -.--')
    })
    test('should throw new Error', () => {
        expect(() => {
            encodeMorse('HE! JUDE')
        }).toThrow('Invalid code')
    })
})

