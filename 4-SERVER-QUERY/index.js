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
        supplies: [supply]
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
    teams: () => database.teams
    .map((team)=>{
      team.supplies = database.supplies
      .filter((supply)=>{
        return supply.team === team.id
      })
      return team
    }),
    team: (parent, args, context, info) => database.teams
      .filter((team) => {
        return team.id == args.id
      })[0],
    equipments: () => database.equipments,
    supplies: () => database.supplies
  }
}
β
const server = new ApolloServer({ typeDefs, resolvers })
β
server.listen().then(({ url }) => {
console.log(`π μλ² μ€λΉ μλ£ β‘οΈ ${url}`)
})