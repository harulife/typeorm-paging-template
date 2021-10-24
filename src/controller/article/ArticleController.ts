import { ArticleService } from "../../service/article/ArticleService";
import { Get, HttpCode, JsonController, QueryParams, Res } from "routing-controllers";
import { ArticleSearchRequest } from "./dto/ArticleSearchRequest";
import { Response } from "express";

@JsonController("/article")
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @HttpCode(200)
  @Get("/search")
  public async search(@QueryParams() param: ArticleSearchRequest, @Res() res: Response) {
    try {
      return await this.articleService.search(param);
    } catch (e) {
      return e.message;
    }
  }
}
