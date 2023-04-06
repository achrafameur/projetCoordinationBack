import { ApiProperty } from '@nestjs/swagger';

export class signInDto {
  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  password: string;
}
