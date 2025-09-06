export const theme = {
  light: {
    colors: {
      text: "#111",
      title: "#111",
      muted: "#666",
      primary: "#2563eb",
      danger: "#dc2626",
      background: "#e0dfe8",
      iconColor: "#6E6E6E", // neutral grey icons
      iconColorFocused: "#007AFF", // matches primary
    },
    typography: {
      h1: { fontSize: 28, fontWeight: "700", lineHeight: 34 },
      title: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
      body: { fontSize: 16, fontWeight: "400", lineHeight: 22 },
      caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
    },
  },
  dark: {
    colors: {
      text: "#eee",
      title: "#fff",
      muted: "#aaa",
      primary: "#60a5fa",
      danger: "#f87171",
      background: "#000000",
      iconColor: "#8E8E93", // iOS neutral grey
      iconColorFocused: "#0A84FF", // bright blue accent
    },
    typography: {
      h1: { fontSize: 28, fontWeight: "700", lineHeight: 34 },
      title: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
      body: { fontSize: 16, fontWeight: "400", lineHeight: 22 },
      caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
    },
  },
};
