import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1687527713778 implements MigrationInterface {
    name = 'migration1687527713778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wilder" ADD "homeCity" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wilder" DROP COLUMN "homeCity"`);
    }

}
