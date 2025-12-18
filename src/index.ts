import { CuentaBancaria } from "./domain/CuentaBancaria";
import { LibroMayor } from "./domain/LibroMayor";
import { now } from "./domain/types";

const cuentaOrigen = new CuentaBancaria("ACC-1", "CORRIENTE", 1000, "USD");
const cuentaDestino = new CuentaBancaria("ACC-2", "CORRIENTE", 200, "USD");

const libroMayor = new LibroMayor("LM-1");

// Movimiento 1
cuentaOrigen.debitar(150);
cuentaDestino.acreditar(150);
libroMayor.registrarMovimiento({
  idMovimiento: "MOV-1",
  fechaRegistro: now(),
  descripcion: "Transferencia inicial",
  monto: 150,
  moneda: "USD",
  cuentaOrigen: "ACC-1",
  cuentaDestino: "ACC-2",
  referenciaInstruccion: "INST-1"
});

// Movimiento 2
cuentaOrigen.debitar(200);
cuentaDestino.acreditar(200);
libroMayor.registrarMovimiento({
  idMovimiento: "MOV-2",
  fechaRegistro: now(),
  descripcion: "Pago de servicio",
  monto: 200,
  moneda: "USD",
  cuentaOrigen: "ACC-1",
  cuentaDestino: "ACC-2",
  referenciaInstruccion: "INST-2"
});

// Movimiento 3
cuentaOrigen.debitar(50);
cuentaDestino.acreditar(50);
libroMayor.registrarMovimiento({
  idMovimiento: "MOV-3",
  fechaRegistro: now(),
  descripcion: "Transferencia menor",
  monto: 50,
  moneda: "USD",
  cuentaOrigen: "ACC-1",
  cuentaDestino: "ACC-2",
  referenciaInstruccion: "INST-3"
});

console.log("Saldo final origen:", cuentaOrigen.consultarSaldo());
console.log("Saldo final destino:", cuentaDestino.consultarSaldo());
console.log("Movimientos en LibroMayor:");
console.log(libroMayor.listarMovimientos());
