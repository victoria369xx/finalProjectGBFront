export function getCityArrFromDB() {
  const allCities = [
    { id: 1, city: "Москва" },
    { id: 2, city: "Самара" },
    { id: 3, city: "Пушкино" },
    { id: 4, city: "Сергиев - Посад" },
    { id: 5, city: "Калининград" },
  ];
  // console.log(`City: ${allCities}`)
  // console.log(allCities[1])
  return allCities;
  // fetch('')
  //     .then(response => response.json())
  //     .then(
  //         (result) => {
  //             const arrData = []
  //             console.log(`result: ${result}`)
  //             const arrCities = result.map(el =>{
  //                 arrData.push(el.city)
  // })
  //             return arrCities
  //         }
  //     )
}
