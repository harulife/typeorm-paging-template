import { Article } from "../../entity/article/Article";
import { createQueryBuilder, EntityRepository } from "typeorm";
import { ArticleSearchRequest } from "../../controller/article/dto/ArticleSearchRequest";

@EntityRepository(Article)
export class ArticleQueryRepository {
  paging(param: ArticleSearchRequest): Promise<[Article[], number]>{
    const queryBuilder = createQueryBuilder()
      .select([
        "article.id",
        "article.reservationDate",
        "article.title",
        "article.content",
      ])
      .from(Article, "article")
      .limit(param.getLimit())
      .offset(param.getOffset());

    if(param.hasReservationDate()) {
      queryBuilder.andWhere("article.reservationDate >= :reservationDate", { reservationDate: param.reservationDate });
    }

    if(param.hasTitle()) {
      queryBuilder.andWhere("article.title ILIKE :title", { title: `%${param.title}%` });
    }

    return queryBuilder
      .disableEscaping()
      .getManyAndCount()
  }
}
