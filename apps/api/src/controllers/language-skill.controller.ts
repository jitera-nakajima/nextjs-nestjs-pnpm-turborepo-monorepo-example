import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LanguageSkillService } from '../services/language-skill.service';
import { LanguageSkill } from '../models/language-skill.entity';

@Controller('api/employees/:employeeId/language-skills')
export class LanguageSkillController {
    constructor(private readonly languageSkillService: LanguageSkillService) {}

    @Get()
    findAll(@Param('employeeId') employeeId: number): Promise<LanguageSkill[]> {
        return this.languageSkillService.findAll(employeeId);
    }

    @Post()
    create(@Param('employeeId') employeeId: number, @Body() languageSkillData: Partial<LanguageSkill>): Promise<LanguageSkill> {
        return this.languageSkillService.create(employeeId, languageSkillData);
    }

    @Put(':skillId')
    update(@Param('skillId') skillId: number, @Body() languageSkillData: Partial<LanguageSkill>): Promise<void> {
        return this.languageSkillService.update(skillId, languageSkillData);
    }

    @Delete(':skillId')
    delete(@Param('skillId') skillId: number): Promise<void> {
        return this.languageSkillService.delete(skillId);
    }
}
