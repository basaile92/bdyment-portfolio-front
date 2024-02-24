export default class HistoryLine {
  private _date: string;
  private _command: string;
  private _response: string | undefined;

  constructor(date: Date, command: string, response: string | undefined) {
    this._date = date.toISOString();
    this._command = command;
    this._response = response;
  }
  get date(): string {
    return this._date;
  }

  get command(): string {
    return this._command;
  }

  get response(): string | undefined {
    return this._response;
  }
}
