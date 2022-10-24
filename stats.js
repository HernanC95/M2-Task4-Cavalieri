async function fetchApi(){
    try {
      let data = await fetch ('https://mind-hub.up.railway.app/amazing?time=past')
      data = await data.json()
      let events = data.events
  /*     console.log(events[0]); */
        
        events.map(event =>{
            event.percentageOfAssitance = (event.assistance/event.capacity)*100
            event.revenues = event.assistance*event.price}
            )
     
            let mostPercentageOfAttendance = events.sort((event1,event2) => (event2.percentageOfAssitance - event1.percentageOfAssitance))
            console.log(mostPercentageOfAttendance[0]);
     
            let lowestPercentageOfAttendance = events.sort((event1,event2) => (event1.percentageOfAssitance - event2.percentageOfAssitance))
            console.log(lowestPercentageOfAttendance[0]);    

            let mostCapacity = events.sort((event1,event2) => (event2.capacity - event1.capacity))
            console.log(mostCapacity[0])





    } catch (error) {
      console.log('Hubo un error');
    }
  }
  
  fetchApi()