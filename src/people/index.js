import { connect } from "react-redux";
import People from "./people";

const mapState = state => {
  const { people } = state;
  return { people };
};

export default connect(mapState)(People);
