import { PageRequest } from '../../PageRequest';
import { Type } from "class-transformer";
import { IsDate, IsOptional } from "class-validator";

export class ArticleSearchRequest extends PageRequest {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  reservationDate: Date | null;

  title: string | null;

  constructor() {
    super();
  }

  hasReservationDate(): boolean {
    return this.reservationDate != null;
  }

  hasTitle(): boolean {
    return this.title != null;
  }

}
