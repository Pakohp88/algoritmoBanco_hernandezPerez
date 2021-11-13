
//Esta interfaz simulara una tarjeta
interface Tarjeta{    
    numero: string,
    nip: number
}

//Esta clase simulara a una cuenta bancaria
class Cuenta{    
    constructor(public nombre: string,
                public numero: string,
                public saldo:  number) {}
}

//Esta clase emulara a las operaciones bancarias
class Banco{
    
    private cuenta: Cuenta;

    //metodos de validacion de la tarjeta, simula si son correctos los datos 
    validarTarjeta = ( tarjeta: Tarjeta): boolean => {

        if(tarjeta.numero == "1234567890123456" && tarjeta.nip == 1234){
            this.cuenta = new Cuenta("Francisco Hernandez", "240188", 10000);            
            return true;
        }
        return false;
    }

    //metodo para retirar efectivo
    retirarEfectivo = (monto: number): string => {
        // se valida que exista el saldo requerido        
        if(monto <= this.cuenta.saldo){
            this.cuenta.saldo -= monto;
            return this.imprimirSaldo(monto);
        }
        else{
            return "El monto solicitado excede el valor de saldo en la cuenta";            
        }
    }

    //metodo para imprimir el saldo de la cuenta
    imprimirSaldo = (montoRetirado: number): string => {
        return `Se han retirado $ ${ montoRetirado } de la cuenta ${ this.cuenta.numero } a nombre de ${ this.cuenta.nombre } el saldo final es de $ ${ this.cuenta.saldo }`;    
    }
}

//Se crea la tarjeta 
const tarjeta: Tarjeta = {
    numero: '1234567890123456',
    nip: 1234
}

//Se abren los servicios del banco
let banco = new Banco();

//se valida que los datos de la tarjeta sean correctos
if(banco.validarTarjeta(tarjeta))
{
    console.log("Bienvenido al banco HP");
    //se valido correctamenta la tarjeta
    //Se intentara retirar efectivo
    console.log(banco.retirarEfectivo(5600));
}
//En caso que los datos de la tarjeta sean invalidos se niega el servicio
else{
    console.log("Tarjeta invalida");    
}



