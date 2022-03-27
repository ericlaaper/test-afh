import { extend } from "vee-validate";
import { localize } from "vee-validate";
import nl from "vee-validate/dist/locale/nl.json";

localize("nl", nl);

import {
  required,
  email,
  min,
  max,
  required_if,
} from "vee-validate/dist/rules";
// Install required rule and message.
extend("required", required);
// Install email rule and message.
extend("email", email);
// Install min rule and message.
extend("min", min);
extend("max", max);
extend("required_if", required_if);
