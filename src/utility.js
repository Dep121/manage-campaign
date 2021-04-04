export const isToday = (someDate) => {
  const someDay = new Date(someDate);
  const today = new Date();

  return isSelectedDate(today, someDate);
}


export const isSelectedDate = (mainDate, someDate) => {
  const someDay = new Date(someDate);
  const today = new Date(mainDate);

  if(someDay.getFullYear() === today.getFullYear()){
    if(someDay.getMonth() === today.getMonth()) {
      if(someDay.getDate() === today.getDate()) {
        return 0;
      } else if(someDay.getDate() < today.getDate()) {
        return -1;
      } else {
        return 1;
      }
    } else if (someDay.getMonth() < today.getMonth()) {
      return -1;
    } else {
      return 1;
    }
  } else if (someDay.getFullYear() < today.getFullYear()) {
    return -1;
  } else {
    return 1;
  }
}
