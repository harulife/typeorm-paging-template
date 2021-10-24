import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ArticleQueryRepository } from "../../repository/article/ArticleQueryRepository";
import { ArticleSearchRequest } from "../../controller/article/dto/ArticleSearchRequest";
import { Page } from "../Page";
import { ArticleSearchItem } from "./dto/ArticleSearchItem";

@Service()
export class ArticleService {
  constructor(
    @InjectRepository() private articleQueryRepository: ArticleQueryRepository
  ) {}

  async search(param: ArticleSearchRequest){
    const result = await this.articleQueryRepository.paging(param);
    return new Page(result[1], param.pageSize, result[0].map(e => new ArticleSearchItem(e) ))
  }
}
