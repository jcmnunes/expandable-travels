import React from 'react';
import {
  Grid,
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';
import DatePicker from 'react-16-bootstrap-date-picker';

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDate: '',
      finalDate: '',
      origin: '',
      destination: ''
    };
    this.handleInitialDateChange = this.handleInitialDateChange.bind(this);
    this.handleFinalDateChange = this.handleFinalDateChange.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
  }

  handleInitialDateChange(value) {
    this.setState({
      initialDate: value
    });
  }

  handleFinalDateChange(value) {
    this.setState({
      finalDate: value
    });
  }

  handleOriginChange(e) {
    const origin = this.originRef.value;
    this.setState({ origin });
  }

  handleDestinationChange(e) {
    const destination = this.destinationRef.value;
    this.setState({ destination });
  }

  getIsFormValid() {
    const { initialDate, finalDate, origin, destination } = this.state;
    if (initialDate && finalDate && origin && destination) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Grid style={{ maxWidth: 700 }}>
        <h1>Travel information</h1>
        <Form horizontal>
          <FormGroup controlId="travelInitialDate">
            <Col componentClass={ControlLabel} sm={2}>
              Initial date
            </Col>
            <Col sm={10}>
              <DatePicker
                value={this.state.initialDate}
                onChange={this.handleInitialDateChange}
              />
              <HelpBlock>When are you leaving?</HelpBlock>
            </Col>
          </FormGroup>

          <FormGroup controlId="travelFinalDate">
            <Col componentClass={ControlLabel} sm={2}>
              Final date
            </Col>
            <Col sm={10}>
              <DatePicker
                value={this.state.finalDate}
                onChange={this.handleFinalDateChange}
              />
              <HelpBlock>When are you arriving?</HelpBlock>
            </Col>
          </FormGroup>

          <FormGroup controlId="travelOrigin">
            <Col componentClass={ControlLabel} sm={2}>
              Origin
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass="select"
                placeholder="select"
                onChange={this.handleOriginChange}
                value={this.state.origin}
                inputRef={c => {
                  this.originRef = c;
                }}>
                <option style={{ display: 'none' }}>
                  -- select an option --
                </option>
                <option value="select1">select1</option>
                <option value="select2">select2</option>
                <option value="select3">select3</option>
                <option value="select4">select4</option>
                <option value="select5">select5</option>
              </FormControl>
              <HelpBlock>You are leaving from...</HelpBlock>
            </Col>
          </FormGroup>

          <FormGroup controlId="travelDestination">
            <Col componentClass={ControlLabel} sm={2}>
              Destination
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass="select"
                placeholder="select"
                onChange={this.handleDestinationChange}
                value={this.state.destination}
                inputRef={c => {
                  this.destinationRef = c;
                }}>
                <option value="null" style={{ display: 'none' }}>
                  -- select an option --
                </option>
                <option value="select1">select1</option>
                <option value="select2">select2</option>
              </FormControl>
              <HelpBlock>You are going to...</HelpBlock>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button disabled={!this.getIsFormValid()}>Save travel</Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    );
  }
}

export default Travel;
