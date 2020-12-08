import './scss/global.scss'
import './scss/header.scss'
import './scss/content.scss'

import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
