import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

renderBands = () => this.props.bands.map(band => <Band key={band.id} name={band.name} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        { this.renderBands() }
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: name => dispatch({ type: "DELETE_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
