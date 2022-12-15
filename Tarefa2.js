const kelvin = 293
//Para começar, crie uma variável chamada kelvin, e defina-a igual a 293. O valor salvo em kelvin permanecerá constante. Escolha o tipo de variável com isso em mente.

const celsius = kelvin - 273
// única diferença é que Celsius é 273 graus menos que Kelvin. Vamos converter Kelvin para Celsius subtraindo 273 da variável kelvin.

 let fahrenheit = celsius * (9/5) + 32 
 //Use esta equação para calcular Fahrenheit e armazene a resposta em uma variável chamada fahrenheit.

 fahrenheit = Math.floor(fahrenheit)
 //uando você converte de Celsius para Fahrenheit, geralmente obtém um número decimal. 

 console.log(`A temperatura é ${kelvin} Kelvin.\n A temperatura é graus ${celsius} Celsius.\n A temperatura é graus ${fahrenheit} Fahrenheit.`)
 