import { useEffect, useRef } from "react";

const getPlatform = () => {
  const platform = navigator.platform || navigator.userAgent || "";
  const lower = platform.toLowerCase();

  if (lower.includes("mac")) return "mac";
  if (lower.includes("win")) return "windows";
  if (lower.includes("linux")) return "linux";
  return "other";
};

const normalizeKey = (key: string): string => {
  switch (key.toLowerCase()) {
    case "ctrl":
    case "control":
      return "control";
    case "cmd":
    case "command":
    case "meta":
      return "meta";
    case "shift":
      return "shift";
    case "alt":
    case "option":
      return "alt";
    default:
      return key.toLowerCase();
  }
};

export function useKeyboardTrigger(combo: string, callback: () => void) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const platform = getPlatform();

    // parse combo string into keys
    let comboKeys = combo
      .split("+")
      .map((k) => normalizeKey(k.trim()))
      .filter(Boolean);

    // map ctrl/meta depending on OS
    comboKeys = comboKeys.map((k) => {
      if (k === "control" && platform === "mac") return "meta";
      if (k === "meta" && platform !== "mac") return "control";
      return k;
    });

    const pressed = new Set<string>();

    const downHandler = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key);

      // platform-specific remap for actual key pressed
      const mappedKey =
        platform === "mac" && key === "control"
          ? "meta"
          : platform !== "mac" && key === "meta"
          ? "control"
          : key;

      pressed.add(mappedKey);

      const isMatch = comboKeys.every((ck) => pressed.has(ck));
      if (isMatch) {
        e.preventDefault();
        callbackRef.current();
      }
    };

    const upHandler = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key);
      pressed.delete(key);
    };

    const blurHandler = () => pressed.clear();

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    window.addEventListener("blur", blurHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
      window.removeEventListener("blur", blurHandler);
    };
  }, [combo]);
}
