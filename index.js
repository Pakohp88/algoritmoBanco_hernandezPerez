//Esta clase simulara a una cuenta bancaria
var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, numero, saldo) {
        this.nombre = nombre;
        this.numero = numero;
        this.saldo = saldo;
    }
    return Cuenta;
}());
//Esta clase emulara a las operaciones bancarias
var Banco = /** @class */ (function () {
    function Banco() {
        var _this = this;
        //metodos de validacion de la tarjeta, simula si son correctos los datos 
        this.validarTarjeta = function (tarjeta) {
            if (tarjeta.numero == "1234567890123456" && tarjeta.nip == 1234) {
                _this.cuenta = new Cuenta("Francisco Hernandez", "240188", 10000);
                return true;
            }
            return false;
        };
        //metodo para retirar efectivo
        this.retirarEfectivo = function (monto) {
            // se valida que exista el saldo requerido        
            if (monto <= _this.cuenta.saldo) {
                _this.cuenta.saldo -= monto;
                return _this.imprimirSaldo(monto);
            }
            else {
                return "El monto solicitado excede el valor de saldo en la cuenta";
            }
        };
        //metodo para imprimir el saldo de la cuenta
        this.imprimirSaldo = function (montoRetirado) {
            return "Se han retirado $ " + montoRetirado + " de la cuenta " + _this.cuenta.numero + " a nombre de " + _this.cuenta.nombre + " el saldo final es de $ " + _this.cuenta.saldo;
        };
    }
    return Banco;
}());
//Se crea la tarjeta 
var tarjeta = {
    numero: '1234567890123456',
    nip: 1234
};
//Se abren los servicios del banco
var banco = new Banco();
//se valida que los datos de la tarjeta sean correctos
if (banco.validarTarjeta(tarjeta)) {
    console.log("Bienvenido al banco HP");
    //se valido correctamenta la tarjeta
    //Se intentara retirar efectivo
    console.log(banco.retirarEfectivo(5600));
}
//En caso que los datos de la tarjeta sean invalidos se niega el servicio
else {
    console.log("Tarjeta invalida");
}
