const createUserScenario = {
    description: '[@createUser /v1/users] Create data user',
    positive: {
      case1: '[@createUser-positive1] create user with valid request data'
    },
    negative: {
      case1: '[@createUser-negative1] create user with age = 0 will return 400'
    }
  };
  
  module.exports = {
    createUserScenario,
  };