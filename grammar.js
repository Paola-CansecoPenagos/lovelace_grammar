const stateMap = {
  "qe": [
    {
      nextState: "q1",
      error: "Palabra reservada mal escrita",
      rule: /^(int|float|bool|string)$/,
    },
    {
      nextState: "qfr",
      error: "Nombre de variable no válido",
      rule: /^([a-z][a-z0-9_]*)(.read)$/,
    },
    {
      nextState: "qfw",
      error: "Nombre de variable no válido",
      rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write)$/,
    },
    {
      nextState: "q2",
      error: "Palabra reservada mal escrita",
      rule: /^(fnc)$/,
    },

  ],
  "q1": [
    {
      nextState: "qfd",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },
  ],
  "q2":[
    {
      nextState: "q3",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    }
  ],
  "q3":[
    {
      nextState: "q4",
      error: "Nombre de variable no válido",
      rule: /^\(\)\{$/,
    }
  ],
  "q4": [
    {
      nextState: "q5",
      error: "Nombre de variable no válido",
      rule: /^([a-z][a-z0-9_]*)(.read)$/,
    },
    {
      nextState: "q5",
      error: "Nombre de variable no válido",
      rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write)$/,
    },
  ],
  "q5": [
    {
      nextState: "qff",
      error: "Nombre de variable no válido",
      rule: /^\}$/,
    },
  ]
 };

function validateVariableDeclaration(input) {
  let currentState = "qe"; 
  const lines = input.split('\n');

  for (const line of lines) {
    const tokens = line.trim().split(' ');
    for (const token of tokens) {
      const nextState = getNextState(currentState, token);
      if (nextState === "q0-error") {
        return `Error: ${currentState}: ${stateMap[currentState][0].error}`;
      }
      if (currentState === "q1" && token.endsWith('_')) {
        return `Error: Nombre de variable no puede terminar en '_'`;
      }
      currentState = nextState;
    }
  }

  if (currentState === "qfd") {
    return "Declaración de variable válida";
  } 
  if (currentState === "qfr") {
    return "Leer variable válido";
  } 
  if (currentState === "qfw") {
    return "Escribir variable válido";
  } 
  if (currentState === "qff") {
    return "Declaración de función válido";
  } 
  else {
    return `Error: ${currentState}: ${stateMap[currentState][0].error}`;
  }
}

function getNextState(currentState, token) {
  const stateTransitions = stateMap[currentState];
  if (stateTransitions) {
    for (const transition of stateTransitions) {
      if (transition.rule.test(token)) {
        return transition.nextState;
      }
    }
  }
  return "q0-error";
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la declaración de variable: ', (input) => {
  const result = validateVariableDeclaration(input);
  console.log(result);
  rl.close();
});
