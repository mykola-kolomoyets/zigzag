import { SummaryStore } from "../../utils";

import Context from "./context";

export const initialSummaryState: SummaryStore = {
  isShow: false,
  isSuccess: false,
  title: '',
  subtitle: ''
};

const SummaryContext = new Context(initialSummaryState);

export default SummaryContext;