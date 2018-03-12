import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/index';
import Register from './Register';

function mapStateToProps(state) {
  return {};
}

export default connect(
	mapStateToProps,
	userActions
)(Register);
