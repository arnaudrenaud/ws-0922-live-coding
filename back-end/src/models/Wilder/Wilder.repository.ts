import Wilder from "./Wilder.entity";

import School from "../School/School.entity";
import SchoolRepository from "../School/School.repository";
import Skill from "../Skill/Skill.entity";
import SkillRepository from "../Skill/Skill.repository";
import WilderDb from "./Wilder.db";
import { sendPushNotification } from "../../expo-push-notifications";

export default class WilderRepository extends WilderDb {
  static async initializeWilders(): Promise<void> {
    await this.clearRepository();
    const lyonSchool = (await SchoolRepository.getSchoolByName(
      "Lyon"
    )) as School;
    const javaScriptSkill = (await SkillRepository.getSkillByName(
      "JavaScript"
    )) as Skill;
    const phpSkill = (await SkillRepository.getSkillByName("PHP")) as Skill;

    const jean = new Wilder("Jean", "Wilder", lyonSchool, [javaScriptSkill]);
    const jeanne = new Wilder("Jeanne", "Wilder", lyonSchool, [
      javaScriptSkill,
      phpSkill,
    ]);

    await this.repository.save([jean, jeanne]);
  }

  static async getWilders(): Promise<Wilder[]> {
    return this.repository.find();
  }

  static async createWilder(
    firstName: string,
    lastName: string
  ): Promise<Wilder> {
    const newWilder = this.repository.create({ firstName, lastName });
    await this.repository.save(newWilder);
    sendPushNotification(
      "ExponentPushToken[_l_rKDA9JwIu6wsTgf1m4e]",
      "Demande d'approbation",
      `Nouveau wilder : ${newWilder.getFullName()}`,
      { action: "GetWilders" }
    );
    return newWilder;
  }

  static async updateWilder(
    id: string,
    firstName: string,
    lastName: string
  ): Promise<
    {
      id: string;
      firstName: string;
      lastName: string;
    } & Wilder
  > {
    const existingWilder = await this.repository.findOneBy({ id });
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    return this.repository.save({
      id,
      firstName,
      lastName,
    });
  }

  static async approveWilder(id: string): Promise<Wilder> {
    const existingWilder = await this.findWilderById(id);
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    return this.repository.save({ ...existingWilder, isApproved: true });
  }

  static async deleteWilder(id: string): Promise<Wilder> {
    const existingWilder = await this.findWilderById(id);
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    await this.repository.remove(existingWilder);
    // resetting ID because existingWilder loses ID after calling remove
    existingWilder.id = id;
    return existingWilder;
  }

  static async addSkillToWilder(
    wilderId: string,
    skillId: string
  ): Promise<Wilder> {
    const wilder = await this.findWilderById(wilderId);
    if (!wilder) {
      throw Error("No existing Wilder matching ID.");
    }
    const skill = await SkillRepository.getSkillById(skillId);
    if (!skill) {
      throw Error("No existing skill matching ID.");
    }
    wilder.skills = [...wilder.skills, skill];
    return this.repository.save(wilder);
  }
}
