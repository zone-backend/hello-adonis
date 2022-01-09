/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  
  Route.get('/', async (ctx) => {
    const {default: HelloWorldController} = await import(
      'App/Controllers/Http/HelloWorldsController'
    )
    return new HelloWorldController().index(ctx)
  })

  Route.group(() => {
    Route.get('/posts', async (ctx) => {
      const {default: PostsController} = await import(
        'App/Controllers/Http/PostsController'
      )
      return new PostsController().index(ctx)
    })
  }).prefix('/v1')

}).prefix('/api')
