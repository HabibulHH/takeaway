const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({partitionKey:'a'.repeat(300)}));