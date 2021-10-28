const markHeight = 1.88
const markMass = 85
const johnHeight = 1.76
const johnMass = 85
const markBmi = markMass / markHeight ** 2
const johnBmi = johnMass / johnHeight ** 2
const markHigherBmi = markBmi > johnBmi
console.log(markBmi, johnBmi, markHigherBmi)