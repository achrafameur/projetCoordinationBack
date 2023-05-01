import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  image: string;
}
