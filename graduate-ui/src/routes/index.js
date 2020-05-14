import { 
    Login, 
    Home, 
    Register, 
    ForgetPwd, 
    Site, 
    Review, 
    KnowBase, 
    User,
    NotFound,
    Display
 } from '../components'

 export const mainRouter = [{
    pathname: '/login',
    component: Login
 },{
    pathname: '/404',
    component: NotFound
 }]

 export const partRouter = [{
    pathname: '/herb/display',
    component: Display
 },{
    pathname: '/herb/site',
    component: Site
 },{
   pathname: '/herb/home',
   component: Home
},{
    pathname: '/herb/review',
    component: Review
 },{
    pathname: '/herb/register',
    component: Register
 },{
   pathname: '/herb/forGetPwd',
   component: ForgetPwd
},{
    pathname: '/herb/edit',
    component: KnowBase
 },{
    pathname: '/herb/personal',
    component: User,
    exact: true
 },{
    pathname: '/herb/updatePwd',
    component: User,
    exact: true
 },{
    pathname: '/herb/setEncryptedQuestion',
    component: User,
    exact: true
 }]

