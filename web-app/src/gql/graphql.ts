/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AppUser = {
  __typename?: "AppUser";
  emailAddress: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addSkillToWilder: Wilder;
  approveWilder: Wilder;
  createWilder: Wilder;
  deleteWilder: Wilder;
  signIn: AppUser;
  signUp: AppUser;
  updateWilder: Wilder;
};

export type MutationAddSkillToWilderArgs = {
  skillId: Scalars["String"];
  wilderId: Scalars["String"];
};

export type MutationApproveWilderArgs = {
  id: Scalars["String"];
};

export type MutationCreateWilderArgs = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export type MutationDeleteWilderArgs = {
  id: Scalars["String"];
};

export type MutationSignInArgs = {
  emailAddress: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignUpArgs = {
  emailAddress: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

export type MutationUpdateWilderArgs = {
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
};

export type PageOfWilders = {
  __typename?: "PageOfWilders";
  nextPageNumber?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
  wilders: Array<Wilder>;
};

export type Query = {
  __typename?: "Query";
  myProfile: AppUser;
  wilders: PageOfWilders;
};

export type QueryWildersArgs = {
  pageNumber: Scalars["Int"];
};

export type School = {
  __typename?: "School";
  id: Scalars["ID"];
  schoolName: Scalars["String"];
  wilders: Array<Wilder>;
};

export type Skill = {
  __typename?: "Skill";
  id: Scalars["ID"];
  skillName: Scalars["String"];
  wilders: Array<Wilder>;
};

export type Wilder = {
  __typename?: "Wilder";
  firstName: Scalars["String"];
  getDisplayName: Scalars["String"];
  getFullName: Scalars["String"];
  id: Scalars["ID"];
  isApproved: Scalars["Boolean"];
  lastName: Scalars["String"];
  school?: Maybe<School>;
  skills: Array<Skill>;
};

export type MyProfileQueryVariables = Exact<{ [key: string]: never }>;

export type MyProfileQuery = {
  __typename?: "Query";
  myProfile: { __typename?: "AppUser"; emailAddress: string };
};

export type DeleteWilderMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteWilderMutation = {
  __typename?: "Mutation";
  deleteWilder: { __typename?: "Wilder"; id: string; firstName: string };
};

export type CreateWilderMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
}>;

export type CreateWilderMutation = {
  __typename?: "Mutation";
  createWilder: { __typename?: "Wilder"; id: string; firstName: string };
};

export type GetWildersQueryVariables = Exact<{
  pageNumber: Scalars["Int"];
}>;

export type GetWildersQuery = {
  __typename?: "Query";
  wilders: {
    __typename?: "PageOfWilders";
    nextPageNumber?: number | null;
    totalCount: number;
    wilders: Array<{
      __typename?: "Wilder";
      id: string;
      firstName: string;
      lastName: string;
      skills: Array<{ __typename?: "Skill"; id: string; skillName: string }>;
    }>;
  };
};

export type SignInMutationVariables = Exact<{
  emailAddress: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn: {
    __typename?: "AppUser";
    id: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
  };
};

export type SignUpMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  emailAddress: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  signUp: { __typename?: "AppUser"; id: string; emailAddress: string };
};

export const MyProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MyProfile" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myProfile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailAddress" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyProfileQuery, MyProfileQueryVariables>;
export const DeleteWilderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteWilder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteWilder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteWilderMutation,
  DeleteWilderMutationVariables
>;
export const CreateWilderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateWilder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createWilder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "firstName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "firstName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "lastName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "lastName" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateWilderMutation,
  CreateWilderMutationVariables
>;
export const GetWildersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetWilders" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageNumber" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "wilders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageNumber" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageNumber" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nextPageNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "wilders" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "skills" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "skillName" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetWildersQuery, GetWildersQueryVariables>;
export const SignInDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SignIn" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "emailAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "signIn" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "emailAddress" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "emailAddress" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SignUp" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "emailAddress" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "signUp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "firstName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "firstName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "lastName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "lastName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "emailAddress" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "emailAddress" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailAddress" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
