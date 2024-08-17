let arr2 = [
    {
      name:'test',
      key:1
    },
    {
      name:'task',
      key:2
    },
    {
      name:'tanqo',
      key:3
    },
    {
      name:'like',
      key:4
    },
    {
      name:'task',
      key:5
    },
    {
      name:'trust',
      key:6
    },
    {
      name:'test',
      key:7
    },
    {
      name:'last',
      key:8
    },
    {
      name:'tanqo',
      key:9
    },
    {
      name:'elephant',
      key:10
    },
    {
      name:'love',
      key:11
    },
    {
      name:'small',
      key:12
    },
    {
      name:'little',
      key:13
    },
  ]


  ////TASK 16

  var startwT = []
  for (var item of arr2) {
    if(item.name[0] == 't')
    {
        startwT.push(item)
    }
  }
  console.log(startwT)


  //// TASK 17

  var countT = 0
  for (var item of arr2) {
    if(item.name[0] == 't' && item.name[item.name.length-1] == 't')
    {
        countT++
    }
  }
console.log(countT)

  
  //// TASK 18

  var sumKeyT = 0
  for (var item of arr2) {
    if(item.name[0] == 't' && item.name[item.name.length-1] == 't')
    {
        sumKeyT+=item.key
    }
  }
console.log(sumKeyT)


  //// TASK 19

  //  if(item.name[item.name.length-1] == 'e')
    //{
        //item.name = "SuperDev"
    //}
  //}
//console.log(arr2)


//// TASK 20

var longNameLen =0
var keyOfLongName
for (var item of arr2) {
    if(item.name.length > longNameLen)
    {
        longNameLen = item.name.length
        keyOfLongName = item.key
    }
}
console.log(keyOfLongName)

