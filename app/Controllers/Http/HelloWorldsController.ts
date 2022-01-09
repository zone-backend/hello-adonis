import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HelloWorldsController {
  public async index(ctx: HttpContextContract) {
    // return { hello: 'world' }
    const limit = 20
    const page = ctx.request.input('page', 1)
    return Database
      .from('city')
      .select('*')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
