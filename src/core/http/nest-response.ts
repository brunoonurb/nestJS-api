export class NestResponse {
  status: number;
  headers: object;
  body: object;

  constructor(resposta: NestResponse) {
    // this.status = resposta.status;
    Object.assign(this, resposta);
  }
}
