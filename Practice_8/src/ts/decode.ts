import {mappings} from "./code";

export function decodeMorse(string: string): string {

    return string
        .split('  ')
        .map(el => {
            if (el === '...___...') {
                return 'SOS'
            }
            return el.split(' ')

                .map(str => {
                    let isDecoded = false;
                    for (let m = 0; m < mappings.length; m++) {

                        if (str === mappings[m].symbol) {
                            isDecoded = true;
                            return mappings[m].translation;
                        }
                    }

                    if (isDecoded === false) {
                        throw new Error('Invalid code');
                    }

                }).join('');


        }).join(' ');
}