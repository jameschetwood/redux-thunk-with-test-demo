import { connect } from "react-redux";
import { add } from "../store/actions";
import Add from "./add";

const mapDispatchToProps = { add };

export default connect(
  null,
  mapDispatchToProps
)(Add);
