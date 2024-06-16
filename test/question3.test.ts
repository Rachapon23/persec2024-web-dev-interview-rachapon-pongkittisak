import { ReverseEncoder } from '../src/question3'

test('encode hello world to dliow svool', () => {
    const reverseEncoder = new ReverseEncoder();
    expect(reverseEncoder.encode('hello world')).toEqual('dliow svool');
});

test('decode dliow svool to hello world', () => {
    const reverseEncoder = new ReverseEncoder();
    expect(reverseEncoder.encode('dliow svool')).toEqual('hello world');
});

test('encode Hello World to Dliow Svool', () => {
    const reverseEncoder = new ReverseEncoder();
    expect(reverseEncoder.encode('Hello World')).toEqual('Dliow Svool');
});

test('decode Dliow Svool to Hello World', () => {
    const reverseEncoder = new ReverseEncoder();
    expect(reverseEncoder.encode('Dliow Svool')).toEqual('Hello World');
});


test('encode Hi Hello World to Dliow Svool Sr', () => {
    const reverseEncoder = new ReverseEncoder();
    expect(reverseEncoder.encode('Hi Hello World')).toEqual('Dliow Svool Sr');
});

test('decode Dliow Svool Sr to Hi Hello World', () => {
    const reverseEncoder = new ReverseEncoder();
    expect(reverseEncoder.encode('Dliow Svool Sr')).toEqual('Hi Hello World');
});
