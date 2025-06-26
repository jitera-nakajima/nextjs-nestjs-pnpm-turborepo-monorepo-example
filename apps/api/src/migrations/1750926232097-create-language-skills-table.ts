import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLanguageSkillsTable1750926232097 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'language_skills',
            columns: [
                {
                    name: 'skill_id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'employee_id',
                    type: 'int',
                },
                {
                    name: 'language_code',
                    type: 'varchar',
                    length: '10',
                },
                {
                    name: 'conv_enabled',
                    type: 'boolean',
                },
                {
                    name: 'writing_enabled',
                    type: 'boolean',
                },
                {
                    name: 'note',
                    type: 'varchar',
                    length: '200',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('language_skills');
    }
}
