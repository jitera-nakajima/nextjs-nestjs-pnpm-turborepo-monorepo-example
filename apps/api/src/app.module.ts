import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageSkill } from './models/language-skill.entity';
import { LanguageSkillService } from './services/language-skill.service';
import { LanguageSkillController } from './controllers/language-skill.controller';

@Module({
    imports: [TypeOrmModule.forFeature([LanguageSkill])],
    controllers: [LanguageSkillController],
    providers: [LanguageSkillService],
})
export class AppModule {}
