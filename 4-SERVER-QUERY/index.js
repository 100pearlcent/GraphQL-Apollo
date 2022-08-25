const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const { supplies } = require('./database')

const typeDefs = gql`
    type Query {
        teams: [Team]
        team(id: Int): Team
        equipments: [Equipments]
        supplies: [Supply]
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
    type Equipment {
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
  }
  type Supply {
        id: String,
        team: Int
  }
`

const resolvers = {
  Query: {
    teams: () => database.teams,
    team: (parent, args, context, info) => database.teams
      .filter((team) => {
        return team.id == args.id
      })[0],
    equipments: () => database.equipments,
    supplies: () => database.supplies
  }
}
​
const server = new ApolloServer({ typeDefs, resolvers })
​
server.listen().then(({ url }) => {
console.log(`🚀 서버 준비 완료 ➡️ ${url}`)
})