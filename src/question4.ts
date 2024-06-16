function autocomplete(search: string, items: string[], maxResult: number): string[] {
    type searchObj = [string, number] | null;
    const keyword: string = search.toLowerCase();
    const res: string[] = items.map((value: string): searchObj => {
        if (value?.toLowerCase().indexOf(keyword) !== -1) {
            return [value, value.toLowerCase().indexOf(keyword)]
        }
        return null
    })
        .filter((value: searchObj): searchObj => value)
        .sort((a: searchObj, b: searchObj): number => a![1] >= b![1] ? 1 : -1
        )
        .map((value): string => value![0])
        .slice(0, maxResult)
    return res
}

const input: string[] = ["Mother", "Think", "Worthy", "Apple", "Android"];
console.log(autocomplete("th", input, 3));

export { autocomplete };
