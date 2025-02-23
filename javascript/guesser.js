const Oregon = {
  levels: {
    0: {
      rooms: {
        1: {
          coordinates: "300,375,443,373,442,231,406,230,408,318,297,317",
          roomName: "Freezer",
        },
        2: {
          coordinates: "297,376,344,376,345,407,369,414,370,442,299,441",
          roomName: "Freezer Stairs",
        },
        3: {
          coordinates: "448,387,448,315,599,316,599,364,548,365,547,387",
          roomName: "Laundry",
        },
        4: {
          coordinates: "502,391,560,392,559,370,591,369,587,468,502,468",
          roomName: "Laundry Stairs",
        },
        5: {
          coordinates: "448,186,492,186,492,311,450,311",
          roomName: "Highway",
        },
        6: {
          coordinates: "446,96,448,183,535,182,535,141,589,139,587,98",
          roomName: "Boiler",
        },
        7: {
          coordinates: "593,97,668,96,668,183,654,183,655,278,592,279",
          roomName: "Blue Bunker",
        },
        8: {
          coordinates: "494,187,589,189,589,312,549,312,546,271,494,272",
          roomName: "Supply",
        },
        9: {
          coordinates: "490,16,546,17,546,68,531,67,530,93,491,94",
          roomName: "Tower Stairs",
        },
        10: {
          coordinates: "496,312,495,276,545,276,544,312",
          roomName: "Closet",
        },
        11: {
          coordinates: "535,180,535,144,586,144,587,182",
          roomName: "Electricity Room",
        },
      },
    },
    1: {
      rooms: {
        1: {
          coordinates: "635,438,715,438,712,322,635,320",
          roomName: "Garage",
        },
        2: {
          coordinates: "630,322,629,106,535,108,534,152,483,154,482,320",
          roomName: "Meeting",
        },
        3: {
          coordinates: "448,106,528,107,528,145,479,148,477,220,449,220",
          roomName: "Green Corridor",
        },
        4: {
          coordinates: "448,63,448,102,632,101,635,10,589,10,589,63",
          roomName: "Storage",
        },
        5: {
          coordinates: "176,214,312,214,314,320,178,320",
          roomName: "Dining",
        },
        6: {
          coordinates:
            "55,416,171,416,171,214,143,214,142,268,115,268,116,297,87,298,88,315,57,316",
          roomName: "Small Tower",
        },
        7: {
          coordinates: "56,267,114,267,114,293,84,294,83,314,57,314",
          roomName: "Small Tower Stairs",
        },
        8: {
          coordinates: "177,327,281,328,281,417,177,417",
          roomName: "Showers",
        },
        9: {
          coordinates: "315,451,315,329,286,328,287,423,143,424,143,450",
          roomName: "Shower Corridor",
        },
        10: {
          coordinates: "320,321,479,322,477,228,320,227",
          roomName: "Kitchen",
        },
        11: {
          coordinates: "320,328,447,328,447,372,319,372",
          roomName: "Security",
        },
        12: {
          coordinates: "432,418,433,440,350,443,350,451,320,450,320,417",
          roomName: "White Stairs",
        },
        13: {
          coordinates:
            "320,379,451,377,452,329,539,328,539,358,476,358,477,411,349,409,349,417,321,418",
          roomName: "Z Hall",
        },
        14: {
          coordinates: "481,364,534,364,536,474,482,473",
          roomName: "Classroom",
        },
        15: {
          coordinates: "532,62,586,62,586,11,531,10",
          roomName: "Tower Stairs",
        },
        16: {
          coordinates:
            "541,328,629,327,629,359,600,360,597,431,580,432,581,461,595,462,595,472,541,474",
          roomName: "Main Hall",
        },
        17: {
          coordinates: "629,368,603,367,603,432,583,433,582,460,627,461",
          roomName: "Main Stairs",
        },
      },
    },
    2: {
      rooms: {
        1: {
          coordinates: "28,371,30,274,97,275,98,373",
          roomName: "Small Tower Stairs",
        },
        2: {
          coordinates: "102,274,105,372,212,372,212,275",
          roomName: "Office",
        },
        3: {
          coordinates: "301,464,414,463,413,428,301,426",
          roomName: "White Stairs",
        },
        4: {
          coordinates: "564,65,564,10,622,11,622,102,465,102,463,66",
          roomName: "Big Tower",
        },
        5: {
          coordinates: "517,9,564,9,564,63,517,62",
          roomName: "Tower Stairs",
        },
        6: {
          coordinates: "524,230,565,229,566,108,523,109",
          roomName: "Attic",
        },
        7: {
          coordinates: "565,234,441,235,443,286,565,285",
          roomName: "Connector",
        },
        8: { coordinates: "437,237,300,235,302,320,435,319", roomName: "Kids" },
        9: { coordinates: "301,327,420,328,421,422,301,421", roomName: "Dorm" },
        10: {
          coordinates: "442,292,512,292,514,360,423,359,424,328,441,327",
          roomName: "Main Hall",
        },
        11: {
          coordinates: "518,291,583,293,583,360,519,360",
          roomName: "Trophy Room",
        },
        12: {
          coordinates: "428,366,512,367,510,420,428,419",
          roomName: "Games Room",
        },
        13: {
          coordinates: "467,427,513,427,513,457,467,457",
          roomName: "Closet",
        },
        14: {
          coordinates: "589,295,611,295,614,472,589,470",
          roomName: "Main Stairs",
        },
        15: {
          coordinates: "619,331,698,331,700,420,620,422",
          roomName: "Armory",
        },
        16: {
          coordinates: "519,366,584,366,583,457,519,456",
          roomName: "Master Bedroom",
        },
      },
    },
  },
};

function startGame() {
  document.getElementById("menu").remove();
  const imageContainer = document.getElementById("image-container");
  const title = document.createElement("h2");

  const floors = ["second_floor", "first_floor", "basement"];
  const randomFloor = floors[Math.floor(Math.random() * floors.length)];
  var theRoomToFind = theRoomToFindGenerate(randomFloor);

  title.innerHTML = `Találd meg ezt a szobát:<br> ${theRoomToFind}`;
  const img = chooseImage(randomFloor);
  img.useMap = "#imageMap";
  imageContainer.appendChild(img);
  imageContainer.appendChild(title);
  generateImageMap(randomFloor);
}

function chosenFloorIndex(chosenFloor) {
  switch (chosenFloor) {
    case "basement":
      var index = 0;
      break;
    case "first_floor":
      var index = 1;
      break;
    case "second_floor":
      var index = 2;
      break;

    default:
      break;
  }
  return index;
}

function chooseImage(chosenFloor) {
  var img = document.createElement("img");
  img.src = `../Images/Oregon_blueprints/r6-maps-oregon-blueprint-${chosenFloorIndex(chosenFloor)+1}.jpg`;
  return img;
}

function theRoomToFindGenerate(chosenFloor) {
  var list = [];
  var rooms = Oregon.levels[chosenFloorIndex(chosenFloor)].rooms;
  Object.entries(rooms).forEach(([roomId, roomData]) => {
    list.push(roomData.roomName);
  });
  var room = list[Math.floor(Math.random() * list.length)];
  return room;
}

function generateImageMap(chosenFloor) {
  const map = document.createElement("map");
  map.name = "imageMap";
  const imageContainer = document.getElementById("image-container");
  imageContainer.appendChild(map);
  const mapContainer = document.getElementsByClassName("map");

  var rooms = Oregon.levels[chosenFloorIndex(chosenFloor)].rooms;
  Object.entries(rooms).forEach(([roomId, roomData]) => {
    // mapareas
    const area = document.createElement("area");
    area.shape = "poly";
    area.coords = roomData.coordinates;
    area.id = roomData.roomName;
    map.appendChild(area);
    const roomElement = document.getElementById(roomData.roomName);
    // onclick
    if (roomElement) {
      roomElement.onclick = function () {
        console.log(`Mouseover on: ${roomData.roomName}`);
      };
    }
  });
}

/* <area target="" alt="Freezer" title="Freezer" href="" coords="300,375,443,373,442,231,406,230,408,318,297,317" shape="poly">
    <area target="" alt="Freezer Stairs" title="Freezer Stairs" href="" coords="297,376,344,376,345,407,369,414,370,442,299,441" shape="poly">
    <area target="" alt="Laundry" title="Laundry" href="" coords="448,387,448,315,599,316,599,364,548,365,547,387" shape="poly">
    <area target="" alt="Laundry Stairs" title="Laundry Stairs" href="" coords="502,391,560,392,559,370,591,369,587,468,502,468" shape="poly">
    <area target="" alt="Highway" title="Highway" href="" coords="448,186,492,186,492,311,450,311" shape="poly">
    <area target="" alt="Boiler" title="Boiler" href="" coords="446,96,448,183,535,182,535,141,589,139,587,98" shape="poly">
    <area target="" alt="Blue Bunker" title="Blue Bunker" href="" coords="593,97,668,96,668,183,654,183,655,278,592,279" shape="poly">
    <area target="" alt="Supply" title="Supply" href="" coords="494,187,589,189,589,312,549,312,546,271,494,272" shape="poly">
    <area target="" alt="Tower Stairs" title="Tower Stairs" href="" coords="490,16,546,17,546,68,531,67,530,93,491,94" shape="poly">
    <area target="" alt="Closet" title="Closet" href="" coords="496,312,495,276,545,276,544,312" shape="poly">
    <area target="" alt="Electricity Room" title="Electricity Room" href="" coords="535,180,535,144,586,144,587,182" shape="poly"> */

/* <area target="" alt="Garage" title="Garage" href="" coords="635,438,715,438,712,322,635,320" shape="poly">
    <area target="" alt="Meeting" title="Meeting" href="" coords="630,322,629,106,535,108,534,152,483,154,482,320" shape="poly">
    <area target="" alt="Green Corridor" title="Green Corridor" href="" coords="448,106,528,107,528,145,479,148,477,220,449,220" shape="poly">
    <area target="" alt="Storage" title="Storage" href="" coords="448,63,448,102,632,101,635,10,589,10,589,63" shape="poly">
    <area target="" alt="Dining" title="Dining" href="" coords="176,214,312,214,314,320,178,320" shape="poly">
    <area target="" alt="Small Tower" title="Small Tower" href="" coords="55,416,171,416,171,214,143,214,142,268,115,268,116,297,87,298,88,315,57,316" shape="poly">
    <area target="" alt="Small Tower Stairs" title="Small Tower Stairs" href="" coords="56,267,114,267,114,293,84,294,83,314,57,314" shape="poly">
    <area target="" alt="Showers" title="Showers" href="" coords="177,327,281,328,281,417,177,417" shape="poly">
    <area target="" alt="Shower Corridor" title="Shower Corridor" href="" coords="315,451,315,329,286,328,287,423,143,424,143,450" shape="poly">
    <area target="" alt="Kitchen" title="Kitchen" href="" coords="320,321,479,322,477,228,320,227" shape="poly">
    <area target="" alt="Security" title="Security" href="" coords="320,328,447,328,447,372,319,372" shape="poly">
    <area target="" alt="White Stairs" title="White Stairs" href="" coords="432,418,433,440,350,443,350,451,320,450,320,417" shape="poly">
    <area target="" alt="Z Hall" title="Z Hall" href="" coords="320,379,451,377,452,329,539,328,539,358,476,358,477,411,349,409,349,417,321,418" shape="poly">
    <area target="" alt="Classroom" title="Classroom" href="" coords="481,364,534,364,536,474,482,473" shape="poly">
    <area target="" alt="Tower Stairs" title="Tower Stairs" href="" coords="532,62,586,62,586,11,531,10" shape="poly">
    <area target="" alt="Main Hall" title="Main Hall" href="" coords="541,328,629,327,629,359,600,360,597,431,580,432,581,461,595,462,595,472,541,474" shape="poly">
    <area target="" alt="Main Stairs" title="Main Stairs" href="" coords="629,368,603,367,603,432,583,433,582,460,627,461" shape="poly"></area> */

// <area target="" alt="Small Tower Stairs" title="Small Tower Stairs" href="" coords="28,371,30,274,97,275,98,373" shape="poly">
// <area target="" alt="Office" title="Office" href="" coords="102,274,105,372,212,372,212,275" shape="poly">
// <area target="" alt="White Stairs" title="White Stairs" href="" coords="301,464,414,463,413,428,301,426" shape="poly">
// <area target="" alt="Big Tower" title="Big Tower" href="" coords="564,65,564,10,622,11,622,102,465,102,463,66" shape="poly">
// <area target="" alt="Tower Stairs" title="Tower Stairs" href="" coords="517,9,564,9,564,63,517,62" shape="poly">
// <area target="" alt="Attic" title="Attic" href="" coords="524,230,565,229,566,108,523,109" shape="poly">
// <area target="" alt="Connector" title="Connector" href="" coords="565,234,441,235,443,286,565,285" shape="poly">
// <area target="" alt="Kids" title="Kids" href="" coords="437,237,300,235,302,320,435,319" shape="poly">
// <area target="" alt="Dorm" title="Dorm" href="" coords="301,327,420,328,421,422,301,421" shape="poly">
// <area target="" alt="Main Hall" title="Main Hall" href="" coords="442,292,512,292,514,360,423,359,424,328,441,327" shape="poly">
// <area target="" alt="Trophy Room" title="Trophy Room" href="" coords="518,291,583,293,583,360,519,360" shape="poly">
// <area target="" alt="Games Room" title="Games Room" href="" coords="428,366,512,367,510,420,428,419" shape="poly">
// <area target="" alt="Closet" title="Closet" href="" coords="467,427,513,427,513,457,467,457" shape="poly">
// <area target="" alt="Main Stairs" title="Main Stairs" href="" coords="589,295,611,295,614,472,589,470" shape="poly">
// <area target="" alt="Armory" title="Armory" href="" coords="619,331,698,331,700,420,620,422" shape="poly">
// <area target="" alt="Master Bedroom" title="Master Bedroom" href="" coords="519,366,584,366,583,457,519,456" shape="poly">
