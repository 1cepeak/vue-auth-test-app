/**
 * Динамический импорт компонентов
 * @param page
 * @return {Promise<*>|*}
 */
const page = (page) => () => import(`pages/${page}`);

export default [
    {
        path: '/',
        redirect: '/auth'
    },
    {
        path: '/auth',
        name: 'auth',
        component: page('Auth')
    }
];
