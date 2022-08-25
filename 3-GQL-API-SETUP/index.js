// ▶️ nodemon index.js

const database = require('./database')

// ✨ ApolloServer
// typeDef와 resolver를 인자로 받아 서버 생성
const { ApolloServer, gql } = require('apollo-server')

// ✨ typeDef
// GraphQL 명세에서 사용될 데이터, 요청의 타입 지정
// gql로 생성됨
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`

// ✨ resolver
// 서비스의 액션을 함수로 지정
// 요청에 따라 데이터를 반환, 입력, 수정, 삭제
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀 서버 준비 완료 ➡️ ${url}`)
})