# MongoDB $inc operator type error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value.  However, if the field to be incremented is not a number (e.g., a string), the update operation will fail silently or produce unexpected results.

The `bug.js` file shows the incorrect usage of the `$inc` operator, while `bugSolution.js` provides the correct implementation.
