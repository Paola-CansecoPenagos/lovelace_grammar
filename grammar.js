const stateMap = {
  "qe": [
    {
      nextState: "q010",
      error: "Palabra reservada mal escrita",
      rule: /^int$/,
    },
    {
      nextState: "q020",
      error: "Palabra reservada mal escrita",
      rule: /^float$/,
    },
    {
      nextState: "q030",
      error: "Palabra reservada mal escrita",
      rule: /^bool$/,
    },
    {
      nextState: "q040",
      error: "Palabra reservada mal escrita",
      rule: /^string$/,
    },

    {
      nextState: "qfr",
      error: "Nombre de variable no válido o palabra reservada mal escrita",
      rule: /^([a-z][a-z0-9_]*)(.read)$/,
    },
    {
      nextState: "qfw",
      error: "Nombre de variable no válido o palabra reservada mal escrita",
      rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write)$/,
    },
    {
      nextState: "q2",
      error: "Palabra reservada mal escrita",
      rule: /^fnc$/,
    },
    {
      nextState: "q6",
      error: "Palabra reservada mal escrita",
      rule: /^switch$/,
    },
    {
      nextState: "q12",
      error: "Palabra reservada mal escrita",
      rule: /^while$/,
    },
    {
      nextState: "q17",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },

  ],
  "q010": [
    {
      nextState: "q011",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },
  ],
  "q011": [
    {
      nextState: "q012",
      error: "Operador no válido",
      rule: /^=$/,
    },
    {
      nextState: "q010",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q012": [
    {
      nextState: "q013",
      error: "Valor no válido",
      rule: /^[0-9]*$/,
    },
  ],
  "q013": [
    {
      nextState: "q010",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q020": [
    {
      nextState: "q021",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },
  ],
  "q021": [
    {
      nextState: "q022",
      error: "Operador no válido",
      rule: /^=$/,
    },
    {
      nextState: "q020",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q022": [
    {
      nextState: "q023",
      error: "Valor no válido",
      rule: /^[0-9]*.[0-9]*$/,
    },
  ],
  "q023": [
    {
      nextState: "q020",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q030": [
    {
      nextState: "q031",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },
  ],
  "q031": [
    {
      nextState: "q032",
      error: "Operador no válido",
      rule: /^=$/,
    },
    {
      nextState: "q030",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q032": [
    {
      nextState: "q033",
      error: "Valor no válido",
      rule: /^(true|false)*$/,
    },
  ],
  "q033": [
    {
      nextState: "q030",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q040": [
    {
      nextState: "q041",
      error: "Nombre de variable no válido",
      rule: /^[a-z][a-z0-9_]*$/,
    },
  ],
  "q041": [
    {
      nextState: "q042",
      error: "Operador no válido",
      rule: /^=$/,
    },
    {
      nextState: "q040",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q042": [
    {
      nextState: "q043",
      error: "Valor no válido",
      rule: /^".*"$/
    },
    {
      nextState: "q044",
      error: "Valor no válido",
      rule: /^".*$/
    },
  ],
  "q043": [
    {
      nextState: "q040",
      error: "Separacion de variables no válido",
      rule: /^,$/,
    }
  ],
  "q044": [
    {
      nextState: "q043",
      error: "Valor no válido o hace falta comillas",
      rule: /^[^"]*"$/
    },
    {
      nextState: "q044",
      error: "Palabra no válido",
      rule: /^[^"]+$/
    }
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
      error: "Cierre y apertura no válido",
      rule: /^\(\)\{$/,
    }
  ],
  "q4": [
    {
      nextState: "q5",
      error: "Nombre de variable no válido o palabra reservada mal escrita",
      rule: /^([a-z][a-z0-9_]*)(.read)$/,
    },
    {
      nextState: "q5",
      error: "Nombre de variable no válido o palabra reservada mal escrita",
      rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write)$/,
    },
  ],
  "q5": [
    {
      nextState: "qff",
      error: "Cierre no válido",
      rule: /^\}$/,
    },
  ],
  "q6": [
    {
      nextState: "q7",
      error: "Nombre de variable de switch no válido",
      rule: /^\([a-z][a-z0-9_]*\){$/,
    },
  ],
  "q7": [
    {
      nextState: "q8",
      error: "Case no válido",
      rule: /^case_[a-z][a-z0-9_]*\($/,
    },
  ],
  "q8": [
    {
      nextState: "q9",
      error: "Introducción no válido",
      rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write|([a-z][a-z0-9_]*)(.read))$/,
    },
  ],
  "q9": [
    {
      nextState: "q10",
      error: "Cierre no válido",
      rule: /\)$/,
    },
  ],
  "q10": [
    {
      nextState: "q8",
      error: "Case no válido",
      rule: /^case_[a-z][a-z0-9_]*\($/,
    },
    {
      nextState: "q11",
      error: "Palabra reservada mal escrita",
      rule: /^exit$/,
    },
  ],
  "q11": [
    {
      nextState: "qfs",
      error: "Cierre no válido",
      rule: /}$/,
    },
  ],
  "q12": [
    {
      nextState: "q13",
      error: "Nombre de variable de switch no válido",
      rule: /^\([a-z][a-z0-9_]*$/,
    },
  ],
  "q13": [
    {
      nextState: "q14",
      error: "Operador no válido",
      rule: /^==$/,
    },
  ],
  "q14": [
    {
      nextState: "q15",
      error: "Valor no válido",
      rule: /^(true\)|false\){)$/
    },
  ],
  "q15": [
    {
      nextState: "q16",
      error: "Introducción no válido",
      rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write|([a-z][a-z0-9_]*)(.read))$/,
    },
  ],
  "q16": [
    {
      nextState: "q11",
      error: "Palabra reservada no válido",
      rule: /^exit$/,
    },
  ],
  "q17": [
    {
      nextState: "q18",
      error: "Operador no válido",
      rule: /^=$/,
    }
  ],
  "q18": [
    {
      nextState: "q19",
      error: "Valor no válido",
      rule: /^([0-9]*|[0-9]*.[0-9]*|true|false|".*")$/,
    },
    {
      nextState: "q19",
      error: "Valor no válido",
      rule: /^".*$/
    },
  ],
  "q19": [
    {
      nextState: "q20",
      error: "Valor no válido o hace falta comillas",
      rule: /^[^"]*"$/
    },
    {
      nextState: "q19",
      error: "Palabra no válido",
      rule: /^[^"]+$/
    }
  ],
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
      if ((currentState === "q1" && token.endsWith('_'))||(currentState === "q010" && token.endsWith('_')) ||(currentState === "q020" && token.endsWith('_'))||(currentState === "q030" && token.endsWith('_')) ||(currentState === "q040" && token.endsWith('_'))||(currentState === "qe" && token.endsWith('_'))) {
        return `Error: Nombre de variable no puede terminar en '_'`;
      }
      currentState = nextState;
    }
  }

  if (currentState === "qfd" || currentState === "q011" || currentState === "q021"|| currentState === "q031"|| currentState === "q041") {
    return "Declaración de variable válida";
  } 
  if (currentState === "q013" || currentState === "q023" || currentState === "q033" || currentState === "q043") {
    return "Declaración e inicializacion de variable válido";
  } 
  if (currentState === "q19"||currentState === "q20") {
    return "Inicialización de variable válido";
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
  if (currentState === "qfs") {
    return "Declaración de funcion de sentencia válido";
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

rl.question('Ingrese el bloque de codigo: ', (input) => {
  const result = validateVariableDeclaration(input);
  console.log(result);
  rl.close();
});
