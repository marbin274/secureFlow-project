import { Moneda, UUID, now } from "./types";

export type MovimientoLibroMayor = {
  idMovimiento: UUID;
  fechaRegistro: Date;
  descripcion: string;
  monto: number;
  moneda: Moneda;
  cuentaOrigen: string;
  cuentaDestino: string;
  referenciaInstruccion: UUID;
};

export class LibroMayor {
  private movimientos: MovimientoLibroMayor[] = [];
  constructor(public readonly idLibroMayor: UUID, public readonly fechaRegistro: Date = now()) {}
  registrarMovimiento(m: MovimientoLibroMayor) { this.movimientos.push(m); }
  listarMovimientos() { return [...this.movimientos]; }
}