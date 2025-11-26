import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriDto } from './create-materi.dto';

export class UpdateMateriDto extends PartialType(CreateMateriDto) {
  title: string;

  slug: string;
}
