class ReverseEncoder {

    TOTAL_ALPHABET: number = 26;
    MAXIMUM_OPERATION_CHAR: number = 100;

    public encode(target: string) {
        return this.mainOperation(target);
    }

    public decode(target: string) {
        return this.mainOperation(target);
    }

    private mainOperation(target: string) {
        let decoded_str: string = "";
        for (let i = 0; i < target.length && this.MAXIMUM_OPERATION_CHAR; i++) {
            decoded_str += this.shiftChrOrder(target[i]);
        }
        return this.reversStrOrder(decoded_str);
    }

    private shiftChrOrder(target: string) {
        let target_char: number = target.charCodeAt(0);
        let last_char: number = 'z'.charCodeAt(0)

        if (!this.is_alphabet(target)) return target

        if (this.is_uppercase(target)) {
            last_char = 'Z'.charCodeAt(0)
        }

        const diff: number = Math.abs(last_char - target_char);
        const order: number = this.TOTAL_ALPHABET - diff - 1;
        const result: number = target_char + diff - order;

        return String.fromCharCode(result);
    }

    private reversStrOrder(target: string) {
        const splited_str = target.split(' ');
        return splited_str.reverse().join(" ");
    }

    private is_alphabet(char: string) {
        return this.is_uppercase(char) || this.is_lowercase(char)
    }

    private is_uppercase(char: string) {
        const char_number: number = char.charCodeAt(0);
        const startUpper: number = 'A'.charCodeAt(0);
        const endUpper: number = 'Z'.charCodeAt(0);
        return char_number >= startUpper && char_number <= endUpper
    }

    private is_lowercase(char: string) {
        const char_number: number = char.charCodeAt(0);
        const startLower: number = 'a'.charCodeAt(0);
        const endLower: number = 'z'.charCodeAt(0);
        return char_number >= startLower && char_number <= endLower
    }
}

const reverseEncoder = new ReverseEncoder();
console.log(reverseEncoder.encode('hello world'))
console.log(reverseEncoder.encode('Hello World'))
console.log(reverseEncoder.decode('dliow svool'))
console.log(reverseEncoder.decode('Dliow Svool'))

export { ReverseEncoder };
