/* eslint-disable header/header */
//remdo customizations
import {$getNodeByKey, LexicalNode} from 'lexical';

export class RemdoState {
  _filter: string;
  _focusKey: string | undefined;

  constructor() {
    this._filter = '';
  }

  getFilter() {
    return this._filter;
  }

  setFilter(filter: string) {
    this._filter = filter;
  }

  //TODO unify key/node, rethink undefined
  getFocus() {
    return this._focusKey ? $getNodeByKey(this._focusKey) : undefined;
  }

  setFocusKey(key: string) {
    this._focusKey = key === 'root' ? undefined : key
  }
}
