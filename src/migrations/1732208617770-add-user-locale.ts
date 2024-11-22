import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserLocale1732208617770 implements MigrationInterface {
    name = 'AddUserLocale1732208617770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "locale" character varying NOT NULL DEFAULT 'en'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "locale"`);
    }

}
