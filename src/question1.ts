
type RGB = { [key: string]: number };

function hex2RGB(input: string): string | RGB {
    const INDEX_MAPPING = ['r', 'g', 'b',];

    if (input.match(/#(\d|[A-F]|[a-f]){3,6}/)) {
        let arr: string[] = [];


        if (input.substring(1).length === 3) {
            arr = input.substring(1).match(/./g) ?? [];
            let new_arr: string[] = [];
            for (let i = 0; i < 3; i++) {
                new_arr.push(arr[i] + arr[i]);
            }
            arr = new_arr;
        } else if (input.substring(1).length === 6) {
            arr = input.substring(1).match(/.{1,2}/g) ?? []
        } else {
            return 'Plese enter a vliad HEX code color';
        }

        const res: [string, number][] = arr.map((value, index) => [INDEX_MAPPING[index], Number(`0x${value}`)]);
        return Object.fromEntries(res);
    } else {
        return 'Plese enter a vliad HEX code color';
    }
}

const input: string = '#ff9933'
console.log(hex2RGB(input))

export { hex2RGB }