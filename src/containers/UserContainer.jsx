import { connect } from "react-redux";
import User from "../components/user/User";

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
})(User);
