import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
})(Home);
