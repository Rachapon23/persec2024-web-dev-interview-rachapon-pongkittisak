import { arraySort } from '../src/question2'

test('["TH19", "SG20", "TH2"] to ["SG20" , "TH2", "TH19"]', () => {
    expect(arraySort(["TH19", "SG20", "TH2"])).toEqual(["SG20", "TH2", "TH19"]);
});

test('["TH10", "TH3Netflix", "TH1", "TH7"] to [ "TH1", "TH3Netflix" , "TH7", "TH10"]', () => {
    expect(arraySort(["TH10", "TH3Netflix", "TH1", "TH7"])).toEqual(["TH1", "TH3Netflix", "TH7", "TH10"]);
});

test('["TH19", "SG20", "TH2", "SG1"] to ["SG1", "SG20", "TH2", "TH19"]', () => {
    expect(arraySort(["TH19", "SG20", "TH2", "SG1"])).toEqual(["SG1", "SG20", "TH2", "TH19"]);
});

test('["TH10", "TH3Netflix", "TH7", "TH3Amazon"] to ["TH3Amazon", "TH3Netflix", "TH7", "TH10"]', () => {
    expect(arraySort(["TH10", "TH3Netflix", "TH7", "TH3Amazon"])).toEqual(["TH3Amazon", "TH3Netflix", "TH7", "TH10"]);
});