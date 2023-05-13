const crypto = require("crypto");

const saniTizeValue = (data) => {
  return typeof data !== "string" ? JSON.stringify(data) : data
}
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  let hashable = false;

  if (!event) return TRIVIAL_PARTITION_KEY;
  if (event?.partitionKey) {
    candidate = saniTizeValue(event.partitionKey);
    hashable = candidate.length > MAX_PARTITION_KEY_LENGTH;
  }
  else {
    candidate = saniTizeValue(event);
    hashable = true;
  }
  return hashable ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate
};