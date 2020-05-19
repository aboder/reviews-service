const convertDate = (date) => {
  const givenMonth = Number(date.slice(5, 7));
  const months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const convertedDate = `${months[givenMonth - 1]} ${date.slice(0, 4)}`;
  return convertedDate;
};

export default convertDate;
