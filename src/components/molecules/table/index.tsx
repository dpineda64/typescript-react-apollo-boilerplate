import * as React from 'react';
import { Link } from 'react-router-dom';
import StateMessages from '../states-messages';

interface tableProps {
  items: tableItem[];
  header: string[];
  theme?: string;
  filter?: boolean;
  parent?: string;
  exclude?: string[];
  select?: boolean;
}

interface tableItem {
  [key:string]: any;
}

interface ObjectWithKey {
  [key:string]: any;
}

class mTable extends React.Component<tableProps, any> {
  renderItem = (item: tableItem) => {
    const { exclude, parent } = this.props;
    return Object.keys(item).map((key, i) => {
      if (!exclude.includes(key)) {
        const isObject = (item[key] instanceof Object);
        const kParsed = parseObject(item, key, parent);
        return (
          <th key={key}>
            {kParsed}
          </th>
        );
      }
    });
  }

  renderRows = () => {
    const { select, header, items } = this.props;
    if (items) {
      if (items.length === 0) {
        return (
          <tr>
            <th colSpan={header.length + 1} >
              {StateMessages.empty({ message: 'empty message' })}
            </th>
          </tr>
        );
      }
      return items.map((item: object, i:number) => {
        return (
          <tr key={i}>
            {(select) ? <th> <input type="checkbox" /> </th> : null}
            {this.renderItem(item)}
          </tr>
        );
      });
    }
    return null;
  }
  render() {
    const theme = this.props.theme || 'light';
    const { header, items, exclude, select, parent } = this.props;
    return (
      <table className="m-table" data-theme={theme}>
        <thead>
          <tr>
          {(select) ? <th></th> : null}
            {header.map((header, i) => {
              if (!exclude.includes(header)) {
                return <th key={i}> {header} </th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

const parseObject = (item: ObjectWithKey, key: string, parent?: string) => {
  if (item instanceof Array) {
    return item;
  }
  if (key === 'path' && parent) {
    return (
      <Link to={`/${parent}/${item['_id']}`}> {item['path']} </Link>
    );
  }
  if (item[key] !== null) return item[key].toString();
};

export default mTable;
