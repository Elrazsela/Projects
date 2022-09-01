const dates = [
  '2010/08/01', '2007/05/28', '2022/02/27', '2019/08/14', '2022/06/13', '2016/12/02'
];

function createDateParagraphes(arr) {
  const newDates = [];
  arr.forEach(element => {
    let date = new Date(element)
    console.log(date);
    if (date.getFullYear() >= 2018 && date.getFullYear() <= 2022) {
      let pDate = `<p>${date}</p>`;
      newDates.push(pDate);
    }
  });
  console.log(newDates);
  showDates(newDates);
  return newDates;
}
createDateParagraphes(dates);

function showDates(date) {
  const container = document.getElementById('par');

  date.forEach(date => {
    container.innerHTML += date;
  });
}
