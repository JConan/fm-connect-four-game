import { createMachine } from "xstate";
import { useMachine } from "./useMachine";

const navigation = createMachine({
  "id": "Navigation",
  "initial": "menu",
  "states": {
    "menu": {
      "on": {
        "goto: rules": {
          "target": "rules"
        }
      }
    },
    "rules": {
      "on": {
        "back": {
          "target": "menu"
        }
      }
    }
  },
  "schema": { events: {} as { type: 'goto: rules' } | { type: 'back' } },
  "predictableActionArguments": true,
  "preserveActionOrder": true
})


export type events = typeof navigation.events[0]

export const { state, send } = useMachine(navigation);
