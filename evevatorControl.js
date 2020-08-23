//宣告題目給的初值：/////////////////////////////////////////////////////////////////////////////

// 1. 大樓共 10 層樓，2 部電梯
const elevaotrAmount = 2;
const floorAmount = 10;

// 2. 電梯最多一次只可載 5 人
const maxElevatorCarrier = 5;

// 3. 每行經一層樓需耗時 1 秒
const floorStrokeTime = 1;

// 4. 每停一次處理接人放人需耗 1 秒
const passengerInAndOutTime = 1;

// 5. 每秒放一個人進行按電梯的動作，人員會出現在隨機樓層與前往隨機樓層。
const passengerReadyToTakeElevator = 1;
const passengerInitialFloor = Math.floor(1 + Math.random() * floorAmount);
const passengerDestinationFloor = Math.floor(1 + Math.random() * floorAmount);
// 7. 模擬放進 40 人次
const humanAmount = 40;

// 將題目所提到的實體設定成物件：//////////////////////////////////////////////////////////////////
// 2台電梯：
let elevators = [
  {
    name: "elevaorA",
    currentFloor: 1,
    direction: 1,
    // 1==upward,0==noMove,-1==downward
    passengerInElevator: [],
  },
  {
    name: "elevaorB",
    currentFloor: 1,
    direction: 1,
    // 1==upward,0==noMove,-1==downward
    passengerInElevator: [],
  },
];
// 未release的40個乘客：
let passengers = [
  {
    name: "passenger01",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger02",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger03",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger04",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger05",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger06",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger07",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger08",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger09",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger10",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger11",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger12",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger13",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger14",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger15",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger16",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger17",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger18",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger19",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger20",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger21",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger22",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger23",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger24",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger25",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger26",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger27",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger28",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger29",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger30",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger31",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger32",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger33",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger34",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger35",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger36",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger37",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger38",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger39",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
  {
    name: "passenger40",
    passengerInitialFloor: Math.floor(1 + Math.random() * floorAmount),
    passengerDestinationFloor: Math.floor(1 + Math.random() * floorAmount),
  },
];
// 被release的乘客：
let releasedPassengers = [];

// 定義各函式：///////////////////////////////////////////////////////////////////////////////////
// 1.每秒release一位乘客：(說明：每秒將passengers陣列的元素逐一加至releasedPassengers陣列)
passengers.forEach((item, index) => {
  setTimeout(function () {
    passengers.shift(item);
    releasedPassengers.push(item);
    // console.log(passengers);
    // console.log(releasedPassengers.length);
    // takeElevator();
  }, index * passengerInAndOutTime * 1000);
});

// 2.只要有releasedPassenger未搭到電梯，每秒呼叫電梯一次：
setInterval(() => {
  if (releasedPassengers.length > 0) {
    requerstElevator();
  }
}, 1000);

// 3.電梯使用LOOK演算法，初始值在一樓，且每秒移動一層：
// 3.1當電梯在1樓時，每秒往上一層：
setInterval(() => {
  if (elevators[0].currentFloor < 10 && elevators[0].direction == 1) {
    elevators[0].currentFloor++;
  } else if (elevators[0].currentFloor > 1 && elevators[0].direction == -1) {
    elevators[0].currentFloor--;
  }
}, 1000);

// 3.2當電梯在10樓時，電梯方向變向下; 當電梯在1樓時，電梯方向變向上：
setInterval(() => {
  if (elevators[0].currentFloor == 10) {
    elevators[0].direction = -1;
  } else if (elevators[0].currentFloor == 1) {
    elevators[0].direction = 1;
  }
}, 1000);

setTimeout(() => {
  console.log(elevators[0].direction);
  console.log(elevators[0].currentFloor);
}, 15000);

// 4..被release的乘客在呼叫電梯之後，滿足以下條件時會搭電梯：(1)其中一台電梯未滿5人。(2)電梯的行進方向和乘客的目的方向相同。(3)電梯的目前所在樓層不等於乘客所在樓層的正負1範圍內時。(4)滿足上述三個條件時，搭乘較近的電梯
setInterval(() => {
  releasedPassengers.forEach((item, index) => {});
}, 1000);

// 2.被release的乘客滿足以下條件時會搭電梯：(1)有一台電梯未滿5人。(2)電梯的行進方向和乘客的目的方向相同。(3)電梯的目前所在樓層不等於乘客所在樓層的正負1範圍內時。(4)滿足上述三個條件時，搭乘較近的電梯
