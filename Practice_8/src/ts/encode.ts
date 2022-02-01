import {mappings} from "./code";

export function encodeMorse(string: string): any {
    return string
        .split(' ')
        .map(el => {

            if (el === 'SOS') {
                return '...___...'
            }
            return el.split('')
                .map(str => {
                let isEncoded = false;
                for (let m = 0; m < mappings.length; m++) {

                    if (str === mappings[m].translation) {
                        isEncoded = true;
                        return mappings[m].symbol
                    }
                }

                if (isEncoded === false) {
                    throw new Error('Invalid code')
                }

            }).join(' ');
        }).join('  ');
}