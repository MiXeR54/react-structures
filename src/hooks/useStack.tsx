import { useReducer } from "react";

type StackAction = { type: "push"; item: any } | { type: "pop" };

function stackReducer(state: any, action: StackAction) {
  switch (action.type) {
    case "push":
      return [...state, action.item];
    case "pop":
      return state.slice(0, -1);
    default:
      return state;
  }
}

export function useStack() {
  return useReducer(stackReducer, []);
}
