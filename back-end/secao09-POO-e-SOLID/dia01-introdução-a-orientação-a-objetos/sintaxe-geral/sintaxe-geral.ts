// Hello, World em POO.

// Criação da classe
class Tv {
  // Atributos
  brand: string;
  size: number;
  resolution: number;
  connections: string;
  connectedTo?: string;

  // Métodos
  // Método Construtor
  constructor(b: string, s: number, res: number, conne: string) {
    console.log(`Criando Tv da marca ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = res;
    this.connections = conne;
  }

  // Método qualquer de exemplo
  turnOn() {
    console.log(`Marca da TV: ${this.brand}`);
    
  }
}

// Criando novo objeto
const tv1 = new Tv('Samsung', 70, 1440, 'HDMI')

// Acessa os atributos
console.log(tv1.brand);

// Acessa os métodos
tv1.turnOn();
