import React, { Component } from 'react';
import Api from '../../services/api';
import { toast } from 'react-toastify';
import { Container, Graph, Form, Input, Label, Button } from './styles';
import { Scatter } from 'react-chartjs-2';

class Home extends Component {
  api = Api('http://localhost:5000')
  state={
    interval: [-10, 10],
    expression: '',
    expressionForCurrentResult: '',
    roots: [],
    resultsInInterval: [],
  }
  
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault();
    let { expression, interval } = this.state;
    const symbolsRegExp = new RegExp(/[\/\+\-\*]/);
    const { length: expressionLength } = expression.split(" ").filter(item => !symbolsRegExp.test(item));

    if (!expression) {
      toast.error("Você deve informar uma expressão");
      return;
    } else if (interval.length !== 2) {
      toast.error("O intervalo tem que seguir o formato 'X a Y' (ex: -10 a 10)");
      return;
    } else if (expressionLength > 6) {
      toast.error("A expressão não pode possuir mais de 6 monômios");
      return;
    }

    const { data: res } = await this.api.post('/newton', { function: expression, interval: interval.map(item => Number(item)) });

    if (!res.resultsInInterval.length) {
      toast.error("Não foi possível encontrar uma aproximação da raiz para a expressão informada");
      return;
    }

    this.setState({
      roots: res.roots,
      resultsInInterval: res.resultsInInterval,
      expressionForCurrentResult: expression,
    });
  }

  createChart = () => {
    const { roots, resultsInInterval, interval, expressionForCurrentResult } = this.state;

    let labels = [];
    for(let i = interval[0]; i <= interval[1]; i++) {
      labels.push(i)
    }

    let datasets = [
      {
        label: 'Raizes',
        borderColor: '#6b48ff',
        backgroundColor: '#6b48ff',
        data: roots.map(root => ({ x: root[0], y: root[1] }))
      },
      {
        label: 'Pontos comuns',
        borderColor: '#f2f4f6',
        data: resultsInInterval.map(result => ({ x: result[0], y: result[1] }))
      },
    ];


    return (
      <Graph>
        <label>Equação:</label>
        <div>{expressionForCurrentResult}</div>

        <label>Raizes:</label>
        <div>
          {roots.map(root => <p>(x: {root[0]}, y: {root[1]})</p>)}
        </div>

        <label>Gráfico da Função:</label>
        <Scatter options={{ responsive: true }} data={{ datasets }} />
      </Graph>
    )
  }

  render() {
    const { interval, expression, roots } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor="interval">Intervalo</Label>
            <Input placeholder="Digite o intervalo" name="interval" value={interval.join(" a ")} onChange={({ target }) => this.setState({ interval: target.value.split(" a ") })} />
          </div>

          <div>
            <Label htmlFor="expression">Função</Label>
            <Input placeholder="Digite a equação" name="expression" value={expression} onChange={({ target }) => this.setState({ expression: target.value })} />
          </div>

          <Button type="submit">Calcular</Button>
        </Form>

        {roots.length > 0 && this.createChart()}
      </Container>
    )
  }
}

export default Home;
