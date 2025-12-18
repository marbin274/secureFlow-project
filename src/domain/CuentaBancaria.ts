import { Moneda } from "./types";

export class CuentaBancaria {
  constructor(
    public readonly numeroCuenta: string,
    public readonly tipoCuenta: "AHORROS" | "CORRIENTE",
    private saldo: number,
    public readonly moneda: Moneda,
    public estado: "ACTIVA" | "BLOQUEADA" = "ACTIVA"
  ) {}

  consultarSaldo(): number { return this.saldo; }

  debitar(monto: number): void {
    if (this.estado !== "ACTIVA") throw new Error("Cuenta no activa");
    if (this.saldo < monto) throw new Error("Fondos insuficientes");
    this.saldo -= monto;
  }

  acreditar(monto: number): void {
    this.saldo += monto;
  }
}