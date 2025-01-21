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

  getFocus() {
    return this._focusKey ? $getNodeByKey(this._focusKey) : undefined;
  }

  setFocus(node: LexicalNode | null) {
    this._focusKey =
      !node || node.getKey() === 'root' ? undefined : node.getKey();
  }
}
