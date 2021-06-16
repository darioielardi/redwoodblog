export const schema = gql`
  type Comment {
    id: Int!
    name: String!
    body: String!
    post: Post!
    postId: Int!
    createdAt: DateTime!
  }

  type Query {
    comments: [Comment!]!
  }

  input CreateCommentInput {
    name: String!
    body: String!
    postId: Int!
  }

  input UpdateCommentInput {
    name: String
    body: String
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    deleteComment(id: Int!): Comment!
  }
`;
