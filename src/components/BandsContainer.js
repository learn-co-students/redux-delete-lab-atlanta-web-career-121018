import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux';

class BandsContainer extends Component {

    mapBands = (props) => {
        return this.props.bands.map((band) => {
            return <Band deleteBand={this.props.deleteBand} key={band.id} band={band} />;
        })
    }

	render() {
		return (
			<div>
				<BandInput addBand={this.props.addBand} />
				<ul>{this.mapBands()}</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
    addBand: (name) => dispatch({ type: 'ADD_BAND', name }),
    deleteBand: (bandId) => dispatch({ type: 'DELETE_BAND', bandId })
});

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);
