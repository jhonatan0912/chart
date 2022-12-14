
let day = document.getElementsByClassName('day');

let amountBox = document.getElementsByClassName('amount');

async function getData() {
  const response = await fetch("https://jhonatan0912.github.io/chart/data.json");
  const json = await response.json();
  // console.log(JSON.parse(json));
  // console.log(json)
  //console.log(json[0].day)  //first day name
  //console.log(json[0].amount)   //first amount => day
  day[0].innerHTML = `${json[0].day}`;
  day[1].innerHTML = `${json[1].day}`;
  day[2].innerHTML = `${json[2].day}`;
  day[3].innerHTML = `${json[3].day}`;
  day[4].innerHTML = `${json[4].day}`;
  day[5].innerHTML = `${json[5].day}`;
  day[6].innerHTML = `${json[6].day}`;

  let amount1 = json[0].amount;
  let amount2 = json[1].amount;
  let amount3 = json[2].amount;
  let amount4 = json[3].amount;
  let amount5 = json[4].amount;
  let amount6 = json[5].amount;
  let amount7 = json[6].amount;

  amountBox[0].style.height = `${amount1 + '%'}`;
  amountBox[1].style.height = `${amount2 + '%'}`;
  amountBox[2].style.height = `${amount3 + '%'}`;
  amountBox[3].style.height = `${amount4 + '%'}`;
  amountBox[4].style.height = `${amount5 + '%'}`;
  amountBox[5].style.height = `${amount6 + '%'}`;
  amountBox[6].style.height = `${amount7 + '%'}`;

  amountBox[0].getAttribute("data-state");
  amountBox[0].setAttribute("data-state", `${'$' + amount1}`);

  amountBox[1].getAttribute("data-state");
  amountBox[1].setAttribute("data-state", `${'$' + amount2}`);

  amountBox[2].getAttribute("data-state");
  amountBox[2].setAttribute("data-state", `${'$' + amount3}`);

  amountBox[3].getAttribute("data-state");
  amountBox[3].setAttribute("data-state", `${'$' + amount4}`);

  amountBox[4].getAttribute("data-state");
  amountBox[4].setAttribute("data-state", `${'$' + amount5}`);

  amountBox[5].getAttribute("data-state");
  amountBox[5].setAttribute("data-state", `${'$' + amount6}`);

  amountBox[6].getAttribute("data-state");
  amountBox[6].setAttribute("data-state", `${'$' + amount7}`);
}



getData();


