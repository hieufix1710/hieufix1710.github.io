import { connect } from "react-redux";
import ControlPad from "../components/ControlPad";
import { getApp } from "../redux/selectors/CommonSelector";

const mapStateToProps = (state) => {
  return {
    ...getApp(state),
  };
};

export default connect(mapStateToProps, {
  
})(ControlPad);
