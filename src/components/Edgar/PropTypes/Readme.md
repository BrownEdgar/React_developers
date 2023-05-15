////////////////////////////////////////////////////////////////////////////////
// PropTypes: Ծառայում է Տիպային ստուգումներ անցկացնելու համար։
// - Գտնվում է առանձին 'prop-types' գրադարանի մեջ!
////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
	render() {
		return <h1>{this.props.name}</h1>
	}
}

Person.propTypes = {
	// check Here
	name: PropTypes.string.isRequired
};
export default Person;

// // Տիպերի ստուգման Օրինակներ
// value: PropTypes.array, 
// value: PropTypes.bool,
// value: PropTypes.func,
// value: PropTypes.number,
// value: PropTypes.object,
// value: PropTypes.string,
// value: PropTypes.symbol,



// Կարելի է ավելացնել `isRequired` ցանկացած տիպի համար,
// որպեսզի հարուցվի զգուշացում, եթե այն փոխանցած չէ,
// requiredFunc: PropTypes.func.isRequired,

// --------------------------------------------------------------

// Ցանկացած տիպի արժեք
 requiredAny: PropTypes.any.isRequired,

// --------------------------------------------------------------

//  React-элемент
//  PropTypes.element,

// --------------------------------------------------------------

// Կոնկրետ նշվածներից մեկը
PropTypes.oneOf(['male', 'female']),

// --------------------------------------------------------------

// Օբյեկտ, նշված տիպերի ինչ-որ մեկը
// optionalUnion: PropTypes.oneOfType([
// 	PropTypes.string,
// 	PropTypes.number
// ]),

// --------------------------------------------------------------

// Կոնկրետ տիպով օբյեկտների զանգված
//optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// --------------------------------------------------------------

// Օբյեկտ, որի հատկությունները ունեն կոնկրետ տիպ
// optionalObjectOf: PropTypes.objectOf(PropTypes.number),

// --------------------------------------------------------------

// Օբյեկտ նախորոք որոշված կառուցվածքով

// optionalObjectWithShape: PropTypes.shape({
// 	color: PropTypes.string,
// 	fontSize: PropTypes.number
// }),

// --------------------------------------------------------------

// Օբյեկտ ԽԻՍՏ  կառուցվածքով
// Չհայտարարված հատկություններ դեպքում կգեներացվեն warning-ներ
// optionalObjectWithStrictShape: PropTypes.exact({
// 	name: PropTypes.string,
// 	quantity: PropTypes.number
// }), 

// --------------------------------------------------------------
