import React from 'react';

export default class GematriaCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    }
    this.key = 'gematria-history';
    this.vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    this.separator = '-';
    this.mapping = this.getMapping();
    this.handler = this.handler.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentWillMount() {
    let history;
    try {
      if(localStorage.hasOwnProperty(this.key)) {
        history = JSON.parse(
          localStorage.getItem(this.key)
        )
      } else {
        throw Error('no history')
      }
    } catch (e) {
      history = [];
    }
    try {
      this.setState({
        ...this.parse(history[0].value),
        history,
      });
    } catch (e) {
      this.setState({
        ...this.parse(''),
        history
      })
    }
    
  }
  getMapping() {
    const mapping = {};
    'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .map((l, i) => {
        mapping[l] = i % 9 + 1
      });
    return mapping;
  }
  parse(value) {
    if (value) {
      console.log(value, 'v')
      const v = value.toLowerCase().split('').map((l) => {
        if (this.vowels.indexOf(l) !== -1) return this.mapping[l];
      }).map((l) => {
        if (l) return l;
        else return this.separator;
      });
      const c = value.toLowerCase().split('').map((l) => {
        if (this.vowels.indexOf(l) === -1) return this.mapping[l];
      }).map((l) => {
        if (l) return l;
        else return this.separator;
      });
      const n = value.split('').map((l) => {
        if ([1,2,3,4,5,6,7,8,9].indexOf(parseInt(l, 10)) !== -1) return l;
      }).map((l) => {
        if (l) return l;
        else return this.separator;
      });
      const r = (i, v) => {
        if (i !== this.separator && v !== this.separator)
          return parseInt(i, 10) + parseInt(v, 10);
        else if (i !== this.separator) return parseInt(i, 10);
        else if (v !== this.separator) return parseInt(v, 10);
        else return 0;
      };
      return {
        text: value,
        vowels: v,
        consonants: c,
        numbers: n,
        total: v.reduce(r) + c.reduce(r) + n.reduce(r),
      }
    }
    return {
      ...this.state,
      text: '',
      vowels: [],
      consonants: [],
      numbers: [],
      total: '',
    };
  }
  handler(e) {
    e.preventDefault();
    this.setState(this.parse(this.input.value));
    if (e.type === 'submit') {
      if (this.state.history.filter((k) => { if (k.value === this.input.value) {return 1}}).length === 0) {
        const history = this.state.history.concat({
          key: Date.now(),
          value: this.input.value,
          total: this.state.total,
        });
        this.setState({
          ...this.state,
          history,
        })
        localStorage.setItem(this.key, JSON.stringify(history));
      }
      this.input.value = '';
    }
  }
  reset(value) {
    this.input.value = value;
    this.setState(this.parse(value));
    this.input.focus();
  }
  clearHistory() {
    this.setState({
      history: [],
    });
    localStorage.setItem(this.key, JSON.stringify([]));
    this.input.focus();
  }
  componentDidMount() {
    this.input.value = this.state.text;
    this.input.select()
    this.input.focus();
  }
  render() {
    return (
      <div className="GematriaCalculator">
        <form onChange={this.handler} onSubmit={this.handler}>
          <input type="text" ref={(input) => this.input = input} />
          <input type="reset" value="reset" onClick={(e) => this.reset('')} />
        </form>
        <h4>{this.state.text && this.state.text}</h4>
        <h4>{
          this.state.vowels
        }</h4>
        
        <h4>{
          this.state.consonants
        }</h4>
        <h4>{
          this.state.numbers
        }</h4>
        <h4>{this.state.total}</h4>
        <ul>
          {
            this.state.history.map((text) => {
              return <li key={text.key} onClick={(e) => this.reset(text.value)}>{text.value} {' = '} {text.total}</li>
            })
          }
        </ul>
        {
          this.state.history.length > 0 ?
          <button onClick={(e) => this.clearHistory() }>clear history</button> : null
        }
        
      </div>
    );
  }
}