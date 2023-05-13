const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });
  it('returns the event partition key if it exists', () => {
    const event = { partitionKey: '123' };
    expect(deterministicPartitionKey(event)).toBe('123');
  });

  it('hashes the event data if partition key is not present', () => {
    const event = { foo: 'bar' };
    const hash = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  it('stringifies candidate if not a string', () => {
    const event = { partitionKey: 123  };
    console.log(deterministicPartitionKey(event));
    expect(deterministicPartitionKey(event)).toBe(JSON.stringify(event.partitionKey));
  });

  it('hashes candidate  if  default key coming from partition key is length exceeds max', () => {
    const event = {partitionKey:'a'.repeat(300)};
    const doubleHash = crypto.createHash('sha3-512').update(event.partitionKey).digest('hex');
    expect(deterministicPartitionKey(event)).toBe(doubleHash);
  });
});
