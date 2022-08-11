const searchByIdUserScenario = {
    description: '[@searchByIdUser search data user]',
    positive: {
      case1: '[@searchByIdUser-positive1] search user menggunakan id yang valid'
    },
    negative: {
      case1: '[@searchByIdUser-negative1] search user menggunakan id yang tidak ada diserver',
    }
  }
  
  module.exports = {
    searchByIdUserScenario,
  }