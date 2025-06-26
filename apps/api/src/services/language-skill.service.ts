import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageSkill } from '../models/language-skill.entity';

@Injectable()
export class LanguageSkillService {
    constructor(
        @InjectRepository(LanguageSkill)
        private languageSkillRepository: Repository<LanguageSkill>,
    ) {}

    findAll(employeeId: number): Promise<LanguageSkill[]> {
        return this.languageSkillRepository.find({ where: { employeeId } });
    }

    create(employeeId: number, languageSkillData: Partial<LanguageSkill>): Promise<LanguageSkill> {
        const languageSkill = this.languageSkillRepository.create({ ...languageSkillData, employeeId });
        return this.languageSkillRepository.save(languageSkill);
    }

    update(skillId: number, languageSkillData: Partial<LanguageSkill>): Promise<void> {
        return this.languageSkillRepository.update(skillId, languageSkillData).then(() => {});
    }

    delete(skillId: number): Promise<void> {
        return this.languageSkillRepository.delete(skillId).then(() => {});
    }
}
