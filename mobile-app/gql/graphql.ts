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

export type Query = {
  __typename?: "Query";
  myProfile: AppUser;
  wilders: Array<Wilder>;
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

export type GetWildersQueryVariables = Exact<{ [key: string]: never }>;

export type GetWildersQuery = {
  __typename?: "Query";
  wilders: Array<{
    __typename?: "Wilder";
    id: string;
    firstName: string;
    lastName: string;
    isApproved: boolean;
  }>;
};

export const GetWildersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetWilders" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "wilders" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "isApproved" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetWildersQuery, GetWildersQueryVariables>;
