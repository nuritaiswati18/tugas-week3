const updateUserScenario = {
    description: '[@updateUser update data user]',
    positive: {
      case1: '[@updateUser-positive1] user update data Occupation dan Nationality will return 200'
    },
    negative: {
      case1: '[@updateUser-negative1] user update data age=0 will return 400',
      case2: '[@updateUser-negative2] user update data hobbies=[] will return 400',
      case3: '[@updateUser-negative3] user update data id=null will return 400'
    }
  }
  
  module.exports = {
    updateUserScenario,
  }