import React from 'react';
import PropTypes from 'prop-types';


class Heading extends React.Component {
    state = {}
    render() {
        const { head, body } = this.props;
        if (!head) {
            return null;
        };
        return (
            <div>
	            <h1 data-test="head">{head}</h1>
	            <p data-test="body">{body}</p>
            </div>
        )
    }
}

Heading.propTypes = {
    head: PropTypes.string,
    body: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        a: PropTypes.string,
        b: PropTypes.string,
        email: PropTypes.number,
        wiek: PropTypes.number
    }))
};


export default Heading;