// constants/theme.ts
export const theme = {
  light: {
    colors: {
      // Base
      background: "#F8FAFC", // slate-50
      surface: "#FFFFFF", // cards / headers
      border: "#E5E7EB", // slate-200
      overlay: "rgba(0,0,0,0.06)",

      // Text
      text: "#0F172A", // slate-900
      title: "#0F172A",
      muted: "#64748B", // slate-500

      // Brand / Actions
      primary: "#3B82F6", // blue-500
      secondary: "#8B5CF6", // violet-500
      success: "#10B981", // emerald-500
      warning: "#F59E0B", // amber-500
      danger: "#EF4444", // red-500
      textOnPrimary: "#FFFFFF",

      // Icons
      iconColor: "#6B7280", // gray-500
      iconColorFocused: "#3B82F6",

      // Tabs (bottom nav)
      tabBarBackground: "#FFFFFF",
      tabBarBorder: "#E5E7EB",
      tabBarActive: "#3B82F6",
      tabBarInactive: "#9CA3AF",

      // Headers (stack)
      headerBackground: "#FFFFFF",
      headerBorder: "#E5E7EB",
      headerTitle: "#0F172A",
      headerTint: "#0F172A", // back button / icons
      statusBarStyle: "dark", // 'light' | 'dark'
    },
    typography: {
      h1: { fontSize: 28, fontWeight: "700", lineHeight: 34 },
      title: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
      body: { fontSize: 16, fontWeight: "400", lineHeight: 22 },
      caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
    },
    radii: { sm: 6, md: 10, lg: 16, xl: 24 },
  },

  dark: {
    colors: {
      // Base
      background: "#0B1220", // deep blue/gray (nice modern dark)
      surface: "#111827", // gray-900
      border: "#1F2937", // gray-800
      overlay: "rgba(255,255,255,0.08)",

      // Text
      text: "#E5E7EB", // gray-200
      title: "#F9FAFB", // gray-50
      muted: "#94A3B8", // slate-400

      // Brand / Actions
      primary: "#60A5FA", // blue-400
      secondary: "#A78BFA", // violet-400
      success: "#34D399", // emerald-400
      warning: "#FBBF24", // amber-400
      danger: "#F87171", // red-400
      textOnPrimary: "#0B1220",

      // Icons
      iconColor: "#9CA3AF",
      iconColorFocused: "#93C5FD",

      // Tabs
      tabBarBackground: "#111827",
      tabBarBorder: "#1F2937",
      tabBarActive: "#93C5FD",
      tabBarInactive: "#6B7280",

      // Headers
      headerBackground: "#111827",
      headerBorder: "#1F2937",
      headerTitle: "#F9FAFB",
      headerTint: "#E5E7EB",
      statusBarStyle: "light",
    },
    typography: {
      h1: { fontSize: 28, fontWeight: "700", lineHeight: 34 },
      title: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
      body: { fontSize: 16, fontWeight: "400", lineHeight: 22 },
      caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
    },
    radii: { sm: 6, md: 10, lg: 16, xl: 24 },
  },
};
