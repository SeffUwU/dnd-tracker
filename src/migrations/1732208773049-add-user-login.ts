import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserLogin1732208773049 implements MigrationInterface {
    name = 'AddUserLogin1732208773049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "login" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "login"`);
    }

}
