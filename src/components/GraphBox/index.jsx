import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';

class GraphBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { title } = this.props;

    const data = [
      { x: 'Jan', y: 80000 },
      { x: 'Feb', y: 50000 },
      { x: 'Mar', y: 40000 },
      { x: 'Apr', y: 90000 },
      { x: 'May', y: 10000 },
      { x: 'Jun', y: 70000 },
      { x: 'Jul', y: 60000 },
      { x: 'Aug', y: 30000 },
      { x: 'Sept', y: 20000 },
      { x: 'Oct', y: 0 },
      { x: 'Nov', y: 30000 },
      { x: 'Dec', y: 40000 },
    ];


    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title><h4>{title}</h4></Card.Title>
          <XYPlot margin={50} width={600} height={300} xType="ordinal">
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

GraphBox.propTypes = {
  title: PropTypes.string.isRequired
};

export default GraphBox;
