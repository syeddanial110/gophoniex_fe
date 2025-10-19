export const paymentTypes = [
  { name: "Recurring", value: "recurring" },
  { name: "One Time", value: "one-time" },
  { name: "Both", value: "both" },
];
export const paymentInterval = [
  { name: "Day", value: "day" },
  { name: "Week", value: "week" },
  { name: "Month", value: "month" },
  { name: "Year", value: "year" },
];

export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const month = date?.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const formatTime = (timeString) => {
  if (!timeString) return "";

  // Split the time string into hours and minutes
  const [hours, minutes] = timeString.split(":");

  // Convert hours to number for comparison
  const hour = parseInt(hours, 10);

  // Determine if it's AM or PM
  const period = hour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const displayHour = hour % 12 || 12;

  // Return formatted time
  return `${displayHour}:${minutes} ${period}`;
};
