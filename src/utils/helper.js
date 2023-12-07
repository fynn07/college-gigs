export function checkMissingInputs(inputs) {
  for (const key in inputs) {
    if (!inputs[key]) {
      throw new Error("Please fill out all fields!");
    }
  }
}
