import { PartialType } from '@nestjs/mapped-types';
import { CreateSoalDto } from './create-soal.dto';
import { KategoriMateri } from 'generated/prisma';

export class UpdateSoalDto extends PartialType(CreateSoalDto) {
  soal: string;
  tryoutCpnsId: number;
  jenisMateri: KategoriMateri;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE: string;
  correctOption: string;
  optionAImage: string;
  optionBImage: string;
  optionCImage: string;
  optionDImage: string;
  optionEImage: string;
}
