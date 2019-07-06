import React from 'react';
import { Card } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';

class GraphBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];


    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title><h4>Savings History</h4></Card.Title>
          <XYPlot margin={50} width={600} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
        </Card.Body>
      </Card>
    );
  }
}

export default GraphBox;
