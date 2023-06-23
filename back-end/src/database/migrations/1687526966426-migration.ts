import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1687526966426 implements MigrationInterface {
  name = "migration1687526966426";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "emailAddress" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "hashedPassword" character varying NOT NULL, CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_ff98c94cbf681b0cfd48635feb" ON "app_user" ("emailAddress") `
    );
    await queryRunner.query(
      `CREATE TABLE "session" ("id" character varying(32) NOT NULL, "userId" uuid, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "skill" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "skillName" character varying NOT NULL, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_69094df6e76415f3a39a369ba6" ON "skill" ("skillName") `
    );
    await queryRunner.query(
      `CREATE TABLE "wilder" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isApproved" boolean NOT NULL DEFAULT false, "schoolId" uuid, CONSTRAINT "PK_f6d55a37d2e6430b351b00f3c38" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "school" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "schoolName" character varying NOT NULL, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_9eb00e0accde5ee2d96e86570b" ON "school" ("schoolName") `
    );
    await queryRunner.query(
      `CREATE TABLE "wilder_skills_skill" ("wilderId" uuid NOT NULL, "skillId" uuid NOT NULL, CONSTRAINT "PK_949a8cc9ce47fe387795573d3bb" PRIMARY KEY ("wilderId", "skillId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_02db13cb5e8fcaa25c7a3af1f9" ON "wilder_skills_skill" ("wilderId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_983cef59049342b39bb906af0c" ON "wilder_skills_skill" ("skillId") `
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53" FOREIGN KEY ("userId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "wilder" ADD CONSTRAINT "FK_be1cfa40e51b884139143be8e59" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "wilder_skills_skill" ADD CONSTRAINT "FK_02db13cb5e8fcaa25c7a3af1f9c" FOREIGN KEY ("wilderId") REFERENCES "wilder"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "wilder_skills_skill" ADD CONSTRAINT "FK_983cef59049342b39bb906af0ce" FOREIGN KEY ("skillId") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "wilder_skills_skill" DROP CONSTRAINT "FK_983cef59049342b39bb906af0ce"`
    );
    await queryRunner.query(
      `ALTER TABLE "wilder_skills_skill" DROP CONSTRAINT "FK_02db13cb5e8fcaa25c7a3af1f9c"`
    );
    await queryRunner.query(
      `ALTER TABLE "wilder" DROP CONSTRAINT "FK_be1cfa40e51b884139143be8e59"`
    );
    await queryRunner.query(
      `ALTER TABLE "session" DROP CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_983cef59049342b39bb906af0c"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_02db13cb5e8fcaa25c7a3af1f9"`
    );
    await queryRunner.query(`DROP TABLE "wilder_skills_skill"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9eb00e0accde5ee2d96e86570b"`
    );
    await queryRunner.query(`DROP TABLE "school"`);
    await queryRunner.query(`DROP TABLE "wilder"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_69094df6e76415f3a39a369ba6"`
    );
    await queryRunner.query(`DROP TABLE "skill"`);
    await queryRunner.query(`DROP TABLE "session"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ff98c94cbf681b0cfd48635feb"`
    );
    await queryRunner.query(`DROP TABLE "app_user"`);
  }
}
