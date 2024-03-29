import {
  Arg,
  Args,
  Ctx,
  Float,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

import Wilder from "../../models/Wilder/Wilder.entity";
import WilderRepository from "../../models/Wilder/Wilder.repository";
import PageOfWilders from "./PageOfWilders";
import { CreateWilderArgs, UpdateWilderArgs } from "./Wilder.input";

const PAGE_SIZE = 9;

@Resolver(Wilder)
export default class WilderResolver {
  @Query(() => PageOfWilders)
  wilders(
    @Arg("pageNumber", () => Int) pageNumber: number
  ): Promise<PageOfWilders> {
    return WilderRepository.getWilders(PAGE_SIZE, pageNumber);
  }

  @Mutation(() => Wilder)
  createWilder(
    @Args() { firstName, lastName }: CreateWilderArgs
  ): Promise<Wilder> {
    return WilderRepository.createWilder(firstName, lastName);
  }

  @Mutation(() => Wilder)
  updateWilder(
    @Args() { id, firstName, lastName }: UpdateWilderArgs
  ): Promise<Wilder> {
    return WilderRepository.updateWilder(id, firstName, lastName);
  }

  @Mutation(() => Wilder)
  approveWilder(@Arg("id") id: string): Promise<Wilder> {
    return WilderRepository.approveWilder(id);
  }

  @Mutation(() => Wilder)
  deleteWilder(@Arg("id") id: string): Promise<Wilder> {
    return WilderRepository.deleteWilder(id);
  }

  @Mutation(() => Wilder)
  addSkillToWilder(
    @Arg("wilderId") wilderId: string,
    @Arg("skillId") skillId: string
  ): Promise<Wilder> {
    return WilderRepository.addSkillToWilder(wilderId, skillId);
  }
}
