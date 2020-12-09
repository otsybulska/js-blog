import '../node_modules/normalize.css/normalize.css';
import './scss/global.scss'
import './scss/header.scss'
import './scss/content.scss'

import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {PostsComponent} from './components/posts.component'
import {CreateComponent} from './components/create.component'
import {FavoriteComponent} from './components/favorite.component'

new HeaderComponent('header')
const navigation = new NavigationComponent('navigation')
const posts = new PostsComponent('posts')
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
    {name: 'posts', component: posts},
    {name: 'create', component: create},
    {name: 'favorite', component: favorite}
])
