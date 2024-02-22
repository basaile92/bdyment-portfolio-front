export default class HistoryLine {
  private _command: string;
  private _response: string;

  constructor(command: string, response: string) {
    this._command = command;
    this._response = response;
  }

  get command(): string {
    return this._command;
  }

  get response(): string {
    return this._response;
  }
}
