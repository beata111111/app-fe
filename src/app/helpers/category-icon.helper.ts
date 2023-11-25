import * as solid from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export function getCategoryIcon(category_id: string): IconDefinition {
  switch (category_id) {
    case "natu":
      return solid.faTree;
    case "tour":
      return solid.faUmbrellaBeach;
    case "anim":
      return solid.faCow;
    case "home":
      return solid.faHouseChimney;
    case "tran":
      return solid.faCarSide;
    case "body":
      return solid.faHand;
    case "time":
      return solid.faClock;
    case "econ":
      return solid.faWallet;
    case "foo1":
      return solid.faPizzaSlice;
    case "foo2":
      return solid.faUtensils;
    case "fash":
      return solid.faShirt;
    default:
      return solid.faQuestion;
  }
}
