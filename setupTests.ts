import { vi } from "vitest";

vi.mock("localforage");

window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
    writable: true,
    value: vi.fn(),
});
