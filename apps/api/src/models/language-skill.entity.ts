import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('language_skills')
export class LanguageSkill {
    @PrimaryGeneratedColumn()
    skillId: number;

    @Column()
    employeeId: number;

    @Column({ length: 10 })
    languageCode: string;

    @Column()
    convEnabled: boolean;

    @Column()
    writingEnabled: boolean;

    @Column({ length: 200, nullable: true })
    note: string;

    @ManyToOne(() => Employee, employee => employee.languageSkills)
    employee: Employee;
}
