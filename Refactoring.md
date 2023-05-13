
# Refactoring

  

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

  

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.

2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.

3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

  

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

  

## Your Explanation Here

- Firstly detected while assigning value for candidate variable, candidate will load its value based on event data, if no event data available simply we can check the base case and return given default value, we do not need to scan all codes and go through all later logical checking.

  

- Secondly, we detected that we were making the same type of data sanitization (checking and making string) for both of the cases (when partition key is there or when are making keys with whole event data ), and have taken this to one common pure function.
- Finally, I wanted to process the candidate data in a hashing function in one place so that it's easy to read the logical flow.After refactoring hash is used only in one place.

Now the code is easy to read , also by reading only  user can understand the logical flow easily