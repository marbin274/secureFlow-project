export type UUID = string;
export type Moneda = "USD" | "EUR" | "PEN";

export enum EstadoConsentimiento { Pendiente="Pendiente", Autorizado="Autorizado", Revocado="Revocado", Expirado="Expirado" }
export enum EstadoToken { Activo="Activo", Expirado="Expirado", Revocado="Revocado" }
export enum EstadoSolicitudPago { Creada="Creada", Rechazada="Rechazada", AprobadaFraude="AprobadaFraude", Aprobada="Aprobada" }
export enum EstadoInstruccion { Creada="Creada", Ejecutada="Ejecutada", Fallida="Fallida" }

export type AlcanceConsentimiento = "SOLO_LECTURA" | "PAGOS";
export type TipoSCA = "SMS" | "BIOMETRIA" | "TOKEN_FISICO";

export function now(): Date { return new Date(); }
export function isExpired(expiraEn: Date, at: Date = now()): boolean {
  return expiraEn.getTime() <= at.getTime();
}