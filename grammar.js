const stateMap = {
  "qe": [
    {
      nextState: "q1",
      error: "Tipo de variable no válido",
      rule: /^(int|float|bool|string)$/,
    },
  ],
  "q1": [
    {
      nextState: "q2",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },
  ],
};

function validateVariableDeclaration(input) {
  let currentState = "qe"; // Estado inicial
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

  if (currentState === "q2") {
    return "Declaración de variable válida";
  } else {
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