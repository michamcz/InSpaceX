const formatDate = (date) => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  const parseDate = new Date(date);
  const day = parseDate.getDate();
  const month = parseDate.getMonth();
  const year = parseDate.getFullYear();
  const hour = parseDate.getHours();
  let minute = parseDate.getMinutes();
  if (minute < 10 && minute >= 0) minute = `0${minute}`;

  return `${day} ${monthNames[month]} ${year}, ${hour}:${minute} UTC`
}

export default formatDate;
