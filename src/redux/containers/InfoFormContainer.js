import { reduxForm } from "redux-form";
import StreamCreate from "../../components/streams/StreamCreate";

const InfoFormContainer = reduxForm({ form: "streamCreate" })(StreamCreate);

export default InfoFormContainer;
