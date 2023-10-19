// See https://aka.ms/new-console-template for more information

public class Program
{
  public static void Main()
  {
      Console.WriteLine("LEITOR DE POLÍGONOS");
      Console.WriteLine("--------------------");

      Console.WriteLine("Insira o número de lados:");
      string? numOfSizes = Console.ReadLine();

      int poligonSizes = 0;

      var convertedSizes = Int32.TryParse(numOfSizes, out poligonSizes);

      switch (poligonSizes)
      {
        case < 3:
            Console.WriteLine("Não é um polígono");
            break;
        case 3:
            Console.WriteLine("Triângulo");
            break;
        case 4:
            Console.WriteLine("Quadrado");
            break;
        case 5:
            Console.WriteLine("Pentágono");
            break;
        default:
            Console.WriteLine("WTF is that");
            break;
      }
    }
}