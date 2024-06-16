import { autocomplete } from '../src/question4'

test('search "th" in ["Mother", "Think", "Worthy", "Apple", "Android"] and maxResult 2 get ["Think", "Mother"]', () => {
    expect(autocomplete('th', ["Mother", "Think", "Worthy", "Apple", "Android"], 2)).toEqual(["Think", "Mother"]);
});

test('search "th" in ["Mother", "Think", "Worthy", "Apple", "Android"] and maxResult 4 get ["Think", "Mother", "Worthy"]', () => {
    expect(autocomplete('th', ["Mother", "Think", "Worthy", "Apple", "Android"], 4)).toEqual(["Think", "Mother", "Worthy"]);
});

test('search "TH" in ["Mother", "Think", "Worthy", "Apple", "Android"] and maxResult 5 get ["Think", "Mother", "Worthy"]', () => {
    expect(autocomplete('th', ["Mother", "Think", "Worthy", "Apple", "Android"], 5)).toEqual(["Think", "Mother", "Worthy"]);
});

test('search "a" in ["Mother", "Think", "Worthy", "Apple", "Android"] and maxResult 2 get ["Apple", "Android"]', () => {
    expect(autocomplete('a', ["Mother", "Think", "Worthy", "Apple", "Android"], 2)).toEqual(["Apple", "Android"]);
});

test('search "o" in ["Mother", "Think", "Worthy", "Apple", "Android"] and maxResult 1 get ["Mother"]', () => {
    expect(autocomplete('o', ["Mother", "Think", "Worthy", "Apple", "Android"], 1)).toEqual(["Mother"]);
});

test('search "I" in ["Mother", "Think", "Worthy", "Apple", "Android"] and maxResult 2 get ["Think", "Android"]', () => {
    expect(autocomplete('I', ["Mother", "Think", "Worthy", "Apple", "Android"], 2)).toEqual(["Think", "Android"]);
});