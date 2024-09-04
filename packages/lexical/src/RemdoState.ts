/* eslint-disable header/header */
//remdo customizations

export class RemdoState {
  _filter: string;

  constructor() {
    this._filter = '';
  }

  getFilter() {
    return this._filter;
  }

  setFilter(filter: string) {
    this._filter = filter;
  }
}
