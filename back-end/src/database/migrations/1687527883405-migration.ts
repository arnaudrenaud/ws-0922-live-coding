import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1687527883405 implements MigrationInterface {
    name = 'migration1687527883405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wilder" ALTER COLUMN "homeCity" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wilder" ALTER COLUMN "homeCity" SET DEFAULT ''`);
    }

}
