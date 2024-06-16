import { hex2RGB } from '../src/question1'

test('#FFF to rgb(255, 255, 255)', () => {
    expect(hex2RGB("#FFF")).toEqual({ r: 255, g: 255, b: 255 });
});

test('#FF9933 to rgb(255, 153, 51)', () => {
    expect(hex2RGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
});

test('#ff9933 to rgb(255, 153, 51)', () => {
    expect(hex2RGB("#ff9933")).toEqual({ r: 255, g: 153, b: 51 });
});

test('#000 to rgb(0, 0, 0)', () => {
    expect(hex2RGB("#000")).toEqual({ r: 0, g: 0, b: 0 });
});

test('if input is correct body will alway return in rgb', () => {
    expect(hex2RGB("#AE1")).toHaveProperty('r');
    expect(hex2RGB("#AE1")).toHaveProperty('g');
    expect(hex2RGB("#AE1")).toHaveProperty('b');
});

test('123 should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});

test('#1 should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});

test('#12 should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});

test('#1122 should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});

test('#1122A should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});

test('#1R22AA should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});

test('#1122AA2634 should cannot convert', () => {
    expect(hex2RGB("#1122")).toBe('Plese enter a vliad HEX code color');
});