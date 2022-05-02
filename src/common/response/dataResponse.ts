import Response from './response';

export default class dataResponse<T> extends Response {
  data: T;

  constructor(status: number, message: string, data: T) {
    super(status, message);
    this.data = data;
  }

  public static dataSuccess<T>(message: string, data: T): dataResponse<T> {
    return new dataResponse(200, message, data);
  }
}
