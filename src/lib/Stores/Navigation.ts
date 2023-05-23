import { createMachine } from "xstate";
import { useMachine } from "./useMachine";

const navigation = createMachine({
  "id": "Navigation",
  "initial": "menu",
  "states": {
    "menu": {
      "on": {
        "show rules": {
          "target": "rules"
        },
        "new game":{
          "target": "gaming"
        }
      }
    },
    "rules": {
      "on": {
        "back": {
          "target": "menu"
        }
      }
    },
    "gaming": {
      "on": {
        "back": {
          "target": "menu"
        }
      }
    }
  },
  "schema": { events: {} as { type: 'new game' } | { type: 'show rules' } | { type: 'back' } },
  "predictableActionArguments": true,
  "preserveActionOrder": true
})


export type events = typeof navigation.events[0]

export const { state, send } = useMachine(navigation);
