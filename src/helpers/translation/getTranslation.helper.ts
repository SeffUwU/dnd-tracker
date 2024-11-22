import { TextCode } from "@/locale/text.codes";
import { TextLocaleMap } from "@/locale/text.locale.map";

export function t(key: TextCode) {
  return TextLocaleMap["en"][key];
}
