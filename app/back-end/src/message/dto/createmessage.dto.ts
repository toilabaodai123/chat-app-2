import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { EntityType } from '../message.entity';
export class CreateMessageDTO {
    @IsNotEmpty()
    content: string

    @IsNotEmpty()
    @IsNumber()
    entity_id: number

    @IsNotEmpty()
    @IsEnum(EntityType)
    entity_type: EntityType
}