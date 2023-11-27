import IAgenda from "./interfaces/IAgenda";

abstract class Quadra {
  abstract reservar<T>(horaReservada: Date): IAgenda<T>;
}

export default Quadra;