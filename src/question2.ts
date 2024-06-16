function arraySort(data: string[]) {
    return data.sort((a, b): number => {
        const str_regx_a: RegExpMatchArray | null = a.match(/[a-zA-z]\w/)
        const str_regx_b: RegExpMatchArray | null = b.match(/[a-zA-z]\w/)
        const str_prefix_a: string = str_regx_a![0] ?? '';
        const str_prefix_b: string = str_regx_b![0] ?? '';

        const num_regx_a: RegExpMatchArray | null = a.match(/\d+/)
        const num_regx_b: RegExpMatchArray | null = b.match(/\d+/)
        const num_prefix_a: number = parseInt(num_regx_a![0] ?? '0')
        const num_prefix_b: number = parseInt(num_regx_b![0] ?? '0')

        let result = str_prefix_a > str_prefix_b ? 1 : -1;
        if (str_prefix_a === str_prefix_b) {
            result = num_prefix_a > num_prefix_b ? 1 : -1;
        }
        return result;
    })
}

const data1: string[] = ["TH19", "SG20", "TH2"];
const data2: string[] = ["TH10", "TH3Netflix", "TH1", "TH7"];
console.log(arraySort(data1))
console.log(arraySort(data2))

export { arraySort };