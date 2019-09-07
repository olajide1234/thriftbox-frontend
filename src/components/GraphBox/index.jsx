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
    const { title, data } = this.props;
    const Months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const dataArr = data.map((d) => {
      return {
        x: `${Months[(new Date(d.timestamp)).getMonth()]}, ${(new Date(d.timestamp)).getFullYear()}`,
        y: (d.credit - d.debit)
      }
    });
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title><h4>{title}</h4></Card.Title>
          <XYPlot margin={50} width={600} height={300} xType="ordinal">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={dataArr} />
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
