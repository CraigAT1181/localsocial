const errorMap = (error) => {
  const message = (error?.message || "").toLowerCase();

  if (message.includes("Invalid login"))
    return "Email or password is incorrect.";
  // if (message.includes("Invalid login")) return "Email or password is incorrect.";
  // if (message.includes("Invalid login")) return "Email or password is incorrect.";

  return error?.message || "Something went wrong. Please try again.";
};
