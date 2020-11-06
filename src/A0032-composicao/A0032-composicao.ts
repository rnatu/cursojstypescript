export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está celerando...');
  }

  parar(): void {
    console.log('Motor está parando...');
  }
}

const carro1 = new Carro();
carro1.ligar();
carro1.acelerar();
carro1.parar();
