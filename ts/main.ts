import { device_type, device_priority } from "./device";
import { device_manager } from "./device_manager";
import { mouse } from "./mouse";
import { global_registration_form } from "./registration_form";

let gloal_device_manager: device_manager = new device_manager([new mouse("mouse", device_type.INPUT, device_priority.CORE)]);