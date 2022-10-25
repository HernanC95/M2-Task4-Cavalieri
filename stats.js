async function fetchApiTable1() {
  try {
    let data = await fetch(
      "https://mh-amazing.herokuapp.com/amazing?time=past"
    );
    data = await data.json();
    let events = data.events;

    events.map((event) => {
      event.percentageOfAssitance = (
        (event.assistance / event.capacity) *
        100
      ).toFixed(2);
      event.revenues = event.assistance * event.price;
    });

    let sortPercentageOfAttendance = events.sort(
      (event1, event2) =>
        event2.percentageOfAssitance - event1.percentageOfAssitance
    );
    let mostPercentageOfAttendaceEvente = sortPercentageOfAttendance[0];
    let lowestPercentageOfAttendaceEvente =
      sortPercentageOfAttendance[sortPercentageOfAttendance.length - 1];
    let mostCapacity = events.sort(
      (event1, event2) => event2.capacity - event1.capacity
    );
    let eventMostCapacity = mostCapacity[0];

    let table1 = document.getElementById("table-past-1");

    function printData1(ele1, ele2, ele3) {
      table1.innerHTML += `
                <tr>
                <td>${ele1.name} - ${ele1.percentageOfAssitance}%</td>
                <td>${ele2.name} - ${ele2.percentageOfAssitance}%</td>
                <td>${ele3.name} - ${ele3.capacity} peoples</td>
              </tr>
                `;
    }
    printData1(
      mostPercentageOfAttendaceEvente,
      lowestPercentageOfAttendaceEvente,
      eventMostCapacity
    );
  } catch (error) {
    console.log("Hubo un error");
  }
}

fetchApiTable1();

async function fetchApiTable2() {
  try {
    let data = await fetch(
      "https://mh-amazing.herokuapp.com/amazing?time=past"
    );
    data = await data.json();
    let events = data.events;

    events.map((event) => {
      event.percentageOfAssitance = (
        (event.assistance / event.capacity) *
        100
      ).toFixed(2);
      event.revenues = event.assistance * event.price;
    });

    let EventsForCategory = [];
    EventsForCategory.push(events.filter((event) => event.category === "Food"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Cinema")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Party")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Books")
    );
    EventsForCategory.push(events.filter((event) => event.category === "Race"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Concert")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Museum")
    );

    EventsForCategory = EventsForCategory.filter((array) => array.length !== 0);

    let eventsFilter = [];

    for (const categorys of EventsForCategory) {
      let revenuesIni = 0;
      let revenues1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.revenues;
      }, revenuesIni);

      let capacityIni = 0;
      let capacity1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.capacity;
      }, capacityIni);

      let assitanceIni = 0;
      let assitance1 = categorys.reduce(function (accumulator, element) {
        return accumulator + Number(element.assistance);
      }, assitanceIni);

      eventsFilter.push({
        name: categorys[0].category,
        revenues: revenues1,
        capacity: capacity1,
        percentageOfAssitance: (assitance1 * 100) / capacity1,
      });
    }

    let table2 = document.getElementById("table-past-2");
    for (i of eventsFilter) {
      table2.innerHTML += `
        <tr>
    <td class="tdTabla" >${i.name} </td>
    <td class="tdTabla">${i.revenues}</td>
    <td class="tdTabla">${i.percentageOfAssitance.toFixed(2)}%</td>
  </tr>`;
    }
  } catch (error) {
    console.log("Hubo un error");
  }
}

fetchApiTable2();

async function fetchApiTable3() {
  try {
    let data = await fetch(
      "https://mh-amazing.herokuapp.com/amazing?time=upcoming"
    );
    data = await data.json();
    let events = data.events;

    events.map((event) => {
      event.percentageOfAssitance = (
        (event.estimate / event.capacity) *
        100
      ).toFixed(2);
      event.revenues = event.estimate * event.price;
    });

    let EventsForCategory = [];
    EventsForCategory.push(events.filter((event) => event.category === "Food"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Cinema")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Party")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Books")
    );
    EventsForCategory.push(events.filter((event) => event.category === "Race"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Concert")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Museum")
    );

    let eventsFilter = [];
    EventsForCategory = EventsForCategory.filter((array) => array.length !== 0);

    for (const categorys of EventsForCategory) {
      let revenuesIni = 0;
      let revenues1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.revenues;
      }, revenuesIni);

      let capacityIni = 0;
      let capacity1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.capacity;
      }, capacityIni);

      let assitanceIni = 0;
      let assitance1 = categorys.reduce(function (accumulator, element) {
        return accumulator + Number(element.estimate);
      }, assitanceIni);

      eventsFilter.push({
        name: categorys[0].category,
        revenues: revenues1,
        capacity: capacity1,
        percentageOfAssitance: (assitance1 * 100) / capacity1,
      });
    }

    let table3 = document.getElementById("table-Upcoming-3");
    for (i of eventsFilter) {
      table3.innerHTML += `
          <tr>
      <td class="tdTabla" >${i.name} </td>
      <td class="tdTabla">${i.revenues}</td>
      <td class="tdTabla">${i.percentageOfAssitance.toFixed(2)}%</td>
    </tr>`;
    }
  } catch (error) {
    console.log("Hubo un error");
  }
}

fetchApiTable3();
