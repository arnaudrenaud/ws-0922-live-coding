import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import School from "../School/School.entity";
import Skill from "../Skill/Skill.entity";

@Entity()
@ObjectType()
export default class Wilder {
  constructor(
    firstName: string,
    lastName: string,
    school?: School,
    skills?: Skill[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (school) {
      this.school = school;
    }
    if (skills) {
      this.skills = skills;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @ManyToOne(() => School, (school) => school.wilders, { eager: true })
  @Field(() => School, { nullable: true })
  school: School;

  @ManyToMany(() => Skill, { eager: true })
  @Field(() => [Skill])
  @JoinTable()
  skills: Skill[];

  @Column({ default: false })
  @Field()
  isApproved: boolean;

  @Column()
  homeCity: string;

  @Field(() => String)
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Field(() => String)
  getDisplayName() {
    const skillCount = this.skills?.length;

    return `[${this.school?.schoolName ?? ""}] ${this.getFullName()}${
      skillCount ? ` (${skillCount})` : ""
    }`;
  }
}
